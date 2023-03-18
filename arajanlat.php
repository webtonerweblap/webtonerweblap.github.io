<?php 
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $to = 'your-email@example.com';
        $subject = 'Árajánlat kérés';
    
        $nev = trim($_POST['nev']);
        $telefon = trim($_POST['telefon']);
        $email = trim($_POST['email']);
        $varos = trim($_POST['varos']);
        $haz = trim($_POST['haz']);
        $uzenet = trim($_POST['uzenet']);
    
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo 'Hibás email cím';
            exit;
        }
    
        $message = 'Név: ' . $nev . "\n\n";
        $message .= 'Telefonszám: ' . $telefon . "\n\n";
        $message .= 'Email: ' . $email . "\n\n";
        $message .= 'Város: ' . $varos . "\n\n";
        $message .= 'A választott ház: ' . $haz . "\n\n";
        $message .= 'Üzenet: ' . $uzenet . "\n\n";
    
        $headers = 'From: ' . $email . "\r\n" .
            'Reply-To: ' . $email . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
    
        mail($to, $subject, $message, $headers);
        echo 'Az üzenet sikeresen elküldve';
    }




?>