const fs = require("fs");
const path = require("path");

function nameChanger() {
    fs.readdir(__dirname, (err, files) => {

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const episodeNumber = file.match(/\d+/g);
            if (file.endsWith(".srt") && episodeNumber && episodeNumber[1]) {
                const newFileName = `Episode ${episodeNumber[1]}.srt`;
                fs.renameSync(path.join(__dirname, file), path.join(__dirname, newFileName));
                console.log(`Renaming ${file} to ${newFileName}`);
            }
        }
    });
}

nameChanger()