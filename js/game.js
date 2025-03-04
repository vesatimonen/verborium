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
        this.paths       = [];

        /* Cells status */
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

        return this.cells[x][y].status;
    }

    setCellStatus(x, y, status) {
        if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
            return false;
        }
        if (this.cells == undefined) {
            return false;
        }
        this.cells[x][y] = {status: status};
    }

    getCellId(x, y) {
        if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
            return false;
        }
        if (this.cells == undefined) {
            return false;
        }

        if (this.cells[x][y] == undefined) {
            return false;
        }

        /* Go through paths and find cell id */
        const paths = globals.game.board.paths;
        for (let i = 0; i < paths.length; i++) {
            const path = paths[i];
            for (let j = 0; j < path.length; j++) {
                if (path[j].X == x && path[j].Y == y) {
                    return i;
                }
            }
        }

        return -1; /* Not found */
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
                this.cells[x][y]     = {status: false};
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
        this.moves = [];

        /* Game level */
        this.level = 0;
    }

    init(level, info) {
        /* Clear move history */
        this.movesCount = 0;

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
            this.board.setCellStatus(X, Y, true);
        }

        /* Add to history */
        this.moves.push(wordPath);
    }

    removePath(X, Y) {
        const id = this.board.getCellId(X, Y);
        if (id >= 0) {
            const path = this.board.paths[id];
            for (let i = 0; i < path.length; i++) {
                this.board.setCellStatus(path[i].X, path[i].Y, false);
            }

            this.board.paths.splice(id, 1);
        }
    }

    undoMove() {
        if (this.moves.length == 0) {
            return false;
        }

        /* Undo move */
        const path = this.board.paths.pop();
        for (let i = 0; i < path.length; i++) {
            const X = path[i].X;
            const Y = path[i].Y;
            this.board.setCellStatus(X, Y, false);
        }

// Make move backwards
        this.moves.pop();

        return true;
    }
}



