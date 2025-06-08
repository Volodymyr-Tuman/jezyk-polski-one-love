const ukrainianSentences = [
  "Я прочитав новини зранку", "Вона забула парасольку вдома", "Ми зателефонували бабусі", "Вони поїхали на вокзал", "Я вимив посуд після обіду",
  "Брат подивився новий серіал", "Ми запізнилися на автобус", "Ти закрив вікно у вітальні?", "Діти склали пазл", "Я знайшов цікаву статтю",
  "Ми зняли номер у готелі", "Він приготував чай з медом", "Я зарядив телефон на ніч", "Ми сиділи біля вогнища", "Я навчився користуватися новим застосунком",
  "Сестра спекла печиво", "Ми подивилися старий фільм", "Я зателефонував татові", "Вони залишили записку на столі", "Я заповнив анкету",
  "Ми відвідали друзів у Києві", "Я встав о шостій ранку", "Ми поклали речі в багажник", "Ти відчинив хвіртку?", "Я навчаюсь онлайн",
  "Мама пошила нову сорочку", "Ми взяли таксі до центру", "Я отримав відповідь на листа", "Ми довго говорили на кухні", "Вона створила презентацію",
  "Я увімкнув ноутбук", "Ми співали пісню біля вогню", "Він розлив сік на стіл", "Я зробив нотатки з лекції", "Ми підгодували качок",
  "Вона повернула книжку до бібліотеки", "Я витер пил зі столу", "Ми виконали всі завдання", "Ти пригадав адресу?", "Він полагодив розетку",
  "Ми поїхали в ліс на прогулянку", "Я повторив слова перед тестом", "Вона подякувала за подарунок", "Ми перевірили електронну пошту", "Я натиснув на кнопку «відправити»",
  "Ми загубили карту в дорозі", "Я зробив ескіз", "Вони розвісили фотографії", "Ти приготував вечерю?", "Ми обговорили графік роботи"
];

const polishSentences = [
  "Przeczytałem wiadomości rano", "Ona zapomniała parasolki w domu", "Zadzwoniliśmy do babci", "Pojechali na dworzec", "Umyłem naczynia po obiedzie",
  "Brat obejrzał nowy serial", "Spóźniliśmy się na autobus", "Zamknąłeś okno w salonie?", "Dzieci ułożyły puzzle", "Znalazłem ciekawy artykuł",
  "Wynajęliśmy pokój w hotelu", "Zaparzył herbatę z miodem", "Naładowałem telefon na noc", "Siedzieliśmy przy ognisku", "Nauczyłem się używać nowej aplikacji",
  "Siostra upiekła ciasteczka", "Obejrzeliśmy stary film", "Zadzwoniłem do taty", "Zostawili wiadomość na stole", "Wypełniłem formularz",
  "Odwiedziliśmy przyjaciół w Kijowie", "Wstałem o szóstej rano", "Włożyliśmy rzeczy do bagażnika", "Otworzyłeś furtkę?", "Uczę się online",
  "Mama uszyła nową koszulę", "Wzięliśmy taksówkę do centrum", "Dostałem odpowiedź na maila", "Długo rozmawialiśmy w kuchni", "Stworzyła prezentację",
  "Włączyłem laptopa", "Śpiewaliśmy piosenkę przy ognisku", "Rozlał sok na stole", "Zrobiłem notatki z wykładu", "Dokarmiliśmy kaczki",
  "Oddała książkę do biblioteki", "Starłem kurz ze stołu", "Wykonaliśmy wszystkie zadania", "Przypomniałeś sobie adres?", "Naprawił gniazdko",
  "Pojechaliśmy do lasu na spacer", "Powtórzyłem słówka przed testem", "Podziękowała za prezent", "Sprawdziliśmy maila", "Kliknąłem przycisk „wyślij”",
  "Zgubiliśmy mapę w drodze", "Zrobiłem szkic", "Powiesili zdjęcia", "Przygotowałeś kolację?", "Omówiliśmy grafik pracy"
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
