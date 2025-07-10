# AI Character Card Extractor
Extracts metadata from AI Character Cards in PNG format and outputs them as JSON

## How to Use

Clone this repo:
```
git clone https://github.com/TheDragonary/AI-Character-Card-Extractor.git
```

You will need Node.js installed and you need to install these 3 packages: ``npm install atob png-chunk-text png-chunks-extract``

After that, you can put your character cards in the same folder (although this doesn't really matter as shown below)

Then, open up a terminal and run ``node index.js character.png``

You could also just insert the whole file path instead, like this:
```
node index.js "C:\Users\[name]\Pictures\character.png"
```

Now you can see all the information hidden inside those character cards easily!
