/* =========================================================
   Little Learners — offline toddler learning app
   Vanilla JS only. No libraries, no network, no backend.
   ========================================================= */

/* ---------------------------------------------------------
   1. DATA  (edit / extend these arrays freely)
   --------------------------------------------------------- */

const objectItems = [
  { id: "apple", name: "Apple", nepaliName: "स्याउ", visual: "🍎", color: "#ef5350" },
  { id: "banana", name: "Banana", nepaliName: "केरा", visual: "🍌", color: "#ffca28" },
  { id: "ball", name: "Ball", nepaliName: "बल", visual: "⚽", color: "#42a5f5" },
  { id: "cat", name: "Cat", nepaliName: "बिरालो", visual: "🐱", color: "#ffb74d" },
  { id: "dog", name: "Dog", nepaliName: "कुकुर", visual: "🐶", color: "#a1887f" },
  { id: "car", name: "Car", nepaliName: "कार", visual: "🚗", color: "#ef5350" },
  { id: "chair", name: "Chair", nepaliName: "कुर्सी", visual: "🪑", color: "#8d6e63" },
  { id: "pencil", name: "Pencil", nepaliName: "सिसाकलम", visual: "✏️", color: "#fdd835" },
  { id: "camera", name: "Camera", nepaliName: "क्यामेरा", visual: "📷", color: "#616161" },
  { id: "chick", name: "Chick", nepaliName: "चल्ला", visual: "🐤", color: "#ffee58" },
  { id: "jam", name: "Jam", nepaliName: "जाम", visual: "🍯", color: "#f4a261" },
  { id: "bathtub", name: "Bathtub", nepaliName: "बाथटब", visual: "🛁", color: "#4dd0e1" },
  { id: "flower", name: "Flower", nepaliName: "फूल", visual: "🌸", color: "#f06292" },
  { id: "star", name: "Star", nepaliName: "तारा", visual: "⭐", color: "#ffd54f" },
  { id: "sun", name: "Sun", nepaliName: "घाम", visual: "☀️", color: "#ffb300" },
  { id: "house", name: "House", nepaliName: "घर", visual: "🏠", color: "#90a4ae" },
  { id: "book", name: "Book", nepaliName: "किताब", visual: "📕", color: "#7e57c2" },
  { id: "fish", name: "Fish", nepaliName: "माछा", visual: "🐟", color: "#26c6da" },
];

const englishLetters = [
  { letter: "A", lowercase: "a", word: "Apple", visual: "🍎" },
  { letter: "B", lowercase: "b", word: "Ball", visual: "⚽" },
  { letter: "C", lowercase: "c", word: "Cat", visual: "🐱" },
  { letter: "D", lowercase: "d", word: "Dog", visual: "🐶" },
  { letter: "E", lowercase: "e", word: "Egg", visual: "🥚" },
  { letter: "F", lowercase: "f", word: "Fish", visual: "🐟" },
  { letter: "G", lowercase: "g", word: "Grapes", visual: "🍇" },
  { letter: "H", lowercase: "h", word: "House", visual: "🏠" },
  { letter: "I", lowercase: "i", word: "Ice cream", visual: "🍦" },
  { letter: "J", lowercase: "j", word: "Jam", visual: "🍯" },
  { letter: "K", lowercase: "k", word: "Kite", visual: "🪁" },
  { letter: "L", lowercase: "l", word: "Lion", visual: "🦁" },
  { letter: "M", lowercase: "m", word: "Moon", visual: "🌙" },
  { letter: "N", lowercase: "n", word: "Nest", visual: "🪺" },
  { letter: "O", lowercase: "o", word: "Orange", visual: "🍊" },
  { letter: "P", lowercase: "p", word: "Pencil", visual: "✏️" },
  { letter: "Q", lowercase: "q", word: "Queen", visual: "👑" },
  { letter: "R", lowercase: "r", word: "Rainbow", visual: "🌈" },
  { letter: "S", lowercase: "s", word: "Sun", visual: "☀️" },
  { letter: "T", lowercase: "t", word: "Tree", visual: "🌳" },
  { letter: "U", lowercase: "u", word: "Umbrella", visual: "☂️" },
  { letter: "V", lowercase: "v", word: "Van", visual: "🚐" },
  { letter: "W", lowercase: "w", word: "Watch", visual: "⌚" },
  { letter: "X", lowercase: "x", word: "Xylophone", visual: "🎹" },
  { letter: "Y", lowercase: "y", word: "Yak", visual: "🐂" },
  { letter: "Z", lowercase: "z", word: "Zebra", visual: "🦓" },
];

/* Nepali (Devanagari) vowels — 13 स्वर वर्ण */
const nepaliVowels = [
  { letter: "अ", word: "अनार", visual: "🍎", type: "vowel" },
  { letter: "आ", word: "आँप", visual: "🥭", type: "vowel" },
  { letter: "इ", word: "इँट", visual: "🧱", type: "vowel" },
  { letter: "ई", word: "ईश्वर", visual: "🙏", type: "vowel" },
  { letter: "उ", word: "उखु", visual: "🎋", type: "vowel" },
  { letter: "ऊ", word: "ऊन", visual: "🧶", type: "vowel" },
  { letter: "ऋ", word: "ऋषि", visual: "🧘", type: "vowel" },
  { letter: "ए", word: "एक", visual: "☝️", type: "vowel" },
  { letter: "ऐ", word: "ऐना", visual: "🪞", type: "vowel" },
  { letter: "ओ", word: "ओखर", visual: "🌰", type: "vowel" },
  { letter: "औ", word: "औषधी", visual: "💊", type: "vowel" },
  { letter: "अं", word: "अंगुर", visual: "🍇", type: "vowel" },
  { letter: "अः", word: "अःहा", visual: "😀", type: "vowel" },
];

/* Nepali (Devanagari) consonants — 36 व्यञ्जन वर्ण */
const nepaliConsonants = [
  { letter: "क", word: "कमल", visual: "🌸", type: "consonant" },
  { letter: "ख", word: "खरायो", visual: "🐰", type: "consonant" },
  { letter: "ग", word: "गाई", visual: "🐄", type: "consonant" },
  { letter: "घ", word: "घर", visual: "🏠", type: "consonant" },
  { letter: "ङ", word: "ङ्याउ", visual: "🐱", type: "consonant" },
  { letter: "च", word: "चरा", visual: "🐦", type: "consonant" },
  { letter: "छ", word: "छाता", visual: "☂️", type: "consonant" },
  { letter: "ज", word: "जुत्ता", visual: "👟", type: "consonant" },
  { letter: "झ", word: "झरना", visual: "💦", type: "consonant" },
  { letter: "ञ", word: "ञ", visual: "🔤", type: "consonant" },
  { letter: "ट", word: "टमाटर", visual: "🍅", type: "consonant" },
  { letter: "ठ", word: "ठूलो हात्ती", visual: "🐘", type: "consonant" },
  { letter: "ड", word: "डमरु", visual: "🥁", type: "consonant" },
  { letter: "ढ", word: "ढोका", visual: "🚪", type: "consonant" },
  { letter: "ण", word: "ण", visual: "🔤", type: "consonant" },
  { letter: "त", word: "तारा", visual: "⭐", type: "consonant" },
  { letter: "थ", word: "थाल", visual: "🍽️", type: "consonant" },
  { letter: "द", word: "दियो", visual: "🪔", type: "consonant" },
  { letter: "ध", word: "धागो", visual: "🧵", type: "consonant" },
  { letter: "न", word: "नाक", visual: "👃", type: "consonant" },
  { letter: "प", word: "पानी", visual: "💧", type: "consonant" },
  { letter: "फ", word: "फूल", visual: "🌷", type: "consonant" },
  { letter: "ब", word: "बदाम", visual: "🥜", type: "consonant" },
  { letter: "भ", word: "भालु", visual: "🐻", type: "consonant" },
  { letter: "म", word: "माछा", visual: "🐟", type: "consonant" },
  { letter: "य", word: "यज्ञ", visual: "🔥", type: "consonant" },
  { letter: "र", word: "रुख", visual: "🌳", type: "consonant" },
  { letter: "ल", word: "लट्ठी", visual: "🦯", type: "consonant" },
  { letter: "व", word: "वन", visual: "🌲", type: "consonant" },
  { letter: "श", word: "शंख", visual: "🐚", type: "consonant" },
  { letter: "ष", word: "षटकोण", visual: "⬢", type: "consonant" },
  { letter: "स", word: "सूर्य", visual: "☀️", type: "consonant" },
  { letter: "ह", word: "हाँस", visual: "🦆", type: "consonant" },
  { letter: "क्ष", word: "क्षमा", visual: "🙏", type: "consonant" },
  { letter: "त्र", word: "त्रिशूल", visual: "🔱", type: "consonant" },
  { letter: "ज्ञ", word: "ज्ञान", visual: "📖", type: "consonant" },
];

const nepaliLetters = nepaliVowels.concat(nepaliConsonants);


const numberItems = [
  { number: 1, wordEnglish: "One", wordNepali: "एक", visual: "⭐" },
  { number: 2, wordEnglish: "Two", wordNepali: "दुई", visual: "🍎" },
  { number: 3, wordEnglish: "Three", wordNepali: "तीन", visual: "🐟" },
  { number: 4, wordEnglish: "Four", wordNepali: "चार", visual: "🌸" },
  { number: 5, wordEnglish: "Five", wordNepali: "पाँच", visual: "🎈" },
  { number: 6, wordEnglish: "Six", wordNepali: "छ", visual: "🍌" },
  { number: 7, wordEnglish: "Seven", wordNepali: "सात", visual: "🐤" },
  { number: 8, wordEnglish: "Eight", wordNepali: "आठ", visual: "🚗" },
  { number: 9, wordEnglish: "Nine", wordNepali: "नौ", visual: "🦋" },
  { number: 10, wordEnglish: "Ten", wordNepali: "दश", visual: "🌟" },
];

