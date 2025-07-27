const correctAnswers = {
  q1: "c",
  q2: "b",
  q3: "b",
  q4: "b",
  q5: "b",
  q6: "b",
  q7: "b",
  q8: "c",
  q9: "b",
  q10: "b"
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
