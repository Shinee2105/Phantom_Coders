document.querySelector("#quiz button").addEventListener("click", function() {
    fetch('http://127.0.0.1:5000/start_quiz', {
        method: 'POST'  // Change method to POST
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            alert("Quiz Started! Output: " + data.output);
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(error => {
        alert("Something went wrong: " + error);
    });
});
