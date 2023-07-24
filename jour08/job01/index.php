<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/@heroicons/react@1.0.4/dist/index.min.css" rel="stylesheet">
  <script src="https://kit.fontawesome.com/d7f3d544f1.js" crossorigin="anonymous"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-yellow-500">
  <header class="bg-blue-300"><?php include "header.php" ?></header>
  <section class="flex items-center justify-center m-4">
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>

  </section>
  <section class="flex items-center justify-center m-4 bg-yellow-300 rounded-full">
    <div class="w-75 h-75 bg-green-300 rounded">
      <?php include "form.php" ?>

    </div>
  </section>
  <footer class="bg-red-300"><?php include "footer.php" ?></footer>
</body>
</html>