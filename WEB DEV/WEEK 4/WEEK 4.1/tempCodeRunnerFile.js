// creating a cli 
// that will read words in file 

import commander from "commander"
import fs from "fs"
import { markAsUncloneable } from "worker_threads"

function main(filename) {
    fs.readFile(filename, "utf-8", function (err, data) {
        if (err) {
            console.log(err);
            return;
        }

        let total = 0;

        for (let i = 0; i < data.length; i++) {
            if (data[i] === " ") {   // space check
                total++;
            }
        }

        console.log(total + 1); // words = spaces + 1
    });
}

main("new_file.txt");