const englishWords = [
  { word: "cat", letters: ["c", "a", "t"], visual: "🐱" },
  { word: "bat", letters: ["b", "a", "t"], visual: "🦇" },
  { word: "hat", letters: ["h", "a", "t"], visual: "🎩" },
  { word: "mat", letters: ["m", "a", "t"], visual: "🧿" },
  { word: "dog", letters: ["d", "o", "g"], visual: "🐶" },
  { word: "log", letters: ["l", "o", "g"], visual: "🪵" },
  { word: "sun", letters: ["s", "u", "n"], visual: "☀️" },
  { word: "run", letters: ["r", "u", "n"], visual: "🏃" },
  { word: "pen", letters: ["p", "e", "n"], visual: "🖊️" },
  { word: "hen", letters: ["h", "e", "n"], visual: "🐔" },
  { word: "pig", letters: ["p", "i", "g"], visual: "🐷" },
  { word: "big", letters: ["b", "i", "g"], visual: "🐘" },
  { word: "cup", letters: ["c", "u", "p"], visual: "🥤" },
  { word: "bus", letters: ["b", "u", "s"], visual: "🚌" },
  { word: "car", letters: ["c", "a", "r"], visual: "🚗" },
  { word: "van", letters: ["v", "a", "n"], visual: "🚐" },
];

/* Beginner Nepali words (some have more than two aksharas — the UI label
   says "Beginner Nepali Words" for that reason). */
const nepaliWords = [
  { word: "घर", characters: ["घ", "र"], visual: "🏠", english: "House" },
  { word: "कलम", characters: ["क", "ल", "म"], visual: "🖊️", english: "Pen" },
  { word: "कमल", characters: ["क", "म", "ल"], visual: "🌸", english: "Lotus" },
  { word: "गाई", characters: ["गा", "ई"], visual: "🐄", english: "Cow" },
  { word: "पानी", characters: ["पा", "नी"], visual: "💧", english: "Water" },
  { word: "माला", characters: ["मा", "ला"], visual: "📿", english: "Garland" },
  { word: "बाबा", characters: ["बा", "बा"], visual: "👨", english: "Father" },
  { word: "आमा", characters: ["आ", "मा"], visual: "👩", english: "Mother" },
  { word: "नाम", characters: ["ना", "म"], visual: "🏷️", english: "Name" },
  { word: "फल", characters: ["फ", "ल"], visual: "🍎", english: "Fruit" },
];

const MODULES = [
  { id: "objects", label: "Object Finder", sub: "Find and tap!", emoji: "🔎", color: "#ffe8d6" },
  { id: "english", label: "English Alphabet", sub: "A – Z", emoji: "🔤", color: "#e3f2ff" },
  { id: "nepali", label: "नेपाली वर्णमाला", sub: "क, ख, ग…", emoji: "🕉️", color: "#ffe9f3" },
  { id: "numbers", label: "Numbers 1–10", sub: "Count with me", emoji: "🔢", color: "#e8fbef" },
  { id: "match", label: "Match the Following", sub: "Tap two friends", emoji: "🧩", color: "#f3ecff" },
  { id: "ewords", label: "English Three-Letter Words", sub: "cat • dog • sun", emoji: "📖", color: "#fff6d6" },
  { id: "nwords", label: "Beginner Nepali Words", sub: "घर • कलम • पानी", emoji: "📚", color: "#e6fbfa" },
  { id: "settings", label: "Parent Settings", sub: "Hold to open", emoji: "⚙️", color: "#efefef" },
];

const PRAISE = ["Great job!", "Well done!", "Awesome!", "Super!", "You did it!", "Brilliant!"];
const GENTLE = ["Try again!", "Almost — try again!", "Keep going!", "Nice try!"];

/* ---------------------------------------------------------
   2. STATE + STORAGE
   --------------------------------------------------------- */

const DEFAULT_SETTINGS = {
  voiceOn: true,
  soundOn: true,
  englishRate: 0.8,
  nepaliRate: 0.75,
  language: "both", // "en" | "ne" | "both"
  difficulty: "easy", // easy=3, medium=4, hard=5
  enabledModules: MODULES.map((m) => m.id),
};

const appState = {
  screen: "home",
  mode: null,
  stars: 0,
  settings: { ...DEFAULT_SETTINGS },
  game: {}, // scratch space for the active game
};

function saveProgress() {
  try {
    localStorage.setItem(
      "littleLearners",
      JSON.stringify({ stars: appState.stars, settings: appState.settings })
    );
  } catch (e) {
    /* storage unavailable — keep playing in memory */
  }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem("littleLearners");
    if (!raw) return;
    const data = JSON.parse(raw);
    if (typeof data.stars === "number") appState.stars = data.stars;
    if (data.settings) appState.settings = { ...DEFAULT_SETTINGS, ...data.settings };
    if (!Array.isArray(appState.settings.enabledModules)) {
      appState.settings.enabledModules = DEFAULT_SETTINGS.enabledModules.slice();
    }
  } catch (e) {
    /* corrupt data — fall back to defaults */
  }
}

function addStar(n) {
  appState.stars += n || 1;
  saveProgress();
  const el = document.getElementById("scoreValue");
  if (el) el.textContent = appState.stars;
}

function choiceCount() {
  return appState.settings.difficulty === "hard" ? 5 : appState.settings.difficulty === "medium" ? 4 : 3;
}

/* ---------------------------------------------------------
   3. UTILITIES
   --------------------------------------------------------- */

function shuffle(list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomOf(list) {
  return list[Math.floor(Math.random() * list.length)];
}

/** Pick `count` unique distractors from pool, excluding the correct item. */
function pickDistractors(pool, correct, count, keyFn) {
  const key = keyFn || ((x) => x);
  const seen = new Set([key(correct)]);
  const out = [];
  for (const item of shuffle(pool)) {
    if (out.length >= count) break;
    const k = key(item);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(item);
  }
  return out;
}

/** Build a shuffled choice list that always contains the correct answer. */
function buildChoices(pool, correct, keyFn) {
  const n = Math.max(1, Math.min(choiceCount(), pool.length) - 1);
  return shuffle([correct, ...pickDistractors(pool, correct, n, keyFn)]);
}

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

let toastTimer = null;
function toast(message) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = message;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

function confetti() {
  const layer = document.getElementById("confetti");
  if (!layer) return;
  const bits = ["⭐", "🎉", "✨", "🌈", "🎈"];
  for (let i = 0; i < 14; i++) {
    const b = document.createElement("i");
    b.textContent = randomOf(bits);
    b.style.left = Math.random() * 96 + "vw";
    b.style.animationDelay = Math.random() * 0.4 + "s";
    layer.appendChild(b);
    setTimeout(() => b.remove(), 2200);
  }
}

/* ---------------------------------------------------------
   4. AUDIO (Web Audio API) — safe if unavailable
   --------------------------------------------------------- */

let audioCtx = null;
let userInteracted = false;

function ensureAudio() {
  if (!userInteracted) return null;
  try {
    if (!audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      audioCtx = new Ctx();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  } catch (e) {
    return null;
  }
}

function tone(freq, startAt, duration, volume) {
  const ctx = ensureAudio();
  if (!ctx || !appState.settings.soundOn) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    const t0 = ctx.currentTime + startAt;
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(volume || 0.18, t0 + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + duration + 0.05);
  } catch (e) {
    /* ignore audio errors */
  }
}

function playSuccessSound() {
  tone(523.25, 0, 0.18);
  tone(659.25, 0.14, 0.18);
  tone(783.99, 0.28, 0.28);
}

function playTryAgainSound() {
  tone(392.0, 0, 0.16, 0.12);
  tone(329.63, 0.14, 0.22, 0.12);
}

function playCelebrateSound() {
  [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, i * 0.12, 0.3));
}

/** Short bright blip used when a dot is connected. */
function playPopSound(step) {
  const base = 440 + ((step || 0) % 8) * 40;
  tone(base, 0, 0.1, 0.14);
}

/* Font stack used for offscreen glyph rendering (matches the CSS font). */
const FONT_STACK =
  '"Segoe UI","Noto Sans","Noto Sans Devanagari","Nirmala UI","Mangal",system-ui,-apple-system,"Helvetica Neue",Arial,sans-serif';


/* ---------------------------------------------------------
   5. SPEECH (Web Speech API) — safe if unavailable
   --------------------------------------------------------- */

let voices = [];
function refreshVoices() {
  try {
    voices = window.speechSynthesis ? window.speechSynthesis.getVoices() || [] : [];
  } catch (e) {
    voices = [];
  }
}
if (window.speechSynthesis) {
  refreshVoices();
  window.speechSynthesis.onvoiceschanged = refreshVoices;
}

function pickVoice(langCode) {
  if (!voices.length) refreshVoices();
  if (!voices.length) return null;
  const base = langCode.split("-")[0];
  return (
    voices.find((v) => v.lang && v.lang.toLowerCase() === langCode.toLowerCase()) ||
    voices.find((v) => v.lang && v.lang.toLowerCase().startsWith(base)) ||
    (base === "ne" ? voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("hi")) : null) ||
    voices.find((v) => v.default) ||
    voices[0] ||
    null
  );
}

