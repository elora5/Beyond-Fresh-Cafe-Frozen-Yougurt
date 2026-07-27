const fs = require('fs');
const path = require('path');
const https = require('https');

// Extract categories and item IDs/names from menu.ts
const menuContent = fs.readFileSync(path.join(__dirname, 'data', 'menu.ts'), 'utf-8');

const items = [];
const itemRegex = /id:\s*"([^"]+)",\s*name:\s*"([^"]+)"/g;
let match;
while ((match = itemRegex.exec(menuContent)) !== null) {
  items.push({ id: match[1], name: match[2] });
}

console.log(`Found ${items.length} items to process.`);

const imagesDir = path.join(__dirname, 'public', 'images', 'items');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      const file = fs.createWriteStream(filepath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
      file.on('error', (err) => {
        fs.unlink(filepath, () => reject(err));
      });
    }).on('error', reject);
  });
}

async function run() {
  const batchSize = 10;
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    console.log(`Processing batch ${i / batchSize + 1}...`);
    
    await Promise.all(batch.map(async (item) => {
      const filepath = path.join(imagesDir, `${item.id}.jpg`);
      if (fs.existsSync(filepath)) {
        return; // Skip if already downloaded
      }
      
      const prompt = encodeURIComponent(`Delicious high-quality food photography of ${item.name}, restaurant style`);
      const url = `https://image.pollinations.ai/prompt/${prompt}?width=400&height=300&nologo=true`;
      
      try {
        await downloadImage(url, filepath);
        console.log(`Downloaded: ${item.name}`);
      } catch (err) {
        console.error(`Failed to download ${item.name}:`, err.message);
      }
    }));
  }
  console.log("Finished downloading all images.");
}

run();
