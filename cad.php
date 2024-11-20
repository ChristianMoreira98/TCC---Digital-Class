<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Class | Site Oficial</title>
    <link rel="stylesheet" href="cad.css">
</head>
<body>
    <header>
        <h1>cadastro de clientes | Digital Class</h1>
    </header>

    <main class="text">
        <?php 
        $nome = $_GET["nome"];
        $sobrenome = $_GET["sobrenome"];
        $telefone = $_GET["telefone"];
        $telefone = $_GET["estado"];
        $telefone = $_GET["cidade"];

        
        echo "<p> É um prazer te conhecer, a digital class agradece $nome $sobrenome! Entraremos em contato com você!</p>"
        ?>
 <button class="text-js">
        <a href="javascript:history.go(-1)">Voltar para página anterior</a>
        </button>
    </main>
</body>
</html>