<?php include '../includes/conexao.php'; ?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Criar Usuário</title>
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
                    <li><a href="../views/listar.php">Listar</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <div class="container">
        <div class="card">
            <h2>Criar Novo Usuário</h2>
            <form action="criar.php" method="POST">
                <input type="text" name="nome" placeholder="Nome" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="senha" placeholder="Senha" required>
                <button type="submit">Criar</button>
            </form>
        </div>
    </div>
</body>

</html>

<?php

?>

