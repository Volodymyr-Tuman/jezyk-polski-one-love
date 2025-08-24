const ukrainianSentences = [
  "Я читаю книжку",
  "Вона пише лист",
  "Я малюю кота",
  "Вона варить суп",
  "Я мию підлогу",
  "Вона шиє спідницю",
  "Я ріжу хліб",
  "Вона садить квіти",
  "Я слухаю музику",
  "Вона п’є чай",
  "Я пишу листа",
  "Вона миє руки",
  "Я дивлюсь фільм",
  "Вона ріже цибулю",
  "Я поливаю квіти",
  "Вона миє вікно",
  "Я готую сніданок",
  "Вона читає книгу",
  "Я мию чашку",
  "Вона пече пиріг",
  "Я рию яму",
  "Вона їсть яблуко",
  "Я ріжу сир",
  "Вона миє авто",
  "Я чистю зуби",
  "Вона готує каву",
  "Я пишу вірш",
  "Вона співає пісню",
  "Я грію молоко",
  "Вона ріже хліб",
  "Я читаю газету",
  "Вона миє тарілки",
  "Я мию дзеркало",
  "Вона чистить ніж",
  "Я готую суп",
  "Вона пече хліб",
  "Я ріжу моркву",
  "Вона шиє плаття",
  "Я дивлюсь телевізор",
  "Вона читає лист",
  "Я мию піднос",
  "Вона п’є каву",
  "Я пишу план",
  "Вона слухає радіо",
  "Я ріжу яблуко",
  "Вона миє стіл",
  "Я печу млинці",
  "Вона варить рис",
  "Я ношу сумку",
  "Вона носить пальто"
];

const polishSentences = [
  "Czytam książkę",
  "Pisze list",
  "Rysuję kota",
  "Gotuje zupę",
  "Myję podłogę",
  "Szyje spódnicę",
  "Kroję chleb",
  "Sadzi kwiaty",
  "Słucham muzyki",
  "Pije herbatę",
  "Piszę list",
  "Myje ręce",
  "Oglądam film",
  "Kroi cebulę",
  "Podlewam kwiaty",
  "Myje okno",
  "Gotuję śniadanie",
  "Czyta książkę",
  "Myję kubek",
  "Piecze ciasto",
  "Kopię dół",
  "Je jabłko",
  "Kroję ser",
  "Myje auto",
  "Myję zęby",
  "Parzy kawę",
  "Piszę wiersz",
  "Śpiewa piosenkę",
  "Grzeję mleko",
  "Kroi chleb",
  "Czytam gazetę",
  "Myje talerze",
  "Myję lustro",
  "Czyści nóż",
  "Gotuję zupę",
  "Piecze chleb",
  "Kroję marchew",
  "Szyje sukienkę",
  "Oglądam telewizję",
  "Czyta list",
  "Myję tacę",
  "Pije kawę",
  "Piszę plan",
  "Słucha radia",
  "Kroję jabłko",
  "Myje stół",
  "Piekę naleśniki",
  "Gotuje ryż",
  "Niosę torbę",
  "Nosi płaszcz"
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





