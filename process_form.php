<?php


$jsonData = $_POST['data'];

// Parse the JSON string into an object or array
$formData = json_decode($jsonData, true);

// Access the form data
$rs1 = $formData['rs1'];
$rs2 = $formData['rs2'];
$rs3 = $formData['rs3'];
$rs4 = $formData['rs4'];
$q1 = $formData['q1'];
$q2 = $formData['q2'];
$q3 = $formData['q3'];
$q3Autre = $formData['q3Autre'];
$q4 = $formData['q4'];
$q4Autre = $formData['q4Autre'];
$q5 = $formData['q5'];
$q6 = $formData['q6'];
$q7 = $formData['q7'];
$q8 = $formData['q8'];
$q9 = $formData['q9'];
$q10 = $formData['q10'];
$q11 = $formData['q11'];
$q12 = $formData['q12'];
$email = $formData['email'];


// Validate and sanitize the data as needed

// Connect to the database (replace the placeholders with your database credentials)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rs";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare the SQL statement to insert the form data into the database (replace 'table_name' with the actual table name)
$sql = "INSERT INTO rs1 (rs1, rs2, rs3, rs4, q1, q2, q3, q3Autre, q4, q4Autre, q5, q6, q7, q8, q9, q10, q11, email, q12)
        VALUES ('$rs1', '$rs2', '$rs3', '$rs4', '$q1', '$q2', '$q3', '$q3Autre', '$q4', '$q4Autre', '$q5', '$q6', '$q7', '$q8', '$q9', '$q10', '$q11', '$email', '$q12')";

    echo $sql;
if ($conn->query($sql) === TRUE) {
    echo "Succes";
} else {
    echo "Error";
}

// Close the database connection
$conn->close();
?>
