let chessPiece = "Queen";

switch (chessPiece) {
    case "Pawn":
        console.log("Front Tile");
        break;
    case "Tower":
        console.log("Straight Rows");
        break;
    case "Knight":
        console.log("L-Shape");
        break;
    case "Bishop":
        console.log("Diagonals");
        break;
    case "Queen":
        console.log("Any Row");
        break;
    case "King":
        console.log("Any Tile");
        break;
}