const sentences = [
    [["Ja", "idę", "do", "szkoły"], "Teraźniejszy"],
    [["My", "będziemy", "jeść", "kolację"], "Przyszły"],
    [["Ty", "czytałeś", "książkę", "wczoraj"], "Przeszły"],
    [["Ona", "pisała", "list", "dzisiaj"], "Przeszły"],
    [["My", "zobaczymy", "film", "w sobotę"], "Przyszły"],
    [["Ty", "chodzisz", "do", "pracy"], "Teraźniejszy"],
    [["Ona", "czyta", "nową", "książkę"], "Teraźniejszy"],
    [["Ja", "zjadłem", "obiad", "wcześniej"], "Przeszły"],
    [["My", "pojedziemy", "na", "wakacje"], "Przyszły"],
    [["Oni", "uczyli się", "angielskiego", "w szkole"], "Przeszły"],
    [["Będziemy", "grać", "w", "piłkę"], "Przyszły"],
    [["On", "je", "obiady", "codziennie"], "Teraźniejszy"],
    [["Ja", "zjadłem", "obiad", "wcześniej"], "Przeszły"],
    [["Oni", "pójdą", "do", "kina"], "Przyszły"],
    [["My", "uczymy", "się", "polskiego"], "Teraźniejszy"],
    [["Ja", "wstaję", "o", "siódmej"], "Teraźniejszy"],
    [["Ona", "będzie", "pisać", "esej"], "Przyszły"],
    [["My", "gramy", "w", "szachy"], "Teraźniejszy"],
    [["On", "poszedł", "na", "zakupy"], "Przeszły"],
    [["Ty", "mówiłeś", "z", "Markiem"], "Przeszły"],
    [["Oni", "odrabiają", "zadanie", "teraz"], "Teraźniejszy"],
    [["My", "zjedliśmy", "lody", "wczoraj"], "Przeszły"],
    [["Ty", "zrobisz", "zakupy", "jutro"], "Przyszły"],
    [["Oni", "poszli", "do", "szkoły"], "Przeszły"],
    [["Ja", "spotkam", "się", "z przyjaciółmi"], "Przyszły"],
    [["Ty", "chodzisz", "na", "siłownię"], "Teraźniejszy"],
    [["My", "mówimy", "po", "polsku"], "Teraźniejszy"],
    [["Ona", "będzie", "lubić", "koty"], "Przyszły"],
    [["On", "będzie", "pracować", "w biurze"], "Przyszły"],
    [["My", "pojechaliśmy", "do", "Warszawy"], "Przeszły"],
    [["Ty", "czytasz", "nowy", "artykuł"], "Teraźniejszy"],
    [["Oni", "rozmawiają", "z", "nauczycielem"], "Teraźniejszy"]
  ];

  const correctSentences = [
    "Ja idę do szkoły",
    "My będziemy jeść kolację",
    "Ty czytałeś książkę wczoraj",
    "Ona pisała list dzisiaj",
    "My zobaczymy film w sobotę",
    "Ty chodzisz do pracy",
    "Ona czyta nową książkę",
    "Ja zjadłem obiad wcześniej",
    "My pojedziemy na wakacje",
    "Oni uczyli się angielskiego w szkole",
    "Będziemy grać w piłkę",
    "On je obiady codziennie",
    "Ja zjadłem obiad wcześniej",
    "Oni pójdą do kina",
    "My uczymy się polskiego",
    "Ja wstaję o siódmej",
    "Ona będzie pisać esej",
    "My gramy w szachy",
    "On poszedł na zakupy",
    "Ty mówiłeś z Markiem",
    "Oni odrabiają zadanie teraz",
    "My zjedliśmy lody wczoraj",
    "Ty zrobisz zakupy jutro",
    "Oni poszli do szkoły",
    "Ja spotkam się z przyjaciółmi",
    "Ty chodzisz na siłownię",
    "My mówimy po polsku",
    "Ona będzie lubić koty",
    "On będzie pracować w biurze",
    "My pojechaliśmy do Warszawy",
    "Ty czytasz nowy artykuł",
    "Oni rozmawiają z nauczycielem"
  ];

  let currentSentenceIndex = 0;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function createSentence(words) {
    const sentenceContainer = document.getElementById("sentenceContainer");
    const wordsContainer = document.getElementById("wordsContainer");
    sentenceContainer.innerHTML = ''; // clear previous sentence slots
    wordsContainer.innerHTML = ''; // clear previous words

    shuffleArray(words);

    words.forEach(() => {
      const div = document.createElement('div');
      div.className = 'placeholder';
      sentenceContainer.appendChild(div);
    });

    words.forEach((word, index) => {
      const div = document.createElement('div');
      div.className = 'word';
      div.textContent = word;
      div.setAttribute('draggable', 'true');
      div.setAttribute('id', 'word' + currentSentenceIndex + '_' + index);
      wordsContainer.appendChild(div);

      div.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.id);
        div.classList.add('dragging');
      });

      div.addEventListener('dragend', () => {
        div.classList.remove('dragging');
      });
    });

    const slots = sentenceContainer.querySelectorAll('.placeholder');
    slots.forEach((slot) => {
      slot.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      slot.addEventListener('drop', (e) => {
        const draggedWordId = e.dataTransfer.getData('text');
        const draggedWord = document.getElementById(draggedWordId);
        slot.appendChild(draggedWord);
        e.preventDefault();
      });
    });

    if (currentSentenceIndex === 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline-block";
    }

    if (currentSentenceIndex === sentences.length - 1) {
      document.getElementById("nextBtn").style.display = "none";
    } else {
      document.getElementById("nextBtn").style.display = "inline-block";
    }
  }

  function checkSentence() {
    const sentenceContainer = document.getElementById("sentenceContainer");
    const slots = sentenceContainer.querySelectorAll('.placeholder');
    const words = Array.from(slots).map(slot => slot.textContent.trim()).join(' ');

    if (correctSentences[currentSentenceIndex] === words) {
      sentenceContainer.querySelectorAll('.placeholder').forEach(slot => {
        slot.classList.add('correct');
      });
      document.getElementById('result').textContent = "✅ Brawo! Zdanie jest poprawne.";
    } else {
      sentenceContainer.querySelectorAll('.placeholder').forEach(slot => {
        slot.classList.add('incorrect');
      });
      document.getElementById('result').textContent = "❌ Źle zrobione zdanie";
    }
  }

  function prevSentence() {
    if (currentSentenceIndex > 0) {
      currentSentenceIndex--;
      createSentence(sentences[currentSentenceIndex][0]);
      document.getElementById('result').textContent = "";
    }
  }

  function nextSentence() {
    if (currentSentenceIndex < sentences.length - 1) {
      currentSentenceIndex++;
      createSentence(sentences[currentSentenceIndex][0]);
      document.getElementById('result').textContent = "";
    }
  }

  createSentence(sentences[currentSentenceIndex][0]);