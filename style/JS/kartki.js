  const ukrainianSentences = [
  "Я замовив піцу на вечерю", "Вона читає цікаву статтю про науку", "Ми грали в футбол після школи", "Вони дивилися фільм учора ввечері", "Я написав листа бабусі",
  "Моя сестра пішла на йогу", "Ми слухали музику в парку", "Ти вже зробив домашнє завдання?", "Вони танцювали всю ніч", "Я навчився готувати борщ",
  "Ми збираємось у похід цієї суботи", "Він купив новий смартфон", "Я побачив веселку після дощу", "Ми прибирали квартиру вранці", "Я зробив фотографію заходу сонця",
  "Вона пішла в бібліотеку за книжкою", "Ми відвідали нову виставку в галереї", "Я замовив каву без цукру", "Вони каталися на ковзанах у парку", "Я розповів жарт друзям",
  "Ми грали на гітарі біля вогнища", "Я прокинувся дуже рано", "Ми приготували смачну вечерю", "Ти бачив мій рюкзак?", "Я вивчаю німецьку мову",
  "Моя мама дивиться кулінарне шоу", "Ми плануємо вечірку на вихідні", "Я отримав листа від друга з-за кордону", "Ми гуляли на березі річки", "Вона малювала портрет кота",
  "Я скачав нову гру на телефон", "Ми співали пісні в машині", "Він зламав навушники", "Я писав повідомлення на уроці", "Ми годували качок у парку",
  "Вона запізнилась на зустріч", "Я знайшов ключі під ліжком", "Ми розв'язали складну задачу", "Ти пригадав її ім’я?", "Він лагодив велосипед",
  "Ми плавали в озері", "Я навчився нової пісні", "Вона розповідала цікаву історію", "Ми побудували хатку на дереві", "Я натиснув не ту кнопку",
  "Ми заблукали в лісі", "Я намалював картину аквареллю", "Вони прикрашали кімнату на свято", "Ти приготував сніданок?", "Ми обговорювали книгу"
];

const polishSentences = [
  "Zamówiłem pizzę na kolację", "Ona czyta ciekawy artykuł o nauce", "Graliśmy w piłkę po szkole", "Oglądali film wczoraj wieczorem", "Napisałem list do babci",
  "Moja siostra poszła na jogę", "Słuchaliśmy muzyki w parku", "Czy odrobiłeś już pracę domową?", "Tańczyli całą noc", "Nauczyłem się gotować barszcz",
  "Wybieramy się na wędrówkę w tę sobotę", "Kupił nowy smartfon", "Zobaczyłem tęczę po deszczu", "Sprzątaliśmy mieszkanie rano", "Zrobiłem zdjęcie zachodu słońca",
  "Poszła do biblioteki po książkę", "Odwiedziliśmy nową wystawę w galerii", "Zamówiłem kawę bez cukru", "Jeździli na łyżwach w parku", "Opowiedziałem dowcip znajomym",
  "Graliśmy na gitarze przy ognisku", "Obudziłem się bardzo wcześnie", "Przygotowaliśmy pyszną kolację", "Widziałeś mój plecak?", "Uczę się języka niemieckiego",
  "Moja mama ogląda program kulinarny", "Planujemy imprezę na weekend", "Dostałem list od przyjaciela z zagranicy", "Spacerowaliśmy nad rzeką", "Ona narysowała portret kota",
  "Pobrałem nową grę na telefon", "Śpiewaliśmy piosenki w samochodzie", "Zepsuł słuchawki", "Pisałem wiadomość na lekcji", "Karmiliśmy kaczki w parku",
  "Spóźniła się na spotkanie", "Znalazłem klucze pod łóżkiem", "Rozwiązaliśmy trudne zadanie", "Przypomniałeś sobie jej imię?", "Naprawiał rower",
  "Pływaliśmy w jeziorze", "Nauczyłem się nowej piosenki", "Ona opowiadała ciekawą historię", "Zbudowaliśmy domek na drzewie", "Kliknąłem nie ten przycisk",
  "Zgubiliśmy się w lesie", "Namalowałem obraz akwarelą", "Ozdabiali pokój na święto", "Przygotowałeś śniadanie?", "Dyskutowaliśmy o książce"
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