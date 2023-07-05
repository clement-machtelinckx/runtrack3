document.addEventListener("DOMContentLoaded", function() {
    const tiles = Array.from(document.getElementsByClassName("tile"));
    const restartButton = document.getElementById("restart-button");
    const message = document.getElementById("message");

    let isGameActive = true;
    let isGameWon = false;

    // Initialize game
    shuffleTiles();

    // Add click event listeners to tiles
    tiles.forEach(tile => {
        tile.addEventListener("click", function() {
            if (isGameActive && !isGameWon) {
                moveTile(tile);
                checkGameStatus();
            }
        });
    });

    // Restart button click event
    restartButton.addEventListener("click", function() {
        restartGame();
    });

    // Shuffle tiles randomly
    function shuffleTiles() {
        const tileIds = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8"];
        tileIds.push("tile9"); // Empty tile

        for (let i = tileIds.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tileIds[i], tileIds[j]] = [tileIds[j], tileIds[i]];
        }

        tileIds.forEach((tileId, index) => {
            const tile = document.getElementById(tileId);
            tile.style.backgroundImage = `url('image/logo${index + 1}.PNG')`;
        });
    }

    // Move tile to empty position
    function moveTile(tile) {
        const emptyTile = document.getElementById("tile9");

        if (isAdjacent(tile, emptyTile)) {
            const tempBackground = tile.style.backgroundImage;
            tile.style.backgroundImage = emptyTile.style.backgroundImage;
            emptyTile.style.backgroundImage = tempBackground;
        }
    }

    // Check if two tiles are adjacent
// Check if two tiles are adjacent
function isAdjacent(tile1, tile2) {
    const tile1Index = tiles.indexOf(tile1);
    const tile2Index = tiles.indexOf(tile2);

    const rowDiff = Math.abs(Math.floor(tile1Index / 3) - Math.floor(tile2Index / 3));
    const colDiff = Math.abs((tile1Index % 3) - (tile2Index % 3));

    return (rowDiff === 0 && colDiff === 1) || (rowDiff === 1 && colDiff === 0);
}


    // Check game status
    function checkGameStatus() {
        const currentOrder = tiles.map(tile => tile.getAttribute("id"));
        const targetOrder = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9"];

        const correctOrder = JSON.stringify(currentOrder) === JSON.stringify(targetOrder);

        if (correctOrder) {
            isGameActive = false;
            isGameWon = true;
            message.textContent = "Vous avez gagné !";
            message.classList.add("correct");
            restartButton.classList.remove("hidden");
        }
    }

    // Restart the game
    function restartGame() {
        isGameActive = true;
        isGameWon = false;
        message.textContent = "";
        message.classList.remove("correct");
        restartButton.classList.add("hidden");
        shuffleTiles();
    }
});
