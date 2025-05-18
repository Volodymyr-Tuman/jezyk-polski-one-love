const correctAnswers = {
  q1: "a", // Wczesnym rankiem
  q2: "b", // Rozległe pola uprawne i lasy
  q3: "b", // Około godziny
  q4: "b", // Czytał książkę i pił kawę
  q5: "b", // Nowoczesne budynki ustępowały zabytkom
  q6: "b", // Pełna energii i różnorodności ludzi
  q7: "b", // Możliwość mentalnego oderwania się
  q8: "b", // Biznesmeni, turyści i studenci
  q9: "a", // Pociąg się zatrzymywał, pasażerowie wchodzili i wychodzili
  q10: "b" // Zastanawiał się nad historiami pasażerów
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