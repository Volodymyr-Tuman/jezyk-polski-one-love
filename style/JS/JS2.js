const sentences = [
    [["Ja", "czytam", "interesującą", "książkę"], "Teraźniejszy"],
    [["Ty", "napiszesz", "list", "jutro"], "Przyszły"],
    [["On", "kupił", "nowy", "samochód"], "Przeszły"],
    [["Ona", "gotuje", "obiad", "teraz"], "Teraźniejszy"],
    [["My", "oglądaliśmy", "film", "wczoraj"], "Przeszły"],
    [["Wy", "pójdziecie", "do", "kina"], "Przyszły"],
    [["Oni", "będą", "czytać", "gazetę"], "Przyszły"],
    [["Ja", "jadłem", "śniadanie", "rano"], "Przeszły"],
    [["Ty", "czytasz", "nową", "książkę"], "Teraźniejszy"],
    [["On", "będzie", "pisać", "esej"], "Przyszły"],
    [["Ona", "śpiewa", "ładną", "piosenkę"], "Teraźniejszy"],
    [["My", "piliśmy", "słodką", "herbatę"], "Przeszły"],
    [["Wy", "gotujecie", "kolację", "teraz"], "Teraźniejszy"],
    [["Oni", "tańczyli", "na", "imprezie"], "Przeszły"],
    [["Ja", "będę", "czytać", "artykuł"], "Przyszły"],
    [["Ty", "poszedłeś", "do", "sklepu"], "Przeszły"],
    [["On", "nosi", "ciężką", "torbę"], "Teraźniejszy"],
    [["Ona", "pójdzie", "na", "spacer"], "Przyszły"],
    [["My", "piszemy", "krótką", "notatkę"], "Teraźniejszy"],
    [["Wy", "czytaliście", "starą", "książkę"], "Przeszły"],
    [["Oni", "zjedzą", "późny", "obiad"], "Przyszły"],
    [["Ja", "robię", "zdjęcie", "teraz"], "Teraźniejszy"],
    [["Ty", "jadłeś", "kolację", "w domu"], "Przeszły"],
    [["On", "czyta", "ciekawy", "artykuł"], "Teraźniejszy"],
    [["Ona", "napisała", "wiadomość", "wczoraj"], "Przeszły"],
    [["My", "będziemy", "pić", "kawę"], "Przyszły"],
    [["Wy", "czytacie", "gazetę", "teraz"], "Teraźniejszy"],
    [["Oni", "przygotowali", "kolację", "razem"], "Przeszły"],
    [["Ja", "uczę", "się", "polskiego"], "Teraźniejszy"],
    [["Ty", "będziesz", "gotować", "zupę"], "Przyszły"],
    [["On", "kupi", "nową", "książkę"], "Przyszły"],
    [["Ona", "maluje", "ładny", "obraz"], "Teraźniejszy"],
    [["My", "czytaliśmy", "interesujące", "artykuły"], "Przeszły"],
    [["Wy", "pijecie", "czarną", "kawę"], "Teraźniejszy"],
    [["Oni", "pisali", "egzamin", "wczoraj"], "Przeszły"],
    [["Ja", "zjem", "obiad", "później"], "Przyszły"],
    [["Ty", "robisz", "zdjęcia", "teraz"], "Teraźniejszy"],
    [["On", "pisał", "esej", "wczoraj"], "Przeszły"],
    [["Ona", "będzie", "czytać", "książkę"], "Przyszły"],
    [["My", "idziemy", "do", "muzeum"], "Teraźniejszy"],
    [["Wy", "czytaliście", "długi", "tekst"], "Przeszły"],
    [["Oni", "będą", "gotować", "obiad"], "Przyszły"],
    [["Ja", "gram", "na", "gitarze"], "Teraźniejszy"],
    [["Ty", "czytałeś", "artykuł", "rano"], "Przeszły"],
    [["On", "będzie", "śpiewać", "piosenkę"], "Przyszły"],
    [["Ona", "pisze", "wiadomość", "teraz"], "Teraźniejszy"],
    [["My", "czytaliśmy", "gazety", "wczoraj"], "Przeszły"],
    [["Wy", "będziecie", "malować", "obraz"], "Przyszły"],
    [["Oni", "idą", "na", "spacer"], "Teraźniejszy"]
];

const correctSentences = [
  "Ja czytam interesującą książkę",
  "Ty napiszesz list jutro",
  "On kupił nowy samochód",
  "Ona gotuje obiad teraz",
  "My oglądaliśmy film wczoraj",
  "Wy pójdziecie do kina",
  "Oni będą czytać gazetę",
  "Ja jadłem śniadanie rano",
  "Ty czytasz nową książkę",
  "On będzie pisać esej",
  "Ona śpiewa ładną piosenkę",
  "My piliśmy słodką herbatę",
  "Wy gotujecie kolację teraz",
  "Oni tańczyli na imprezie",
  "Ja będę czytać artykuł",
  "Ty poszedłeś do sklepu",
  "On nosi ciężką torbę",
  "Ona pójdzie na spacer",
  "My piszemy krótką notatkę",
  "Wy czytaliście starą książkę",
  "Oni zjedzą późny obiad",
  "Ja robię zdjęcie teraz",
  "Ty jadłeś kolację w domu",
  "On czyta ciekawy artykuł",
  "Ona napisała wiadomość wczoraj",
  "My będziemy pić kawę",
  "Wy czytacie gazetę teraz",
  "Oni przygotowali kolację razem",
  "Ja uczę się polskiego",
  "Ty będziesz gotować zupę",
  "On kupi nową książkę",
  "Ona maluje ładny obraz",
  "My czytaliśmy interesujące artykuły",
  "Wy pijecie czarną kawę",
  "Oni pisali egzamin wczoraj",
  "Ja zjem obiad później",
  "Ty robisz zdjęcia teraz",
  "On pisał esej wczoraj",
  "Ona będzie czytać książkę",
  "My idziemy do muzeum",
  "Wy czytaliście długi tekst",
  "Oni będą gotować obiad",
  "Ja gram na gitarze",
  "Ty czytałeś artykuł rano",
  "On będzie śpiewać piosenkę",
  "Ona pisze wiadomość teraz",
  "My czytaliśmy gazety wczoraj",
  "Wy będziecie malować obraz",
  "Oni idą na spacer"
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
