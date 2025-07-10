const fs = require('fs');
const extractChunks = require('png-chunks-extract');
const PNGtext = require('png-chunk-text');
const atob = require('atob');

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

const decodedString = atob(character);
const metadata = JSON.parse(decodedString);
console.log(metadata);