const pledges = [
  { id: 1, first: "Elliott", middle: "Nils", last: "Adams", hometown: "Marblehead, MA - 2028", major: "ECE", image: "Images/Elliott Adams.jpeg" },
  { id: 2, first: "Dexter", middle: "Beck", last: "Barton", hometown: "New York City, NY - 2028", major: "Economics", image: "Images/Dexter Barton.jpeg" },
  { id: 3, first: "Gavin", middle: "Andrew", last: "Benz", hometown: "Appleton, WI - 2028", major: "BME", image: "Images/Gavin Benz.jpeg" },
  { id: 4, first: "Alex", middle: "Joon", last: "Boesch", hometown: "San Mateo, CA - 2028", major: "ME", image: "Images/Alex Boesch.jpeg" },
  { id: 5, first: "Or", middle: "Rahamim", last: "Bruchim", hometown: "Boise, ID - 2028", major: "Neuroscience", image: "Images/Or Bruchim.jpeg" },
  { id: 6, first: "Rylan", middle: "Scott", last: "Carper", hometown: "Dayton, OH - 2028", major: "ME", image: "Images/Rylan Carper.jpeg" },
  { id: 7, first: "Jide", middle: "Dean", last: "Gbadamosi", hometown: "Jackson, NJ - 2027", major: "ECE", image: "Images/Jide Gbadamosi.jpeg" },
  { id: 8, first: "Colin", middle: "Alexander", last: "Geier", hometown: "Hinsdale, IL - 2028", major: "Political Science", image: "Images/Colin Geier.jpeg" },
  { id: 9, first: "Campbell", middle: "Alexander", last: "Henn", hometown: "Atlanta, GA - 2028", major: "Economics", image: "Images/Campbell Henn.jpeg" },
  { id: 10, first: "Thomas", last: "Henry", hometown: "Fort Collins, CO - 2027", major: "Econ", image: "Images/Thomas Henry.jpeg" },
  { id: 11, first: "Dylan", middle: "Fredrick", last: "Jeffries", hometown: "Pasadena, CA - 2028", major: "Philosophy", image: "Images/Dylan Jeffries.jpeg" },
  { id: 12, first: "Alexander", middle: "Jeffrey", last: "Krol", hometown: "Cincinnati, OH - 2028", major: "ECE/Chemistry", image: "Images/Alexander Krol.jpeg" },
  { id: 13, first: "Srikar", middle: "Sai", last: "Kunapuli", hometown: "Sterling, VA - 2028", major: "Math/CS", image: "Images/Srikar Kunapuli.jpeg" },
  { id: 14, first: "Jammer", last: "La Barge", hometown: "White Marsh, PA - 2027", major: "Marine Science", image: "Images/Jammer La Barge.jpeg" },
  { id: 15, first: "Jason", middle: "Benjamin", last: "Lilly", hometown: "Columbia, MD - 2028", major: "Stats", image: "Images/Jason Lilly.jpeg" },
  { id: 16, first: "John", middle: "Gilmer", last: "Mebane", hometown: "Durham, NC - 2028", major: "ME", image: "Images/John Mebane.jpeg" },
  { id: 17, first: "Connor", middle: "Daniel", last: "Melehan", hometown: "Nashville, TN - 2028", major: "Math/Philo", image: "Images/Connor Melehan.jpeg" },
  { id: 18, first: "Neel", middle: "Ajay", last: "Nair", hometown: "Eugene, OR - 2028", major: "ECE", image: "Images/Neel Nair.jpeg" },
  { id: 19, first: "Ian", middle: "Malcolm", last: "Opel", hometown: "Lansing, MI - 2028", major: "Pubpol/Polysci", image: "Images/Ian Opel.jpeg" },
  { id: 20, first: "Phoenix", middle: "Danger", last: "Perkins", hometown: "Anchorage, AK - 2028", major: "ECE/CS", image: "Images/Phoenix Perkins.jpeg" },
  { id: 21, first: "Danilo", middle: "Ignacio", last: "Rincon", hometown: "Chelsea, MA - 2027", major: "ECE", image: "Images/Danilo Rincon.jpeg" },
  { id: 22, first: "Vassilios", middle: "Evangelos", last: "Ringas", hometown: "Glen Allen, VA - 2028", major: "ME", image: "Images/Vassilios Ringas.jpeg" },
  { id: 23, first: "Tyler", middle: "Jacob", last: "Ruben", hometown: "Sarasota, FL - 2028", major: "Polisci", image: "Images/Tyler Ruben.jpeg" },
  { id: 24, first: "Tyler", middle: "James", last: "Scaringella", hometown: "Holliston, MA - 2028", major: "CS", image: "Images/Tyler Scaringella.jpeg" },
  { id: 25, first: "James", last: "Sohigian", hometown: "Wilmette, IL - 2028", major: "Math", image: "Images/James Sohigian.jpeg" },
  { id: 26, first: "Ethan", middle: "Michael", last: "Taksey", hometown: "Annapolis, MD - 2028", major: "Neuroscience", image: "Images/Ethan Taksey.jpeg" },
  { id: 27, first: "Christian", middle: "Giuseppe", last: "Testa", hometown: "Rockville, MD - 2027", major: "ME", image: "Images/Christian Testa.jpeg" },
  { id: 28, first: "Harry", last: "Troy", hometown: "New York, NY - 2028", major: "Chem/Earth Sci", image: "Images/Harry Troy.jpeg" },
  { id: 29, first: "Jakob", middle: "Tobin", last: "Unterlack", hometown: "Cherry Hill, NJ - 2028", major: "BME", image: "Images/Jakob Unterlack.jpeg" },
  { id: 30, first: "Kevin", last: "Yuan", hometown: "Atlanta, GA - 2027", major: "ME", image: "Images/Kevin Yuan.jpeg" },
  { id: 31, first: "Daniel", middle: "Lev", last: "Zeltser", hometown: "Wyckoff, NJ - 2028", major: "BME", image: "Images/Daniel Zeltser.jpeg" }
];

