const pledges = [
  { id: 1, first: "Aarav", last: "Mehta", hometown: "Lagos, Nigeria", major: "Economics" },
  { id: 2, first: "Adi", last: "Bala", hometown: "Potomac, MD", major: "Political Science" },
  { id: 3, first: "Alex", middle: "Dao Ming", last: "Chang", hometown: "New York City, NY", major: "Economics" },
  { id: 4, first: "Allen", middle: "Allen", last: "Hutchinson", hometown: "Greenville, NC", major: "Mathematics" },
  { id: 5, first: "Amar", middle: "Singh", last: "Walia", hometown: "New Orleans, LA", major: "Economics" },
  { id: 6, first: "Andrew", middle: "Harrison", last: "Jaynes", hometown: "New City, NY", major: "Computer Science" },
  { id: 7, first: "Arihant", last: "Rajesh", hometown: "Old Tappan, NJ", major: "Electrical & Computer Engineering" },
  { id: 8, first: "Carter", middle: "Michael", last: "Burke", hometown: "Houston, TX", major: "Statistics & Economics" },
  { id: 9, first: "Cole", middle: "Matthew", last: "Burke", hometown: "Davison, MI", major: "Computer Science" },
  { id: 10, first: "Coleson", middle: "Kennedy", last: "Kovacs", hometown: "Colorado Springs, CO", major: "Biomedical Engineering" },
  { id: 11, first: "Danny", middle: "Reuben", last: "Kriegel", hometown: "Deerfield, IL", major: "Biomedical Engineering" },
  { id: 12, first: "Evan", middle: "Michael", last: "Lehmann", hometown: "Waco, TX", major: "Economics" },
  { id: 13, first: "Finn", last: "Kelly", hometown: "Villanova, PA", major: "Mathematics" },
  { id: 14, first: "Grant", middle: "Hamilton", last: "Mayer", hometown: "Dover, MA", major: "Mathematics" },
  { id: 15, first: "Ian", middle: "Jacob", last: "Anderson", hometown: "Knoxville, TN", major: "Biomedical Engineering" },
  { id: 16, first: "Jack", middle: "Post", last: "Dahler", hometown: "Bernardsville, NJ", major: "Economics" },
  { id: 17, first: "Jack", middle: "Tyler", last: "Khachatryan", hometown: "Salt Lake City, UT", major: "Biomedical Engineering" },
  { id: 18, first: "Jack", middle: "Morgan", last: "Reed", hometown: "Arlington, VA", major: "Electrical & Computer Engineering" },
  { id: 19, first: "Jacob", middle: "Thomas", last: "Kim", hometown: "Philadelphia, PA", major: "Economics" },
  { id: 20, first: "Jerry", middle: "Lin", last: "Xu", hometown: "San Ramon, CA", major: "ECE / Computer Science" },
  { id: 21, first: "Jonathan", middle: "Tyler", last: "Ransom", hometown: "Wilmington, DE", major: "Electrical & Computer Engineering" },
  { id: 22, first: "Joseph", last: "Delgado", hometown: "Miami, FL", major: "Romance Studies" },
  { id: 23, first: "Julien", middle: "Emanuel", last: "Halleman", hometown: "Annapolis, MD", major: "Political Science" },
  { id: 24, first: "Leonardo", nick: "Leo", middle: "Yuchen", last: "Bai", hometown: "Nashville, TN", major: "Economics & Statistics" },
  { id: 25, first: "Miles", middle: "Rocco", last: "Blackhart", hometown: "Berkeley, CA", major: "Economics" },
  { id: 26, first: "Parker", middle: "Baird", last: "Wilding", hometown: "Sarasota, FL", major: "Mechanical Engineering" },
  { id: 27, first: "Parker", middle: "Daisuke", last: "Hayashi", hometown: "Greenwich, CT", major: "Computer Science" },
  { id: 28, first: "Parth", last: "Shah", hometown: "Mumbai, India", major: "Economics" },
  { id: 29, first: "Paul", middle: "James", last: "Anderson", hometown: "Boise, ID", major: "Biology" },
  { id: 30, first: "Quinn", last: "Quinn", hometown: "Siler City, NC", major: "Mechanical Engineering" },
  { id: 31, first: "Rishi", middle: "Anil", last: "Kawediya", hometown: "Folsom, CA", major: "Economics" },
  { id: 32, first: "Ryan", middle: "Christopher", last: "Growney", hometown: "New York City, NY", major: "Mathematics" },
  { id: 33, first: "Ryan", middle: "Hale", last: "Readlinger", hometown: "Chatham, NJ", major: "Biology" },
  { id: 34, first: "Tristan", middle: "Alexander", last: "Darnell", hometown: "Orlando, FL", major: "Computer Science" },
  { id: 35, first: "Vincent", last: "Luna", hometown: "Scottsdale, AZ", major: "Mechanical Engineering" },
  { id: 36, first: "Will", middle: "Angas", last: "Pertsemlidis", hometown: "Morristown, NJ", major: "Undecided" },
  { id: 37, first: "Owen", last: "Casey", hometown: "Brooklyn, NY", major: "Statistics & Political Economy" }
];

