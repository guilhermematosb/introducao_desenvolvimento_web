<?php
function listarUsuarios($conexao) {
    $sql = "SELECT * FROM usuarios";
    $resultado = $conexao->query($sql);
    return $resultado;
}
?>
