<?php
$conn = mysql_connect("localhost", "manteni5_dos", "v8^6zMSigUUl");
if (!$conn) {
	die ('Connect Error (' . mysql_error() );
}
$db_selected = mysql_select_db('manteni5_uno', $conn);
if(!$db_selected) {
	die ('Can\'t use db : ' . mysql_error() );
}
?>