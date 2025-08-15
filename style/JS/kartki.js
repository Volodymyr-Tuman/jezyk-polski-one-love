const ukrainianSentences = [
  "Я зварила борщ",
  "Вона намалювала картину",
  "Я погладила сорочку",
  "Вона прочитала газету",
  "Я полила вазон у коридорі",
  "Вона сплела шарф",
  "Я підмітала подвір’я",
  "Вона зібрала валізу",
  "Я приготувала каву з молоком",
  "Вона написала вірш",
  "Я віднесла сміття",
  "Вона відчистила килим",
  "Я запекла картоплю з овочами",
  "Вона зшила нову сукню",
  "Я погодувала кота",
  "Вона спекла хліб",
  "Я вимила дзеркало у ванній",
  "Вона купила нові серветки",
  "Я почистила килимок біля дверей",
  "Вона зібрала яблука в саду",
  "Я накрила стіл на вечерю",
  "Вона замінила фіранки",
  "Я прочитала інструкцію",
  "Вона полагодила браслет",
  "Я підготувала сік",
  "Вона купила листівку",
  "Я відчистила плиту",
  "Вона пересадила квітку",
  "Я вимила вікна на балконі",
  "Вона розвісила штори",
  "Я приготувала салат з овочів",
  "Вона відремонтувала стілець",
  "Я повісила дзеркало в коридорі",
  "Вона спекла млинці",
  "Я розставила чашки в шафі",
  "Вона приготувала омлет",
  "Я витерла стіл у їдальні",
  "Вона посадила тюльпани",
  "Я замінила килимок у ванній",
  "Вона пошила подушку",
  "Я заправила ліжко",
  "Вона прикрасила торт",
  "Я підготувала чайник",
  "Вона винесла зайві речі",
  "Я прибрала взуття з коридору",
  "Вона вишила серветку",
  "Я запекла гарбуз",
  "Вона розфарбувала скриньку",
  "Я прибрала в холодильнику",
  "Вона накрила на сніданок"
];

const polishSentences = [
  "Ugotowałam barszcz",
  "Namalowała obraz",
  "Wyprasowałam koszulę",
  "Przeczytała gazetę",
  "Podlałam kwiatek w korytarzu",
  "Uplotła szalik",
  "Zamiotłam podwórze",
  "Spakowała walizkę",
  "Przygotowałam kawę z mlekiem",
  "Napisała wiersz",
  "Wyniosłam śmieci",
  "Wyczyściła dywan",
  "Upiekłam ziemniaki z warzywami",
  "Uszyła nową sukienkę",
  "Nakarmiłam kota",
  "Upiekła chleb",
  "Umyłam lustro w łazience",
  "Kupiła nowe serwetki",
  "Wyczyściłam wycieraczkę przy drzwiach",
  "Zebrała jabłka w ogrodzie",
  "Nakryłam stół na kolację",
  "Wymieniła zasłony",
  "Przeczytałam instrukcję",
  "Naprawiła bransoletkę",
  "Przygotowałam sok",
  "Kupiła kartkę",
  "Wyczyściłam kuchenkę",
  "Przesadziła kwiat",
  "Umyłam okna na balkonie",
  "Powiesiła zasłony",
  "Przygotowałam sałatkę z warzyw",
  "Naprawiła krzesło",
  "Powiesiłam lustro w korytarzu",
  "Upiekła naleśniki",
  "Ustawiłam filiżanki w szafce",
  "Przygotowała omlet",
  "Starłam stół w jadalni",
  "Posadziła tulipany",
  "Wymieniłam dywanik w łazience",
  "Uszyła poduszkę",
  "Pościeliłam łóżko",
  "Udekorowała tort",
  "Przygotowałam czajnik",
  "Wyniosła zbędne rzeczy",
  "Schowałam buty z korytarza",
  "Wyhaftowała serwetkę",
  "Upiekłam dynię",
  "Pomalowała szkatułkę",
  "Posprzątałam w lodówce",
  "Nakryła do śniadania"
];





  let currentIndex = 0;
  const cards = [];

  // Генерація карток
  ukrainianSentences.forEach((ua, index) => {
    const container = document.createElement('div');
    container.className = 'card-container';

    const card = document.createElement('div');
    card.className = 'card';
    cards.push(card);

    const front = document.createElement('div');
    front.className = 'card-face card-front';
    front.textContent = ua;

    const back = document.createElement('div');
    back.className = 'card-face card-back';
    back.textContent = polishSentences[index];

    card.appendChild(front);
    card.appendChild(back);

    card.onclick = () => {
      card.classList.toggle('flipped');
    };

    container.appendChild(card);
    document.getElementById('cards-wrapper').appendChild(container);
  });

  // Кнопки
  document.getElementById('next').onclick = () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      cards[currentIndex].classList.add('flipped');
    }
  };

  document.getElementById('prev').onclick = () => {
    if (currentIndex > 0) {
      cards[currentIndex].classList.remove('flipped');
      currentIndex--;
      cards[currentIndex].classList.add('flipped');
    }
  };

  // Клавіатура
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        cards[currentIndex].classList.add('flipped');
      }
    } else if (event.key === 'ArrowLeft') {
      if (currentIndex > 0) {
        cards[currentIndex].classList.remove('flipped');
        currentIndex--;
        cards[currentIndex].classList.add('flipped');
      }
    }
  });