const greek = [
  { id: "alpha", name: "Alpha", upper: "Α", lower: "α", sound: "AL-fa" },
  { id: "beta", name: "Beta", upper: "Β", lower: "β", sound: "BAY-ta" },
  { id: "gamma", name: "Gamma", upper: "Γ", lower: "γ", sound: "GAM-ma" },
  { id: "delta", name: "Delta", upper: "Δ", lower: "δ", sound: "DEL-ta" },
  { id: "epsilon", name: "Epsilon", upper: "Ε", lower: "ε", sound: "EP-si-lon" },
  { id: "zeta", name: "Zeta", upper: "Ζ", lower: "ζ", sound: "ZAY-ta" },
  { id: "eta", name: "Eta", upper: "Η", lower: "η", sound: "AY-ta" },
  { id: "theta", name: "Theta", upper: "Θ", lower: "θ", sound: "THAY-ta" },
  { id: "iota", name: "Iota", upper: "Ι", lower: "ι", sound: "eye-O-ta" },
  { id: "kappa", name: "Kappa", upper: "Κ", lower: "κ", sound: "KAP-a" },
  { id: "lambda", name: "Lambda", upper: "Λ", lower: "λ", sound: "LAM-da" },
  { id: "mu", name: "Mu", upper: "Μ", lower: "μ", sound: "MEW" },
  { id: "nu", name: "Nu", upper: "Ν", lower: "ν", sound: "NEW" },
  { id: "xi", name: "Xi", upper: "Ξ", lower: "ξ", sound: "KSEE" },
  { id: "omicron", name: "Omicron", upper: "Ο", lower: "ο", sound: "AH-mi-cron" },
  { id: "pi", name: "Pi", upper: "Π", lower: "π", sound: "PIE" },
  { id: "rho", name: "Rho", upper: "Ρ", lower: "ρ", sound: "ROE" },
  { id: "sigma", name: "Sigma", upper: "Σ", lower: "σ/ς", sound: "SIG-ma" },
  { id: "tau", name: "Tau", upper: "Τ", lower: "τ", sound: "TAH" },
  { id: "upsilon", name: "Upsilon", upper: "Υ", lower: "υ", sound: "OOP-si-lon" },
  { id: "phi", name: "Phi", upper: "Φ", lower: "φ", sound: "FEE" },
  { id: "chi", name: "Chi", upper: "Χ", lower: "χ", sound: "KAI" },
  { id: "psi", name: "Psi", upper: "Ψ", lower: "ψ", sound: "PSY" },
  { id: "omega", name: "Omega", upper: "Ω", lower: "ω", sound: "oh-MAY-ga" }
];

