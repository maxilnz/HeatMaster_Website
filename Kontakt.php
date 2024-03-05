<?php 
if(isset($_POST['submit'])){
    $to = "kontakt@heatmaster.info";
    $from = $_POST['email']; 
    $name = $_POST['name'];
    $subject = "Kontaktanfrage";
    $subject2 = "Kopie Ihrer Kontaktanfrage (Copy of your contact request)";
    $message = $name . " hat geschrieben:" . "\n\n" . $_POST['message'];
    $message2 = "Hier ist eine Kopie Ihrer Nachricht (Here is a copy of your message) " . "\n\n" . $_POST['message'];
    $message3 = "Nachricht gesendet (message sent)";

    $headers = "Von:" . $from;
    $headers2 = "Von (From):" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2);
    //header('Location: /#Kontakt_section');
    echo "<script>alert('Ihre Nachricht wurde erfolgreich versendet.'); window.location = '/#Kontakt_section';</script>";
    //echo "<script>
        //document.getElementById('form_de').reset();
        //alert('Ihre Nachricht wurde erfolgreich versendet.');
    //</script>";
    }
?>
