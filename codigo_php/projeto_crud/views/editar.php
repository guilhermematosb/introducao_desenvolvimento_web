<?php include '../includes/conexao.php'; ?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Editar Usuário</title>
    <link rel="stylesheet" href="../css/style.css">
</head>

<body>
    <header>
        <div class="container">
            <h1>Sistema CRUD</h1>
            <nav>
                <ul>
                    <li><a href="../index.php">Inicio</a></li>
                    <li><a href="../views/criar.php">Criar</a></li>
                    <li><a href="../views/listar.php">Listar</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <div class="container">
        <div class="card">
            <h2>Editar Usuário</h2>
            <?php
            $id = $_GET['id'];
            $sql = "SELECT * FROM usuarios WHERE id=$id";
            $resultado = $conexao->query($sql);
            $usuario = $resultado->fetch_assoc();
            ?>
            <form action="editar.php?id=<?php echo $id; ?>" method="POST">
                <input type="text" name="nome" value="<?php echo $usuario['nome']; ?>" required>
                <input type="email" name="email" value="<?php echo $usuario['email']; ?>" required>
                <button type="submit">Atualizar</button>
            </form>
        </div>
    </div>
</body>

</html>

<?php

?>

