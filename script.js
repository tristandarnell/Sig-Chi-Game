const pledges = [
  { id: 1, first: "Aarav", last: "Mehta", hometown: "Lagos, Nigeria", major: "Economics", image: "Images/Aarav Mehta.jpeg" },
  { id: 2, first: "Adi", last: "Bala", hometown: "Potomac, MD", major: "Political Science", image: "Images/Adi Bala.jpeg" },
  { id: 3, first: "Alex", middle: "Dao Ming", last: "Chang", hometown: "New York City, NY", major: "Economics", image: "Images/Alex Chang.jpeg" },
  { id: 4, first: "Allen", middle: "Allen", last: "Hutchinson", hometown: "Greenville, NC", major: "Mathematics", image: "Images/Allen Hutchinson.jpeg" },
  { id: 5, first: "Amar", middle: "Singh", last: "Walia", hometown: "New Orleans, LA", major: "Economics", image: "Images/Amar Walia.jpeg" },
  { id: 6, first: "Andrew", middle: "Harrison", last: "Jaynes", hometown: "New City, NY", major: "Computer Science", image: "Images/Andrew Jaynes.jpeg" },
  { id: 7, first: "Arihant", last: "Rajesh", hometown: "Old Tappan, NJ", major: "Electrical & Computer Engineering", image: "Images/Arihant Rajesh.png" },
  { id: 8, first: "Carter", middle: "Michael", last: "Burke", hometown: "Houston, TX", major: "Statistics & Economics", image: "Images/Carter Burke.jpeg" },
  { id: 9, first: "Cole", middle: "Matthew", last: "Burke", hometown: "Davison, MI", major: "Computer Science" },
  { id: 10, first: "Coleson", middle: "Kennedy", last: "Kovacs", hometown: "Colorado Springs, CO", major: "Biomedical Engineering", image: "Images/Coleson Kovacs.jpeg" },
  { id: 11, first: "Danny", middle: "Reuben", last: "Kriegel", hometown: "Deerfield, IL", major: "Biomedical Engineering", image: "Images/Daniel Kriegal.jpeg" },
  { id: 12, first: "Evan", middle: "Michael", last: "Lehmann", hometown: "Waco, TX", major: "Economics", image: "Images/Evan Lehmann.jpeg" },
  { id: 13, first: "Finn", last: "Kelly", hometown: "Villanova, PA", major: "Mathematics", image: "Images/Finn Kelly.jpeg" },
  { id: 14, first: "Grant", middle: "Hamilton", last: "Mayer", hometown: "Dover, MA", major: "Mathematics", image: "Images/Grant Mayer.jpeg" },
  { id: 15, first: "Ian", middle: "Jacob", last: "Anderson", hometown: "Knoxville, TN", major: "Biomedical Engineering", image: "Images/Ian Anderson.jpeg" },
  { id: 16, first: "Jack", middle: "Post", last: "Dahler", hometown: "Bernardsville, NJ", major: "Economics", image: "Images/Jack Dahler.jpeg" },
  { id: 17, first: "Jack", middle: "Tyler", last: "Khachatryan", hometown: "Salt Lake City, UT", major: "Biomedical Engineering", image: "Images/Jack Khachatryan.jpeg" },
  { id: 18, first: "Jack", middle: "Morgan", last: "Reed", hometown: "Arlington, VA", major: "Electrical & Computer Engineering", image: "Images/Jack Reed.jpeg" },
  { id: 19, first: "Jacob", middle: "Thomas", last: "Kim", hometown: "Philadelphia, PA", major: "Economics", image: "Images/Jacob Kim.jpeg" },
  { id: 20, first: "Jerry", middle: "Lin", last: "Xu", hometown: "San Ramon, CA", major: "ECE / Computer Science", image: "Images/Jerry Xu.png" },
  { id: 21, first: "Jonathan", middle: "Tyler", last: "Ransom", hometown: "Wilmington, DE", major: "Electrical & Computer Engineering", image: "Images/Jonathan Ransom.jpeg" },
  { id: 22, first: "Joseph", last: "Delgado", hometown: "Miami, FL", major: "Romance Studies", image: "Images/Joseph Delgado.jpeg" },
  { id: 23, first: "Julien", middle: "Emanuel", last: "Halleman", hometown: "Annapolis, MD", major: "Political Science", image: "Images/Julian Halleman.jpeg" },
  { id: 24, first: "Leonardo", nick: "Leo", middle: "Yuchen", last: "Bai", hometown: "Nashville, TN", major: "Economics & Statistics", image: "Images/Leo Bai.jpeg" },
  { id: 25, first: "Miles", middle: "Rocco", last: "Blackhart", hometown: "Berkeley, CA", major: "Economics", image: "Images/Miles Blackhart.jpeg" },
  { id: 26, first: "Parker", middle: "Baird", last: "Wilding", hometown: "Sarasota, FL", major: "Mechanical Engineering", image: "Images/Parker Wilding.jpeg" },
  { id: 27, first: "Parker", middle: "Daisuke", last: "Hayashi", hometown: "Greenwich, CT", major: "Computer Science", image: "Images/Parker Hayashi.jpeg" },
  { id: 28, first: "Parth", last: "Shah", hometown: "Mumbai, India", major: "Economics", image: "Images/Parth Shah.jpeg" },
  { id: 29, first: "Paul", middle: "James", last: "Anderson", hometown: "Boise, ID", major: "Biology", image: "Images/Paul Anderson.jpeg" },
  { id: 30, first: "Quinn", last: "Quinn", hometown: "Siler City, NC", major: "Mechanical Engineering", image: "Images/Quinn.jpeg" },
  { id: 31, first: "Rishi", middle: "Anil", last: "Kawediya", hometown: "Folsom, CA", major: "Economics", image: "Images/Rishi Kaweiya.jpeg" },
  { id: 32, first: "Ryan", middle: "Christopher", last: "Growney", hometown: "New York City, NY", major: "Mathematics", image: "Images/Ryan Growney.jpeg" },
  { id: 33, first: "Ryan", middle: "Hale", last: "Readlinger", hometown: "Chatham, NJ", major: "Biology", image: "Images/Ryan Readlinger.jpeg" },
  { id: 34, first: "Tristan", middle: "Alexander", last: "Darnell", hometown: "Orlando, FL", major: "Computer Science", image: "Images/Tristan Darnell.jpeg" },
  { id: 35, first: "Vincent", last: "Luna", hometown: "Scottsdale, AZ", major: "Mechanical Engineering", image: "Images/Vincent Luna.jpeg" },
  { id: 36, first: "Will", middle: "Angas", last: "Pertsemlidis", hometown: "Morristown, NJ", major: "Undecided", image: "Images/Will Persemlidis.jpeg" },
  { id: 37, first: "Owen", last: "Casey", hometown: "Brooklyn, NY", major: "Statistics & Political Economy", image: "Images/Owen Casey.jpeg" }
];