const state = {
  mode: "mix",
  ask: "major",
  current: null,
  revealed: false,
  locked: false,
  stats: { correct: 0, total: 0, streak: 0 },
  flashSide: "name-first" // or "details-first"
};

const els = {
  name: document.getElementById("name"),
  aka: document.getElementById("aka"),
  options: document.getElementById("options"),
  reveal: document.getElementById("reveal"),
  askLabel: document.getElementById("ask-label"),
  clue: document.getElementById("clue"),
  prompt: document.getElementById("prompt"),
  btnReveal: document.getElementById("btn-reveal"),
  btnNext: document.getElementById("btn-next"),
  btnFlip: document.getElementById("btn-flip"),
  manualScore: document.getElementById("manual-score"),
  statAccuracy: document.getElementById("stat-accuracy"),
  statStreak: document.getElementById("stat-streak"),
  statRounds: document.getElementById("stat-rounds"),
  quicklist: document.getElementById("quicklist"),
  filter: document.getElementById("filter"),
  modeButtons: [...document.querySelectorAll(".chip")]
};

function init() {
  els.modeButtons.forEach(btn =>
    btn.addEventListener("click", () => switchMode(btn.dataset.mode))
  );
  els.btnReveal.addEventListener("click", reveal);
  els.btnNext.addEventListener("click", () => pickCard());
  els.btnFlip.addEventListener("click", flipFlash);
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
    if (e.key === "ArrowRight") pickCard();
  });

  renderQuicklist();
  pickCard(true);
}

function switchMode(mode) {
  state.mode = mode;
  state.ask = resolveAsk(mode);
  els.modeButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.mode === mode));
  pickCard();
}

function pickCard(firstLoad = false) {
  const previousId = state.current?.id;
  let candidate = pledges[Math.floor(Math.random() * pledges.length)];
  // avoid repeat if possible
  if (pledges.length > 1) {
    while (candidate.id === previousId) {
      candidate = pledges[Math.floor(Math.random() * pledges.length)];
    }
  }

  state.current = candidate;
  state.ask = resolveAsk(state.mode);
  state.revealed = false;
  state.locked = false;

  renderCard();
  if (!firstLoad && state.mode !== "flash") window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCard() {
  const { current, ask, mode } = state;
  if (!current) return;

  const fullName = `${current.first} ${current.middle ? current.middle + " " : ""}${current.last}`;
  const masked =
    ask === "last"
      ? `${current.first} ${current.middle ? current.middle + " " : ""}`.trim()
      : ask === "middle"
      ? `${current.first} ${current.last}`
      : state.mode === "flash" && state.flashSide === "details-first" && !state.revealed
      ? "Who is it?"
      : fullName;

  els.name.textContent = masked;
  const akaLine =
    current.nick
      ? `Goes by ${current.nick}`
      : state.mode !== "flash" && current.middle
      ? `Middle: ${current.middle}`
      : "\u00a0";
  els.aka.textContent = akaLine;

  const askText =
    ask === "major"
      ? "Guess the major"
      : ask === "home"
      ? "Guess the hometown"
      : ask === "middle"
      ? "Guess the middle name"
      : ask === "last"
      ? "Guess the last name"
      : state.flashSide === "details-first"
      ? "Given hometown + major, who is it?"
      : "Flashcard";
  els.askLabel.textContent = askText;
  els.reveal.classList.toggle("visible", state.revealed);
  const showClue = mode !== "flash"; // hide clues in both flash sides
  els.clue.style.display = showClue ? "inline-flex" : "none";
  if (showClue) els.clue.textContent = `Clue • ${current.hometown} • ${current.major}`;
  els.btnFlip.style.display = mode === "flash" ? "inline-flex" : "none";

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
  } else {
    els.prompt.style.display = "none";
    els.prompt.innerHTML = "";
    els.manualScore.style.display = "none";
    const choices = buildChoices(ask);
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
      : "last";
  const correct = state.current[key] || "—";
  const pool = [...new Set(pledges.map(p => p[key] || "—"))];
  const picked = new Set([correct]);
  while (picked.size < Math.min(4, pool.length)) {
    const candidate = pool[Math.floor(Math.random() * pool.length)];
    picked.add(candidate);
  }
  return shuffle([...picked]);
}

function handleChoice(btn, choice) {
  if (state.locked) return;
  const key =
    state.ask === "home"
      ? "hometown"
      : state.ask === "major"
      ? "major"
      : state.ask === "middle"
      ? "middle"
      : "last";
  const correct = state.current[key] || "—";
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
  if (state.mode !== "flash" || state.flashSide === "name-first") {
    renderRevealDetails();
  }
  els.reveal.classList.add("visible");
}

function finishRound(isCorrect) {
  state.stats.total += 1;
  state.stats.correct += isCorrect ? 1 : 0;
  state.stats.streak = isCorrect ? state.stats.streak + 1 : 0;
  updateStats();
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

function resolveAsk(mode) {
  if (mode === "mix") return randomAsk();
  if (mode === "major") return "major";
  if (mode === "home") return "home";
  if (mode === "middle") return "middle";
  if (mode === "last") return "last";
  return "flash";
}

init();
