import { optimize } from 'svgo';
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import sharp from 'sharp';

const svgFiles = readdirSync('.').filter(file => file.endsWith('.svg'));

svgFiles.forEach(file => {
  const svg = readFileSync(file, 'utf8');
  const { data } = optimize(svg);
  writeFileSync(file, data, 'utf8');
  console.log(`Optimized: ${file}`);
});

const svgBuffer = readFileSync('favicon.svg');
sharp(svgBuffer)
  .resize(180, 180)
  .png()
  .toFile('apple-touch-icon.png')
  .then(() => console.log('converted favicon.svg to apple-touch-icon.png'))
  .catch(err => console.error('Error converting:', err));