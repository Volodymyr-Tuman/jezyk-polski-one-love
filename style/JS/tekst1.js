const correctAnswers = {
  q1: "b", // Johannes Gutenberg
  q2: "c", // W Chinach
  q3: "b", // Biblia
  q4: "c", // Ułatwił dostęp do wiedzy
  q5: "b", // Pozwolił szybko rozpowszechniać nowe idee
  q6: "c", // Książki, gazety, ulotki, podręczniki
  q7: "c", // Druk offsetowy i rotacyjny
  q8: "c", // Ułatwił przekazywanie informacji i wiedzy
  q9: "a", // Druk cyfrowy i 3D
  q10: "b" // Rozwój nowoczesnego społeczeństwa opartego na wiedzy
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
