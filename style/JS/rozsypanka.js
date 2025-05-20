const sentences = [
  [["Kawa", "jest", "bardzo", "smaczna"], "Teraźniejszy"],
  [["Dzieci", "bawiły", "się", "w parku"], "Przeszły"],
  [["Pies", "biegnie", "szybko", "łąką"], "Teraźniejszy"],
  [["Jutro", "pójdziemy", "na", "basen"], "Przyszły"],
  [["On", "naprawił", "stary", "rower"], "Przeszły"],
  [["Ona", "pisze", "długi", "list"], "Teraźniejszy"],
  [["My", "kupimy", "świeże", "owoce"], "Przyszły"],
  [["Kot", "śpi", "na", "kanapie"], "Teraźniejszy"],
  [["Wczoraj", "oglądaliśmy", "film", "wieczorem"], "Przeszły"],
  [["Dzisiaj", "gotuję", "pyszny", "obiad"], "Teraźniejszy"],
  [["Ty", "będziesz", "czytać", "książkę"], "Przyszły"],
  [["Oni", "zbudowali", "duży", "dom"], "Przeszły"],
  [["Samochód", "jedzie", "szybko", "drogą"], "Teraźniejszy"],
  [["Jutro", "pojedziemy", "nad", "morze"], "Przyszły"],
  [["Ptaki", "śpiewały", "cały", "dzień"], "Przeszły"],
  [["Ona", "maluje", "ładny", "obraz"], "Teraźniejszy"],
  [["My", "będziemy", "tańczyć", "imprezie"], "Przyszły"],
  [["Woda", "jest", "zimna", "dzisiaj"], "Teraźniejszy"],
  [["On", "napisał", "krótką", "notatkę"], "Przeszły"],
  [["Ty", "kupisz", "nowy", "telefon"], "Przyszły"],
  [["Kwiaty", "rosną", "w", "ogrodzie"], "Teraźniejszy"],
  [["Wczoraj", "padał", "mocny", "deszcz"], "Przeszły"],
  [["My", "czytamy", "ciekawe", "książki"], "Teraźniejszy"],
  [["Oni", "będą", "grać", "piłkę"], "Przyszły"],
  [["Słońce", "świeci", "na", "niebie"], "Teraźniejszy"],
  [["Ty", "naprawiłeś", "zepsuty", "komputer"], "Przeszły"],
  [["Pociąg", "przyjedzie", "za", "godzinę"], "Przyszły"],
  [["Ona", "uczy", "się", "języka"], "Teraźniejszy"],
  [["Dzieci", "budowały", "zamek", "piasku"], "Przeszły"],
  [["My", "pijemy", "gorącą", "herbatę"], "Teraźniejszy"],
  [["On", "naprawił", "stary", "samochód"], "Przeszły"],
  [["Ty", "zjesz", "smaczny", "obiad"], "Przyszły"],
  [["Pies", "biega", "po", "parku"], "Teraźniejszy"],
  [["Wczoraj", "czytałem", "nową", "gazetę"], "Przeszły"],
  [["Jutro", "zrobimy", "długą", "wycieczkę"], "Przyszły"],
  [["Ona", "pisze", "list", "przyjaciela"], "Teraźniejszy"],
  [["My", "kupiliśmy", "nowy", "samochód"], "Przeszły"],
  [["Ty", "będziesz", "czytać", "gazetę"], "Przyszły"],
  [["On", "śpiewa", "ładną", "piosenkę"], "Teraźniejszy"],
  [["Oni", "zbudowali", "wysoki", "budynek"], "Przeszły"]
];

const correctSentences = [
  "Kawa jest bardzo smaczna",
  "Dzieci bawiły się w parku",
  "Pies biegnie szybko łąką",
  "Jutro pójdziemy na basen",
  "On naprawił stary rower",
  "Ona pisze długi list",
  "My kupimy świeże owoce",
  "Kot śpi na kanapie",
  "Wczoraj oglądaliśmy film wieczorem",
  "Dzisiaj gotuję pyszny obiad",
  "Ty będziesz czytać książkę",
  "Oni zbudowali duży dom",
  "Samochód jedzie szybko drogą",
  "Jutro pojedziemy nad morze",
  "Ptaki śpiewały cały dzień",
  "Ona maluje ładny obraz",
  "My będziemy tańczyć imprezie",
  "Woda jest zimna dzisiaj",
  "On napisał krótką notatkę",
  "Ty kupisz nowy telefon",
  "Kwiaty rosną w ogrodzie",
  "Wczoraj padał mocny deszcz",
  "My czytamy ciekawe książki",
  "Oni będą grać piłkę",
  "Słońce świeci na niebie",
  "Ty naprawiłeś zepsuty komputer",
  "Pociąg przyjedzie za godzinę",
  "Ona uczy się języka",
  "Dzieci budowały zamek piasku",
  "My pijemy gorącą herbatę",
  "On naprawił stary samochód",
  "Ty zjesz smaczny obiad",
  "Pies biega po parku",
  "Wczoraj czytałem nową gazetę",
  "Jutro zrobimy długą wycieczkę",
  "Ona pisze list przyjaciela",
  "My kupiliśmy nowy samochód",
  "Ty będziesz czytać gazetę",
  "On śpiewa ładną piosenkę",
  "Oni zbudowali wysoki budynek"
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