const state = {
  mode: "mix",
  ask: "major",
  current: null,
  currentGreek: null,
  revealed: false,
  locked: false,
  stats: { correct: 0, total: 0, streak: 0 },
  flashSide: "name-first", // or "details-first"
  progress: {}, // per-pledge stats
  history: [], // last 20 booleans
  theme: "dark"
};

const els = {
  name: document.getElementById("name"),
  aka: document.getElementById("aka"),
  options: document.getElementById("options"),
  reveal: document.getElementById("reveal"),
  askLabel: document.getElementById("ask-label"),
  clue: document.getElementById("clue"),
  prompt: document.getElementById("prompt"),
  photoWrap: document.getElementById("photo-wrap"),
  photo: document.getElementById("photo"),
  btnReveal: document.getElementById("btn-reveal"),
  btnNext: document.getElementById("btn-next"),
  btnFlip: document.getElementById("btn-flip"),
  btnHint: document.getElementById("btn-hint"),
  btnTheme: document.getElementById("btn-theme"),
  manualScore: document.getElementById("manual-score"),
  statAccuracy: document.getElementById("stat-accuracy"),
  statStreak: document.getElementById("stat-streak"),
  statRounds: document.getElementById("stat-rounds"),
  modeAccuracy: document.getElementById("mode-accuracy"),
  hardest: document.getElementById("hardest"),
  quicklist: document.getElementById("quicklist"),
  filter: document.getElementById("filter"),
  modeButtons: [...document.querySelectorAll(".chip")]
};

function init() {
  loadProgress();
  els.modeButtons.forEach(btn =>
    btn.addEventListener("click", () => switchMode(btn.dataset.mode))
  );
  els.btnReveal.addEventListener("click", reveal);
  els.btnNext.addEventListener("click", () => pickCard());
  els.btnFlip.addEventListener("click", flipFlash);
  els.btnHint.addEventListener("click", showHint);
  els.btnTheme.addEventListener("click", toggleTheme);
  els.manualScore.addEventListener("click", e => {
    if (e.target.dataset.mark) {
      const isCorrect = e.target.dataset.mark === "got";
      finishRound(isCorrect);
    }
  });
  els.filter.addEventListener("input", () => renderQuicklist());

  document.addEventListener("keydown", e => {
    if (e.key === " ") {
      e.preventDefault();
      reveal();
    }
    if (e.key === "ArrowRight" || e.key === "n") pickCard();
    if (e.key.toLowerCase() === "f") flipFlash();
    if (e.key.toLowerCase() === "h") showHint();
    if (e.key === "r") reveal();
    if (["1", "2", "3", "4"].includes(e.key)) {
      const idx = Number(e.key) - 1;
      const btn = document.querySelectorAll(".option-btn")[idx];
      if (btn) btn.click();
    }
  });

  renderQuicklist();
  renderDash();
  pickCard(true);
}

function switchMode(mode) {
  state.mode = mode;
  state.ask = resolveAsk(mode);
  state.currentGreek = null;
  els.modeButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.mode === mode));
  pickCard();
}

function pickCard(firstLoad = false) {
  if (state.mode === "greek") {
    const prev = state.currentGreek?.id;
    let candidate = greek[Math.floor(Math.random() * greek.length)];
    if (greek.length > 1) {
      while (candidate.id === prev) candidate = greek[Math.floor(Math.random() * greek.length)];
    }
    state.currentGreek = candidate;
    state.current = null;
    state.ask = "greek";
  } else {
    const previousId = state.current?.id;
    const candidate = weightedPick(previousId, state.mode === "photo");
    const middles = pledges.filter(p => p.middle);

    state.current = candidate;
    state.currentGreek = null;
    state.ask = resolveAsk(state.mode);
    // If we're asking for a middle name but this pledge doesn't have one, pick someone who does.
    if (state.ask === "middle" && (!state.current.middle || state.current.middle.trim() === "")) {
      if (middles.length) {
        const alt = middles[Math.floor(Math.random() * middles.length)];
        state.current = alt;
      } else {
        // fallback: no middles exist, switch to major
        state.ask = "major";
      }
    }
  }

  state.revealed = false;
  state.locked = false;

  renderCard();
}