function stopSpeech() {
  try {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  } catch (e) {
    /* ignore */
  }
}

function speak(text, languageCode) {
  if (!text) return;
  if (!appState.settings.voiceOn || !userInteracted) return;
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") return;
  try {
    stopSpeech();
    const lang = languageCode || "en-US";
    const u = new SpeechSynthesisUtterance(String(text));
    u.lang = lang;
    u.rate = lang.startsWith("ne") ? appState.settings.nepaliRate : appState.settings.englishRate;
    u.pitch = 1.1;
    u.volume = 1;
    const v = pickVoice(lang);
    if (v) u.voice = v;
    window.speechSynthesis.speak(u);
  } catch (e) {
    /* speech unavailable — stay silent, never show an error to the child */
  }
}

function speakEnglish(text) {
  if (appState.settings.language === "ne") return;
  speak(text, "en-US");
}

function speakNepali(text) {
  if (appState.settings.language === "en") return;
  speak(text, "ne-NP");
}

/** Speak English then Nepali (respecting the language preference). */
function speakBoth(englishText, nepaliText) {
  const pref = appState.settings.language;
  if (pref === "en") return speakEnglish(englishText);
  if (pref === "ne") return speakNepali(nepaliText || englishText);
  speakEnglish(englishText);
  if (nepaliText) setTimeout(() => speak(nepaliText, "ne-NP"), 1200);
}

/* Speech recognition (optional) */
function getRecognizer(lang) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;
  try {
    const r = new SR();
    r.lang = lang;
    r.interimResults = false;
    r.maxAlternatives = 3;
    r.continuous = false;
    return r;
  } catch (e) {
    return null;
  }
}

/* ---------------------------------------------------------
   6. SHELL / HEADER
   --------------------------------------------------------- */

const root = document.getElementById("app");

document.addEventListener("pointerdown", () => {
  if (!userInteracted) {
    userInteracted = true;
    ensureAudio();
  }
}, { capture: true });

function moduleLabel(id) {
  const m = MODULES.find((x) => x.id === id);
  return m ? m.label : "Little Learners";
}

/** Renders header + empty content area, returns the content element. */
function renderShell(title, options) {
  const opts = options || {};
  stopSpeech();
  root.innerHTML = "";

  const bar = el("div", "topbar");

  if (!opts.isHome) {
    const home = el("button", "btn ghost", "🏠 Home");
    home.setAttribute("aria-label", "Go to home screen");
    home.addEventListener("click", () => navigate("home"));
    bar.appendChild(home);
  } else {
    bar.appendChild(el("div", "", '<span style="font-size:2rem" aria-hidden="true">🧸</span>'));
  }

  bar.appendChild(el("h1", "", esc(title)));

  if (opts.onRestart) {
    const restart = el("button", "btn blue small", "🔄 Restart");
    restart.setAttribute("aria-label", "Restart this activity");
    restart.addEventListener("click", opts.onRestart);
    bar.appendChild(restart);
  }

  const mute = el("button", "btn small " + (appState.settings.soundOn ? "green" : "ghost"),
    appState.settings.soundOn ? "🔊" : "🔇");
  mute.setAttribute("aria-label", appState.settings.soundOn ? "Mute sounds and voice" : "Unmute sounds and voice");
  mute.addEventListener("click", () => {
    const on = !appState.settings.soundOn;
    appState.settings.soundOn = on;
    appState.settings.voiceOn = on;
    if (!on) stopSpeech();
    saveProgress();
    navigate(appState.screen, true);
  });
  bar.appendChild(mute);

  const score = el("div", "score", '⭐ <span id="scoreValue">' + appState.stars + "</span>");
  score.setAttribute("aria-label", "Stars earned: " + appState.stars);
  bar.appendChild(score);

  root.appendChild(bar);

  const content = el("div", "content");
  root.appendChild(content);
  return content;
}

function modesBar(modes, current, onPick) {
  const wrap = el("div", "modes");
  modes.forEach((m) => {
    const b = el("button", "btn small " + (m.id === current ? "violet" : "ghost"), esc(m.label));
    b.setAttribute("aria-label", m.label + " mode");
    b.setAttribute("aria-pressed", String(m.id === current));
    b.addEventListener("click", () => onPick(m.id));
    wrap.appendChild(b);
  });
  return wrap;
}

function speakerButton(label, onClick) {
  const b = el("button", "btn green", "🔈 " + esc(label));
  b.setAttribute("aria-label", "Listen: " + label);
  b.addEventListener("click", onClick);
  return b;
}

function feedbackBox() {
  return el("div", "feedback");
}

function showFeedback(box, text, soft) {
  if (!box) return;
  box.textContent = text;
  box.className = "feedback" + (soft ? " soft" : "");
}

function progressBar(done, total) {
  const p = el("div", "progress");
  p.setAttribute("role", "progressbar");
  p.setAttribute("aria-valuenow", String(done));
  p.setAttribute("aria-valuemax", String(total));
  const i = document.createElement("i");
  i.style.width = Math.round((done / Math.max(1, total)) * 100) + "%";
  p.appendChild(i);
  return p;
}

function praise() { return randomOf(PRAISE); }
function gentle() { return randomOf(GENTLE); }

function celebrateCorrect(box, message) {
  playSuccessSound();
  addStar(1);
  showFeedback(box, message || praise());
  confetti();
}

function gentleWrong(box, message) {
  playTryAgainSound();
  showFeedback(box, message || gentle(), true);
}

/* ---------------------------------------------------------
   7. CANVAS WRITING BOARD
   --------------------------------------------------------- */

function createCanvasWritingBoard(guideText, options) {
  const opts = options || {};
  const wrap = el("div", "canvas-wrap");
  const guide = el("div", "canvas-guide" + (opts.rules === false ? "" : " rules"), esc(guideText || ""));
  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-label", "Drawing area for writing " + (guideText || ""));
  wrap.appendChild(guide);
  wrap.appendChild(canvas);

  let ctx = null;
  let drawing = false;
  let hasDrawn = false;
  let last = null;

  function resize() {
    const rect = wrap.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    const data = ctx && canvas.width ? ctx.getImageData(0, 0, canvas.width, canvas.height) : null;
    canvas.width = Math.max(1, Math.floor(rect.width * ratio));
    canvas.height = Math.max(1, Math.floor(rect.height * ratio));
    ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = opts.color || "#ff6f3d";
    ctx.lineWidth = Math.max(8, 10 * ratio);
    if (data) { try { ctx.putImageData(data, 0, 0); } catch (e) { /* size changed */ } }
  }

  function pos(e) {
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    return { x: (e.clientX - rect.left) * ratio, y: (e.clientY - rect.top) * ratio };
  }

  function start(e) {
    e.preventDefault();
    if (!ctx) resize();
    drawing = true;
    hasDrawn = true;
    last = pos(e);
    ctx.beginPath();
    ctx.arc(last.x, last.y, ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.fillStyle = ctx.strokeStyle;
    ctx.fill();
    if (canvas.setPointerCapture && e.pointerId !== undefined) {
      try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
    }
  }

  function move(e) {
    if (!drawing || !ctx) return;
    e.preventDefault();
    const p = pos(e);
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last = p;
  }

  function end() { drawing = false; }

  canvas.addEventListener("pointerdown", start);
  canvas.addEventListener("pointermove", move);
  canvas.addEventListener("pointerup", end);
  canvas.addEventListener("pointercancel", end);
  canvas.addEventListener("pointerleave", end);
  canvas.addEventListener("touchstart", (e) => e.preventDefault(), { passive: false });
  canvas.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });

  window.addEventListener("resize", resize);
  setTimeout(resize, 30);

  return {
    element: wrap,
    clear() {
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      hasDrawn = false;
    },
    hasDrawing() { return hasDrawn; },
    setGuide(text) { guide.textContent = text; },
  };
}

/* ---------------------------------------------------------
   7b. CONNECT-THE-DOTS LETTER / NUMBER BUILDER
   Dots are derived automatically from the glyph outline, so it works
   for A–Z, 0–9 and every Devanagari letter without hand-made paths.
   --------------------------------------------------------- */

const dotPathCache = Object.create(null);

