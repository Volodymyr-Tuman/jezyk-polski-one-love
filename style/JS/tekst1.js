const correctAnswers = {
  q1: "d",
  q2: "c",
  q3: "d",
  q4: "c",
  q5: "b",
  q6: "c",
  q7: "c",
  q8: "b",
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
