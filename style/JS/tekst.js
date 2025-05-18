  const correctAnswers = {
    q1: "b",
    q2: "d",
    q3: "c",
    q4: "c",
    q5: "c",
    q6: "b",
    q7: "a",
    q8: "d",
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