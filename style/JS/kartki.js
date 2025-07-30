const ukrainianSentences = [
  "Я вимкнула будильник і заснула знову",
  "Вона заплела косу перед дзеркалом",
  "Я прочитала відгуки перед покупкою",
  "Вона зібрала валізу заздалегідь",
  "Я залишила гроші на столі",
  "Вона зняла окуляри і поклала їх у футляр",
  "Я переглянула новини перед сном",
  "Вона поставила квіти у вазу",
  "Я випрала білизну вночі",
  "Вона почула шум у коридорі",
  "Я сфотографувала будинок з балкона",
  "Вона написала в щоденнику про день",
  "Я запізнилася на зустріч через дощ",
  "Вона дочекалася автобуса під навісом",
  "Я зберегла файл на робочому столі",
  "Вона приклеїла наліпку на коробку",
  "Я прочитала інтерв’ю з актрисою",
  "Вона відклала книгу на потім",
  "Я приготувала список покупок",
  "Вона зняла відео на телефон",
  "Я наділа нову кофту вранці",
  "Вона вийшла на балкон з кавою",
  "Я купила квитки онлайн",
  "Вона закрила сторінку в браузері",
  "Я відчинила кватирку для провітрювання",
  "Вона залишила коментар під постом",
  "Я вимила руки з милом",
  "Вона взяла сумку і вийшла з дому",
  "Я перевірила баланс на рахунку",
  "Вона згадала про зустріч у метро",
  "Я надрукувала документ на принтері",
  "Вона витерла екран телефону",
  "Я спакувала речі для тренування",
  "Вона приготувала чай з медом",
  "Я отримала повідомлення від подруги",
  "Вона зберегла сторінку в закладках",
  "Я намалювала карту маршруту",
  "Вона надіслала заявку в університет",
  "Я відчинила поштову скриньку",
  "Вона підписала лист ручкою",
  "Я зареєструвалася на курс онлайн",
  "Вона прочитала заголовок газети",
  "Я винесла сміття після сніданку",
  "Вона висушила волосся феном",
  "Я поставила телефон на зарядку",
  "Вона накрила стіл до обіду",
  "Я вписала подію в календар",
  "Вона взяла ковдру з шафи",
  "Я зняла плащ біля входу"
];

const polishSentences = [
  "Wyłączyłam budzik i znów zasnęłam",
  "Zaplatała warkocz przed lustrem",
  "Przeczytałam opinie przed zakupem",
  "Spakowała walizkę wcześniej",
  "Zostawiłam pieniądze na stole",
  "Zdjęła okulary i włożyła je do etui",
  "Przejrzałam wiadomości przed snem",
  "Wstawiła kwiaty do wazonu",
  "Wyprałam bieliznę w nocy",
  "Usłyszała hałas w korytarzu",
  "Zrobiłam zdjęcie domu z balkonu",
  "Napisała w pamiętniku o dniu",
  "Spóźniłam się na spotkanie przez deszcz",
  "Poczekała na autobus pod wiatą",
  "Zachowałam plik na pulpicie",
  "Przykleiła naklejkę na pudełko",
  "Przeczytałam wywiad z aktorką",
  "Odłożyła książkę na później",
  "Przygotowałam listę zakupów",
  "Nagrała film telefonem",
  "Założyłam nowy sweter rano",
  "Wyszła na balkon z kawą",
  "Kupiłam bilety online",
  "Zamknęła stronę w przeglądarce",
  "Otworzyłam okno do wietrzenia",
  "Zostawiła komentarz pod postem",
  "Umyłam ręce mydłem",
  "Wzięła torebkę i wyszła z domu",
  "Sprawdziłam saldo na koncie",
  "Przypomniała sobie o spotkaniu w metrze",
  "Wydrukowałam dokument na drukarce",
  "Starła ekran telefonu",
  "Spakowałam rzeczy na trening",
  "Zaparzyła herbatę z miodem",
  "Dostałam wiadomość od koleżanki",
  "Zachowała stronę w zakładkach",
  "Narysowałam mapę trasy",
  "Wysłała podanie na uniwersytet",
  "Otworzyłam skrzynkę pocztową",
  "Podpisała list długopisem",
  "Zarejestrowałam się na kurs online",
  "Przeczytała nagłówek gazety",
  "Wyniosłam śmieci po śniadaniu",
  "Wysuszyła włosy suszarką",
  "Podłączyłam telefon do ładowarki",
  "Nakryła stół na obiad",
  "Wpisałam wydarzenie do kalendarza",
  "Wzięła koc z szafy",
  "Zdjęłam płaszcz przy wejściu"
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