/** Render a glyph offscreen and return ordered dot strokes in 0..1 coords. */
function glyphDotStrokes(text) {
  if (dotPathCache[text]) return dotPathCache[text];
  const S = 200;
  const off = document.createElement("canvas");
  off.width = S;
  off.height = S;
  const c = off.getContext("2d");
  if (!c) return [];
  c.fillStyle = "#fff";
  c.fillRect(0, 0, S, S);
  c.fillStyle = "#000";
  c.textAlign = "center";
  c.textBaseline = "middle";
  let size = 150;
  c.font = "700 " + size + "px " + FONT_STACK;
  const w = c.measureText(text).width;
  if (w > S * 0.78) {
    size = Math.max(40, Math.floor((size * S * 0.78) / w));
    c.font = "700 " + size + "px " + FONT_STACK;
  }
  c.fillText(text, S / 2, S / 2);

  const img = c.getImageData(0, 0, S, S).data;
  const on = new Uint8Array(S * S);
  for (let i = 0; i < S * S; i++) on[i] = img[i * 4] < 128 ? 1 : 0;
  const get = (x, y) => (x < 0 || y < 0 || x >= S || y >= S ? 0 : on[y * S + x]);

  const seen = new Uint8Array(S * S);
  const dirs = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
  const strokes = [];

  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      if (!get(x, y) || seen[y * S + x]) continue;
      // flood fill the component so we only trace its outer contour once
      const stack = [[x, y]];
      const comp = [];
      seen[y * S + x] = 1;
      while (stack.length) {
        const p = stack.pop();
        comp.push(p);
        for (let d = 0; d < 8; d++) {
          const nx = p[0] + dirs[d][0];
          const ny = p[1] + dirs[d][1];
          if (get(nx, ny) && !seen[ny * S + nx]) {
            seen[ny * S + nx] = 1;
            stack.push([nx, ny]);
          }
        }
      }
      if (comp.length < 40) continue;

      // radial-sweep contour trace starting at this top-left pixel
      const contour = [[x, y]];
      let cur = [x, y];
      let dir = 0;
      for (let step = 0; step < 6000; step++) {
        let found = false;
        for (let i = 0; i < 8; i++) {
          const nd = (dir + 6 + i) % 8;
          const nx = cur[0] + dirs[nd][0];
          const ny = cur[1] + dirs[nd][1];
          if (get(nx, ny)) {
            cur = [nx, ny];
            dir = nd;
            contour.push(cur);
            found = true;
            break;
          }
        }
        if (!found) break;
        if (cur[0] === x && cur[1] === y) break;
      }
      if (contour.length < 12) continue;

      // resample evenly by arc length into a friendly number of dots
      let len = 0;
      const acc = [0];
      for (let i = 1; i < contour.length; i++) {
        len += Math.hypot(contour[i][0] - contour[i - 1][0], contour[i][1] - contour[i - 1][1]);
        acc.push(len);
      }
      const count = Math.max(6, Math.min(22, Math.round(len / 22)));
      const dots = [];
      let idx = 0;
      for (let k = 0; k < count; k++) {
        const target = (len * k) / count;
        while (idx < acc.length - 1 && acc[idx] < target) idx++;
        dots.push({ x: contour[idx][0] / S, y: contour[idx][1] / S });
      }
      strokes.push({ dots, minX: Math.min.apply(null, dots.map((d) => d.x)) });
    }
  }

  strokes.sort((a, b) => a.minX - b.minX);
  const result = strokes.map((s) => s.dots);
  dotPathCache[text] = result;
  return result;
}

/**
 * Connect-the-dots board: one dot blinks, the rest are faded. Tapping the
 * blinking dot draws the next segment and the following dot starts blinking.
 */
