const correctAnswers = {
  q1: "b", // Nawet do 60 tysięcy
  q2: "c", // Zapładniają królową
  q3: "c", // Masowe wymieranie pszczół
  q4: "c", // Dzięki tańcowi pszczelemu
  q5: "d", // Syrop kukurydziany
  q6: "a", // Sadzenie roślin miododajnych
  q7: "c", // Pomagają w omunikacji wewnętrznej
  q8: "a", // Nie produkują miodu i żyją pojedynczo
  q9: "c", // Zaburzy się cały łańcuch pokarmowy
  q10: "b" // Sadzić rośliny przyjazne pszczołom
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
