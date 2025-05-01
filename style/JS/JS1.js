const words = [
    ["robię", "teraźniejszy"], ["czytam", "teraźniejszy"], ["piszę", "teraźniejszy"],
    ["jadę", "teraźniejszy"], ["mam", "teraźniejszy"], ["mówię", "teraźniejszy"],
    ["gotuję", "teraźniejszy"], ["chodzę", "teraźniejszy"], ["oglądam", "teraźniejszy"],
    ["uczę się", "teraźniejszy"], ["słucham", "teraźniejszy"], ["piję", "teraźniejszy"],
    ["śpię", "teraźniejszy"], ["tańczę", "teraźniejszy"], ["gram", "teraźniejszy"],
    ["czyścisz", "teraźniejszy"], ["myślę", "teraźniejszy"], ["jem", "teraźniejszy"],
    ["czekam", "teraźniejszy"], ["zwiedzam", "teraźniejszy"],

    ["robiłem", "przeszły"], ["czytała", "przeszły"], ["pisał", "przeszły"],
    ["jechałem", "przeszły"], ["miałam", "przeszły"], ["mówił", "przeszły"],
    ["gotowałem", "przeszły"], ["chodziłam", "przeszły"], ["oglądałem", "przeszły"],
    ["uczyłam się", "przeszły"], ["słuchałem", "przeszły"], ["piłam", "przeszły"],
    ["spałem", "przeszły"], ["tańczyła", "przeszły"], ["grałem", "przeszły"],
    ["czyściła", "przeszły"], ["myślałem", "przeszły"], ["jadłam", "przeszły"],
    ["czekałam", "przeszły"], ["zwiedzałem", "przeszły"],

    ["zrobię", "przyszły"], ["przeczytam", "przyszły"], ["napiszę", "przyszły"],
    ["pojadę", "przyszły"], ["będę mieć", "przyszły"], ["powiem", "przyszły"],
    ["ugotuję", "przyszły"], ["pójdę", "przyszły"], ["obejrzę", "przyszły"],
    ["nauczę się", "przyszły"], ["posłucham", "przyszły"], ["napiję się", "przyszły"],
    ["pójdę spać", "przyszły"], ["potańczę", "przyszły"], ["pogram", "przyszły"],
    ["wyczyszczę", "przyszły"], ["pomyślę", "przyszły"], ["zjem", "przyszły"],
    ["poczekam", "przyszły"], ["pozwiedzam", "przyszły"],

    ["zrobiłabym", "przyszły"], ["czytałby", "przyszły"], ["napisałabym", "przyszły"],
    ["pojechałbym", "przyszły"], ["miałbym", "przyszły"], ["powiedziałaby", "przyszły"],
    ["ugotowałabym", "przyszły"], ["poszedłbym", "przyszły"], ["obejrzałabym", "przyszły"],
    ["nauczyłbym się", "przyszły"], ["posłuchałabym", "przyszły"], ["napiłabym się", "przyszły"],
    ["poszedłbym spać", "przyszły"], ["potańczyłabym", "przyszły"], ["pogralibyśmy", "przyszły"],
    ["wyczyściłabym", "przyszły"], ["pomyślałabym", "przyszły"], ["zjadłbym", "przyszły"],
    ["poczekałabym", "przyszły"], ["pozwiedzałbym", "przyszły"]
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