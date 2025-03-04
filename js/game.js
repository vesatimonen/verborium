/* Create and initialize 2D array */
function array2D(width, height, value) {
    let arr = [];

    // creating two dimensional array
    for (let i = 0; i < width; i++) {
        arr[i] = [];
    }

    // inserting elements to array
    for (let i = 0; i < width; i++) {
        for(let j = 0; j < height; j++) {
            arr[i][j] = value;
        }
    }

    return arr;
}

/* Visible board state */
class Board {
    constructor() {
        /* Board configuration */
        this.width     = undefined;
        this.height    = undefined;
        this.dbName    = undefined;
        this.fragments = [[undefined]];

        /* Word database (set) */
        this.wordSet   = undefined;

        /* Paths */
        this.pathsId     = [[undefined]];
        this.paths       = [];

        /* Cells info */
        this.cells = [[undefined]];
    }

    getCellStatus(x, y) {
        if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
            return false;
        }
        if (this.cells == undefined) {
            return false;
        }

        if (this.cells[x][y] == undefined) {
            return false;
        }

        if (this.cells[x][y].pathId < 0) {
            return false;
        }

        return true;
    }

    setCell(x, y, id) {
        if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
            return false;
        }
        if (this.cells == undefined) {
            return false;
        }
        this.cells[x][y] = {pathId: id};
    }

    clearCell(x, y) {
        if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
            return false;
        }
        if (this.cells == undefined) {
            return false;
        }
        this.cells[x][y] = undefined;
    }

    resolved(x, y) {
        return false;
    }

    solved() {
        return false;
    }

    /* Initialize game */
    async init(info) {
        /* Parse board configuration (verborum) */
        var boardInfo   = info.split('>')[2];
        var infoValues  = boardInfo.split('-');

        this.width      = parseInt(infoValues[0].substr(0,1));
        this.height     = parseInt(infoValues[0].substr(2,1));
        this.dbName     = infoValues[1];

        this.fragments  = array2D(this.width, this.height, 0);
        this.cells   = array2D(this.width, this.height, 0);
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.fragments[x][y] = infoValues[2 + y * this.width + x];
                this.cells[x][y]  = undefined;
            }
        }

        /* Set title */
        if (this.dbName.startsWith("FIN")) {
            elements.title.innerHTML        = "VERBORIUM-FIN";
            elements.instructions.innerHTML = "Muodosta perusmuodossa olevia suomen kielen sanoja yhdistämällä soluja. "
            + "Yhdistäminen on sallittu vain pysty- ja vaakasuunnassa. Jokainen solu tulee käyttää täsmälleen kerran. ";
        }

        /* Read word database to set structure */
        this.wordSet = await dbReadFile("words_" + this.dbName + ".csv");
    }
}

/* Game state */
class Game {
    constructor() {
        /* Game board */
        this.board = new Board();

        /* Game move history */
        this.moveHistory = [];

        /* Game level */
        this.level = 0;
    }

    init(level, info) {
        /* Clear move history */
        this.moveCount = 0;

        /* Set level */
        this.level = level;

        /* Initialize board */
        this.board.init(info);
    }

    makeMove(wordPath) {
        /* Check path legality */
        let word = "";
        for (let i = 0; i < wordPath.length; i++) {
            const X = wordPath[i].X;
            const Y = wordPath[i].Y;

            if (this.board.getCellStatus(X, Y) == true) {
                return;
            }

            word = word + this.board.fragments[X][Y];
        }

        /* Check word legality */
        if (this.board.wordSet.has(word) == false) {
            return;
        }

        /* Make move */
        this.board.paths.push(wordPath);
        for (let i = 0; i < wordPath.length; i++) {
            const X = wordPath[i].X;
            const Y = wordPath[i].Y;
            this.board.setCell(X, Y, this.board.paths.length - 1);
        }

        this.moveCount++;

if (false) {
        for (let i = 0; i < this.board.paths.length; i++) {
            let path = this.board.paths[i];
            for (let j = 0; j < path.length; j++) {
                const X = path[j].X;
                const Y = path[j].Y;
console.log(X, Y);
            }
        }
}
    }

    undoMove() {
        if (this.moveCount <= 0) {
            return false;
        }

        /* Undo move */
        const path = this.board.paths.pop();
        for (let i = 0; i < path.length; i++) {
            const X = path[i].X;
            const Y = path[i].Y;
            this.board.clearCell(X, Y);
        }

        this.moveCount--;

        return true;
    }
}



