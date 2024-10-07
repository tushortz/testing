function validateInput(input) {
  const sanitizedInput = input.replace(/</g, "& lt;").replace(/>/g, "& gt;");
  if (sanitizedInput === ") {
    throw new Error("Input cannot be empty");
}
return sanitizedInput;
}
//To avoid SQL injection vulnerabilities, follow these tips:
//Prepared Statements: Use prepared statements when executing SQL queries to ensure that user input is not executed as SQL code.Ex:
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "my_db"
});
connection.connect();
const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
const values = ["admin", "password123"];
connection.query(sql, values, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
connection.end();