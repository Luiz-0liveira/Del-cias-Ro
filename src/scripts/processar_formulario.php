<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $nome = $data["nome"];
    $email = $data["email"];
    $mensagem = $data["mensagem"];

    $destinatario = "luizantonioalmeida.91@gmail.com"; // Substitua pelo seu endereço de e-mail

    $assunto = "Novo formulário de contato de $nome";

    $corpo = "Nome: $nome\n";
    $corpo .= "E-mail: $email\n";
    $corpo .= "Mensagem:\n$mensagem";

    $envio = mail($destinatario, $assunto, $corpo, "From: $email");

    if ($envio) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["error" => "Erro ao enviar o e-mail"]);
    }
} else {
    echo json_encode(["error" => "Método não permitido"]);
}
?>
