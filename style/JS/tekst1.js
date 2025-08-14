const correctAnswers = {
  q1: "b", // Kraków
  q2: "c", // Trzy
  q3: "b", // Oscypek
  q4: "c", // Kuchnia nowoczesna i pokazy live cooking
  q5: "b", // Dekorować pierniki
  q6: "c", // Folkowa
  q7: "b", // Historia polskich potraw i ograniczanie marnowania żywności
  q8: "a", // Zapach pieczonego chleba i racuchów
  q9: "a", // Rywalizacja o najlepszy bigos
  q10: "b" // Bo można zobaczyć Kraków i poznać polską kuchnię
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

