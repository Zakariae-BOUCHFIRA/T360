<?php
// Retrieve form data
$rs1 = $_POST['rs1'];
$rs2 = $_POST['rs2'];
$rs3 = $_POST['rs3'];
$rs4 = $_POST['rs4'];
$q1 = $_POST['q1'];
$q2 = $_POST['q2'];
$q3 = $_POST['q3'];
$q4 = $_POST['q4'];
$q5 = $_POST['q5'];
$q6 = $_POST['q6'];
$q7 = $_POST['q7[]']; // Use [] to treat it as an array
$q8 = $_POST['q8[]'];
$q9 = $_POST['q9'];
$q10 = $_POST['q10'];
$q11 = $_POST['q11'];
$email = $_POST['email'];
$q12 = $_POST['q12'];

// Validate and sanitize the data as needed

// Connect to the database (replace the placeholders with your database credentials)
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare the SQL statement to insert the form data into the database (replace 'table_name' with the actual table name)
$sql = "INSERT INTO table_name (rs1, rs2, rs3, rs4, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, email, q12)
        VALUES ('$rs1', '$rs2', '$rs3', '$rs4', '$q1', '$q2', '$q3', '$q4', '$q5', '$q6', '" . implode(",", $q7) . "', '$q8', '$q9', '$q10', '$q11', '$email', '$q12')";

if ($conn->query($sql) === TRUE) {
    echo "Form data stored successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
