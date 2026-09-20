const STORAGE_KEY = "noxar-boxar-user";
const WORDS_KEY = "noxar-boxar-words";
const OTP_KEY = "noxar-boxar-otp";

const words = [
  { id: 1, word: "print", ar: "طباعة", use: "يعرض قيمة أو نص على الشاشة." },
  { id: 2, word: "def", ar: "تعريف دالة", use: "يبدأ بإنشاء دالة جديدة." },
  { id: 3, word: "return", ar: "إرجاع", use: "يرجع قيمة من الدالة." },
  { id: 4, word: "if", ar: "إذا", use: "يفحص شرطًا ويشغل كودًا عند صحته." },
  { id: 5, word: "else", ar: "والبديل", use: "يُنفّذ عندما يكون الشرط غير صحيح." },
  { id: 6, word: "elif", ar: "وإلا إذا", use: "يضيف شرطًا إضافيًا." },
  { id: 7, word: "for", ar: "لكل", use: "يتكرّر عبر عناصر قائمة أو نطاق." },
  { id: 8, word: "while", ar: "بينما", use: "يتكرر طالما الشرط صحيحًا." },
  { id: 9, word: "in", ar: "داخل", use: "يستخدم للتحقق من وجود قيمة داخل شيء." },
  { id: 10, word: "and", ar: "و", use: "يُستخدم عندما يجب تحقق شرطين معًا." },
  { id: 11, word: "or", ar: "أو", use: "يُستخدم عندما يكفي تحقق أحد الشرطين." },
  { id: 12, word: "not", ar: "ليس", use: "ينفي قيمة الشرط." },
  { id: 13, word: "True", ar: "صحيح", use: "قيمة منطقية تعني صح." },
  { id: 14, word: "False", ar: "خطأ", use: "قيمة منطقية تعني غير صح." },
  { id: 15, word: "None", ar: "لا شيء", use: "يمثل قيمة فارغة أو غير موجودة." },
  { id: 16, word: "import", ar: "استيراد", use: "يدخل مكتبة أو ملف للبرمجة." },
  { id: 17, word: "from", ar: "من", use: "يُستخدم مع import لاختيار جزء معين." },
  { id: 18, word: "as", ar: "باسم", use: "يعطي اسمًا مختصرًا للوحدة المستوردة." },
  { id: 19, word: "class", ar: "فئة", use: "تعريف قالب لإنشاء كائنات." },
  { id: 20, word: "try", ar: "حاول", use: "يبدأ كتلة قد تسبب خطأ." },
  { id: 21, word: "except", ar: "استثناء", use: "يُعالج الخطأ إذا حدث." },
  { id: 22, word: "finally", ar: "أخيرًا", use: "يُنفّذ دائمًا حتى لو حدث خطأ." },
  { id: 23, word: "raise", ar: "أطلق", use: "يُظهر خطأ يدويًا." },
  { id: 24, word: "pass", ar: "تجاوز", use: "يترك كتلة فارغة دون تنفيذ شيء." },
  { id: 25, word: "break", ar: "إيقاف", use: "يخرج من الحلقة فورًا." },
  { id: 26, word: "continue", ar: "تجاوز الدورة", use: "يقفز إلى الدورة التالية في الحلقة." },
  { id: 27, word: "lambda", ar: "دالة مبسطة", use: "ينشئ دالة قصيرة من سطر واحد." },
  { id: 28, word: "yield", ar: "أعطِ", use: "يعطي قيمة واحدة تلو الأخرى من المولد." },
  { id: 29, word: "async", ar: "غير متزامن", use: "يُعلن أن الدالة ستعمل بشكل غير متزامن." },
  { id: 30, word: "await", ar: "انتظر", use: "ينتظر إنهاء عملية غير متزامنة." },
  { id: 31, word: "with", ar: "مع", use: "يدير الموارد تلقائيًا داخل كتلة." },
  { id: 32, word: "assert", ar: "تأكد", use: "يختبر فرضية ويُظهر خطأ عند فشلها." },
  { id: 33, word: "del", ar: "احذف", use: "يحذف متغيرًا أو عنصرًا من القائمة." },
  { id: 34, word: "global", ar: "عام", use: "يفتح نطاق متغير عام داخل الدالة." },
  { id: 35, word: "nonlocal", ar: "غير محلي", use: "يستخدم متغيرًا من دالة خارجية." },
  { id: 36, word: "input", ar: "إدخال", use: "يقرأ نصًا من المستخدم." },
  { id: 37, word: "len", ar: "الطول", use: "يعطي عدد عناصر القائمة أو النص." },
  { id: 38, word: "type", ar: "النوع", use: "يُظهر نوع البيانات." },
  { id: 39, word: "range", ar: "نطاق", use: "يُنشئ أرقامًا متسلسلة." },
  { id: 40, word: "list", ar: "قائمة", use: "يخزن مجموعة من القيم ويمكن تعديلها." },
  { id: 41, word: "tuple", ar: "صف", use: "يخزن قيمًا ثابتة لا يمكن تعديلها." },
  { id: 42, word: "dict", ar: "قاموس", use: "يخزن أزواج مفتاح وقيمة." },
  { id: 43, word: "set", ar: "مجموعة", use: "يخزن قيمًا فريدة بدون تكرار." },
  { id: 44, word: "str", ar: "نص", use: "يحوّل القيم إلى نص." },
  { id: 45, word: "int", ar: "عدد صحيح", use: "يحوّل القيمة إلى رقم صحيح." },
  { id: 46, word: "float", ar: "عدد عشري", use: "يحوّل القيمة إلى رقم عشري." },
  { id: 47, word: "bool", ar: "منطقي", use: "يحوّل القيمة إلى True أو False." },
  { id: 48, word: "zip", ar: "دمج", use: "يجمع عنصرين أو أكثر في أزواج." },
  { id: 49, word: "enumerate", ar: "تعداد", use: "يضيف رقمًا لكل عنصر أثناء التكرار." },
  { id: 50, word: "open", ar: "فتح", use: "يفتح ملفًا لقراءة أو كتابة البيانات." }
];

