// creating a cli 
// that will read words in file 
import fs from "fs"

function main(filename) {
    fs.readFile(filename, "utf-8", function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i] === " ") {
                total++;
            }
        }
        console.log(total + 1);
    });
}

const filename = process.argv[2];
main(filename);