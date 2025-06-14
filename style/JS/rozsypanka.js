const sentences = [
  [["Ona", "czyta", "nową", "powieść"], "Teraźniejszy"],
  [["Ty", "piszesz", "krótką", "wiadomość"], "Teraźniejszy"],
  [["Ja", "słucham", "cichej", "muzyki"], "Teraźniejszy"],
  [["My", "idziemy", "do", "szkoły"], "Teraźniejszy"],
  [["Pies", "leży", "na", "dywanie"], "Teraźniejszy"],
  [["Dziecko", "maluje", "zielony", "dom"], "Teraźniejszy"],
  [["Oni", "czytają", "gazetę", "codziennie"], "Teraźniejszy"],
  [["Kot", "śpi", "w", "koszyku"], "Teraźniejszy"],
  [["Ty", "gotujesz", "rosołek", "dzisiaj"], "Teraźniejszy"],
  [["Ja", "robię", "zdjęcie", "teraz"], "Teraźniejszy"],

  [["Ona", "czytała", "wczoraj", "książkę"], "Przeszły"],
  [["Ty", "widziałeś", "ten", "film"], "Przeszły"],
  [["Ja", "pisałem", "tekst", "długo"], "Przeszły"],
  [["My", "kupiliśmy", "tani", "rower"], "Przeszły"],
  [["Pies", "szedł", "przez", "las"], "Przeszły"],
  [["Dziecko", "płakało", "w", "nocy"], "Przeszły"],
  [["Kot", "złapał", "małą", "mysz"], "Przeszły"],
  [["Oni", "rozmawiali", "bardzo", "długo"], "Przeszły"],
  [["Ty", "zjadłeś", "ciasto", "wczoraj"], "Przeszły"],
  [["Ja", "sprzątałem", "pokój", "sam"], "Przeszły"],

  [["Jutro", "napiszesz", "ważny", "test"], "Przyszły"],
  [["My", "pójdziemy", "na", "spacer"], "Przyszły"],
  [["Ona", "zrobi", "kolację", "jutro"], "Przyszły"],
  [["Ty", "przyniesiesz", "swoją", "książkę"], "Przyszły"],
  [["Pies", "przybiegnie", "na", "głos"], "Przyszły"],
  [["Kot", "zniknie", "na", "chwilę"], "Przyszły"],
  [["Ja", "zobaczę", "nowy", "film"], "Przyszły"],
  [["Oni", "znajdą", "klucz", "szybko"], "Przyszły"],
  [["Ty", "wypijesz", "gorącą", "herbatę"], "Przyszły"],
  [["My", "zjemy", "obiad", "wcześnie"], "Przyszły"],

  [["Dziecko", "czyta", "swoją", "bajkę"], "Teraźniejszy"],
  [["On", "gra", "na", "gitarze"], "Teraźniejszy"],
  [["Ty", "siedzisz", "na", "krześle"], "Teraźniejszy"],
  [["Ona", "ubiera", "ciepły", "płaszcz"], "Teraźniejszy"],
  [["Kot", "patrzy", "przez", "okno"], "Teraźniejszy"],

  [["My", "czytaliśmy", "razem", "książkę"], "Przeszły"],
  [["Oni", "odwiedzili", "nas", "wczoraj"], "Przeszły"],
  [["Ja", "piłem", "gorącą", "kawę"], "Przeszły"],
  [["Ty", "zrobiłeś", "duży", "błąd"], "Przeszły"],
  [["Pies", "szczekał", "na", "listonosza"], "Przeszły"],

  [["Jutro", "przyjedzie", "nasz", "gość"], "Przyszły"],
  [["Ona", "pomoże", "ci", "jutro"], "Przyszły"],
  [["Ty", "zadzwonisz", "do", "mamy"], "Przyszły"],
  [["My", "przyniesiemy", "ciasto", "domowe"], "Przyszły"],
  [["Ja", "przeczytam", "wszystko", "dzisiaj"], "Przyszły"]
];

const correctSentences = [
  "Ona czyta nową powieść",
  "Ty piszesz krótką wiadomość",
  "Ja słucham cichej muzyki",
  "My idziemy do szkoły",
  "Pies leży na dywanie",
  "Dziecko maluje zielony dom",
  "Oni czytają gazetę codziennie",
  "Kot śpi w koszyku",
  "Ty gotujesz rosołek dzisiaj",
  "Ja robię zdjęcie teraz",

  "Ona czytała wczoraj książkę",
  "Ty widziałeś ten film",
  "Ja pisałem tekst długo",
  "My kupiliśmy tani rower",
  "Pies szedł przez las",
  "Dziecko płakało w nocy",
  "Kot złapał małą mysz",
  "Oni rozmawiali bardzo długo",
  "Ty zjadłeś ciasto wczoraj",
  "Ja sprzątałem pokój sam",

  "Jutro napiszesz ważny test",
  "My pójdziemy na spacer",
  "Ona zrobi kolację jutro",
  "Ty przyniesiesz swoją książkę",
  "Pies przybiegnie na głos",
  "Kot zniknie na chwilę",
  "Ja zobaczę nowy film",
  "Oni znajdą klucz szybko",
  "Ty wypijesz gorącą herbatę",
  "My zjemy obiad wcześnie",

  "Dziecko czyta swoją bajkę",
  "On gra na gitarze",
  "Ty siedzisz na krześle",
  "Ona ubiera ciepły płaszcz",
  "Kot patrzy przez okno",

  "My czytaliśmy razem książkę",
  "Oni odwiedzili nas wczoraj",
  "Ja piłem gorącą kawę",
  "Ty zrobiłeś duży błąd",
  "Pies szczekał na listonosza",

  "Jutro przyjedzie nasz gość",
  "Ona pomoże ci jutro",
  "Ty zadzwonisz do mamy",
  "My przyniesiemy ciasto domowe",
  "Ja przeczytam wszystko dzisiaj"
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