function renderCard() {
  const { current, currentGreek, ask, mode } = state;
  if (!current && mode !== "greek") return;
  document.querySelectorAll(".hint-line").forEach(el => el.remove());

  if (mode === "greek") {
    els.photoWrap.style.display = "none";
    const glyph = `${currentGreek.upper} ${currentGreek.lower}`;
    els.name.textContent = glyph;
    els.aka.textContent = "Guess the Greek letter name";
    els.askLabel.textContent = "Greek Alphabet";
    els.reveal.classList.toggle("visible", state.revealed);
    els.btnFlip.style.display = "none";
    els.prompt.style.display = "none";
    els.prompt.innerHTML = "";
    els.manualScore.style.display = "none";
    const choices = buildChoices("greek");
    els.options.innerHTML = "";
    choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = choice;
      btn.addEventListener("click", () => handleChoice(btn, choice));
      els.options.appendChild(btn);
    });
    return;
  }

  const fullName = displayName(current);
  const masked =
    state.mode === "photo"
      ? "Who is this?"
      : ask === "last"
      ? `${current.first} ${current.middle ? current.middle + " " : ""}`.trim()
      : ask === "middle"
      ? `${current.first} ${current.last}`
      : state.mode === "flash" && state.flashSide === "details-first" && !state.revealed
      ? "Who is it?"
      : fullName;

  els.name.textContent = masked;
  const akaLine =
    state.mode === "photo"
      ? "Recall full name + major, then Reveal."
      : current.nick
      ? `Goes by ${current.nick}`
      : "\u00a0";
  els.aka.textContent = akaLine;

  const askText =
    ask === "major"
      ? "Guess the major"
      : ask === "home"
      ? "Guess the hometown and graduation year"
      : ask === "middle"
      ? "Guess the middle name"
      : ask === "last"
      ? "Guess the last name"
      : ask === "photo"
      ? "Who is this? Pick name + major"
      : ask === "greek"
      ? "Guess the Greek letter name"
      : state.flashSide === "details-first"
      ? "Given hometown + major, who is it?"
      : "Flashcard";
  els.askLabel.textContent = askText;
  els.reveal.classList.toggle("visible", state.revealed);
  // Clues removed per request
  els.clue.style.display = "none";
  els.clue.textContent = "";
  els.btnFlip.style.display = mode === "flash" ? "inline-flex" : "none";
  const showPhoto = mode === "photo" && current.image;
  els.photoWrap.style.display = showPhoto ? "block" : "none";
  if (showPhoto) {
    els.photo.src = current.image;
    els.photo.alt = `${fullName}'s photo`;
  }

  if (mode === "flash") {
    if (state.flashSide === "details-first") {
      els.prompt.style.display = "grid";
      els.prompt.innerHTML = `
        <div>
          <p class="label">Hometown</p>
          <p class="value">${current.hometown}</p>
        </div>
        <div>
          <p class="label">Major</p>
          <p class="value">${current.major}</p>
        </div>`;
    } else {
      els.prompt.style.display = "none";
      els.prompt.innerHTML = "";
    }

    els.options.innerHTML = `<p class="value" style="color: var(--muted); margin: 8px 0;">Flash mode: hit Reveal (or space) then score yourself.</p>`;
    els.manualScore.style.display = "flex";
  } else if (mode === "photo") {
    els.prompt.style.display = "none";
    els.prompt.innerHTML = "";
    els.manualScore.style.display = "flex";
    els.options.innerHTML = `<p class="value" style="color: var(--muted); margin: 8px 0;">Look at the photo, recall full name + major, then press Reveal and score yourself.</p>`;
  } else {
    els.prompt.style.display = "none";
    els.prompt.innerHTML = "";
    els.manualScore.style.display = "none";
    const choices = mode === "photo" ? buildPhotoChoices() : buildChoices(ask);
    els.options.innerHTML = "";
    choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = choice;
      btn.addEventListener("click", () => handleChoice(btn, choice));
      els.options.appendChild(btn);
    });
  }
}