const state = {
  user: JSON.parse(localStorage.getItem(STORAGE_KEY) || "null"),
  savedWords: JSON.parse(localStorage.getItem(WORDS_KEY) || "[]"),
  currentFilter: "all",
  quizIndex: 0,
  pendingOtp: null
};

const elements = {
  loginBtn: document.querySelector("#loginBtn"),
  themeToggle: document.querySelector("#themeToggle"),
  modal: document.querySelector("#authModal"),
  emailInput: document.querySelector("#emailInput"),
  otpInput: document.querySelector("#otpInput"),
  authStep1: document.querySelector("#authStep1"),
  authStep2: document.querySelector("#authStep2"),
  otpMessage: document.querySelector("#otpMessage"),
  closeModal: document.querySelector("#closeModal"),
  sendCodeBtn: document.querySelector("#sendCodeBtn"),
  verifyCodeBtn: document.querySelector("#verifyCodeBtn"),
  wordGrid: document.querySelector("#wordGrid"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  progressHint: document.querySelector("#progressHint"),
  statWords: document.querySelector("#statWords"),
  statLevel: document.querySelector("#statLevel"),
  statStreak: document.querySelector("#statStreak"),
  quizQuestion: document.querySelector("#quizQuestion"),
  quizAnswers: document.querySelector("#quizAnswers"),
  quizFeedback: document.querySelector("#quizFeedback"),
  openLogin: document.querySelector("#openLogin"),
  startLearning: document.querySelector("#startLearning")
};

function saveUser() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.user));
}

function saveWords() {
  localStorage.setItem(WORDS_KEY, JSON.stringify(state.savedWords));
}

function updateUserUi() {
  if (state.user && state.user.email) {
    elements.loginBtn.textContent = `مرحبًا ${state.user.name || "مستخدم"}`;
  } else {
    elements.loginBtn.textContent = "تسجيل الدخول";
  }
}

