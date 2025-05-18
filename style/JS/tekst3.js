const correctAnswers = {
  q1: "b", // Wczesnym rankiem
  q2: "b", // Rybaków wyciągających sieci z rybami
  q3: "c", // Płynący inaczej, pełen historii
  q4: "a", // Między spokojem ranka a zgiełkiem turystów
  q5: "a", // Zanurzył dłonie w wodzie
  q6: "b", // Metaforę zmian i nadziei
  q7: "b", // Ukojenie i świeżość
  q8: "b", // Jako dźwięk kołyszący myśli
  q9: "b", // Byli zmęczeni, ale zadowoleni z połowu
  q10: "b" // Czas nad morzem daje ukojenie i inspirację
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