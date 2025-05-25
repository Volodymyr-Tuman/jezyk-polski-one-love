const sentences = [
  [["Ona", "czyta", "interesującą", "książkę"], "Teraźniejszy"],
  [["My", "idziemy", "do", "szkoły"], "Teraźniejszy"],
  [["Pies", "szczeka", "na", "listonosza"], "Teraźniejszy"],
  [["Oni", "gotują", "zupę", "pomidorową"], "Teraźniejszy"],
  [["Ty", "piszesz", "długi", "tekst"], "Teraźniejszy"],
  [["Dziecko", "pije", "ciepłe", "mleko"], "Teraźniejszy"],
  [["Ja", "czytam", "nową", "gazetę"], "Teraźniejszy"],
  [["Samochód", "stoi", "na", "parkingu"], "Teraźniejszy"],
  [["Ona", "sprząta", "swój", "pokój"], "Teraźniejszy"],
  [["Chłopiec", "nosi", "ciężki", "plecak"], "Teraźniejszy"],

  [["On", "czytał", "krótką", "powieść"], "Przeszły"],
  [["My", "zjedliśmy", "pyszną", "kolację"], "Przeszły"],
  [["Oni", "grali", "w", "piłkę"], "Przeszły"],
  [["Ty", "napisałeś", "ładny", "list"], "Przeszły"],
  [["Pociąg", "przyjechał", "na", "czas"], "Przeszły"],
  [["Ona", "mówiła", "cicho", "wczoraj"], "Przeszły"],
  [["Dzieci", "biegały", "po", "plaży"], "Przeszły"],
  [["Ja", "czytałem", "wczoraj", "wieczorem"], "Przeszły"],
  [["On", "kupił", "zielony", "sweter"], "Przeszły"],
  [["Samochód", "jechał", "bardzo", "wolno"], "Przeszły"],

  [["Jutro", "pójdę", "do", "lekarza"], "Przyszły"],
  [["Ona", "napisze", "długi", "list"], "Przyszły"],
  [["My", "zjemy", "coś", "smacznego"], "Przyszły"],
  [["Ty", "zobaczysz", "ten", "film"], "Przyszły"],
  [["Dzieci", "pójdą", "na", "spacer"], "Przyszły"],
  [["Ja", "posprzątam", "swój", "pokój"], "Przyszły"],
  [["On", "zagra", "w", "grę"], "Przyszły"],
  [["Oni", "będą", "czytać", "książki"], "Przyszły"],
  [["Samochód", "odjedzie", "za", "chwilę"], "Przyszły"],
  [["Pociąg", "odjedzie", "o", "ósmej"], "Przyszły"],

  [["Pies", "śpi", "w", "koszu"], "Teraźniejszy"],
  [["Kot", "leży", "na", "kanapie"], "Teraźniejszy"],
  [["Ty", "czytasz", "interesujące", "artykuły"], "Teraźniejszy"],
  [["Ja", "gram", "na", "pianinie"], "Teraźniejszy"],
  [["On", "ogląda", "dobry", "film"], "Teraźniejszy"],

  [["Wczoraj", "czytałem", "stary", "list"], "Przeszły"],
  [["Oni", "zbudowali", "drewniany", "dom"], "Przeszły"],
  [["My", "kupiliśmy", "nową", "kanapę"], "Przeszły"],
  [["Ona", "zjadła", "słodki", "deser"], "Przeszły"],
  [["Dziecko", "narysowało", "piękny", "obraz"], "Przeszły"],

  [["Jutro", "napiszę", "ważny", "mail"], "Przyszły"],
  [["My", "pójdziemy", "do", "kina"], "Przyszły"],
  [["Oni", "zjedzą", "obiad", "w domu"], "Przyszły"],
  [["Ty", "będziesz", "czytać", "gazetę"], "Przyszły"],
  [["Pies", "zostanie", "w", "domu"], "Przyszły"]
];

const correctSentences = [
  "Ona czyta interesującą książkę",
  "My idziemy do szkoły",
  "Pies szczeka na listonosza",
  "Oni gotują zupę pomidorową",
  "Ty piszesz długi tekst",
  "Dziecko pije ciepłe mleko",
  "Ja czytam nową gazetę",
  "Samochód stoi na parkingu",
  "Ona sprząta swój pokój",
  "Chłopiec nosi ciężki plecak",

  "On czytał krótką powieść",
  "My zjedliśmy pyszną kolację",
  "Oni grali w piłkę",
  "Ty napisałeś ładny list",
  "Pociąg przyjechał na czas",
  "Ona mówiła cicho wczoraj",
  "Dzieci biegały po plaży",
  "Ja czytałem wczoraj wieczorem",
  "On kupił zielony sweter",
  "Samochód jechał bardzo wolno",

  "Jutro pójdę do lekarza",
  "Ona napisze długi list",
  "My zjemy coś smacznego",
  "Ty zobaczysz ten film",
  "Dzieci pójdą na spacer",
  "Ja posprzątam swój pokój",
  "On zagra w grę",
  "Oni będą czytać książki",
  "Samochód odjedzie za chwilę",
  "Pociąg odjedzie o ósmej",

  "Pies śpi w koszu",
  "Kot leży na kanapie",
  "Ty czytasz interesujące artykuły",
  "Ja gram na pianinie",
  "On ogląda dobry film",

  "Wczoraj czytałem stary list",
  "Oni zbudowali drewniany dom",
  "My kupiliśmy nową kanapę",
  "Ona zjadła słodki deser",
  "Dziecko narysowało piękny obraz",

  "Jutro napiszę ważny mail",
  "My pójdziemy do kina",
  "Oni zjedzą obiad w domu",
  "Ty będziesz czytać gazetę",
  "Pies zostanie w domu"
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
