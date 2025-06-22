const ukrainianSentences = [
  "Я ввімкнула комп’ютер рано вранці", 
  "Вона вийшла на пробіжку після роботи", 
  "Я забрала листа з поштової скриньки", 
  "Вона змінила плани на вихідні", 
  "Я забула відкрити вікно в кімнаті", 
  "Вона прикрасила кімнату до свят", 
  "Я організувала зустріч з друзями", 
  "Вона перевірила пошту кілька разів", 
  "Я відвезла сестру до школи", 
  "Вона замовила таксі додому", 
  "Я отримала запрошення на вечірку", 
  "Вона написала відгук про книгу", 
  "Я купила квитки на концерт", 
  "Вона взяла участь у конференції", 
  "Я відключила сигналізацію", 
  "Вона підготувала подарунок для друга", 
  "Я залишила рюкзак у кабінеті", 
  "Вона попросила допомоги у колеги", 
  "Я подивилася фото з минулого року", 
  "Вона віднесла дитину до лікаря", 
  "Я вимила посуд після вечері", 
  "Вона замовила піцу для всієї родини", 
  "Я написала звіт для керівника", 
  "Вона провела нараду з командою", 
  "Я забула вимкнути світло в кімнаті", 
  "Вона порадила мені хороший фільм", 
  "Я склала план на наступний тиждень", 
  "Вона вивчила нові слова з підручника", 
  "Я написала листа старій подрузі", 
  "Вона відкрила новий рахунок у банку", 
  "Я приготувала вечерю з овочів", 
  "Вона відвезла батьків на вокзал", 
  "Я змінила батарейки в годиннику", 
  "Вона почала читати новий роман", 
  "Я купила квіти для офісу", 
  "Вона написала сценарій для відео", 
  "Я вирішила взяти відпустку в липні", 
  "Вона допомогла організувати свято", 
  "Я включила кондиціонер у спальні", 
  "Вона обговорила проект з клієнтом", 
  "Я поділилася новинами з родиною", 
  "Вона написала план розвитку бізнесу", 
  "Я вивчила правила дорожнього руху", 
  "Вона відправила листа через пошту", 
  "Я оновила програму на телефоні", 
  "Вона записала відеоурок для студентів", 
  "Я зняла відео на пам’ять", 
  "Вона завантажила потрібні файли", 
  "Я прокоментувала пост у соцмережі", 
  "Вона записалася на курси англійської"
];

const polishSentences = [
  "Włączyłam komputer wcześnie rano", 
  "Wyszła na jogging po pracy", 
  "Odebrałam list ze skrzynki pocztowej", 
  "Zmienila plany na weekend", 
  "Zapomniałam otworzyć okno w pokoju", 
  "Ozdobiła pokój na święta", 
  "Zorganizowałam spotkanie z przyjaciółmi", 
  "Sprawdzała pocztę kilka razy", 
  "Odwoziłam siostrę do szkoły", 
  "Zamówiła taksówkę do domu", 
  "Dostałam zaproszenie na imprezę", 
  "Napisała recenzję książki", 
  "Kupiłam bilety na koncert", 
  "Wzięła udział w konferencji", 
  "Wyłączyłam alarm", 
  "Przygotowała prezent dla przyjaciela", 
  "Zostawiłam plecak w gabinecie", 
  "Poprosiła o pomoc koleżankę", 
  "Oglądałam zdjęcia z zeszłego roku", 
  "Zaniosła dziecko do lekarza", 
  "Umyłam naczynia po kolacji", 
  "Zamówiła pizzę dla całej rodziny", 
  "Napisałam raport dla kierownika", 
  "Przeprowadziła zebranie z zespołem", 
  "Zapomniałam zgasić światło w pokoju", 
  "Poleciła mi dobry film", 
  "Ułożyłam plan na następny tydzień", 
  "Nauczyła się nowych słów z podręcznika", 
  "Napisałam list do starej przyjaciółki", 
  "Otworzyła nowe konto w banku", 
  "Przygotowałam kolację z warzyw", 
  "Zawiozła rodziców na dworzec", 
  "Wymieniłam baterie w zegarku", 
  "Zaczęła czytać nową powieść", 
  "Kupiłam kwiaty do biura", 
  "Napisała scenariusz do filmu", 
  "Zdecydowałam się wziąć urlop w lipcu", 
  "Pomogła zorganizować imprezę", 
  "Włączyłam klimatyzację w sypialni", 
  "Omówiła projekt z klientem", 
  "Podzieliłam się nowinami z rodziną", 
  "Napisała plan rozwoju biznesu", 
  "Nauczyłam się zasad ruchu drogowego", 
  "Wysłała list pocztą", 
  "Zaktualizowałam program na telefonie", 
  "Nagrała lekcję wideo dla studentów", 
  "Nagrałam film na pamiątkę", 
  "Pobrała potrzebne pliki", 
  "Skomentowałam post w mediach społecznościowych", 
  "Zapisła się na kurs angielskiego"
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
