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
        this.pathId       = [[undefined]];
        this.pathCount    = 0;

        /* Cell statuses */
        this.cellUsed = [[undefined]];

    }

    isUsed(x, y) {
        if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
            return false;
        }
        if (this.cellUsed == undefined) {
            return false;
        }
        return this.cellUsed[x][y];
    }

    toggleVerticalWall(x, y) {
        return false;
    }

    toggleHorizontalWall(x, y) {
        return false;
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
        this.cellUsed   = array2D(this.width, this.height, 0);
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.fragments[x][y] = infoValues[2 + y * this.width + x];
                this.cellUsed[x][y]  = false;
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

//        console.log(this.wordSet.has("seppel"));
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
        this.moveHistory = [];

        /* Set level */
        this.level = level;

        /* Initialize board */
        this.board.init(info);
    }

    makeMove(cursorPath) {
        /* Check path legality */
        let word = "";
        for (let i = 0; i < cursorPath.length; i++) {
            const X = cursorPath[i].X;
            const Y = cursorPath[i].Y;

            if (this.board.isUsed(X, Y) == true) {
                return;
            }

            word = word + this.board.fragments[X][Y];
        }

        /* Check word legality */
        if (this.board.wordSet.has(word) == false) {
            return;
        }

console.log(word);

if (false) {
        var polarity = undefined;

        switch (direction) {
            case "vertical":
                break;
            case "horizontal":
                break;
            default:
                return undefined;
        }

        /* Save move */
        this.moveHistory.push({direction: direction, x: x, y: y});
}
    }

    undoMove() {
        /* Check if something to undo */
        if (this.moveHistory.length == 0) {
            return false;
        }

        /* Pop latest move */
        let move = this.moveHistory.pop();

        switch (move.direction) {
            case "vertical":
                break;
            case "horizontal":
                break;
            default:
                return;
        }

        return true;
    }
}



