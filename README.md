# AI Character Card Extractor
Extracts metadata from AI Character Cards in PNG format and outputs them as JSON

I made this as a super quick way to view character card metadata while working on my [new Discord bot](https://github.com/TheDragonary/Character-AI-Discord-Bot) which utilises these cards to roleplay as.

## How to Use

Clone this repo:
```
git clone https://github.com/TheDragonary/AI-Character-Card-Extractor.git
```

You will need Node.js installed and you need to install these 3 packages: ``npm install atob png-chunk-text png-chunks-extract``

After that, you can put your character cards in the same folder (although this doesn't really matter as shown below).

Then, open up a terminal and run ``node index.js character.png``

You could also just insert the whole file path instead, like this:
```
node index.js "C:\Users\[name]\Pictures\character.png"
```

As well as all of the data being output to the terminal, it will also save a JSON file in the same directory as the image. If you don't want it to save a file, just remove or comment out the last 3 lines in ``index.js``

Now you can see all the data hidden inside those character cards easily!