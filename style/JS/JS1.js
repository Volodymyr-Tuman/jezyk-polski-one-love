const words = [
[
  // Czas teraźniejszy
  ["jem", "teraźniejszy"], ["czytam", "teraźniejszy"], ["piszę", "teraźniejszy"], ["jadę", "teraźniejszy"],
  ["mam", "teraźniejszy"], ["mówię", "teraźniejszy"], ["gotuję", "teraźniejszy"], ["chodzę", "teraźniejszy"],
  ["oglądam", "teraźniejszy"], ["uczę się", "teraźniejszy"], ["słucham", "teraźniejszy"], ["piję", "teraźniejszy"],
  ["śpię", "teraźniejszy"], ["tańczę", "teraźniejszy"], ["gram", "teraźniejszy"], ["czyścisz", "teraźniejszy"],
  ["myślę", "teraźniejszy"], ["czekam", "teraźniejszy"], ["zwiedzam", "teraźniejszy"], ["kupuję", "teraźniejszy"],
  ["biegam", "teraźniejszy"], ["pracuję", "teraźniejszy"], ["sprzątam", "teraźniejszy"], ["pomagam", "teraźniejszy"],
  ["patrzę", "teraźniejszy"], ["szukam", "teraźniejszy"], ["robię zakupy", "teraźniejszy"], ["odpoczywam", "teraźniejszy"],
  ["dzwonię", "teraźniejszy"], ["wstaję", "teraźniejszy"], ["zasypiam", "teraźniejszy"], ["ubieram się", "teraźniejszy"],
  ["budzę się", "teraźniejszy"], ["jem śniadanie", "teraźniejszy"], ["myję zęby", "teraźniejszy"], ["idę do pracy", "teraźniejszy"],
  ["rozmawiam", "teraźniejszy"], ["rysuję", "teraźniejszy"], ["śmieję się", "teraźniejszy"], ["płaczę", "teraźniejszy"],
  ["otwieram", "teraźniejszy"], ["zamykam", "teraźniejszy"], ["nazywam się", "teraźniejszy"], ["siadam", "teraźniejszy"],
  ["wstaję", "teraźniejszy"], ["płacę", "teraźniejszy"], ["pachnę", "teraźniejszy"], ["czuję", "teraźniejszy"],

  // Czas przeszły
  ["czytała", "przeszły"], ["pisał", "przeszły"], ["jechałem", "przeszły"], ["miałam", "przeszły"],
  ["mówił", "przeszły"], ["gotowałem", "przeszły"], ["chodziłam", "przeszły"], ["oglądałem", "przeszły"],
  ["uczyłam się", "przeszły"], ["słuchałem", "przeszły"], ["piłam", "przeszły"], ["spałem", "przeszły"],
  ["tańczyła", "przeszły"], ["grałem", "przeszły"], ["czyściła", "przeszły"], ["myślałem", "przeszły"],
  ["czekałam", "przeszły"], ["zwiedzałem", "przeszły"], ["kupowałem", "przeszły"], ["biegłem", "przeszły"],
  ["pracowałem", "przeszły"], ["sprzątałam", "przeszły"], ["pomagałem", "przeszły"], ["patrzyłem", "przeszły"],
  ["szukałam", "przeszły"], ["zrobiłem zakupy", "przeszły"], ["odpoczywałem", "przeszły"], ["dzwoniłem", "przeszły"],
  ["wstałam", "przeszły"], ["zasnąłem", "przeszły"], ["ubrałem się", "przeszły"], ["obudziłem się", "przeszły"],
  ["zjadłem śniadanie", "przeszły"], ["umyłam zęby", "przeszły"], ["poszedłem do pracy", "przeszły"], ["rozmawiałem", "przeszły"],
  ["rysowałem", "przeszły"], ["śmiałem się", "przeszły"], ["płakałam", "przeszły"], ["otworzyłem", "przeszły"],
  ["zamknąłem", "przeszły"], ["nazywałam się", "przeszły"], ["usiadłem", "przeszły"], ["wstałem", "przeszły"],
  ["zapłaciłam", "przeszły"], ["pachniałem", "przeszły"], ["czułem", "przeszły"],

  // Czas przyszły
  ["zrobię", "przyszły"], ["przeczytam", "przyszły"], ["napiszę", "przyszły"], ["pojadę", "przyszły"],
  ["będę mieć", "przyszły"], ["powiem", "przyszły"], ["ugotuję", "przyszły"], ["pójdę", "przyszły"],
  ["obejrzę", "przyszły"], ["nauczę się", "przyszły"], ["posłucham", "przyszły"], ["napiję się", "przyszły"],
  ["pójdę spać", "przyszły"], ["potańczę", "przyszły"], ["pogram", "przyszły"], ["wyczyszczę", "przyszły"],
  ["pomyślę", "przyszły"], ["poczekam", "przyszły"], ["pozwiedzam", "przyszły"], ["kupię", "przyszły"],
  ["pobiegnę", "przyszły"], ["popracuję", "przyszły"], ["posprzątam", "przyszły"], ["pomogę", "przyszły"],
  ["popatrzę", "przyszły"], ["poszukam", "przyszły"], ["zrobię zakupy", "przyszły"], ["odpocznę", "przyszły"],
  ["zadzwonię", "przyszły"], ["wstanę", "przyszły"], ["zasnę", "przyszły"], ["ubiorę się", "przyszły"],
  ["obudzę się", "przyszły"], ["zjem śniadanie", "przyszły"], ["umyję zęby", "przyszły"], ["pójdę do pracy", "przyszły"],
  ["porozmawiam", "przyszły"], ["narysuję", "przyszły"], ["pośmieję się", "przyszły"], ["popłaczę", "przyszły"],
  ["otworzę", "przyszły"], ["zamknę", "przyszły"], ["nazwę się", "przyszły"], ["usiądę", "przyszły"],
  ["zapłacę", "przyszły"], ["poczuję", "przyszły"]
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
