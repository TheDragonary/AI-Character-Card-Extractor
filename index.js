const fs = require('fs');
const path = require('path');
const extractChunks = require('png-chunks-extract');
const PNGtext = require('png-chunk-text');

const image = process.argv[2];
const buffer = fs.readFileSync(image);
const chunks = extractChunks(buffer);

let character = null;
for (const chunk of chunks) {
    if (chunk.name === 'tEXt') {
        const textData = PNGtext.decode(chunk.data);
        if (textData.keyword && textData.keyword.toLowerCase().includes('chara')) {
            character = textData.text;
            break;
        }
    }
}

if (!character) {
    throw new Error('Character card metadata not found in PNG.');
}

const decodedString = Buffer.from(character, 'base64').toString('utf-8');
const metadata = JSON.parse(decodedString);
console.log(metadata);

const baseName = path.basename(image, path.extname(image));
const outputFilePath = path.join(path.dirname(image), `${baseName}.json`);
fs.writeFileSync(outputFilePath, JSON.stringify(metadata, null, 4), 'utf-8');