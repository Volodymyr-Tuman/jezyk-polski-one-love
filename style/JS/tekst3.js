const correctAnswers = {
  q1: "b", // Do wykrywania zmian chorobowych
  q2: "b", // Analiza danych medycznych
  q3: "c", // W precyzyjnym wykonywaniu zabiegów
  q4: "c", // Analizuje związki chemiczne
  q5: "b", // Odpowiedzialne i etyczne wdrażanie
  q6: "c", // Utrata prywatności i błędy systemu
  q7: "c", // Wczesne wykrywanie chorób
  q8: "b", // Być partnerem wspierającym lekarza
  q9: "b", // Skraca czas rekonwalescencji
  q10: "c" // Jako trwały i pozytywny trend
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
