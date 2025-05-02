const sentences = [
    [["Ja", "napiszę", "jutro", "esej"], "Przyszły"],
    [["My", "będziemy", "rozmawiać", "o książkach"], "Przyszły"],
    [["Ty", "pójdziesz", "na spacer", "po południu"], "Przyszły"],
    [["Ona", "poszła", "do", "apteki"], "Przeszły"],
    [["My", "gramy", "na", "komputerze"], "Teraźniejszy"],
    [["Ty", "będziesz", "oglądać", "film"], "Przyszły"],
    [["Oni", "spotkali", "się", "w parku"], "Przeszły"],
    [["Ja", "szukam", "nowego", "mieszkania"], "Teraźniejszy"],
    [["My", "zobaczymy", "twoje", "projekty"], "Przyszły"],
    [["Ona", "czytała", "poezję", "wczoraj"], "Przeszły"],
    [["On", "będzie", "pracować", "w szpitalu"], "Przyszły"],
    [["My", "mówimy", "w", "językach"], "Teraźniejszy"],
    [["Ty", "robiłeś", "zadanie", "wczoraj"], "Przeszły"],
    [["Oni", "zbudowali", "nowy", "dom"], "Przeszły"],
    [["Ja", "wstaję", "o", "piątej"], "Teraźniejszy"],
    [["My", "pojechaliśmy", "na", "wakacje"], "Przeszły"],
    [["Ty", "idziesz", "do", "szkoły"], "Teraźniejszy"],
    [["Ona", "zje", "obiad", "po pracy"], "Przyszły"],
    [["My", "weźmiemy", "pociąg", "jutro"], "Przyszły"],
    [["Ty", "odrabiasz", "zadanie", "codziennie"], "Teraźniejszy"],
    [["Oni", "kiedyś", "kupili", "samochód"], "Przeszły"],
    [["Ja", "pożyczę", "książkę", "jutro"], "Przyszły"],
    [["My", "zrobimy", "zakupy", "w weekend"], "Przyszły"],
    [["Ty", "przyjechałeś", "z", "wakacji"], "Przeszły"],
    [["Ona", "zawsze", "wstaje", "wcześnie"], "Teraźniejszy"],
    [["My", "będziemy", "szukać", "nowej pracy"], "Przyszły"],
    [["On", "zjadł", "obiady", "wcześniej"], "Przeszły"],
    [["Ty", "chodzisz", "do", "szkoły"], "Teraźniejszy"],
    [["Oni", "pojechali", "na", "wakacje"], "Przeszły"],
    [["Ja", "zabiorę", "cię", "na koncert"], "Przyszły"],
    [["My", "jesteśmy", "gotowi", "do wyjścia"], "Teraźniejszy"],
    [["Ty", "znajdziesz", "czas", "na naukę"], "Przyszły"],
    [["Oni", "będą", "jechać", "do Gdańska"], "Przyszły"],
    [["My", "gramy", "w", "piłkę nożną"], "Teraźniejszy"],
    [["Ja", "poszedłem", "na spacer", "z rana"], "Przeszły"],
    [["Ty", "czekałeś", "na", "autobus"], "Przeszły"],
    [["Ona", "zrobiła", "zakupy", "wczoraj"], "Przeszły"],
    [["My", "widzimy", "ciekawe", "filmy"], "Teraźniejszy"],
    [["Oni", "będą", "odrabiać", "lekcje"], "Przyszły"],
    [["Ty", "rozmawiałeś", "z", "przyjacielem"], "Przeszły"],
    [["Ja", "zrobię", "kanapki", "na kolację"], "Przyszły"],
    [["My", "będziemy", "rozmawiać", "w przyszłym tygodniu"], "Przyszły"],
    [["Oni", "siedzą", "na", "wygodnej", "kanapie"], "Teraźniejszy"],
    [["Ty", "wybierz", "film", "na wieczór"], "Przyszły"],
    [["Ona", "wzięła", "udział", "w konkursie"], "Przeszły"],
    [["My", "będziemy", "sprzątać", "w domu"], "Przyszły"],
    [["On", "jeździ", "do pracy", "rowerem"], "Teraźniejszy"],
    [["Ty", "poświęcisz", "czas", "na naukę"], "Przyszły"],
    [["Oni", "chodzili", "do", "tej samej", "szkoły"], "Przeszły"],
    [["Ja", "jestem", "w pracy", "teraz"], "Teraźniejszy"],
    [["My", "pojedziemy", "na wycieczkę", "w przyszłym miesiącu"], "Przyszły"],
    [["Ona", "oglądała", "film", "wczoraj"], "Przeszły"],
    [["Ty", "znajdziesz", "nowych", "przyjaciół"], "Przyszły"],
    [["On", "nauczył się", "języka", "angielskiego"], "Przeszły"],
    [["My", "będziemy", "jeść", "na mieście"], "Przyszły"],
    [["Ty", "mówisz", "głośno", "teraz"], "Teraźniejszy"],
    [["Oni", "słuchają", "muzyki", "codziennie"], "Teraźniejszy"],
    [["Ja", "czytam", "książkę", "teraz"], "Teraźniejszy"],
    [["My", "rozmawiamy", "o", "filmie"], "Teraźniejszy"],
    [["Ty", "zrobisz", "to", "jutro"], "Przyszły"],
    [["Oni", "odwiedzili", "nas", "wczoraj"], "Przeszły"],
    [["Ja", "zjadłem", "obiad", "o dwunastej"], "Przeszły"],
    [["My", "weźmiemy", "wzięliśmy", "wczoraj"], "Przeszły"],
    [["Ty", "wygrałeś", "w konkursie", "w zeszłym tygodniu"], "Przeszły"],
    [["Ona", "przygotuje", "kolację", "w czwartek"], "Przyszły"],
    [["My", "odrabiamy", "prace domowe", "teraz"], "Teraźniejszy"],
    [["Ty", "uczysz się", "do", "egzaminu"], "Teraźniejszy"],
    [["On", "szukał", "pracy", "przez dwa tygodnie"], "Przeszły"],
    [["My", "mówimy", "prawie", "po angielsku"], "Teraźniejszy"],
    [["Ty", "kupisz", "prezent", "na urodziny"], "Przyszły"],
    [["Oni", "przyszli", "na", "zajęcia"], "Przeszły"],
    [["Ja", "będę", "pisać", "esej"], "Przyszły"],
    [["My", "mamy", "dużo", "wolnego czasu"], "Teraźniejszy"],
    [["Ty", "będziesz", "grać", "na komputerze"], "Przyszły"],
    [["Oni", "pojechali", "do", "Wrocławia"], "Przeszły"],
    [["Ja", "zatrzymam", "się", "na chwilę"], "Przyszły"],
    [["My", "spędzamy", "wiele", "czasu razem"], "Teraźniejszy"],
    [["Ty", "rozmawiasz", "z", "koleżanką"], "Teraźniejszy"],
    [["Ona", "zrobiła", "tort", "wczoraj"], "Przeszły"],
    [["My", "będziemy", "chodzić", "na siłownię"], "Przyszły"],
    [["On", "pojechał", "do", "mojego domu"], "Przeszły"],
    [["Ty", "widzisz", "nowe", "wydarzenie"], "Teraźniejszy"],
    [["Oni", "wzięli", "urlop", "w zeszłym miesiącu"], "Przeszły"],
    [["Ja", "pojechałem", "na", "wycieczkę"], "Przeszły"],
    [["My", "rozmawialiśmy", "o", "filmie"], "Przeszły"],
    [["Ty", "zamówiłeś", "jedzenie", "na wynos"], "Przeszły"],
    [["Oni", "odwiedzą", "mnie", "w przyszłym tygodniu"], "Przyszły"],
    [["Ja", "wezmę", "prysznic", "teraz"], "Przyszły"],
    [["My", "zostaliśmy", "w", "domu"], "Przeszły"],
    [["Ona", "mówi", "bardzo", "szybko"], "Teraźniejszy"],
    [["Ty", "pójdziesz", "do kina", "w sobotę"], "Przyszły"],
    [["Oni", "przygotowali", "posiłek", "na kolację"], "Przeszły"],
    [["Ja", "potrafię", "gotować", "teraz"], "Teraźniejszy"]
];

  const correctSentences = [
    "Ja napiszę jutro esej",
    "My będziemy rozmawiać o książkach",
    "Ty pójdziesz na spacer po południu",
    "Ona poszła do apteki",
    "My gramy na komputerze",
    "Ty będziesz oglądać film",
    "Oni spotkali się w parku",
    "Ja szukam nowego mieszkania",
    "My zobaczymy twoje projekty",
    "Ona czytała poezję wczoraj",
    "On będzie pracować w szpitalu",
    "My mówimy w językach",
    "Ty robiłeś zadanie wczoraj",
    "Oni zbudowali nowy dom",
    "Ja wstaję o piątej",
    "My pojechaliśmy na wakacje",
    "Ty idziesz do szkoły",
    "Ona zje obiad po pracy",
    "My weźmiemy pociąg jutro",
    "Ty odrabiasz zadanie codziennie",
    "Oni kiedyś kupili samochód",
    "Ja pożyczę książkę jutro",
    "My zrobimy zakupy w weekend",
    "Ty przyjechałeś z wakacji",
    "Ona zawsze wstaje wcześnie",
    "My będziemy szukać nowej pracy",
    "On zjadł obiady wcześniej",
    "Ty chodzisz do szkoły",
    "Oni pojechali na wakacje",
    "Ja zabiorę cię na koncert",
    "My jesteśmy gotowi do wyjścia",
    "Ty znajdziesz czas na naukę",
    "Oni będą jechać do Gdańska",
    "My gramy w piłkę nożną",
    "Ja poszedłem na spacer z rana",
    "Ty czekałeś na autobus",
    "Ona zrobiła zakupy wczoraj",
    "My widzimy ciekawe filmy",
    "Oni będą odrabiać lekcje",
    "Ty rozmawiałeś z przyjacielem",
    "Ja zrobię kanapki na kolację",
    "My będziemy rozmawiać w przyszłym tygodniu",
    "Oni siedzą na wygodnej kanapie",
    "Ty wybierz film na wieczór",
    "Ona wzięła udział w konkursie",
    "My będziemy sprzątać w domu",
    "On jeździ do pracy rowerem",
    "Ty poświęcisz czas na naukę",
    "Oni chodzili do tej samej szkoły",
    "Ja jestem w pracy teraz",
    "My pojedziemy na wycieczkę w przyszłym miesiącu",
    "Ona oglądała film wczoraj",
    "Ty znajdziesz nowych przyjaciół",
    "On nauczył się języka angielskiego",
    "My będziemy jeść na mieście",
    "Ty mówisz głośno teraz",
    "Oni słuchają muzyki codziennie",
    "Ja czytam książkę teraz",
    "My rozmawiamy o filmie",
    "Ty zrobisz to jutro",
    "Oni odwiedzili nas wczoraj",
    "Ja zjadłem obiad o dwunastej",
    "My weźmiemy wzięliśmy wczoraj",
    "Ty wygrałeś w konkursie w zeszłym tygodniu",
    "Ona przygotuje kolację w czwartek",
    "My odrabiamy prace domowe teraz",
    "Ty uczysz się do egzaminu",
    "On szukał pracy przez dwa tygodnie",
    "My mówimy prawie po angielsku",
    "Ty kupisz prezent na urodziny",
    "Oni przyszli na zajęcia",
    "Ja będę pisać esej",
    "My mamy dużo wolnego czasu",
    "Ty będziesz grać na komputerze",
    "Oni pojechali do Wrocławia",
    "Ja zatrzymam się na chwilę",
    "My spędzamy wiele czasu razem",
    "Ty rozmawiasz z koleżanką",
    "Ona zrobiła tort wczoraj",
    "My będziemy chodzić na siłownię",
    "On pojechał do mojego domu",
    "Ty widzisz nowe wydarzenie",
    "Oni wzięli urlop w zeszłym miesiącu",
    "Ja pojechałem na wycieczkę",
    "My rozmawialiśmy o filmie",
    "Ty zamówiłeś jedzenie na wynos",
    "Oni odwiedzą mnie w przyszłym tygodniu",
    "Ja wezmę prysznic teraz",
    "My zostaliśmy w domu",
    "Ona mówi bardzo szybko",
    "Ty pójdziesz do kina w sobotę",
    "Oni przygotowali posiłek na kolację",
    "Ja potrafię gotować teraz"
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