function renderWordCards() {
  const filtered = words.filter((word) => {
    if (state.currentFilter === "known") return state.savedWords.includes(word.id);
    if (state.currentFilter === "new") return !state.savedWords.includes(word.id);
    return true;
  });

  elements.wordGrid.innerHTML = filtered.map((word) => {
    const saved = state.savedWords.includes(word.id);
    return `
      <article class="word-card ${saved ? "saved" : ""}">
        <div class="word-number">${String(word.id).padStart(2, "0")}</div>
        <h3>${word.word}</h3>
        <p>${word.ar}</p>
        <p>${word.use}</p>
        <button class="save-word-btn" data-id="${word.id}">
          ${saved ? "✓ محفوظة" : "حفظ الكلمة"}
        </button>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".save-word-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      if (state.savedWords.includes(id)) {
        state.savedWords = state.savedWords.filter((item) => item !== id);
      } else {
        state.savedWords.push(id);
      }
      saveWords();
      updateProgress();
      renderWordCards();
    });
  });
}

function updateProgress() {
  const total = words.length;
  const done = state.savedWords.length;
  const percent = Math.min((done / total) * 100, 100);

  elements.progressText.textContent = `${done} / ${total}`;
  elements.progressBar.style.width = `${percent}%`;

  if (done === 0) {
    elements.progressHint.textContent = "ابدأ بالكلمة الأولى، وقم بحفظ كل كلمة وفهم مثال الاستخدام.";
  } else if (done < 20) {
    elements.progressHint.textContent = "أحسنت، استمر في التكرار. كل كلمة تُصنع مهارة.";
  } else if (done < 40) {
    elements.progressHint.textContent = "انت في النصف الأول من المسار. راجع الكلمات السابقة قبل الانتقال.";
  } else if (done < 50) {
    elements.progressHint.textContent = "مبروك، أنت تقترب من إتقان المفردات الأساسية.";
  } else {
    elements.progressHint.textContent = "أحسنت! لقد اكتملت 50 كلمة، الآن جاهز للاختبار والكتابة العملية.";
  }

  elements.statWords.textContent = String(done);
  elements.statLevel.textContent = done >= 50 ? "2" : "1";
  elements.statStreak.textContent = String(state.user?.streak || 0);
}

function renderQuiz() {
  const questions = [
    { q: "ما معنى كلمة <strong>print</strong>؟", answers: ["عرض قيمة أو نص", "تعريف دالة", "تكرار كل عنصر"], correct: 0 },
    { q: "ما الغرض من <strong>if</strong>؟", answers: ["مقارنة القيم فقط", "فحص الشرط وتنفيذ الكود عند صحته", "إيقاف الحلقة"], correct: 1 },
    { q: "ما معنى <strong>list</strong>؟", answers: ["دالة رقمية", "قائمة يمكن تعديلها", "اسم متغير"], correct: 1 },
    { q: "ما الذي يعود به <strong>return</strong>؟", answers: ["قيمة من الدالة", "إعادة تشغيل البرنامج", "تجميع الملفات"], correct: 0 }
  ];

  const current = questions[state.quizIndex % questions.length];
  elements.quizQuestion.innerHTML = current.q;
  elements.quizAnswers.innerHTML = current.answers.map((answer, index) => `
    <button class="answer-btn" data-index="${index}">${answer}</button>
  `).join("");

  elements.quizAnswers.querySelectorAll(".answer-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const chosen = Number(btn.dataset.index);
      const correct = current.correct;
      if (chosen === correct) {
        elements.quizFeedback.textContent = "إجابة صحيحة ✅";
        elements.quizFeedback.style.color = "var(--success)";
      } else {
        elements.quizFeedback.textContent = "ليس هذا الجواب، راجع الكلمة ومثال الاستخدام.";
        elements.quizFeedback.style.color = "#d65a5a";
      }
      state.quizIndex += 1;
      setTimeout(renderQuiz, 1200);
    });
  });
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("noxar-theme", document.body.classList.contains("dark") ? "dark" : "light");
}

function openModal() {
  elements.modal.classList.remove("hidden");
}

function closeModal() {
  elements.modal.classList.add("hidden");
}

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function triggerLoginFlow() {
  const email = elements.emailInput.value.trim();
  if (!email || !email.includes("@")) {
    alert("أدخل بريدًا صحيحًا أولًا.");
    return;
  }

  const otp = generateOtp();
  state.pendingOtp = otp;
  localStorage.setItem(OTP_KEY, otp);
  elements.authStep1.classList.add("hidden");
  elements.authStep2.classList.remove("hidden");
  elements.otpMessage.textContent = `تم إرسال رمز التحقق إلى ${email} — رمز تجريبي: ${otp}`;
}

function verifyOtp() {
  const code = elements.otpInput.value.trim();
  const otp = localStorage.getItem(OTP_KEY);

  if (!otp || code !== otp) {
    elements.otpMessage.textContent = "الرمز غير صحيح، تأكد من الرقم المرسل عليك.";
    elements.otpMessage.style.color = "#d65a5a";
    return;
  }

  const email = elements.emailInput.value.trim();
  const name = email.split("@")[0] || "مستخدم";
  state.user = {
    name,
    email,
    streak: state.user?.streak || 3,
    verifiedAt: new Date().toISOString()
  };

  saveUser();
  updateUserUi();
  closeModal();
  alert("تم تسجيل الدخول بنجاح ✅");
}

function initTheme() {
  if (localStorage.getItem("noxar-theme") === "dark") {
    document.body.classList.add("dark");
  }
}

function bindEvents() {
  elements.themeToggle.addEventListener("click", toggleTheme);
  elements.loginBtn.addEventListener("click", openModal);
  elements.openLogin.addEventListener("click", openModal);
  elements.closeModal.addEventListener("click", closeModal);
  elements.sendCodeBtn.addEventListener("click", triggerLoginFlow);
  elements.verifyCodeBtn.addEventListener("click", verifyOtp);
  document.querySelector("#startLearning").addEventListener("click", () => {
    document.getElementById("dictionary").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.currentFilter = btn.dataset.filter;
      renderWordCards();
    });
  });

  elements.modal.addEventListener("click", (event) => {
    if (event.target === elements.modal) closeModal();
  });
}

function init() {
  initTheme();
  bindEvents();
  updateUserUi();
  updateProgress();
  renderWordCards();
  renderQuiz();
}

init();
