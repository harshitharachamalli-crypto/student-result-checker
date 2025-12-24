function checkResult() {
    let marks = document.getElementById("marks").value;

    let grade = "";
    let status = "";
    let message = "";

    if (marks ==="" || marks < 0 || marks > 100) {
        alert("Please enter valid marks between 0 and 100");
        return;
    }

    if (marks >= 90) {
        grade = "A";
        status = "Pass";
        message = "Excellent !";
    } else if (marks >= 75) {
        grade = "B";
        status = "Pass";
        message = "Very good !";
    } else if (marks >= 60) {
        grade = "C";
        status = "Pass";
        message = "Good !";
    } else if (marks >= 30) {
        grade = "D";
        status = "Pass";
        message = " passed. Keep improving!";
    } else {
        grade = "F";
        status = "Fail";
        message = "Better luck next time.";
    }

    document.getElementById("grade").innerText = "Grade: " + grade;
    document.getElementById("status").innerText = "Status: " + status;
    document.getElementById("message").innerText = message;
}
