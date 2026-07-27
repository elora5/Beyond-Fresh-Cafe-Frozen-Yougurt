const fs = require('fs');
const path = require('path');
const https = require('https');

// Extract items from menu.ts
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
    https.get(url, { headers: { 'User-Agent': 'Node/18' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
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

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function run() {
  let successCount = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const filepath = path.join(imagesDir, `${item.id}.jpg`);
    
    if (fs.existsSync(filepath)) {
      const stats = fs.statSync(filepath);
      if (stats.size > 1000) { // Valid image
        console.log(`[${i+1}/${items.length}] Skipping ${item.name}, already exists.`);
        successCount++;
        continue;
      }
    }
    
    const prompt = encodeURIComponent(`Delicious high-quality food photography of ${item.name}, isolated, restaurant style`);
    // Seed is used to bypass cache if needed, but here we just want a solid prompt.
    const url = `https://image.pollinations.ai/prompt/${prompt}?width=400&height=300&nologo=true`;
    
    console.log(`[${i+1}/${items.length}] Downloading: ${item.name}...`);
    try {
      await downloadImage(url, filepath);
      console.log(` -> Success!`);
      successCount++;
    } catch (err) {
      console.error(` -> Failed: ${err.message}`);
      // Retry once after a longer wait if it failed
      console.log(` -> Retrying in 5 seconds...`);
      await sleep(5000);
      try {
        await downloadImage(url, filepath);
        console.log(` -> Success on retry!`);
        successCount++;
      } catch (retryErr) {
        console.error(` -> Retry failed: ${retryErr.message}`);
      }
    }
    
    // Strict delay to completely avoid 429 Too Many Requests
    await sleep(4000); 
  }
  console.log(`Finished downloading images. Successfully downloaded ${successCount}/${items.length}.`);
}

run();
