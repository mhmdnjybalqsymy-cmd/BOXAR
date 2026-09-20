const STORAGE_KEY = 'noxar-state';
const state = {
  saved: JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"saved":[],"weak":[],"points":0,"streak":0}').saved || [],
  weak: JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"saved":[],"weak":[],"points":0,"streak":0}').weak || [],
  points: JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"saved":[],"weak":[],"points":0,"streak":0}').points || 0,
  streak: JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"saved":[],"weak":[],"points":0,"streak":0}').streak || 0,
  filter: 'all'
};

const $ = (sel) => document.querySelector(sel);
const saveState = () => localStorage.setItem(STORAGE_KEY, JSON.stringify({ saved: state.saved, weak: state.weak, points: state.points, streak: state.streak }));

function updateProgress() {
  const done = state.saved.length;
  const total = words.length;
  $('#progressText').textContent = `${done} / ${total}`;
  $('#progressBar').style.width = `${Math.min((done / total) * 100, 100)}%`;
  $('#statWords').textContent = done;
  $('#statPoints').textContent = state.points;
  $('#statStreak').textContent = state.streak;
  $('#progressHint').textContent = done >= total
    ? 'أحسنت! لقد اكتملت كل الكلمات الرئيسية، الآن جاهز للمرحلة التالية.'
    : done === 0
      ? 'احفظ الكلمات وافهم استخدامها.'
      : `ما زال لديك ${total - done} كلمة لتتقنها.`;
}

function renderWords() {
  const filtered = words.filter((word) => {
    if (state.filter === 'known') return state.saved.includes(word.id);
    if (state.filter === 'weak') return state.weak.includes(word.id);
    return true;
  });

  $('#wordGrid').innerHTML = filtered.map((word) => {
    const saved = state.saved.includes(word.id);
    return `
      <article class="word-card ${saved ? 'saved' : ''}">
        <span class="num">${String(word.id).padStart(2, '0')}</span>
        <h3>${word.word}</h3>
        <p>${word.ar}</p>
        <p>${word.use}</p>
        <button data-id="${word.id}">${saved ? '✓ محفوظة' : 'حفظ الكلمة'}</button>
      </article>
    `;
  }).join('');

  document.querySelectorAll('.word-card button').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.id);
      if (state.saved.includes(id)) {
        state.saved = state.saved.filter((value) => value !== id);
      } else {
        state.saved.push(id);
        state.points += 5;
      }
      saveState();
      updateProgress();
      renderWords();
    });
  });
}

function runCode() {
  const code = $('#codeInput').value;
  let output = 'تم التنفيذ بنجاح ✓';
  let hint = '';

  const nameMatch = code.match(/name\s*=\s*["']([^"']+)["']/);
  if (nameMatch) {
    output = `أهلاً ${nameMatch[1]}!`;
  }

  if (code.includes('print(') && !code.includes(')')) {
    hint = 'تلميح: أغلق القوس ) في أمر print.';
  }

  if (/if .*[^:]$/.test(code)) {
    hint = 'تلميح: نسيت إضافة النقطتين : في نهاية سطر if.';
  }

  if (!nameMatch && !code.includes('print')) {
    output = 'تم التنفيذ. جرّب print("Hello") لرؤية نص واضح.';
  }

  $('#codeOutput').textContent = output;
  $('#codeHint').textContent = hint || 'تم الفحص بنجاح ✓';
}

