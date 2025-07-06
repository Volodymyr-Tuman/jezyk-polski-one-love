const ukrainianSentences = [
  "Я знайшла цікаву книжку у бібліотеці",
  "Вона приготувала каву для гостей",
  "Я забрала посилку з пошти",
  "Вона вибачилася за запізнення",
  "Я намалювала пейзаж біля озера",
  "Вона витерла пил з полиць",
  "Я записала важливу дату в календар",
  "Вона вимила тарілки після вечері",
  "Я купила новий гаманець",
  "Вона прочитала газету за сніданком",
  "Я замовила квиток на концерт",
  "Вона закрила всі вікна в домі",
  "Я допомогла мамі на кухні",
  "Вона написала листа подрузі",
  "Я завантажила новий фільм",
  "Вона купила подарунок для брата",
  "Я залишила парасольку в офісі",
  "Вона обрала сукню для вечірки",
  "Я прикрасила кімнату квітами",
  "Вона прибрала іграшки з підлоги",
  "Я знайшла ключі під столом",
  "Вона забула вимкнути праску",
  "Я прочитала інструкцію до техніки",
  "Вона включила музику в кімнаті",
  "Я підготувала переклад для зустрічі",
  "Вона залишила ноутбук у сумці",
  "Я перевірила розклад автобусів",
  "Вона сфотографувала захід сонця",
  "Я надіслала листа на електронну пошту",
  "Вона купила фрукти на ринку",
  "Я перевірила температуру на вулиці",
  "Вона зателефонувала в сервісний центр",
  "Я закрила сумку перед виходом",
  "Вона витерла підлогу у ванній",
  "Я вимила кухонні шафи",
  "Вона зав'язала волосся у хвіст",
  "Я зібрала документи для університету",
  "Вона відчинила нове вікно браузера",
  "Я поставила чайник на плиту",
  "Вона заклеїла конверт листом",
  "Я роздрукувала план подорожі",
  "Вона почистила взуття",
  "Я прибрала у шафі",
  "Вона поклала одяг у пральну машину",
  "Я вимила дзеркало у ванній",
  "Вона записала номер телефону",
  "Я підготувала вечерю",
  "Вона прикрасила торт ягодами",
  "Я заправила ліжко зранку"
];

const polishSentences = [
  "Znalazłam ciekawą książkę w bibliotece",
  "Przygotowała kawę dla gości",
  "Odebrałam paczkę z poczty",
  "Przeprosiła za spóźnienie",
  "Namalowałam pejzaż nad jeziorem",
  "Starła kurz z półek",
  "Zapisałam ważną datę w kalendarzu",
  "Umyła talerze po kolacji",
  "Kupiłam nowy portfel",
  "Przeczytała gazetę przy śniadaniu",
  "Zamówiłam bilet na koncert",
  "Zamknęła wszystkie okna w domu",
  "Pomogłam mamie w kuchni",
  "Napisała list do koleżanki",
  "Pobrałam nowy film",
  "Kupiła prezent dla brata",
  "Zostawiłam parasolkę w biurze",
  "Wybrała sukienkę na imprezę",
  "Udekorowałam pokój kwiatami",
  "Posprzątała zabawki z podłogi",
  "Znalazłam klucze pod stołem",
  "Zapomniała wyłączyć żelazko",
  "Przeczytałam instrukcję do sprzętu",
  "Włączyła muzykę w pokoju",
  "Przygotowałam tłumaczenie na spotkanie",
  "Zostawiła laptopa w torbie",
  "Sprawdziłam rozkład autobusów",
  "Zrobiła zdjęcie zachodu słońca",
  "Wysłałam list e-mailem",
  "Kupiła owoce na targu",
  "Sprawdziłam temperaturę na dworze",
  "Zadzwoniła do serwisu",
  "Zamknęłam torebkę przed wyjściem",
  "Wytarła podłogę w łazience",
  "Umyłam szafki w kuchni",
  "Związała włosy w kucyk",
  "Zebrałam dokumenty na uczelnię",
  "Otworzyła nowe okno w przeglądarce",
  "Postawiłam czajnik na kuchence",
  "Zakleiła kopertę listem",
  "Wydrukowałam plan podróży",
  "Wyczyściła buty",
  "Posprzątałam w szafie",
  "Włożyła ubrania do pralki",
  "Umyłam lustro w łazience",
  "Zapisała numer telefonu",
  "Przygotowałam kolację",
  "Udekorowała tort owocami",
  "Pościeliłam łóżko rano"
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
