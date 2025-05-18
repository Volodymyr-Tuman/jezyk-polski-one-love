const correctAnswers = {
  q1: "a", // We wrześniu
  q2: "c", // Pomógł mu uczeń z klasy maturalnej
  q3: "b", // Pomocna i otwarta
  q4: "a", // Gra na gitarze
  q5: "a", // Dołączenie do zespołu muzycznego
  q6: "b", // Nauczyciele zachęcali do dyskusji
  q7: "b", // Historia i język polski
  q8: "b", // W szkolnym bufecie
  q9: "b", // Pewniej i bardziej zadowolony
  q10: "a" // Że zmiany są trudne, ale wartościowe
};

    function checkAnswers() {
      for (let key in correctAnswers) {
        const question = document.getElementById(key);
        const answers = document.getElementsByName(key);
        let answeredCorrectly = false;

        answers.forEach(answer => {
          if (answer.checked) {
            if (answer.value === correctAnswers[key]) {
              answeredCorrectly = true;
            }
          }
        });

        question.className = "question " + (answeredCorrectly ? "correct" : "incorrect");
      }
    }