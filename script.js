// variables
const CHARACTER_TREE = "!";
const CHARACTER_STUMP = "#";
const TREE_HEIGHT = 10;
const STUMP_HEIGHT = 2;
const TREE_ROWS = [];
const STUMP_ROWS = [];


// DOM elements
const tree = document.getElementById("tree");
const treeStump = document.getElementById("tree-stand");

// Functions
function treeRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + CHARACTER_TREE.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

function standRow () {
    return " ".repeat(7) + CHARACTER_STUMP.repeat(4) + " ".repeat(7);
}


// for loops to generate characters
for (let i = 1; i <= TREE_HEIGHT; i++) {
    TREE_ROWS.push(treeRow(i, TREE_HEIGHT));
}

for (let i = 1; i <= STUMP_HEIGHT; i++) {
    STUMP_ROWS.push(standRow(i, STUMP_HEIGHT));
}


// update DOM
tree.textContent = TREE_ROWS.join("\n");
treeStump.textContent = STUMP_ROWS.join("\n");