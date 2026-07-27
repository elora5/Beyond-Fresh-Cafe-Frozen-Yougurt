const fs = require('fs');
const path = require('path');
const https = require('https');

const categories = [
  "signature-wraps", "create-your-own-wrap", "grilled-cheese", 
  "grilled-paninis", "signature-squeezes", "smoothies", 
  "power-bowls", "breakfast", "breakfast-sandwiches", 
  "breakfast-bowls", "burgers-and-sides", "submarines", 
  "quesadillas", "side-salad-bowls", "extras", 
  "hot-beverages", "cold-beverages"
];

const categoryNames = {
  "signature-wraps": "Gourmet Wrap Sandwich",
  "create-your-own-wrap": "Fresh Wrap Sandwich ingredients",
  "grilled-cheese": "Gourmet Grilled Cheese Sandwich",
  "grilled-paninis": "Gourmet Panini Sandwich",
  "signature-squeezes": "Fresh squeezed fruit juice",
  "smoothies": "Healthy fruit smoothie drink",
  "power-bowls": "Acai superfood power bowl",
  "breakfast": "Delicious breakfast food",
  "breakfast-sandwiches": "Breakfast egg sandwich",
  "breakfast-bowls": "Breakfast bowl with eggs",
  "burgers-and-sides": "Gourmet burger and fries",
  "submarines": "Submarine sandwich",
  "quesadillas": "Delicious cheese quesadilla",
  "side-salad-bowls": "Fresh healthy side salad bowl",
  "extras": "Snacks and sides",
  "hot-beverages": "Hot coffee beverage",
  "cold-beverages": "Frozen Yogurt dessert"
};

const imagesDir = path.join(__dirname, 'public', 'images', 'categories');
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log(`Downloading 17 category images...`);
  
  for (const catId of categories) {
    const filepath = path.join(imagesDir, `${catId}.jpg`);
    if (fs.existsSync(filepath)) {
      console.log(`Skipping ${catId}, already exists.`);
      continue;
    }
    
    const catName = categoryNames[catId];
    const prompt = encodeURIComponent(`Delicious high-quality food photography of ${catName}, restaurant style`);
    const url = `https://image.pollinations.ai/prompt/${prompt}?width=400&height=300&nologo=true`;
    
    try {
      console.log(`Downloading ${catId}...`);
      await downloadImage(url, filepath);
      console.log(`Successfully downloaded: ${catId}`);
    } catch (err) {
      console.error(`Failed to download ${catId}:`, err.message);
    }
    
    // Wait 3 seconds to avoid 429 Too Many Requests
    await sleep(3000);
  }
  console.log("Finished downloading category images.");
}

run();
