// Aggiungi un ascoltatore per l'evento di invio del modulo
document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita l'invio del modulo
    
    // Ottieni i valori dai campi del modulo
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var number = document.getElementById("number").value;
    var dropdown = document.getElementById("dropdown").value;
    var recommendation = document.querySelector('input[name="recommendation"]:checked').value;
    var favoriteFeature = document.getElementById("favorite-feature").value;
    var favoriteSubjects = [];
    var favoriteSubjectsCheckboxes = document.querySelectorAll('input[name="favoriteSubjects[]"]:checked');
    favoriteSubjectsCheckboxes.forEach(function(checkbox) {
      favoriteSubjects.push(checkbox.value);
    });
    var comments = document.getElementById("comments").value;
    
    // Crea un oggetto con le risposte del questionario
    var surveyData = {
      name: name,
      email: email,
      age: age,
      number: number,
      dropdown: dropdown,
      recommendation: recommendation,
      favoriteFeature: favoriteFeature,
      favoriteSubjects: favoriteSubjects,
      comments: comments
    };
    
    // Invia i dati del questionario al server
    fetch('http://localhost:5000/survey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(surveyData)
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server
      console.log(data.message);
      
      // Salva i dati del questionario nel Local Storage (opzionale)
      localStorage.setItem("surveyResponses", JSON.stringify(surveyData));
      
      // Reindirizza l'utente a una pagina di conferma o a un'altra destinazione
      window.location.href = "conferma.html";
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
    });
});


