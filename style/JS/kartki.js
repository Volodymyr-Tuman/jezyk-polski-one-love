const ukrainianSentences = [
  "Я прочитала новину в інтернеті",
  "Вона погодувала кота вранці",
  "Я випила чай з лимоном",
  "Вона купила нову куртку",
  "Я прибрала речі зі столу",
  "Вона вимкнула світло у коридорі",
  "Я знайшла старі фотографії",
  "Вона вийшла з офісу о п'ятій",
  "Я запізнилася на автобус",
  "Вона підготувала кімнату для гостей",
  "Я відправила смс подрузі",
  "Вона відкрила новий магазин",
  "Я зустріла її біля зупинки",
  "Вона зайшла до аптеки",
  "Я залишила ноутбук вдома",
  "Вона випрала речі у пральній машині",
  "Я зробила замітку у телефоні",
  "Вона прочитала рецепт у книжці",
  "Я забула парасолю в машині",
  "Вона намалювала гарний малюнок",
  "Я заклеїла коробку скотчем",
  "Вона пофарбувала стіну на кухні",
  "Я підключила навушники",
  "Вона полила рослини на балконі",
  "Я замовила каву на виніс",
  "Вона перерахувала гроші",
  "Я загубила ключі від квартири",
  "Вона закрила двері на ключ",
  "Я вимила вікна у вітальні",
  "Вона перевірила заряд батареї",
  "Я принесла пакунок з пошти",
  "Вона написала повідомлення у чат",
  "Я купила нову чашку для кави",
  "Вона зателефонувала батькам",
  "Я організувала поїздку на вихідні",
  "Вона прибрала на балконі",
  "Я закрила програму на комп'ютері",
  "Вона знайшла новий рецепт торта",
  "Я відклала зустріч на завтра",
  "Вона помила кухонний стіл",
  "Я записала адресу у блокнот",
  "Вона переглянула старі листи",
  "Я витерла підлогу на кухні",
  "Вона вимила гребінець",
  "Я завантажила новий додаток",
  "Вона відчинила двері на свіже повітря",
  "Я купила новий телефон",
  "Вона зібрала документи для подорожі",
  "Я написала замітку на холодильнику"
];

const polishSentences = [
  "Przeczytałam wiadomość w internecie",
  "Nakarmiła kota rano",
  "Wypiłam herbatę z cytryną",
  "Kupiła nową kurtkę",
  "Posprzątałam rzeczy ze stołu",
  "Wyłączyła światło w korytarzu",
  "Znalazłam stare zdjęcia",
  "Wyszła z biura o piątej",
  "Spóźniłam się na autobus",
  "Przygotowała pokój dla gości",
  "Wysłałam sms do koleżanki",
  "Otworzyła nowy sklep",
  "Spotkałam ją przy przystanku",
  "Weszła do apteki",
  "Zostawiłam laptopa w domu",
  "Wyprała rzeczy w pralce",
  "Zrobiłam notatkę w telefonie",
  "Przeczytała przepis w książce",
  "Zapomniałam parasola w samochodzie",
  "Namalowała ładny rysunek",
  "Zakleiłam pudełko taśmą",
  "Pomalowała ścianę w kuchni",
  "Podłączyłam słuchawki",
  "Podlała rośliny na balkonie",
  "Zamówiłam kawę na wynos",
  "Przeliczyła pieniądze",
  "Zgubiłam klucze od mieszkania",
  "Zamknęła drzwi na klucz",
  "Umyłam okna w salonie",
  "Sprawdziła poziom baterii",
  "Przyniosłam paczkę z poczty",
  "Napisała wiadomość na czacie",
  "Kupiłam nowy kubek na kawę",
  "Zadzwoniła do rodziców",
  "Zorganizowałam wyjazd na weekend",
  "Posprzątała na balkonie",
  "Zamknęłam program na komputerze",
  "Znalazła nowy przepis na tort",
  "Przełożyłam spotkanie na jutro",
  "Umyła stół w kuchni",
  "Zapisałam adres w notesie",
  "Przejrzała stare listy",
  "Wytarłam podłogę w kuchni",
  "Umyła szczotkę",
  "Pobrałam nową aplikację",
  "Otworzyła drzwi, żeby przewietrzyć",
  "Kupiłam nowy telefon",
  "Spakowała dokumenty do podróży",
  "Napisałam notatkę na lodówce"
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