function buildChoices(kind) {
  const key =
    kind === "home"
      ? "hometown"
      : kind === "major"
      ? "major"
      : kind === "middle"
      ? "middle"
      : kind === "greek"
      ? "greek"
      : "last";
  if (key === "greek") {
    const correct = state.currentGreek.name;
    const pool = [...new Set(greek.map(g => g.name))];
    const picked = new Set([correct]);
    while (picked.size < Math.min(4, pool.length)) {
      const candidate = pool[Math.floor(Math.random() * pool.length)];
      picked.add(candidate);
    }
    return shuffle([...picked]);
  }
  const correct = state.current[key];
  const pool = [...new Set(pledges.map(p => p[key]).filter(Boolean))];
  // ensure correct is included even if falsy guard somehow slipped
  if (correct && !pool.includes(correct)) pool.push(correct);
  const picked = new Set([correct]);
  while (picked.size < Math.min(4, pool.length)) {
    const candidate = pool[Math.floor(Math.random() * pool.length)];
    picked.add(candidate);
  }
  return shuffle([...picked]);
}

function buildPhotoChoices() {
  const pool = pledges.filter(p => p.image);
  const correct = `${displayName(state.current)} — ${state.current.major}`;
  const picked = new Set([correct]);
  while (picked.size < Math.min(4, pool.length)) {
    const candidate = pool[Math.floor(Math.random() * pool.length)];
    picked.add(`${displayName(candidate)} — ${candidate.major}`);
  }
  return shuffle([...picked]);
}

function handleChoice(btn, choice) {
  if (state.locked) return;
  if (state.mode === "photo") return; // photo mode is manual score only
  let correct;
  if (state.ask === "photo") {
    correct = `${displayName(state.current)} — ${state.current.major}`;
  } else if (state.ask === "greek") {
    correct = state.currentGreek.name;
  } else {
    const key =
      state.ask === "home"
        ? "hometown"
        : state.ask === "major"
        ? "major"
        : state.ask === "middle"
        ? "middle"
        : "last";
    correct = state.current[key] || "—";
  }
  const wasCorrect = choice === correct;

  document.querySelectorAll(".option-btn").forEach(b => {
    b.classList.add("disabled");
    if (b.textContent === correct) b.classList.add("correct");
  });
  if (!wasCorrect) btn.classList.add("wrong");

  reveal();
  finishRound(wasCorrect);
  state.locked = true;
}

function reveal() {
  if (state.revealed) return;
  state.revealed = true;
  if (state.mode === "flash" && state.flashSide === "details-first") {
    renderRevealName();
  }
  if (state.mode === "photo") {
    renderRevealPhoto();
  } else if (state.mode === "greek") {
    renderRevealGreek();
  } else if (state.mode !== "flash" || state.flashSide === "name-first") {
    renderRevealDetails();
  }
  els.reveal.classList.add("visible");
}

function finishRound(isCorrect) {
  state.stats.total += 1;
  state.stats.correct += isCorrect ? 1 : 0;
  state.stats.streak = isCorrect ? state.stats.streak + 1 : 0;
  trackProgress(state.current.id, isCorrect, state.ask);
  pushHistory(isCorrect);
  saveProgress();
  updateStats();
  renderDash();
  if (isCorrect) celebrate();
}

function updateStats() {
  const { correct, total, streak } = state.stats;
  const accuracy = total ? Math.round((correct / total) * 100) : "—";
  els.statAccuracy.textContent = total ? `${accuracy}%` : "—";
  els.statStreak.textContent = `${streak} 🔥`;
  els.statRounds.textContent = total;
}

function renderQuicklist() {
  const term = els.filter.value?.toLowerCase().trim() || "";
  const filtered = pledges.filter(p => {
    const hay = `${p.first} ${p.middle || ""} ${p.last} ${p.hometown} ${p.major} ${p.nick || ""}`.toLowerCase();
    return hay.includes(term);
  });
  els.quicklist.innerHTML = "";
  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "list-card";
    const nick = p.nick ? ` (\"${p.nick}\")` : "";
    card.innerHTML = `<strong>${p.first} ${p.middle ? p.middle + " " : ""}${p.last}${nick}</strong>
      <div class="meta">${p.hometown}</div>
      <div class="meta">${p.major}</div>`;
    els.quicklist.appendChild(card);
  });
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function randomAsk() {
  const asks = ["major", "home", "middle", "last"];
  return asks[Math.floor(Math.random() * asks.length)];
}

function displayName(p) {
  return `${p.first} ${p.middle ? p.middle + " " : ""}${p.last}`.trim();
}

