  const correctAnswers = {
    q1: "b", // Bo dni są długie, mimo zmiennej pogody
    q2: "b", // Dotarcie do miejsc niedostępnych dla zwykłych aut
    q3: "c", // Gullfoss, Strokkur i Þingvellir
    q4: "c", // Gorącą rzekę Reykjadalur
    q5: "a", // Historie o elfach i trollach
    q6: "c", // Jako wymagającą, dziką i niedostępną krainę
    q7: "b", // Kontrasty między naturą – ogień i lód
    q8: "a", // Zrozumiał, że warto podróżować wolniej i uważniej
    q9: "b", // Czarne plaże Vik
    q10: "b" // Wyprawę zimą, by zobaczyć zorzę polarną
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