function initBlocks() {
  const bank = $('#blockBank');
  const workspace = $('#blockWorkspace');
  const sequence = ['print', '(', '"Hello"', ')'];

  sequence.forEach((value) => {
    const block = document.createElement('button');
    block.className = 'block';
    block.textContent = value;
    block.draggable = true;
    block.ondragstart = (event) => event.dataTransfer.setData('text/plain', value);
    block.onclick = () => {
      workspace.querySelector('span')?.remove();
      const clone = block.cloneNode(true);
      clone.classList.add('block');
      workspace.appendChild(clone);
    };
    bank.appendChild(block);
  });

  workspace.addEventListener('dragover', (event) => event.preventDefault());
  workspace.addEventListener('drop', (event) => {
    event.preventDefault();
    const value = event.dataTransfer.getData('text/plain');
    workspace.querySelector('span')?.remove();
    const clone = document.createElement('button');
    clone.className = 'block';
    clone.textContent = value;
    workspace.appendChild(clone);
  });

  $('#checkBlocks').addEventListener('click', () => {
    const response = [...workspace.querySelectorAll('.block')].map((item) => item.textContent).join('');
    const success = response === 'print("Hello")';
    $('#blockFeedback').textContent = success ? 'ممتاز! رتبت الكود بشكل صحيح ✅' : 'رتّب اللبنات بهذا الشكل: print("Hello")';
    $('#blockFeedback').style.color = success ? 'var(--green)' : 'var(--danger)';
  });
}

function renderQuiz() {
  const current = words[Math.floor(Math.random() * words.length)];
  $('#quizQuestion').innerHTML = `ما معنى <b>${current.word}</b>؟`;
  const options = [current.ar, 'تكرار الكود', 'إنشاء ملف', 'إدخال كلمة']
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  $('#quizAnswers').innerHTML = options.map((option) => `<button class="answer">${option}</button>`).join('');

  document.querySelectorAll('.answer').forEach((button) => {
    button.addEventListener('click', () => {
      const correct = button.textContent === current.ar;
      $('#quizFeedback').textContent = correct ? 'إجابة صحيحة ✅' : 'راجع الكلمة في القاموس وجرّب مرة أخرى.';
      $('#quizFeedback').style.color = correct ? 'var(--green)' : 'var(--danger)';
      if (correct) {
        state.points += 10;
        saveState();
        updateProgress();
      } else {
        state.weak = [...new Set([...state.weak, current.id])];
        saveState();
        renderWords();
      }
      setTimeout(renderQuiz, 1200);
    });
  });
}

function openAuth() {
  $('#authModal').classList.remove('hidden');
}

function closeAuth() {
  $('#authModal').classList.add('hidden');
}

function sendOtp() {
  const email = $('#emailInput').value.trim();
  if (!email.includes('@')) {
    alert('أدخل بريدًا صحيحًا أولًا.');
    return;
  }

  const otp = String(Math.floor(100000 + Math.random() * 900000));
  sessionStorage.setItem('noxar-otp', otp);
  $('#emailStep').classList.add('hidden');
  $('#otpStep').classList.remove('hidden');
  $('#otpMessage').textContent = `رمز تجريبي: ${otp} (يعرض داخل التطبيق فقط في هذه النسخة)}`;
}

function verifyOtp() {
  const otp = $('#otpInput').value.trim();
  const expected = sessionStorage.getItem('noxar-otp');

  if (otp !== expected) {
    $('#otpMessage').textContent = 'الرمز غير صحيح، تأكد من الرقم المرسل.';
    $('#otpMessage').style.color = 'var(--danger)';
    return;
  }

  $('#loginBtn').textContent = 'حسابي ✓';
  closeAuth();
  alert('تم الدخول بنجاح ✅');
}

function bindEvents() {
  $('#themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('noxar-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });

  $('#loginBtn').addEventListener('click', openAuth);
  $('#closeModal').addEventListener('click', closeAuth);
  $('#sendCode').addEventListener('click', sendOtp);
  $('#verifyCode').addEventListener('click', verifyOtp);
  $('#runCode').addEventListener('click', runCode);
  $('#startBtn').addEventListener('click', () => document.getElementById('dictionary').scrollIntoView({ behavior: 'smooth' }));

  document.querySelectorAll('.filter').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      state.filter = button.dataset.filter;
      renderWords();
    });
  });

  $('#authModal').addEventListener('click', (event) => {
    if (event.target === $('#authModal')) closeAuth();
  });
}

function init() {
  if (localStorage.getItem('noxar-theme') === 'dark') {
    document.body.classList.add('dark');
  }

  bindEvents();
  initBlocks();
  updateProgress();
  renderWords();
  renderQuiz();
}

init();
