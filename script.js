function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "alumno" && password === "2024") {
      document.getElementById("login-section").classList.add("hidden");
      document.getElementById("course-section").classList.remove("hidden");
    } else {
      document.getElementById("error-message").textContent = "Usuario o contraseña incorrectos.";
    }
  }
  
  function evaluateQuiz() {
  

    let score = 0;
  

    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "correcto") 
    {
        score++;
    }
  

    const q2a = document.getElementById("q2a");
    const q2b = document.getElementById("q2b");
    if (q2a.checked && !q2b.checked) {
        score++;

    }
       
  
  
    const q3 = document.getElementById("q3").value;
    if (q3 === "correcto") {
        score++;
    }

    const q4a = document.getElementById("q4a");
    const q4b = document.getElementById("q4b");
    const q4c = document.getElementById("q4c");
    if (q4a.checked && !q4c.checked) {
        score = score + 0.5;

    }
    if (q4b .checked && !q4c.checked) {
        score = score + 0.5;

    }
       
    const q5a = document.getElementById("q5a");
    const q5b = document.getElementById("q5b");
    const q5c = document.getElementById("q5c");
    if (q5a.checked && !q5b.checked) {
        score = score + 0.5;

    }
    if (q5c.checked && !q5b.checked) {
        score = score + 0.5;

    }
    document.getElementById("quiz-result").textContent = `Calificación: ${score} / 5`;
  }
  