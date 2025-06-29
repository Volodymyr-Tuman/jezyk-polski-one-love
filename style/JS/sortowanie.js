const words = 
[
  // Czas teraźniejszy
  ["biegnę", "teraźniejszy"], ["gotuję obiad", "teraźniejszy"], ["jadę rowerem", "teraźniejszy"], ["gram na gitarze", "teraźniejszy"],
  ["czytam książkę", "teraźniejszy"], ["patrzę w okno", "teraźniejszy"], ["uczę się polskiego", "teraźniejszy"], ["myję naczynia", "teraźniejszy"],
  ["piję kawę", "teraźniejszy"], ["chodzę do sklepu", "teraźniejszy"], ["oglądam serial", "teraźniejszy"], ["śpiewam piosenkę", "teraźniejszy"],
  ["rozmawiam z kolegą", "teraźniejszy"], ["czyszczę okulary", "teraźniejszy"], ["tańczę w klubie", "teraźniejszy"], ["szukam kluczy", "teraźniejszy"],
  
  // Czas przeszły
  ["biegałem", "przeszły"], ["gotowałem obiad", "przeszły"], ["jechałem rowerem", "przeszły"], ["grałem na gitarze", "przeszły"],
  ["czytałem książkę", "przeszły"], ["patrzyłem w okno", "przeszły"], ["uczyłem się polskiego", "przeszły"], ["myłem naczynia", "przeszły"],
  ["piłem kawę", "przeszły"], ["chodziłem do sklepu", "przeszły"], ["oglądałem serial", "przeszły"], ["śpiewałem piosenkę", "przeszły"],
  ["rozmawiałem z kolegą", "przeszły"], ["czyściłem okulary", "przeszły"], ["tańczyłem w klubie", "przeszły"], ["szukałem kluczy", "przeszły"],

  // Czas przyszły
  ["pobiegnę", "przyszły"], ["ugotuję obiad", "przyszły"], ["pojadę rowerem", "przyszły"], ["pogram na gitarze", "przyszły"],
  ["przeczytam książkę", "przyszły"], ["popatrzę w okno", "przyszły"], ["nauczę się polskiego", "przyszły"], ["umyję naczynia", "przyszły"],
  ["napiję się kawy", "przyszły"], ["pójdę do sklepu", "przyszły"], ["obejrzę serial", "przyszły"], ["zaśpiewam piosenkę", "przyszły"],
  ["porozmawiam z kolegą", "przyszły"], ["wyczyszczę okulary", "przyszły"], ["potańczę w klubie", "przyszły"], ["poszukam kluczy", "przyszły"]
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
