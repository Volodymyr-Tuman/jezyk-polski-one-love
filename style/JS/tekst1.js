  const correctAnswers = {
  q1: "b", // Czytając przewodniki i filmy dokumentalne
  q2: "c", // Pociągiem
  q3: "b", // Wysoki Zamek
  q4: "c", // Pielmieni i gorącą czekoladę
  q5: "b", // Ukryte podziemia i muzeum aptekarstwa
  q6: "c", // Pełna magii i sztuki ulicznej
  q7: "c", // Drohobycz
  q8: "c", // Bo podróż do Lwowa była inspirująca
  q9: "b", // Oglądał artystów malujących na ulicach
  q10: "c" // Odczuł inspirację i zauroczenie miastem
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