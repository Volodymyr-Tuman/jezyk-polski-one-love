const ukrainianSentences = [
  "Я замовила піцу додому", "Вона пофарбувала волосся", "Я зустріла однокласницю в метро", "Вона написала листа подрузі", "Я взяла книгу з бібліотеки",
  "Вона здала звіт вчасно", "Я подивилася новий фільм учора", "Вона заговорила першою", "Я запізнилася на урок", "Вона знайшла нову роботу",
  "Я купила нові кросівки", "Вона натиснула на кнопку виклику", "Я зателефонувала мамі", "Вона залишила ключі на полиці", "Я приготувала чай з імбиром",
  "Вона поділилася новинами", "Я віднесла документи в офіс", "Вона запланувала поїздку", "Я пофарбувала стіни в кімнаті", "Вона принесла мені парасолю",
  "Я обрала червону сукню", "Вона прочитала статтю до кінця", "Я роздрукувала білети", "Вона натягнула капюшон, бо йшов дощ", "Я надрукувала звіт для менеджера",
  "Вона забула пароль від пошти", "Я надіслала повідомлення вчора ввечері", "Вона побачила помилку в тексті", "Я заварила собі каву", "Вона вивчила вірш напам’ять",
  "Я заповнила онлайн-форму", "Вона приготувала пиріг з яблуками", "Я склала речі в валізу", "Вона встановила нову програму", "Я відпочила після роботи",
  "Вона виклала фото в соцмережі", "Я зустріла подругу в парку", "Вона підготувала доповідь", "Я увімкнула світло в коридорі", "Вона прочитала всі інструкції",
  "Я прибрала на кухні", "Вона замовила столик у ресторані", "Я відповіла на лист", "Вона пішла в магазин по фрукти", "Я поклала телефон на зарядку",
  "Вона завершила роботу над проєктом", "Я відкрила банку варення", "Вона вийшла з дому о восьмій", "Я відчинила вікно на ніч", "Вона вивісила білизну на балкон"
];

const polishSentences = [
  "Zamówiłam pizzę do domu", "Pofarbowała włosy", "Spotkałam koleżankę w metrze", "Napisała list do przyjaciółki", "Wzięłam książkę z biblioteki",
  "Zdała raport na czas", "Obejrzałam nowy film wczoraj", "Odezwała się pierwsza", "Spóźniłam się na lekcję", "Znalazła nową pracę",
  "Kupiłam nowe trampki", "Nacisnęła przycisk wezwania", "Zadzwoniłam do mamy", "Zostawiła klucze na półce", "Przygotowałam herbatę z imbirem",
  "Podzieliła się wiadomościami", "Zaniosłam dokumenty do biura", "Zaplanowała wycieczkę", "Pomalowałam ściany w pokoju", "Przyniosła mi parasolkę",
  "Wybrałam czerwoną sukienkę", "Przeczytała artykuł do końca", "Wydrukowałam bilety", "Naciągnęła kaptur, bo padał deszcz", "Wydrukowałam raport dla menedżera",
  "Zapomniała hasła do poczty", "Wysłałam wiadomość wczoraj wieczorem", "Zobaczyła błąd w tekście", "Zaparzyłam sobie kawę", "Nauczyła się wiersza na pamięć",
  "Wypełniłam formularz online", "Przygotowała szarlotkę", "Spakowałam rzeczy do walizki", "Zainstalowała nowy program", "Odpoczęłam po pracy",
  "Wrzuciła zdjęcie na media społecznościowe", "Spotkałam przyjaciółkę w parku", "Przygotowała referat", "Włączyłam światło w korytarzu", "Przeczytała wszystkie instrukcje",
  "Posprzątałam w kuchni", "Zamówiła stolik w restauracji", "Odpowiedziałam na maila", "Poszła do sklepu po owoce", "Położyłam telefon na ładowarkę",
  "Zakończyła pracę nad projektem", "Otworzyłam słoik z dżemem", "Wyszła z domu o ósmej", "Otworzyłam okno na noc", "Powiesiła pranie na balkonie"
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
