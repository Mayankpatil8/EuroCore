<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$firstName = $data["firstName"] ?? '';
$lastName  = $data["lastName"] ?? '';
$email     = $data["email"] ?? '';
$phone     = $data["phone"] ?? '';
$message   = $data["message"] ?? '';

$to = "sales@eurocoreglobal.com";
$subject = "New Contact: $firstName $lastName";

$body = "
Name: $firstName $lastName
Email: $email
Phone: $phone

Message:
$message
";

$headers = "From: Eurocore Global <noreply@eurocoreglobal.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}
?>