const state = {
  mode: "mix",
  ask: "major",
  current: null,
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
  els.modeButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.mode === mode));
  pickCard();
}

function pickCard(firstLoad = false) {
  const previousId = state.current?.id;
  const candidate = weightedPick(previousId, state.mode === "photo");
  const middles = pledges.filter(p => p.middle);

  state.current = candidate;
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
  state.revealed = false;
  state.locked = false;

  renderCard();
}

function renderCard() {
  const { current, ask, mode } = state;
  if (!current) return;
  document.querySelectorAll(".hint-line").forEach(el => el.remove());

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
      ? "Guess the hometown"
      : ask === "middle"
      ? "Guess the middle name"
      : ask === "last"
      ? "Guess the last name"
      : ask === "photo"
      ? "Who is this? Pick name + major"
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
      : "last";
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
  if (!state.current || state.mode === "flash" || state.mode === "photo") return;
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
  const cur = state.progress[id] || { c: 0, t: 0 };
  cur.t += 1;
  cur.c += isCorrect ? 1 : 0;
  // per-ask buckets
  cur[askType] = cur[askType] || { c: 0, t: 0 };
  cur[askType].t += 1;
  cur[askType].c += isCorrect ? 1 : 0;
  state.progress[id] = cur;
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
  const modes = ["major", "home", "middle", "last"];
  els.modeAccuracy.innerHTML = "";
  modes.forEach(m => {
    const attempts = pledges.reduce((sum, p) => sum + ((state.progress[p.id]?.[m]?.t) || 0), 0);
    const correct = pledges.reduce((sum, p) => sum + ((state.progress[p.id]?.[m]?.c) || 0), 0);
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
