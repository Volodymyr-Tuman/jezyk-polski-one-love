const ukrainianSentences = [
  "Я зустрів старого друга", "Вона написала мені листа", "Ми зняли квартиру в центрі", "Вони приїхали надто пізно", "Я почув дивний звук",
  "Сестра запізнилася на урок", "Ми залишили куртки в авто", "Ти відкрив правильні двері?", "Діти подивилися мультик", "Я приготував чай з лимоном",
  "Ми прибрали квартиру", "Він отримав нову роботу", "Я закінчив читати статтю", "Ми провели день на природі", "Я сфотографував будівлю",
  "Бабуся принесла теплі пледи", "Ми обрали подарунок для мами", "Я купив квитки на концерт", "Вони грали на гітарі", "Я пояснив ситуацію вчителю",
  "Ми провели зустріч у кабінеті", "Я встав раніше за всіх", "Ми зварили суп на обід", "Ти відвідав музей у Варшаві?", "Я навчаюсь на факультеті філології",
  "Мама прибрала в кімнаті", "Ми запакували валізи", "Я надіслав гроші братові", "Ми бродили старими вулицями", "Вона створила новий акаунт",
  "Я налаштував інтернет", "Ми разом співали у хорі", "Він випадково зламав ручку", "Я переписав нотатки", "Ми нагодували пташок",
  "Вона повернулась о десятій", "Я знайшов гаманець на лавці", "Ми розв’язали всі вправи", "Ти згадав її день народження?", "Він відремонтував кран",
  "Ми покатались на човні", "Я завчив нові слова", "Вона поділилася своїми думками", "Ми встановили нову полицю", "Я натиснув на паузу",
  "Ми заблукали в лісі", "Я намалював краєвид", "Вони прикрасили торт", "Ти приготував сніданок?", "Ми обговорили всі деталі"
];

const polishSentences = [
  "Spotkałem starego przyjaciela", "Ona napisała do mnie list", "Wynajęliśmy mieszkanie w centrum", "Przyjechali zbyt późno", "Usłyszałem dziwny dźwięk",
  "Siostra spóźniła się na lekcję", "Zostawiliśmy kurtki w samochodzie", "Otworzyłeś właściwe drzwi?", "Dzieci obejrzały bajkę", "Przygotowałem herbatę z cytryną",
  "Posprzątaliśmy mieszkanie", "Dostał nową pracę", "Skończyłem czytać artykuł", "Spędziliśmy dzień na łonie natury", "Zrobiłem zdjęcie budynku",
  "Babcia przyniosła ciepłe koce", "Wybraliśmy prezent dla mamy", "Kupiłem bilety na koncert", "Grali na gitarze", "Wytłumaczyłem sytuację nauczycielowi",
  "Odbyliśmy spotkanie w gabinecie", "Wstałem wcześniej niż wszyscy", "Ugotowaliśmy zupę na obiad", "Odwiedziłeś muzeum w Warszawie?", "Studiuję na wydziale filologii",
  "Mama posprzątała pokój", "Spakowaliśmy walizki", "Wysłałem pieniądze bratu", "Spacerowaliśmy starymi ulicami", "Stworzyła nowe konto",
  "Skonfigurowałem internet", "Śpiewaliśmy razem w chórze", "Przypadkowo złamał długopis", "Przepisałem notatki", "Nakarmiliśmy ptaki",
  "Wróciła o dziesiątej", "Znalazłem portfel na ławce", "Rozwiązaliśmy wszystkie ćwiczenia", "Przypomniałeś sobie jej urodziny?", "Naprawił kran",
  "Popływaliśmy łódką", "Nauczyłem się nowych słów", "Podzieliła się swoimi myślami", "Zamontowaliśmy nową półkę", "Nacisnąłem pauzę",
  "Zgubiliśmy się w lesie", "Narysowałem krajobraz", "Ozdobili tort", "Przygotowałeś śniadanie?", "Omówiliśmy wszystkie szczegóły"
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
