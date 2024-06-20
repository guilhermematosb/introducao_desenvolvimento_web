<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "projeto_crud";

$conexao = new mysqli($servidor, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die("Conexão falhou: " . $conexao->connect_error);
}
?>

