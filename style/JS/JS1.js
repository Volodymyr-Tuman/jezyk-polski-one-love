const words = [
  // Теперішній час
  ["jem", "теперішній"], ["czytam", "теперішній"], ["piszę", "теперішній"], ["jadę", "теперішній"],
  ["mam", "теперішній"], ["mówię", "теперішній"], ["gotuję", "теперішній"], ["chodzę", "теперішній"],
  ["oglądam", "теперішній"], ["uczę się", "теперішній"], ["słucham", "теперішній"], ["piję", "теперішній"],
  ["śpię", "теперішній"], ["tańczę", "теперішній"], ["gram", "теперішній"], ["czyścisz", "теперішній"],
  ["myślę", "теперішній"], ["czekam", "теперішній"], ["zwiedzam", "теперішній"], ["kupuję", "теперішній"],
  ["biegam", "теперішній"], ["pracuję", "теперішній"], ["sprzątam", "теперішній"], ["pomagam", "теперішній"],
  ["patrzę", "теперішній"], ["szukam", "теперішній"], ["robię zakupy", "теперішній"], ["odpoczywam", "теперішній"],
  ["dzwonię", "теперішній"], ["wstaję", "теперішній"], ["zasypiam", "теперішний"], ["ubieram się", "теперішній"],
  ["budzę się", "теперішній"], ["jem śniadanie", "теперішній"], ["myję zęby", "теперішній"], ["idę do pracy", "теперішній"],
  ["rozmawiam", "теперішній"], ["rysuję", "теперішній"], ["śmieję się", "теперішній"], ["płaczę", "теперішній"],
  ["otwieram", "теперішній"], ["zamykam", "теперішній"], ["nazywam się", "теперішній"], ["siadam", "теперішній"],
  ["wstaję", "теперішній"], ["płacę", "теперішній"], ["pachnę", "теперішній"], ["czuję", "теперішній"],

  // Минулий час
  ["czytała", "минулий"], ["pisał", "минулий"], ["jechałem", "минулий"], ["miałam", "минулий"],
  ["mówił", "минулий"], ["gotowałem", "минулий"], ["chodziłam", "минулий"], ["oglądałem", "минулий"],
  ["uczyłam się", "минулий"], ["słuchałem", "минулий"], ["piłam", "минулий"], ["spałem", "минулий"],
  ["tańczyła", "минулий"], ["grałem", "минулий"], ["czyściła", "минулий"], ["myślałem", "минулий"],
  ["czekałam", "минулий"], ["zwiedzałem", "минулий"], ["kupowałem", "минулий"], ["biegłem", "минулий"],
  ["pracowałem", "минулий"], ["sprzątałam", "минулий"], ["pomagałem", "минулий"], ["patrzyłem", "минулий"],
  ["szukałam", "минулий"], ["zrobiłem zakupy", "минулий"], ["odpoczywałem", "минулий"], ["dzwoniłem", "минулий"],
  ["wstałam", "минулий"], ["zasnąłem", "минулий"], ["ubrałem się", "минулий"], ["obudziłem się", "минулий"],
  ["zjadłem śniadanie", "минулий"], ["umyłam zęby", "минулий"], ["poszedłem do pracy", "минулий"], ["rozmawiałem", "минулий"],
  ["rysowałem", "минулий"], ["śmiałem się", "минулий"], ["płakałam", "минулий"], ["otworzyłem", "минулий"],
  ["zamknąłem", "минулий"], ["nazywałam się", "минулий"], ["usiadłem", "минулий"], ["wstałem", "минулий"],
  ["zapłaciłam", "минулий"], ["pachniałem", "минулий"], ["czułem", "минулий"],

  // Майбутній час
  ["zrobię", "майбутній"], ["przeczytam", "майбутній"], ["napiszę", "майбутній"], ["pojadę", "майбутній"],
  ["będę mieć", "майбутній"], ["powiem", "майбутній"], ["ugotuję", "майбутній"], ["pójdę", "майбутній"],
  ["obejrzę", "майбутній"], ["nauczę się", "майбутній"], ["posłucham", "майбутній"], ["napiję się", "майбутній"],
  ["pójdę spać", "майбутній"], ["potańczę", "майбутній"], ["pogram", "майбутній"], ["wyczyszczę", "майбутній"],
  ["pomyślę", "майбутній"], ["poczekam", "майбутній"], ["pozwiedzam", "майбутній"], ["kupię", "майбутній"],
  ["pobiegnę", "майбутній"], ["popracuję", "майбутній"], ["posprzątam", "майбутній"], ["pomogę", "майбутній"],
  ["popatrzę", "майбутній"], ["poszukam", "майбутній"], ["zrobię zakupy", "майбутній"], ["odpocznę", "майбутній"],
  ["zadzwonię", "майбутній"], ["wstanę", "майбутній"], ["zasnę", "майбутній"], ["ubiorę się", "майбутній"],
  ["obudzę się", "майбутній"], ["zjem śniadanie", "майбутній"], ["umyję zęby", "майбутній"], ["pójdę do pracy", "майбутній"],
  ["porozmawiam", "майбутній"], ["narysuję", "майбутній"], ["pośmieję się", "майбутній"], ["popłaczę", "майбутній"],
  ["otworzę", "майбутній"], ["zamknę", "майбутній"], ["nazwę się", "майбутній"], ["usiądę", "майбутній"],
  ["zapłacę", "майбутній"], ["poczuję", "майбутній"]
];



  let shuffledWords = [...words].sort(() => Math.random() - 0.5);
  const wordsContainer = document.getElementById("words");

  shuffledWords.forEach(([word, category], index) => {
    const div = document.createElement("div");
    div.className = "word";
    div.textContent = word;
    div.setAttribute("draggable", "true");
    div.dataset.category = category;
    div.id = "word-" + index;
    wordsContainer.appendChild(div);
  });

  document.querySelectorAll(".word").forEach(word => {
    word.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", e.target.id);
    });
  });

  document.querySelectorAll(".category").forEach(zone => {
    zone.addEventListener("dragover", e => e.preventDefault());
    zone.addEventListener("drop", e => {
      e.preventDefault();
      const id = e.dataTransfer.getData("text/plain");
      const el = document.getElementById(id);
      zone.appendChild(el);
    });
  });

  function checkAnswers() {
    let correct = 0;
    let total = words.length;

    document.querySelectorAll(".word").forEach(word => {
      word.classList.remove("correct", "incorrect");
    });

    document.querySelectorAll(".category").forEach(zone => {
      const expected = zone.dataset.category;
      zone.querySelectorAll(".word").forEach(word => {
        if (word.dataset.category === expected) {
          word.classList.add("correct");
          correct++;
        } else {
          word.classList.add("incorrect");
        }
      });
    });

    document.getElementById("result").textContent = `✅ Poprawnych odpowiedzi: ${correct} z ${total}`;
  }