function renderRevealDetails() {
  els.reveal.innerHTML = `
    <div>
      <p class="label">Hometown</p>
      <p class="value">${state.current.hometown}</p>
    </div>
    <div>
      <p class="label">Major</p>
      <p class="value">${state.current.major}</p>
    </div>`;
}

function renderRevealPhoto() {
  els.reveal.innerHTML = `
    <div>
      <p class="label">Name</p>
      <p class="value">${displayName(state.current)}</p>
    </div>
    <div>
      <p class="label">Major</p>
      <p class="value">${state.current.major}</p>
    </div>
    <div>
      <p class="label">Hometown</p>
      <p class="value">${state.current.hometown}</p>
    </div>`;
}

function renderRevealGreek() {
  els.reveal.innerHTML = `
    <div>
      <p class="label">Name</p>
      <p class="value">${state.currentGreek.name}</p>
    </div>
    <div>
      <p class="label">Upper / Lower</p>
      <p class="value">${state.currentGreek.upper} ${state.currentGreek.lower}</p>
    </div>
    <div>
      <p class="label">Pronunciation</p>
      <p class="value">${state.currentGreek.sound}</p>
    </div>`;
}

function renderRevealName() {
  const fullName = `${state.current.first} ${state.current.middle ? state.current.middle + " " : ""}${state.current.last}`;
  els.reveal.innerHTML = `
    <div>
      <p class="label">Name</p>
      <p class="value">${fullName}</p>
    </div>`;
}

function flipFlash() {
  state.flashSide = state.flashSide === "name-first" ? "details-first" : "name-first";
  state.revealed = false;
  els.reveal.classList.remove("visible");
  renderCard();
}

function showHint() {
  if ((!state.current && state.mode !== "greek") || state.mode === "flash" || state.mode === "photo" || state.mode === "greek") return;
  document.querySelectorAll(".hint-line").forEach(el => el.remove());
  const key =
    state.ask === "home"
      ? state.current.hometown
      : state.ask === "major"
      ? state.current.major
      : state.ask === "middle"
      ? state.current.middle || ""
      : state.current.last;
  if (!key) return;
  const words = key.split(" ");
  const first = words[0];
  const hint = first ? `${first[0].toUpperCase()}… (${words.length} word${words.length > 1 ? "s" : ""})` : "No hint";
  els.options.insertAdjacentHTML(
    "beforebegin",
    `<p class="value hint-line" style="margin:6px 0;color:var(--muted);">Hint: ${hint}</p>`
  );
}

function trackProgress(id, isCorrect, askType) {
  // Prefix Greek ids so they don't collide with pledge ids
  const key = state.mode === "greek" ? `g-${id}` : id;
  const cur = state.progress[key] || { c: 0, t: 0 };
  cur.t += 1;
  cur.c += isCorrect ? 1 : 0;
  // per-ask buckets
  cur[askType] = cur[askType] || { c: 0, t: 0 };
  cur[askType].t += 1;
  cur[askType].c += isCorrect ? 1 : 0;
  state.progress[key] = cur;
}

function pushHistory(isCorrect) {
  state.history.push(isCorrect);
  if (state.history.length > 20) state.history.shift();
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem("sigchi-progress") || "{}");
    state.progress = saved.progress || {};
    state.history = saved.history || [];
    state.theme = saved.theme || "dark";
    if (state.theme === "light") document.body.classList.add("theme-light");
    els.btnTheme.textContent = state.theme === "light" ? "Toggle Dark" : "Toggle Light";
  } catch (e) {
    state.progress = {};
    state.history = [];
  }
}

function saveProgress() {
  localStorage.setItem(
    "sigchi-progress",
    JSON.stringify({ progress: state.progress, history: state.history, theme: state.theme })
  );
}

