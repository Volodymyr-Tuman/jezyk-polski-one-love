const ukrainianSentences = [
  "Я прочитав цікаву книгу", "Вона зустріла подругу в кафе", "Ми приготували вечерю разом", "Вони забрали документи з офісу", "Я відправив листа електронкою",
  "Тато відремонтував велосипед", "Ми замовили піцу додому", "Ти бачив новий фільм?", "Діти зробили домашнє завдання", "Я відкрив вікно в кімнаті",
  "Ми побували в горах", "Він залишив телефон у машині", "Я вимкнув світло", "Ми спекли торт на свято", "Я зробив фото заходу сонця",
  "Сестра принесла апельсини", "Ми слухали радіо в дорозі", "Я купив новий рюкзак", "Вони грали в футбол на стадіоні", "Я пояснив їм завдання",
  "Ми дивилися серіал ввечері", "Я прокинувся о сьомій", "Ми зібрали речі в подорож", "Ти бачив наш сад?", "Я вивчаю італійську мову",
  "Мама приготувала сніданок", "Ми запланували поїздку", "Я отримав листівку з-за кордону", "Ми гуляли старим містом", "Вона малювала на планшеті",
  "Я встановив нову програму", "Ми співали караоке", "Він розбив чашку", "Я писав есе для школи", "Ми нагодували кота",
  "Вона прийшла о восьмій", "Я знайшов ключі під столом", "Ми розв’язали задачу", "Ти згадав її прізвище?", "Він полагодив годинник",
  "Ми плавали в басейні", "Я вивчив нову пісню", "Вона розповіла цікаву історію", "Ми побудували намет", "Я натиснув на дзвінок",
  "Ми заблукали в місті", "Я намалював портрет", "Вони прикрасили ялинку", "Ти зробив каву?", "Ми обговорили важливі питання"
];

const polishSentences = [
  "Przeczytałem ciekawą książkę", "Ona spotkała koleżankę w kawiarni", "Przygotowaliśmy razem kolację", "Zabrali dokumenty z biura", "Wysłałem maila",
  "Tata naprawił rower", "Zamówiliśmy pizzę do domu", "Widziałeś nowy film?", "Dzieci odrobiły zadanie domowe", "Otworzyłem okno w pokoju",
  "Byliśmy w górach", "Zostawił telefon w samochodzie", "Wyłączyłem światło", "Upiekliśmy tort na święto", "Zrobiłem zdjęcie zachodu słońca",
  "Siostra przyniosła pomarańcze", "Słuchaliśmy radia w drodze", "Kupiłem nowy plecak", "Grali w piłkę nożną na stadionie", "Wytłumaczyłem im zadanie",
  "Oglądaliśmy serial wieczorem", "Obudziłem się o siódmej", "Spakowaliśmy rzeczy na wyjazd", "Widziałeś nasz ogród?", "Uczę się włoskiego",
  "Mama zrobiła śniadanie", "Zaplaliśmy wycieczkę", "Dostałem pocztówkę z zagranicy", "Spacerowaliśmy po starym mieście", "Rysowała na tablecie",
  "Zainstalowałem nowy program", "Śpiewaliśmy karaoke", "Stłukł filiżankę", "Pisałem wypracowanie do szkoły", "Nakarmiliśmy kota",
  "Przyszła o ósmej", "Znalazłem klucze pod stołem", "Rozwiązaliśmy zadanie", "Przypomniałeś sobie jej nazwisko?", "Naprawił zegarek",
  "Pływaliśmy w basenie", "Nauczyłem się nowej piosenki", "Opowiedziała ciekawą historię", "Zbudowaliśmy namiot", "Nacisnąłem dzwonek",
  "Zgubiliśmy się w mieście", "Narysowałem portret", "Ozdobili choinkę", "Zrobiłeś kawę?", "Omówiliśmy ważne sprawy"
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
