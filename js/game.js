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

        /* Path statistics */
        this.pathId       = [[undefined]];
        this.pathCount    = 0;
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

        this.fragments = array2D(this.width, this.height, 0);
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.fragments[x][y] = infoValues[2 + y * this.width + x];
            }
        }

        /* Set title */
        elements.title.innerHTML = "VERBORIUM-" + this.dbName;
        if (this.dbName.startsWith("FIN")) {
            elements.instructions.innerHTML = "Muodosta suomen kielen sanoja piirtämällä polkuja, jotka yhdistävät solut ketjuiksi. "
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

    makeMove(direction, x, y) {
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