function renderDash() {
  // per-mode accuracy based on ask types
  const modes = ["major", "home", "middle", "last", "greek"];
  els.modeAccuracy.innerHTML = "";
  modes.forEach(m => {
    let attempts = pledges.reduce((sum, p) => sum + ((state.progress[p.id]?.[m]?.t) || 0), 0);
    let correct = pledges.reduce((sum, p) => sum + ((state.progress[p.id]?.[m]?.c) || 0), 0);
    // add greek counts
    if (m === "greek") {
      const gAttempts = Object.entries(state.progress)
        .filter(([k]) => k.startsWith("g-"))
        .reduce((s, [, v]) => s + ((v[m]?.t) || 0), 0);
      const gCorrect = Object.entries(state.progress)
        .filter(([k]) => k.startsWith("g-"))
        .reduce((s, [, v]) => s + ((v[m]?.c) || 0), 0);
      attempts += gAttempts;
      correct += gCorrect;
    }
    const acc = attempts ? Math.round((correct / attempts) * 100) : "—";
    const div = document.createElement("div");
    div.className = "badge";
    div.textContent = `${m.toUpperCase()}: ${acc === "—" ? "—" : acc + "%"}`;
    els.modeAccuracy.appendChild(div);
  });

  // hardest names (lowest accuracy)
  const ranked = pledges
    .map(p => {
      const stats = state.progress[p.id] || { c: 0, t: 0 };
      const acc = stats.t ? stats.c / stats.t : 1;
      return { p, acc, t: stats.t };
    })
    .filter(x => x.t >= 3 && x.acc < 0.9)
    .sort((a, b) => a.acc - b.acc)
    .slice(0, 5);
  els.hardest.innerHTML = "";
  if (!ranked.length) {
    els.hardest.innerHTML = '<span class="meta" style="color:var(--muted);">No weak spots detected yet.</span>';
  } else {
    ranked.forEach(r => {
      const div = document.createElement("div");
      div.className = "badge";
      div.textContent = `${r.p.first} ${r.p.last}: ${Math.round(r.acc * 100)}% (${r.t} tries)`;
      els.hardest.appendChild(div);
    });
  }
}

function toggleTheme() {
  const body = document.body;
  const isLight = body.classList.toggle("theme-light");
  state.theme = isLight ? "light" : "dark";
  els.btnTheme.textContent = isLight ? "Toggle Dark" : "Toggle Light";
  saveProgress();
}

function celebrate() {
  // simple confetti burst
  const colors = ["#f5c34c", "#1f5fff", "#ffffff"];
  for (let i = 0; i < 12; i++) {
    const piece = document.createElement("div");
    piece.style.position = "fixed";
    piece.style.width = "6px";
    piece.style.height = "10px";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.left = `${window.innerWidth / 2}px`;
    piece.style.top = `${window.innerHeight / 3}px`;
    piece.style.opacity = "0.9";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.transition = "transform 700ms ease, opacity 700ms ease, top 700ms ease";
    document.body.appendChild(piece);
    requestAnimationFrame(() => {
      piece.style.top = `${window.innerHeight}px`;
      piece.style.opacity = "0";
      piece.style.transform += ` translate(${(Math.random() - 0.5) * 200}px, 0px)`;
    });
    setTimeout(() => piece.remove(), 750);
  }
  // audio ping
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.frequency.value = 880;
    o.type = "triangle";
    g.gain.value = 0.12;
    o.connect(g).connect(ctx.destination);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25);
    o.stop(ctx.currentTime + 0.25);
  } catch (e) {
    /* ignore */
  }
}

function resolveAsk(mode) {
  if (mode === "mix") return randomAsk();
  if (mode === "major") return "major";
  if (mode === "home") return "home";
  if (mode === "middle") return "middle";
  if (mode === "last") return "last";
  if (mode === "photo") return "photo";
  return "flash";
}

function weightedPick(previousId, requirePhoto = false) {
  const data = state.progress;
  const pool = requirePhoto ? pledges.filter(p => p.image) : pledges;
  const weights = pool.map(p => {
    const stats = data[p.id] || { c: 0, t: 0 };
    const attempts = stats.t || 0;
    const correct = stats.c || 0;
    const accuracy = attempts ? correct / attempts : 0;
    const scarcityBonus = attempts < 2 ? 1.2 : 1;
    const struggle = attempts ? (1 - accuracy) * 2 : 1.5;
    const base = 1 + struggle + scarcityBonus;
    return { p, w: base };
  });
  const total = weights.reduce((s, x) => s + x.w, 0);
  let r = Math.random() * total;
  let choice = weights[0].p;
  for (const item of weights) {
    if (item.p.id === previousId && pool.length > 1) continue;
    if (r < item.w) { choice = item.p; break; }
    r -= item.w;
  }
  return choice;
}

init();
