const ukrainianSentences = [
  "Я з'їв бутерброд", "Вона подзвонила мамі", "Ми зустрілися ввечері", "Вони купили новий диван", "Я написав повідомлення",
  "Тато помив машину", "Ми поїхали в супермаркет", "Ти бачив мій телефон?", "Діти грали у дворі", "Я закрив двері",
  "Ми поїхали на море", "Він забув ключі", "Я включив телевізор", "Ми зварили борщ", "Я зробив фото на памʼять",
  "Сестра принесла яблука", "Ми слухали музику в машині", "Я купив воду і хліб", "Вони катались на роликах", "Я показав їм дорогу",
  "Ми грали в шахи", "Я встав рано", "Ми зробили сніданок", "Ти бачив наш дім?", "Я вчу польську",
  "Мама приготувала вечерю", "Ми організували поїздку", "Я отримав подарунок", "Ми гуляли парком", "Вона малювала квіти",
  "Я встановив додаток", "Ми співали пісні", "Він зламав пульт", "Я писав у зошиті", "Ми погодували собаку",
  "Вона прийшла о сьомій", "Я знайшов телефон", "Ми вирішили приклад", "Ти памʼятаєш її імʼя?", "Він полагодив замок",
  "Ми плавали в озері", "Я вивчив пісню", "Вона розказала історію", "Ми побудували курінь", "Я натиснув кнопку",
  "Ми заблукали дорогою", "Я намалював машину", "Вони прикрасили кімнату", "Ти зробив чай?", "Ми обговорили план"
];

const polishSentences = [
  "Zjadłem kanapkę", "Ona zadzwoniła do mamy", "Spotkaliśmy się wieczorem", "Kupili nową kanapę", "Napisałem wiadomość",
  "Tata umył samochód", "Pojechaliśmy do supermarketu", "Widziałeś mój telefon?", "Dzieci bawiły się na podwórku", "Zamknąłem drzwi",
  "Pojechaliśmy nad morze", "On zapomniał kluczy", "Włączyłem telewizor", "Ugotowaliśmy barszcz", "Zrobiłem zdjęcie na pamiątkę",
  "Siostra przyniosła jabłka", "Słuchaliśmy muzyki w samochodzie", "Kupiłem wodę i chleb", "Jeździli na rolkach", "Pokazałem im drogę",
  "Graliśmy w szachy", "Wstałem wcześnie", "Zrobiliśmy śniadanie", "Widziałeś nasz dom?", "Uczę się polskiego",
  "Mama zrobiła kolację", "Zorganizowaliśmy wycieczkę", "Dostałem prezent", "Spacerowaliśmy po parku", "Ona rysowała kwiaty",
  "Zainstalowałem aplikację", "Śpiewaliśmy piosenki", "Zepsuł pilot", "Pisałem w zeszycie", "Nakarmiliśmy psa",
  "Przyszła o siódmej", "Znalazłem telefon", "Rozwiązaliśmy przykład", "Pamiętasz jej imię?", "Naprawił zamek",
  "Pływaliśmy w jeziorze", "Nauczyłem się piosenki", "Opowiedziała historię", "Zbudowaliśmy szałas", "Nacisnąłem przycisk",
  "Zgubiliśmy się po drodze", "Narysowałem samochód", "Ozdobili pokój", "Zrobiłeś herbatę?", "Omówiliśmy plan"
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
