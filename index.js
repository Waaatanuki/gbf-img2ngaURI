const fs = require("fs");
const path = require("path");

const data = JSON.parse(fs.readFileSync(path.join(__dirname, "ItemData.json"), "utf-8"));

const raw = fs.readFileSync(path.join(__dirname, "old.txt"), "utf-8");
let temp = raw;
for (const item of data) {
    const reg = new RegExp(item.name, "g");
    temp = temp.replace(reg, item.src);
}
for (const item of data) {
    temp = temp.replace(item.name, item.src);
}

fs.writeFileSync(path.join(__dirname, "new.txt"), temp, "utf-8");
