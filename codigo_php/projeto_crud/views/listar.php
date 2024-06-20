<?php include '../includes/conexao.php'; ?>
<?php include '../includes/funcoes.php'; ?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Listar Usuários</title>
    <link rel="stylesheet" href="../css/style.css">
</head>

<body>
    <header>
        <div class="container">
            <h1>Sistema CRUD</h1>
            <nav>
                <ul>
                    <li><a href="../index.php">Inicio</a></li>
                    <li><a href="criar.php">Criar</a></li>
                    <li><a href="listar.php">Listar</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <div class="container">
        <div class="card">
            <h2>Lista de Usuários</h2>
            <?php
            $resultado = listarUsuarios($conexao);
            if ($resultado->num_rows > 0) {
                while ($linha = $resultado->fetch_assoc()) {
                    echo "Nome: " . $linha["nome"] . " - Email: " . $linha["email"];
                    echo " <a href='editar.php?id=" . $linha["id"] . "'>Editar</a>";
                    echo " <a href='excluir.php?id=" . $linha["id"] . "'>Excluir</a><br>";
                }
            } else {
                echo "0 resultados";
            }
            ?>
        </div>
    </div>
</body>

</html>