function createDotTraceBoard(text, options) {
  const opts = options || {};
  const wrap = el("div", "canvas-wrap dot-wrap");
  const canvas = document.createElement("canvas");
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", "Connect the dots to build " + text);
  wrap.appendChild(canvas);

  const strokes = glyphDotStrokes(text);
  const flat = [];
  strokes.forEach((dots, si) => dots.forEach((d, di) => flat.push({ x: d.x, y: d.y, stroke: si, first: di === 0 })));

  let progress = 0; // number of dots already connected
  let ctx = null;
  let W = 1;
  let H = 1;
  let ratio = 1;
  let raf = 0;
  let box = { x: 0, y: 0, size: 1 };

  function resize() {
    const rect = wrap.getBoundingClientRect();
    ratio = window.devicePixelRatio || 1;
    W = Math.max(1, Math.floor(rect.width * ratio));
    H = Math.max(1, Math.floor(rect.height * ratio));
    canvas.width = W;
    canvas.height = H;
    ctx = canvas.getContext("2d");
    const size = Math.min(W, H) * 0.9;
    box = { x: (W - size) / 2, y: (H - size) / 2, size };
  }

  const px = (d) => ({ x: box.x + d.x * box.size, y: box.y + d.y * box.size });

  function draw(t) {
    if (!wrap.isConnected) return;
    if (!ctx) resize();
    ctx.clearRect(0, 0, W, H);

    // faint ghost of the finished letter
    ctx.save();
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = "#3b2b1a";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "700 " + Math.floor(box.size * 0.72) + "px " + FONT_STACK;
    ctx.fillText(text, W / 2, H / 2);
    ctx.restore();

    // connected lines
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = Math.max(6, box.size * 0.045);
    ctx.strokeStyle = opts.color || "#ff8a3d";
    for (let i = 1; i < progress; i++) {
      if (flat[i].first) continue;
      const a = px(flat[i - 1]);
      const b = px(flat[i]);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }

    const pulse = 0.5 + 0.5 * Math.sin(t / 260);
    for (let i = 0; i < flat.length; i++) {
      const p = px(flat[i]);
      const r = Math.max(5, box.size * 0.022);
      if (i < progress) {
        ctx.fillStyle = "#45c07a";
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      } else if (i === progress) {
        ctx.globalAlpha = 0.35 + 0.65 * pulse;
        ctx.fillStyle = "#ff3d7a";
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * (1.5 + 0.7 * pulse), 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 0.55, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.globalAlpha = 0.22;
        ctx.fillStyle = "#7a6752";
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 0.85, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    raf = window.requestAnimationFrame(draw);
  }

  function tap(e) {
    e.preventDefault();
    if (progress >= flat.length) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * ratio;
    const y = (e.clientY - rect.top) * ratio;
    const p = px(flat[progress]);
    const hit = Math.max(28 * ratio, box.size * 0.09);
    if (Math.hypot(x - p.x, y - p.y) <= hit) {
      progress++;
      playPopSound();
      if (progress >= flat.length) {
        if (opts.onComplete) opts.onComplete();
      } else if (opts.onStep) {
        opts.onStep(progress, flat.length);
      }
    } else if (opts.onMiss) {
      opts.onMiss();
    }
  }

  canvas.addEventListener("pointerdown", tap);
  canvas.addEventListener("touchstart", (e) => e.preventDefault(), { passive: false });
  window.addEventListener("resize", resize);
  setTimeout(() => { resize(); }, 30);
  raf = window.requestAnimationFrame(draw);

  return {
    element: wrap,
    total: flat.length,
    reset() { progress = 0; },
    isComplete() { return flat.length > 0 && progress >= flat.length; },
    stop() { if (raf) window.cancelAnimationFrame(raf); },
  };
}

/** Standard trace screen used by letters, numbers and words. */

function buildTraceScreen(content, config) {
  // config: { items, guideOf, speakOf, indexKey }
  const state = appState.game;
  if (typeof state.traceIndex !== "number") state.traceIndex = 0;
  if (!state.traceStyle) state.traceStyle = "dots";
  const item = config.items[state.traceIndex % config.items.length];
  const guideText = config.guideOf(item);

  const panel = el("div", "panel");

  const styleRow = el("div", "modes");
  [
    { id: "dots", label: "🔵 Dot by Dot" },
    { id: "draw", label: "✏️ Free Draw" },
  ].forEach((s) => {
    const b = el("button", "btn small" + (state.traceStyle === s.id ? "" : " ghost"), s.label);
    b.setAttribute("aria-pressed", state.traceStyle === s.id ? "true" : "false");
    b.addEventListener("click", () => { state.traceStyle = s.id; config.rerender(); });
    styleRow.appendChild(b);
  });
  panel.appendChild(styleRow);

  if (state.traceStyle === "dots") {
    buildDotTracePanel(panel, content, config, item, guideText);
    return;
  }

  panel.appendChild(el("div", "prompt", "✍️ Trace: <b>" + esc(guideText) + "</b>"));
  const board = createCanvasWritingBoard(guideText);
  panel.appendChild(board.element);

  const box = feedbackBox();
  const row = el("div", "row");


  const clearBtn = el("button", "btn ghost", "🧽 Clear");
  clearBtn.setAttribute("aria-label", "Clear the drawing");
  clearBtn.addEventListener("click", () => { board.clear(); showFeedback(box, ""); });

  const retryBtn = el("button", "btn blue", "🔁 Try Again");
  retryBtn.setAttribute("aria-label", "Try again");
  retryBtn.addEventListener("click", () => {
    board.clear();
    showFeedback(box, "Let's write it again!", true);
    if (config.speakOf) config.speakOf(item);
  });

  const doneBtn = el("button", "btn green", "✅ Done");
  doneBtn.setAttribute("aria-label", "I finished writing");
  doneBtn.addEventListener("click", () => {
    if (!board.hasDrawing()) {
      showFeedback(box, "Draw on the board first! ✍️", true);
      playTryAgainSound();
      return;
    }
    celebrateCorrect(box, praise());
    if (config.speakOf) config.speakOf(item);
  });

  const nextBtn = el("button", "btn", "➡️ Next");
  nextBtn.setAttribute("aria-label", "Next item to trace");
  nextBtn.addEventListener("click", () => {
    state.traceIndex = (state.traceIndex + 1) % config.items.length;
    config.rerender();
  });

  const listenBtn = speakerButton("Listen", () => config.speakOf && config.speakOf(item));

  row.appendChild(listenBtn);
  row.appendChild(clearBtn);
  row.appendChild(retryBtn);
  row.appendChild(doneBtn);
  row.appendChild(nextBtn);

  panel.appendChild(row);
  panel.appendChild(box);
  panel.appendChild(progressBar(state.traceIndex + 1, config.items.length));
  content.appendChild(panel);
}

/** Standard "say it out loud" screen. */
function buildSpeakScreen(content, config) {
  // config: { display, caption, lang, speakOf, onNext }
  const panel = el("div", "panel");
  panel.appendChild(el("div", "prompt", "🗣️ Can you say it?"));
  panel.appendChild(el("div", "target-box", '<div class="big">' + esc(config.display) + '</div><div class="label">' + esc(config.caption) + "</div>"));

  const box = feedbackBox();
  const row = el("div", "row");
  row.appendChild(speakerButton("Hear it", () => config.speakOf()));

  const recognizer = getRecognizer(config.lang);
  if (recognizer) {
    const mic = el("button", "btn pink", "🎤 Tap and Say");
    mic.setAttribute("aria-label", "Tap the microphone and say it out loud");
    mic.addEventListener("click", () => {
      showFeedback(box, "Listening… 🎤", true);
      try {
        recognizer.start();
      } catch (e) {
        showFeedback(box, "Say it aloud with a parent or teacher! 😊", true);
      }
    });
    recognizer.onresult = () => {
      celebrateCorrect(box, "I heard you — " + praise());
    };
    recognizer.onerror = () => {
      showFeedback(box, "Say it aloud with a parent or teacher! 😊", true);
    };
    recognizer.onend = () => {
      if (box.textContent === "Listening… 🎤") {
        showFeedback(box, "Good try! Say it once more 😊", true);
      }
    };
    row.appendChild(mic);
  } else {
    panel.appendChild(el("p", "lock-note", "Say the letter aloud with a parent or teacher!"));
  }

  const star = el("button", "btn green", "⭐ I said it!");
  star.setAttribute("aria-label", "I said it out loud");
  star.addEventListener("click", () => celebrateCorrect(box, praise()));
  row.appendChild(star);

  if (config.onNext) {
    const next = el("button", "btn", "➡️ Next");
    next.setAttribute("aria-label", "Next item");
    next.addEventListener("click", config.onNext);
    row.appendChild(next);
  }

  panel.appendChild(row);
  panel.appendChild(box);
  content.appendChild(panel);
}

/** Generic choice grid. onPick(item, buttonEl) */
function buildChoiceGrid(items, renderItem, onPick, ariaOf) {
  const grid = el("div", "maze");
  items.forEach((item) => {
    const b = el("button", "choice", renderItem(item));
    b.setAttribute("aria-label", ariaOf ? ariaOf(item) : "choice");
    b.addEventListener("click", () => onPick(item, b));
    grid.appendChild(b);
  });
  return grid;
}

/* ---------------------------------------------------------
   8. HOME SCREEN
   --------------------------------------------------------- */

function renderHome() {
  const content = renderShell("Little Learners", { isHome: true });

  const hero = el("div", "hero");
  hero.appendChild(el("h2", "", "Let's learn and play! 🎈"));
  hero.appendChild(el("p", "", "Pick an activity below · कुनै एक खेल छान्नुहोस्"));
  content.appendChild(hero);

  const grid = el("div", "grid-home");
  const enabled = appState.settings.enabledModules;
  MODULES.forEach((m) => {
    if (m.id !== "settings" && !enabled.includes(m.id)) return;
    const tile = el("button", "tile",
      '<span class="emoji" aria-hidden="true">' + m.emoji + "</span>" +
      "<span>" + esc(m.label) + "</span>" +
      "<small>" + esc(m.sub) + "</small>");
    tile.style.background = m.color;
    tile.setAttribute("aria-label", "Open " + m.label);
    if (m.id === "settings") {
      attachHoldToOpen(tile);
    } else {
      tile.addEventListener("click", () => {
        speakEnglish(m.label);
        navigate(m.id);
      });
    }
    grid.appendChild(tile);
  });
  content.appendChild(grid);
}

/** Parent gate: hold the button for 3 seconds. */
function attachHoldToOpen(tile) {
  let timer = null;
  let progressed = 0;
  const original = tile.innerHTML;

  const start = (e) => {
    e.preventDefault();
    progressed = 0;
    tile.innerHTML = '<span class="emoji" aria-hidden="true">⚙️</span><span>Hold…</span><small>3 seconds</small>';
    timer = setInterval(() => {
      progressed += 1;
      if (progressed >= 3) {
        stop();
        navigate("settings");
      } else {
        tile.querySelector("small").textContent = (3 - progressed) + " seconds";
      }
    }, 1000);
  };
  const stop = () => {
    if (timer) clearInterval(timer);
    timer = null;
    tile.innerHTML = original;
  };

  tile.addEventListener("pointerdown", start);
  tile.addEventListener("pointerup", stop);
  tile.addEventListener("pointerleave", stop);
  tile.addEventListener("pointercancel", stop);
  tile.addEventListener("contextmenu", (e) => e.preventDefault());
}

/* ---------------------------------------------------------
   9. GAME 1 — OBJECT FINDER
   --------------------------------------------------------- */

function renderObjectFinder() {
  const content = renderShell("Object Finder", { onRestart: () => { appState.game = {}; renderObjectFinder(); } });
  const state = appState.game;
  if (!state.round) state.round = 0;

  const target = randomOf(objectItems);
  const distractorCount = Math.max(5, choiceCount() + 3);
  const options = shuffle([target, ...pickDistractors(objectItems, target, distractorCount, (o) => o.id)]);

  const panel = el("div", "panel");
  panel.appendChild(el("div", "prompt", "Find the <b>" + esc(target.name) + "</b>!"));

  const split = el("div", "split");
  const targetBox = el("div", "target-box",
    '<div class="big" aria-hidden="true">' + target.visual + "</div>" +
    '<div class="label">' + esc(target.name) + "</div>" +
    '<div class="sub">' + esc(target.nepaliName) + "</div>");
  const listen = speakerButton("Say it", () => speakBoth(target.name, target.nepaliName));
  targetBox.appendChild(listen);
  split.appendChild(targetBox);

  const box = feedbackBox();
  let solved = false;

  const grid = buildChoiceGrid(
    options,
    (o) => '<span aria-hidden="true">' + o.visual + "</span>",
    (o, btn) => {
      if (solved) return;
      if (o.id === target.id) {
        solved = true;
        btn.classList.add("correct");
        celebrateCorrect(box, praise());
        speakBoth(target.name, target.nepaliName);
        state.round += 1;
        setTimeout(renderObjectFinder, 1500);
      } else {
        btn.classList.add("wrong");
        setTimeout(() => btn.classList.remove("wrong"), 500);
        gentleWrong(box);
      }
    },
    (o) => o.name
  );

  split.appendChild(grid);
  panel.appendChild(split);
  panel.appendChild(box);
  panel.appendChild(el("p", "lock-note", "Round " + (state.round + 1)));
  content.appendChild(panel);

  speakEnglish("Find the " + target.name);
}

/* ---------------------------------------------------------
   10. GENERIC ALPHABET GAME (English + Nepali)
   --------------------------------------------------------- */

const LETTER_MODES = [
  { id: "learn", label: "Learn" },
  { id: "identify", label: "Identify" },
  { id: "trace", label: "Trace" },
  { id: "listen", label: "Listen" },
  { id: "speak", label: "Speak" },
];

function buildAlphabetGame(config) {
  // config: { screenId, title, items, lang, isNepali }
  const rerender = () => buildAlphabetGame(config);
  const state = appState.game;
  if (!state.mode) state.mode = "learn";
  if (typeof state.index !== "number") state.index = 0;

  const content = renderShell(config.title, {
    onRestart: () => { appState.game = { mode: state.mode }; rerender(); },
  });

  content.appendChild(modesBar(LETTER_MODES, state.mode, (id) => {
    state.mode = id;
    rerender();
  }));

  const items = config.items;
  const item = items[state.index % items.length];

  const sayLetter = () => (config.isNepali ? speakNepali(item.letter) : speakEnglish(item.letter));
  const sayWord = () => (config.isNepali ? speakNepali(item.word) : speakEnglish(item.word));
  const sayPhrase = () =>
    config.isNepali ? speakNepali(item.letter + ", " + item.word) : speakEnglish(item.letter + " is for " + item.word);

  if (state.mode === "learn") {
    const panel = el("div", "panel");
    const split = el("div", "split");
    const left = el("div", "target-box",
      '<div class="bigletter">' + esc(item.letter) + (item.lowercase ? " " + esc(item.lowercase) : "") + "</div>");
    split.appendChild(left);
    const right = el("div", "target-box",
      '<div class="big" aria-hidden="true">' + item.visual + "</div>" +
      '<div class="label">' + esc(item.word) + "</div>" +
      '<div class="sub">' + (config.isNepali ? esc(item.letter + " — " + item.word) : esc(item.letter + " is for " + item.word)) + "</div>");
    split.appendChild(right);
    panel.appendChild(split);

    const row = el("div", "row");
    row.appendChild(speakerButton("Letter", sayLetter));
    row.appendChild(speakerButton("Word", sayWord));
    row.appendChild(speakerButton("Phrase", sayPhrase));

    const prev = el("button", "btn ghost", "⬅️ Back");
    prev.setAttribute("aria-label", "Previous letter");
    prev.addEventListener("click", () => {
      state.index = (state.index - 1 + items.length) % items.length;
      rerender();
    });
    const next = el("button", "btn", "➡️ Next");
    next.setAttribute("aria-label", "Next letter");
    next.addEventListener("click", () => {
      state.index = (state.index + 1) % items.length;
      rerender();
    });
    row.appendChild(prev);
    row.appendChild(next);
    panel.appendChild(row);
    panel.appendChild(progressBar(state.index + 1, items.length));
    content.appendChild(panel);
    sayPhrase();
  }

  if (state.mode === "identify" || state.mode === "listen") {
    const target = randomOf(items);
    const options = buildChoices(items, target, (x) => x.letter);
    const panel = el("div", "panel");
    const isListen = state.mode === "listen";
    panel.appendChild(el("div", "prompt",
      isListen ? "🔈 Listen, then tap the letter you hear!" : "Find the letter <b>" + esc(target.letter) + "</b>"));

    if (isListen) {
      const row = el("div", "row");
      row.appendChild(speakerButton("Play again", () =>
        config.isNepali ? speakNepali(target.letter) : speakEnglish(target.letter)));
      panel.appendChild(row);
    }

    const box = feedbackBox();
    let solved = false;
    const grid = buildChoiceGrid(
      options,
      (x) => esc(x.letter),
      (x, btn) => {
        if (solved) return;
        if (x.letter === target.letter) {
          solved = true;
          btn.classList.add("correct");
          celebrateCorrect(box);
          config.isNepali ? speakNepali(target.letter + ", " + target.word) : speakEnglish(target.letter + " for " + target.word);
          setTimeout(rerender, 1500);
        } else {
          btn.classList.add("wrong");
          setTimeout(() => btn.classList.remove("wrong"), 500);
          gentleWrong(box);
        }
      },
      (x) => "Letter " + x.letter
    );
    panel.appendChild(grid);
    panel.appendChild(box);
    content.appendChild(panel);

    if (isListen) {
      setTimeout(() => (config.isNepali ? speakNepali(target.letter) : speakEnglish(target.letter)), 400);
    } else {
      speakEnglish("Find the letter " + target.letter);
    }
  }

  if (state.mode === "trace") {
    buildTraceScreen(content, {
      items,
      guideOf: (x) => x.letter,
      speakOf: (x) => (config.isNepali ? speakNepali(x.letter) : speakEnglish(x.letter)),
      rerender,
    });
  }

  if (state.mode === "speak") {
    buildSpeakScreen(content, {
      display: item.letter + " " + item.visual,
      caption: config.isNepali ? item.letter + " — " + item.word : item.letter + " is for " + item.word,
      lang: config.isNepali ? "ne-NP" : "en-US",
      speakOf: sayPhrase,
      onNext: () => {
        state.index = (state.index + 1) % items.length;
        rerender();
      },
    });
  }
}

function renderAlphabetGame() {
  buildAlphabetGame({ screenId: "english", title: "English Alphabet A–Z", items: englishLetters, isNepali: false });
}

function renderNepaliAlphabetGame() {
  buildAlphabetGame({ screenId: "nepali", title: "नेपाली वर्णमाला", items: nepaliLetters, isNepali: true });
}

/* ---------------------------------------------------------
   11. GAME 4 — NUMBERS 1–10
   --------------------------------------------------------- */

const NUMBER_MODES = [
  { id: "learn", label: "Learn" },
  { id: "count", label: "Count" },
  { id: "find", label: "Find" },
  { id: "trace", label: "Trace" },
  { id: "listen", label: "Listen" },
  { id: "nmatch", label: "Match" },
];

function renderNumberGame() {
  const rerender = renderNumberGame;
  const state = appState.game;
  if (!state.mode) state.mode = "learn";
  if (typeof state.index !== "number") state.index = 0;

  const content = renderShell("Numbers 1–10", {
    onRestart: () => { appState.game = { mode: state.mode }; rerender(); },
  });
  content.appendChild(modesBar(NUMBER_MODES, state.mode, (id) => { state.mode = id; rerender(); }));

  const item = numberItems[state.index % numberItems.length];
  const repeat = (visual, n) => new Array(n).fill(visual).join(" ");

  if (state.mode === "learn") {
    const panel = el("div", "panel");
    const split = el("div", "split");
    split.appendChild(el("div", "target-box", '<div class="bigletter">' + item.number + "</div>"));
    split.appendChild(el("div", "target-box",
      '<div style="font-size:2.4rem;line-height:1.4" aria-hidden="true">' + repeat(item.visual, item.number) + "</div>" +
      '<div class="label">' + esc(item.wordEnglish) + "</div>" +
      '<div class="sub">' + esc(item.wordNepali) + "</div>"));
    panel.appendChild(split);

    const row = el("div", "row");
    row.appendChild(speakerButton("Say number", () => speakBoth(item.wordEnglish, item.wordNepali)));
    const prev = el("button", "btn ghost", "⬅️ Back");
    prev.setAttribute("aria-label", "Previous number");
    prev.addEventListener("click", () => { state.index = (state.index - 1 + numberItems.length) % numberItems.length; rerender(); });
    const next = el("button", "btn", "➡️ Next");
    next.setAttribute("aria-label", "Next number");
    next.addEventListener("click", () => { state.index = (state.index + 1) % numberItems.length; rerender(); });
    row.appendChild(prev);
    row.appendChild(next);
    panel.appendChild(row);
    panel.appendChild(progressBar(state.index + 1, numberItems.length));
    content.appendChild(panel);
    speakBoth(item.wordEnglish, item.wordNepali);
  }

  if (state.mode === "count") {
    const target = randomOf(numberItems);
    const options = buildChoices(numberItems, target, (x) => x.number);
    const panel = el("div", "panel");
    panel.appendChild(el("div", "prompt", "How many do you see?"));
    panel.appendChild(el("div", "target-box",
      '<div style="font-size:2.6rem;line-height:1.4" aria-hidden="true">' + repeat(target.visual, target.number) + "</div>"));
    const box = feedbackBox();
    let solved = false;
    panel.appendChild(buildChoiceGrid(options, (x) => String(x.number), (x, btn) => {
      if (solved) return;
      if (x.number === target.number) {
        solved = true;
        btn.classList.add("correct");
        celebrateCorrect(box);
        speakBoth(target.wordEnglish, target.wordNepali);
        setTimeout(rerender, 1500);
      } else {
        btn.classList.add("wrong");
        setTimeout(() => btn.classList.remove("wrong"), 500);
        gentleWrong(box);
      }
    }, (x) => "Number " + x.number));
    panel.appendChild(box);
    content.appendChild(panel);
    speakEnglish("How many do you see?");
  }

  if (state.mode === "find" || state.mode === "listen") {
    const target = randomOf(numberItems);
    const options = buildChoices(numberItems, target, (x) => x.number);
    const panel = el("div", "panel");
    panel.appendChild(el("div", "prompt", "🔈 Tap the number you hear!"));
    const row = el("div", "row");
    row.appendChild(speakerButton("Play again", () => speakBoth(target.wordEnglish, target.wordNepali)));
    panel.appendChild(row);
    const box = feedbackBox();
    let solved = false;
    panel.appendChild(buildChoiceGrid(options, (x) => String(x.number), (x, btn) => {
      if (solved) return;
      if (x.number === target.number) {
        solved = true;
        btn.classList.add("correct");
        celebrateCorrect(box);
        setTimeout(rerender, 1400);
      } else {
        btn.classList.add("wrong");
        setTimeout(() => btn.classList.remove("wrong"), 500);
        gentleWrong(box);
      }
    }, (x) => "Number " + x.number));
    panel.appendChild(box);
    content.appendChild(panel);
    setTimeout(() => speakBoth(target.wordEnglish, target.wordNepali), 400);
  }

  if (state.mode === "trace") {
    buildTraceScreen(content, {
      items: numberItems,
      guideOf: (x) => String(x.number),
      speakOf: (x) => speakBoth(x.wordEnglish, x.wordNepali),
      rerender,
    });
  }

  if (state.mode === "nmatch") {
    const target = randomOf(numberItems);
    const options = buildChoices(numberItems, target, (x) => x.number);
    const panel = el("div", "panel");
    panel.appendChild(el("div", "prompt", "Match <b>" + target.number + "</b> with the right group"));
    panel.appendChild(el("div", "target-box", '<div class="bigletter">' + target.number + "</div>"));
    const box = feedbackBox();
    let solved = false;
    panel.appendChild(buildChoiceGrid(options,
      (x) => '<span style="font-size:1.6rem" aria-hidden="true">' + repeat("●", x.number) + "</span>",
      (x, btn) => {
        if (solved) return;
        if (x.number === target.number) {
          solved = true;
          btn.classList.add("correct");
          celebrateCorrect(box);
          speakBoth(target.wordEnglish, target.wordNepali);
          setTimeout(rerender, 1500);
        } else {
          btn.classList.add("wrong");
          setTimeout(() => btn.classList.remove("wrong"), 500);
          gentleWrong(box);
        }
      }, (x) => x.number + " dots"));
    panel.appendChild(box);
    content.appendChild(panel);
  }
}

/* ---------------------------------------------------------
   12. GAME 5 — MATCH THE FOLLOWING
   --------------------------------------------------------- */

const MATCH_CATEGORIES = [
  {
    id: "objobj", label: "Object ↔ Object",
    build: () => shuffle(objectItems).slice(0, 4).map((o) => ({ id: o.id, left: o.visual, right: o.visual + "", leftLabel: o.name, rightLabel: o.name, speak: () => speakEnglish(o.name) })),
  },
  {
    id: "letterobj", label: "Letter ↔ Object",
    build: () => shuffle(englishLetters).slice(0, 4).map((l) => ({ id: l.letter, left: l.letter, right: l.visual, leftLabel: "Letter " + l.letter, rightLabel: l.word, speak: () => speakEnglish(l.letter + " is for " + l.word) })),
  },
  {
    id: "numqty", label: "Number ↔ Quantity",
    build: () => shuffle(numberItems).slice(0, 4).map((n) => ({ id: String(n.number), left: String(n.number), right: new Array(n.number).fill("●").join(""), leftLabel: "Number " + n.number, rightLabel: n.number + " dots", speak: () => speakBoth(n.wordEnglish, n.wordNepali) })),
  },
  {
    id: "wordpic", label: "Word ↔ Picture",
    build: () => shuffle(englishWords).slice(0, 4).map((w) => ({ id: w.word, left: w.word, right: w.visual, leftLabel: w.word, rightLabel: w.word, speak: () => speakEnglish(w.word) })),
  },
  {
    id: "nepalipic", label: "नेपाली ↔ चित्र",
    build: () => shuffle(nepaliLetters).slice(0, 4).map((l) => ({ id: l.letter, left: l.letter, right: l.visual, leftLabel: l.letter, rightLabel: l.word, speak: () => speakNepali(l.letter + ", " + l.word) })),
  },
];

function renderMatchingGame() {
  const rerender = renderMatchingGame;
  const state = appState.game;
  if (!state.category) state.category = MATCH_CATEGORIES[0].id;
  const category = MATCH_CATEGORIES.find((c) => c.id === state.category);
  if (!state.pairs) {
    state.pairs = category.build();
    state.rightOrder = shuffle(state.pairs.map((p) => p.id));
    state.matched = [];
    state.picked = null;
  }

  const content = renderShell("Match the Following", {
    onRestart: () => { appState.game = { category: state.category }; rerender(); },
  });

  content.appendChild(modesBar(
    MATCH_CATEGORIES.map((c) => ({ id: c.id, label: c.label })),
    state.category,
    (id) => { appState.game = { category: id }; rerender(); }
  ));

  const panel = el("div", "panel");
  panel.appendChild(el("div", "prompt", "Tap on the left, then tap its friend on the right!"));

  const box = feedbackBox();

  if (state.matched.length === state.pairs.length) {
    const done = el("div", "celebrate",
      '<div class="big">🎉</div><h2>' + praise() + " You matched them all!</h2>");
    const again = el("button", "btn green", "🔁 Play Again");
    again.setAttribute("aria-label", "Play again");
    again.addEventListener("click", () => { appState.game = { category: state.category }; rerender(); });
    done.appendChild(again);
    panel.appendChild(done);
    content.appendChild(panel);
    playCelebrateSound();
    confetti();
    speakEnglish("Great job! You matched them all!");
    return;
  }

  const cols = el("div", "match-cols");
  const leftCol = el("div", "match-col");
  const rightCol = el("div", "match-col");

  state.pairs.forEach((p) => {
    const b = el("button", "match-item" + (state.matched.includes(p.id) ? " matched" : "") + (state.picked === p.id ? " picked" : ""), esc(p.left));
    b.setAttribute("aria-label", p.leftLabel);
    b.addEventListener("click", () => {
      if (state.matched.includes(p.id)) return;
      state.picked = p.id;
      if (p.speak) p.speak();
      rerender();
    });
    leftCol.appendChild(b);
  });

  state.rightOrder.forEach((id) => {
    const p = state.pairs.find((x) => x.id === id);
    const b = el("button", "match-item" + (state.matched.includes(id) ? " matched" : ""), esc(p.right));
    b.setAttribute("aria-label", p.rightLabel);
    b.addEventListener("click", () => {
      if (state.matched.includes(id)) return;
      if (!state.picked) {
        showFeedback(box, "Pick one on the left first! 👈", true);
        return;
      }
      if (state.picked === id) {
        state.matched.push(id);
        state.picked = null;
        playSuccessSound();
        addStar(1);
        confetti();
        if (p.speak) p.speak();
        rerender();
      } else {
        b.classList.add("wrong");
        gentleWrong(box);
        setTimeout(() => b.classList.remove("wrong"), 500);
      }
    });
    rightCol.appendChild(b);
  });

  cols.appendChild(leftCol);
  cols.appendChild(rightCol);
  panel.appendChild(cols);
  panel.appendChild(progressBar(state.matched.length, state.pairs.length));
  panel.appendChild(box);
  content.appendChild(panel);
}

/* ---------------------------------------------------------
   13. GENERIC WORD GAME (English CVC + Nepali beginner words)
   --------------------------------------------------------- */

const WORD_MODES = [
  { id: "learn", label: "Learn" },
  { id: "reading", label: "Reading" },
  { id: "listening", label: "Listening" },
  { id: "speaking", label: "Speaking" },
  { id: "writing", label: "Writing" },
  { id: "build", label: "Build" },
  { id: "match", label: "Match" },
];

function buildWordGame(config) {
  // config: { title, items, isNepali, partsOf, displayOf }
  const rerender = () => buildWordGame(config);
  const state = appState.game;
  if (!state.mode) state.mode = "learn";
  if (typeof state.index !== "number") state.index = 0;

  const content = renderShell(config.title, {
    onRestart: () => { appState.game = { mode: state.mode }; rerender(); },
  });
  content.appendChild(modesBar(WORD_MODES, state.mode, (id) => {
    appState.game = { mode: id, index: state.index };
    rerender();
  }));

  const items = config.items;
  const item = items[state.index % items.length];
  const say = (w) => (config.isNepali ? speakNepali(w) : speakEnglish(w));
  const display = (w) => (config.isNepali ? w.word : w.word.toUpperCase());

  const nextItem = () => {
    appState.game = { mode: state.mode, index: (state.index + 1) % items.length };
    rerender();
  };

  if (state.mode === "learn") {
    const panel = el("div", "panel");
    const split = el("div", "split");
    split.appendChild(el("div", "target-box", '<div class="big" aria-hidden="true">' + item.visual + "</div>"));
    split.appendChild(el("div", "target-box",
      '<div class="bigletter" style="font-size:clamp(3rem,12vw,6rem)">' + esc(display(item)) + "</div>" +
      '<div class="label">' + esc(config.partsOf(item).join(" – ").toUpperCase()) + "</div>" +
      (item.english ? '<div class="sub">' + esc(item.english) + "</div>" : "")));
    panel.appendChild(split);

    const row = el("div", "row");
    row.appendChild(speakerButton("Replay word", () => say(item.word)));
    const spell = el("button", "btn blue", "🔤 Sound it out");
    spell.setAttribute("aria-label", "Sound out each letter");
    spell.addEventListener("click", () => {
      const parts = config.partsOf(item);
      parts.forEach((p, i) => setTimeout(() => say(p), i * 900));
      setTimeout(() => say(item.word), parts.length * 900 + 200);
    });
    row.appendChild(spell);
    const prev = el("button", "btn ghost", "⬅️ Back");
    prev.setAttribute("aria-label", "Previous word");
    prev.addEventListener("click", () => {
      appState.game = { mode: state.mode, index: (state.index - 1 + items.length) % items.length };
      rerender();
    });
    const next = el("button", "btn", "➡️ Next");
    next.setAttribute("aria-label", "Next word");
    next.addEventListener("click", nextItem);
    row.appendChild(prev);
    row.appendChild(next);
    panel.appendChild(row);
    panel.appendChild(progressBar(state.index + 1, items.length));
    content.appendChild(panel);
    say(item.word);
  }

  if (state.mode === "reading" || state.mode === "listening") {
    const isListening = state.mode === "listening";
    const target = randomOf(items);
    const options = buildChoices(items, target, (x) => x.word);
    const panel = el("div", "panel");
    panel.appendChild(el("div", "prompt", isListening ? "🔈 Which picture did you hear?" : "Which word matches the picture?"));

    if (isListening) {
      const row = el("div", "row");
      row.appendChild(speakerButton("Play again", () => say(target.word)));
      panel.appendChild(row);
    } else {
      panel.appendChild(el("div", "target-box", '<div class="big" aria-hidden="true">' + target.visual + "</div>"));
    }

    const box = feedbackBox();
    let solved = false;
    panel.appendChild(buildChoiceGrid(options,
      (x) => (isListening
        ? '<span aria-hidden="true">' + x.visual + "</span>"
        : '<span style="font-size:1.8rem">' + esc(display(x)) + "</span>"),
      (x, btn) => {
        if (solved) return;
        if (x.word === target.word) {
          solved = true;
          btn.classList.add("correct");
          celebrateCorrect(box);
          say(target.word);
          setTimeout(rerender, 1500);
        } else {
          btn.classList.add("wrong");
          setTimeout(() => btn.classList.remove("wrong"), 500);
          gentleWrong(box);
        }
      },
      (x) => x.word));
    panel.appendChild(box);
    content.appendChild(panel);
    if (isListening) setTimeout(() => say(target.word), 400);
  }

  if (state.mode === "speaking") {
    buildSpeakScreen(content, {
      display: item.visual,
      caption: display(item),
      lang: config.isNepali ? "ne-NP" : "en-US",
      speakOf: () => say(item.word),
      onNext: nextItem,
    });
  }

  if (state.mode === "writing") {
    buildTraceScreen(content, {
      items,
      guideOf: (x) => display(x),
      speakOf: (x) => say(x.word),
      rerender,
    });
  }

  if (state.mode === "build") {
    const parts = config.partsOf(item);
    if (!state.built) state.built = [];
    if (!state.tiles) state.tiles = shuffle(parts.map((p, i) => ({ p, i })));

    const panel = el("div", "panel");
    panel.appendChild(el("div", "prompt", "Build the word!"));
    panel.appendChild(el("div", "target-box", '<div class="big" aria-hidden="true">' + item.visual + "</div>"));

    const slots = el("div", "slots");
    parts.forEach((_, i) => {
      const s = el("div", "slot", state.built[i] ? esc(state.built[i].p) : "&nbsp;");
      slots.appendChild(s);
    });
    panel.appendChild(slots);

    const box = feedbackBox();
    const tiles = el("div", "tiles");
    state.tiles.forEach((t) => {
      const used = state.built.some((b) => b && b.i === t.i);
      const b = el("button", "tile-letter" + (used ? " used" : ""), esc(config.isNepali ? t.p : t.p.toUpperCase()));
      b.setAttribute("aria-label", "Letter " + t.p);
      b.addEventListener("click", () => {
        if (used) return;
        const nextIndex = state.built.length;
        if (parts[nextIndex] === t.p) {
          state.built.push(t);
          say(t.p);
          if (state.built.length === parts.length) {
            playCelebrateSound();
            addStar(1);
            confetti();
            setTimeout(() => say(item.word), 400);
            showFeedback(box, praise() + " " + display(item));
            setTimeout(() => {
              appState.game = { mode: "build", index: (state.index + 1) % items.length };
              rerender();
            }, 2200);
            return;
          }
          playSuccessSound();
          showFeedback(box, "Keep going! 👍");
        } else {
          b.classList.add("wrong");
          setTimeout(() => b.classList.remove("wrong"), 500);
          gentleWrong(box);
          return;
        }
        rerenderKeepBuild();
      });
      tiles.appendChild(b);
    });
    panel.appendChild(tiles);

    const row = el("div", "row");
    row.appendChild(speakerButton("Hear word", () => say(item.word)));
    const reset = el("button", "btn ghost", "🔁 Reset Word");
    reset.setAttribute("aria-label", "Reset this word");
    reset.addEventListener("click", () => {
      appState.game = { mode: "build", index: state.index };
      rerender();
    });
    const skip = el("button", "btn", "➡️ Next Word");
    skip.setAttribute("aria-label", "Next word");
    skip.addEventListener("click", () => {
      appState.game = { mode: "build", index: (state.index + 1) % items.length };
      rerender();
    });
    row.appendChild(reset);
    row.appendChild(skip);
    panel.appendChild(row);
    panel.appendChild(box);
    content.appendChild(panel);

    function rerenderKeepBuild() {
      const keep = { mode: state.mode, index: state.index, built: state.built, tiles: state.tiles };
      appState.game = keep;
      rerender();
    }
  }

  if (state.mode === "match") {
    const target = randomOf(items);
    const options = buildChoices(items, target, (x) => x.word);
    const panel = el("div", "panel");
    panel.appendChild(el("div", "prompt", "Tap the picture for <b>" + esc(display(target)) + "</b>"));
    const row = el("div", "row");
    row.appendChild(speakerButton("Hear word", () => say(target.word)));
    panel.appendChild(row);
    const box = feedbackBox();
    let solved = false;
    panel.appendChild(buildChoiceGrid(options,
      (x) => '<span aria-hidden="true">' + x.visual + "</span>",
      (x, btn) => {
        if (solved) return;
        if (x.word === target.word) {
          solved = true;
          btn.classList.add("correct");
          celebrateCorrect(box);
          say(target.word);
          setTimeout(rerender, 1500);
        } else {
          btn.classList.add("wrong");
          setTimeout(() => btn.classList.remove("wrong"), 500);
          gentleWrong(box);
        }
      },
      (x) => x.word));
    panel.appendChild(box);
    content.appendChild(panel);
    say(target.word);
  }
}

function renderEnglishWordGame() {
  buildWordGame({
    title: "English Three-Letter Words",
    items: englishWords,
    isNepali: false,
    partsOf: (w) => w.letters,
  });
}

function renderNepaliWordGame() {
  buildWordGame({
    title: "Beginner Nepali Words",
    items: nepaliWords,
    isNepali: true,
    partsOf: (w) => w.characters,
  });
}

/* ---------------------------------------------------------
   14. PARENT SETTINGS
   --------------------------------------------------------- */

function renderSettings() {
  const content = renderShell("Parent Settings");
  const s = appState.settings;
  const panel = el("div", "panel");

  function toggleRow(labelText, key) {
    const row = el("div", "setting");
    row.appendChild(el("label", "", esc(labelText)));
    const btn = el("button", "switch", s[key] ? "ON" : "OFF");
    btn.dataset.on = String(!!s[key]);
    btn.setAttribute("aria-label", labelText + " is " + (s[key] ? "on" : "off"));
    btn.addEventListener("click", () => {
      s[key] = !s[key];
      if (key === "voiceOn" && !s[key]) stopSpeech();
      saveProgress();
      renderSettings();
    });
    row.appendChild(btn);
    panel.appendChild(row);
  }

  toggleRow("Voice (speech)", "voiceOn");
  toggleRow("Sound effects", "soundOn");

  function rangeRow(labelText, key) {
    const row = el("div", "setting");
    row.appendChild(el("label", "", esc(labelText) + ": <b>" + s[key].toFixed(2) + "</b>"));
    const input = document.createElement("input");
    input.type = "range";
    input.min = "0.5";
    input.max = "1.2";
    input.step = "0.05";
    input.value = String(s[key]);
    input.setAttribute("aria-label", labelText);
    input.addEventListener("input", () => {
      s[key] = parseFloat(input.value);
      saveProgress();
      row.querySelector("label").innerHTML = esc(labelText) + ": <b>" + s[key].toFixed(2) + "</b>";
    });
    input.addEventListener("change", () => {
      if (key === "nepaliRate") speak("नमस्ते", "ne-NP");
      else speak("Hello", "en-US");
    });
    row.appendChild(input);
    panel.appendChild(row);
  }

  rangeRow("English speech rate", "englishRate");
  rangeRow("Nepali speech rate", "nepaliRate");

  function chipRow(labelText, key, options) {
    const row = el("div", "setting");
    row.appendChild(el("label", "", esc(labelText)));
    const chips = el("div", "chips");
    options.forEach((o) => {
      const c = el("button", "chip", esc(o.label));
      c.setAttribute("aria-pressed", String(s[key] === o.value));
      c.setAttribute("aria-label", labelText + ": " + o.label);
      c.addEventListener("click", () => { s[key] = o.value; saveProgress(); renderSettings(); });
      chips.appendChild(c);
    });
    row.appendChild(chips);
    panel.appendChild(row);
  }

  chipRow("Language", "language", [
    { label: "English", value: "en" },
    { label: "नेपाली", value: "ne" },
    { label: "Both", value: "both" },
  ]);

  chipRow("Difficulty", "difficulty", [
    { label: "Easy (3)", value: "easy" },
    { label: "Medium (4)", value: "medium" },
    { label: "Hard (5)", value: "hard" },
  ]);

  // Module visibility
  const modRow = el("div", "setting");
  modRow.appendChild(el("label", "", "Show these activities"));
  const modChips = el("div", "chips");
  MODULES.filter((m) => m.id !== "settings").forEach((m) => {
    const on = s.enabledModules.includes(m.id);
    const c = el("button", "chip", esc(m.label));
    c.setAttribute("aria-pressed", String(on));
    c.setAttribute("aria-label", m.label + (on ? " is shown" : " is hidden"));
    c.addEventListener("click", () => {
      if (on) {
        if (s.enabledModules.length <= 1) { toast("Keep at least one activity 🙂"); return; }
        s.enabledModules = s.enabledModules.filter((x) => x !== m.id);
      } else {
        s.enabledModules = s.enabledModules.concat(m.id);
      }
      saveProgress();
      renderSettings();
    });
    modChips.appendChild(c);
  });
  modRow.appendChild(modChips);
  panel.appendChild(modRow);

  // Voice availability info (parents only)
  const info = el("p", "lock-note", "");
  refreshVoices();
  const neVoice = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("ne"));
  info.textContent = !("speechSynthesis" in window)
    ? "This browser has no speech synthesis. Activities still work without voice."
    : neVoice
      ? "Nepali voice found: " + neVoice.name
      : "No Nepali voice in this browser — a default voice is used instead.";
  panel.appendChild(info);

  const row = el("div", "row");
  const reset = el("button", "btn pink", "♻️ Reset Stars (" + appState.stars + ")");
  reset.setAttribute("aria-label", "Reset stars and score");
  reset.addEventListener("click", () => {
    appState.stars = 0;
    saveProgress();
    toast("Stars reset");
    renderSettings();
  });
  const defaults = el("button", "btn ghost", "↩️ Restore Defaults");
  defaults.setAttribute("aria-label", "Restore default settings");
  defaults.addEventListener("click", () => {
    appState.settings = { ...DEFAULT_SETTINGS, enabledModules: DEFAULT_SETTINGS.enabledModules.slice() };
    saveProgress();
    renderSettings();
  });
  const test = el("button", "btn green", "🔈 Test Voices");
  test.setAttribute("aria-label", "Test the voices");
  test.addEventListener("click", () => speakBoth("Hello little learner", "नमस्ते"));
  row.appendChild(test);
  row.appendChild(reset);
  row.appendChild(defaults);
  panel.appendChild(row);

  content.appendChild(panel);
}

/* ---------------------------------------------------------
   15. ROUTER
   --------------------------------------------------------- */

const SCREENS = {
  home: renderHome,
  objects: renderObjectFinder,
  english: renderAlphabetGame,
  nepali: renderNepaliAlphabetGame,
  numbers: renderNumberGame,
  match: renderMatchingGame,
  ewords: renderEnglishWordGame,
  nwords: renderNepaliWordGame,
  settings: renderSettings,
};

function navigate(screenId, keepState) {
  const render = SCREENS[screenId] || renderHome;
  if (!keepState && appState.screen !== screenId) appState.game = {};
  appState.screen = SCREENS[screenId] ? screenId : "home";
  stopSpeech();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Boot */
loadProgress();
navigate("home");
