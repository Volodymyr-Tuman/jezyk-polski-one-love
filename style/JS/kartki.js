const ukrainianSentences = [
  "Я замовила піцу з грибами",
  "Вона відкрила нову книгу",
  "Я розпакувала посилку з інтернет-магазину",
  "Вона вимкнула світло у вітальні",
  "Я знайшла старі фото у шухляді",
  "Вона поклала ключі в сумку",
  "Я замінила батарейки у пульті",
  "Вона витерла пил на полицях",
  "Я зробила нотатки під час лекції",
  "Вона спекла пиріг з яблуками",
  "Я надіслала листа в офіс",
  "Вона вивісила білизну на балконі",
  "Я знайшла рецепт у журналі",
  "Вона вимкнула праску",
  "Я прикрасила кімнату квітами",
  "Вона прибрала на кухні",
  "Я перевірила повідомлення на телефоні",
  "Вона записалася на тренування",
  "Я вивчила нові слова польською",
  "Вона відчинила вікно на кухні",
  "Я зателефонувала подрузі",
  "Вона роздрукувала квиток",
  "Я витерла підлогу у ванній",
  "Вона приготувала сніданок",
  "Я замінила лампочку",
  "Вона полила квіти на підвіконні",
  "Я закрила вікно в спальні",
  "Вона купила нову сумку",
  "Я знайшла помилку в тексті",
  "Вона переглянула старі листи",
  "Я підписала документ",
  "Вона вимила чашки після чаю",
  "Я зняла фартух",
  "Вона прибрала книги на полицю",
  "Я заклеїла конверт",
  "Вона витерла руки рушником",
  "Я замінила пароль на сайті",
  "Вона сфотографувала захід сонця",
  "Я написала план на тиждень",
  "Вона прибрала іграшки з підлоги",
  "Я залишила записку на столі",
  "Вона замовила квитки на концерт",
  "Я відчинила шафу",
  "Вона знайшла зошит у рюкзаку",
  "Я підготувала презентацію",
  "Вона перевірила календар",
  "Я почистила зуби",
  "Вона вимкнула ноутбук",
  "Я заварила трав’яний чай"
];

const polishSentences = [
  "Zamówiłam pizzę z grzybami",
  "Otworzyła nową książkę",
  "Rozpakowałam paczkę ze sklepu internetowego",
  "Wyłączyła światło w pokoju gościnnym",
  "Znalazłam stare zdjęcia w szufladzie",
  "Włożyła klucze do torebki",
  "Wymieniłam baterie w pilocie",
  "Starła kurz z półek",
  "Zrobiłam notatki podczas wykładu",
  "Upiekła szarlotkę z jabłkami",
  "Wysłałam list do biura",
  "Wywiesiła pranie na balkonie",
  "Znalazłam przepis w magazynie",
  "Wyłączyła żelazko",
  "Udekorowałam pokój kwiatami",
  "Posprzątała w kuchni",
  "Sprawdziłam wiadomości na telefonie",
  "Zapisała się na trening",
  "Nauczyłam się nowych słów po polsku",
  "Otworzyła okno w kuchni",
  "Zadzwoniłam do koleżanki",
  "Wydrukowała bilet",
  "Starłam podłogę w łazience",
  "Przygotowała śniadanie",
  "Wymieniłam żarówkę",
  "Podlała kwiaty na parapecie",
  "Zamknęłam okno w sypialni",
  "Kupiła nową torebkę",
  "Znalazłam błąd w tekście",
  "Przejrzała stare listy",
  "Podpisałam dokument",
  "Umyła filiżanki po herbacie",
  "Zdjęłam fartuch",
  "Ułożyła książki na półce",
  "Zalepiłam kopertę",
  "Starła ręce ręcznikiem",
  "Zmieniłam hasło na stronie",
  "Zrobiła zdjęcie zachodu słońca",
  "Napisałam plan na tydzień",
  "Posprzątała zabawki z podłogi",
  "Zostawiłam kartkę na stole",
  "Zamówiła bilety na koncert",
  "Otworzyłam szafę",
  "Znalazła zeszyt w plecaku",
  "Przygotowałam prezentację",
  "Sprawdziła kalendarz",
  "Umyłam zęby",
  "Wyłączyła laptopa",
  "Zaparzyłam herbatę ziołową"
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

