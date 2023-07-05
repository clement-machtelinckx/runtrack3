<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Jeu du Taquin</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="game-container">
        <div class="grid">
            <div class="tile" id="tile1"></div>
            <div class="tile" id="tile2"></div>
            <div class="tile" id="tile3"></div>
            <div class="tile" id="tile4"></div>
            <div class="tile" id="tile5"></div>
            <div class="tile" id="tile6"></div>
            <div class="tile" id="tile7"></div>
            <div class="tile" id="tile8"></div>
            <div class="tile empty" id="tile9"></div>
        </div>
        <button id="restart-button" class="hidden">Recommencer</button>
        <p id="message"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>
