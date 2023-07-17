<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" media="screen">

    <title>day04/job04</title>
</head>
<body>
    <form>
        <label for="id">ID</label>
        <input type="text" id="id">
        <label for="nom">Nom</label>
        <input type="text" id="nom">
        
        <label for="type">Type</label>
        <select id="type" name="type">
            <option value="Grass">Grass</option>
            <option value="Poison">Poison</option>
            <option value="Fire">Fire</option>
            <option value="Flying">Flying</option>
            <option value="Water">Water</option>
            <option value="Bug">Bug</option>
            <option value="Normal">Normal</option>
            <option value="Electric">Electric</option>
            <option value="Ground">Ground</option>
            <option value="Fairy">Fairy</option>
            <option value="Fighting">Fighting</option>
            <option value="Psychic">Psychic</option>
            <option value="Rock">Rock</option>
            <option value="Steel">Steel</option>
            <option value="Dragon">Dragon</option>
            <option value="Ghost">Ghost</option>
            <option value="Ice">Ice</option>
        </select>

        <input type="submit" value="Trier">

    </form>
    <div id="result-container" class="result-container"></div>
    <script src="script.js"></script>

</body>