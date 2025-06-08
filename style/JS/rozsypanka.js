const sentences = [
  [["On", "czyta", "gazetę", "codziennie"], "Teraźniejszy"],
  [["Ty", "niesiesz", "ciężką", "torbę"], "Teraźniejszy"],
  [["My", "oglądamy", "film", "razem"], "Teraźniejszy"],
  [["Pies", "szuka", "piłki", "w trawie"], "Teraźniejszy"],
  [["Ona", "pracuje", "w", "szkole"], "Teraźniejszy"],
  [["Dziecko", "rysuje", "kolorowy", "obraz"], "Teraźniejszy"],
  [["Kot", "myje", "swoje", "łapy"], "Teraźniejszy"],
  [["Ja", "uczę", "się", "polskiego"], "Teraźniejszy"],
  [["Oni", "słuchają", "muzyki", "głośno"], "Teraźniejszy"],
  [["Samochód", "stoi", "na", "ulicy"], "Teraźniejszy"],

  [["Ona", "gotowała", "zupę", "grzybową"], "Przeszły"],
  [["Ty", "odwiedziłeś", "dziadka", "wczoraj"], "Przeszły"],
  [["My", "czytaliśmy", "książki", "cały dzień"], "Przeszły"],
  [["Ja", "zrobiłem", "wszystko", "dobrze"], "Przeszły"],
  [["Pociąg", "odjechał", "bardzo", "wcześnie"], "Przeszły"],
  [["Kot", "uciekł", "na", "drzewo"], "Przeszły"],
  [["Dzieci", "spały", "do", "późna"], "Przeszły"],
  [["Oni", "mówili", "o", "problemach"], "Przeszły"],
  [["Pies", "szedł", "obok", "mnie"], "Przeszły"],
  [["Ty", "pisałeś", "wiadomość", "wtedy"], "Przeszły"],

  [["Jutro", "przyjdzie", "nowy", "listonosz"], "Przyszły"],
  [["My", "pójdziemy", "na", "rynek"], "Przyszły"],
  [["Ty", "powiesz", "to", "wszystkim"], "Przyszły"],
  [["Ja", "zjem", "kolację", "sam"], "Przyszły"],
  [["Oni", "wezmą", "to", "auto"], "Przyszły"],
  [["Ona", "kupi", "nową", "torebkę"], "Przyszły"],
  [["Dziecko", "nauczy", "się", "szybko"], "Przyszły"],
  [["Pies", "znajdzie", "swoją", "zabawkę"], "Przyszły"],
  [["Ty", "pójdziesz", "na", "spacer"], "Przyszły"],
  [["Kot", "wróci", "do", "domu"], "Przyszły"],

  [["Ona", "czyta", "ciekawy", "artykuł"], "Teraźniejszy"],
  [["My", "siedzimy", "na", "ławce"], "Teraźniejszy"],
  [["Ty", "mówisz", "zbyt", "głośno"], "Teraźniejszy"],
  [["Pies", "patrzy", "na", "ptaki"], "Teraźniejszy"],
  [["Ja", "robię", "notatki", "teraz"], "Teraźniejszy"],

  [["Oni", "rozmawiali", "przez", "telefon"], "Przeszły"],
  [["Ty", "czytałeś", "coś", "dziwnego"], "Przeszły"],
  [["My", "spędziliśmy", "dzień", "razem"], "Przeszły"],
  [["Ona", "pisała", "do", "ciebie"], "Przeszły"],
  [["Ja", "miałem", "dużo", "pracy"], "Przeszły"],

  [["Jutro", "zjemy", "coś", "dobrego"], "Przyszły"],
  [["Oni", "zrobią", "coś", "ważnego"], "Przyszły"],
  [["Ty", "zabierzesz", "klucze", "ze sobą"], "Przyszły"],
  [["My", "naprawimy", "ten", "problem"], "Przyszły"],
  [["Pies", "pobiegnie", "za", "piłką"], "Przyszły"]
];

const correctSentences = [
  "On czyta gazetę codziennie",
  "Ty niesiesz ciężką torbę",
  "My oglądamy film razem",
  "Pies szuka piłki w trawie",
  "Ona pracuje w szkole",
  "Dziecko rysuje kolorowy obraz",
  "Kot myje swoje łapy",
  "Ja uczę się polskiego",
  "Oni słuchają muzyki głośno",
  "Samochód stoi na ulicy",

  "Ona gotowała zupę grzybową",
  "Ty odwiedziłeś dziadka wczoraj",
  "My czytaliśmy książki cały dzień",
  "Ja zrobiłem wszystko dobrze",
  "Pociąg odjechał bardzo wcześnie",
  "Kot uciekł na drzewo",
  "Dzieci spały do późna",
  "Oni mówili o problemach",
  "Pies szedł obok mnie",
  "Ty pisałeś wiadomość wtedy",

  "Jutro przyjdzie nowy listonosz",
  "My pójdziemy na rynek",
  "Ty powiesz to wszystkim",
  "Ja zjem kolację sam",
  "Oni wezmą to auto",
  "Ona kupi nową torebkę",
  "Dziecko nauczy się szybko",
  "Pies znajdzie swoją zabawkę",
  "Ty pójdziesz na spacer",
  "Kot wróci do domu",

  "Ona czyta ciekawy artykuł",
  "My siedzimy na ławce",
  "Ty mówisz zbyt głośno",
  "Pies patrzy na ptaki",
  "Ja robię notatki teraz",

  "Oni rozmawiali przez telefon",
  "Ty czytałeś coś dziwnego",
  "My spędziliśmy dzień razem",
  "Ona pisała do ciebie",
  "Ja miałem dużo pracy",

  "Jutro zjemy coś dobrego",
  "Oni zrobią coś ważnego",
  "Ty zabierzesz klucze ze sobą",
  "My naprawimy ten problem",
  "Pies pobiegnie za piłką"
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
