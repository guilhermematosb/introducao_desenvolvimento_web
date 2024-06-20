<?php include '../includes/conexao.php'; ?>

<?php
$id = $_GET['id'];
$sql = "DELETE FROM usuarios WHERE id=$id";

if ($conexao->query($sql) === TRUE) {
    echo "Registro excluído com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conexao->error;
}
?>

