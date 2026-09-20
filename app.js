const themeToggle = document.querySelector('#themeToggle');
const codeInput = document.querySelector('#codeInput');
const codeResult = document.querySelector('#codeResult');
const runCode = document.querySelector('#runCode');

// حفظ تفضيل المستخدم للوضع الليلي
if (localStorage.getItem('boxar-theme') === 'dark') document.body.classList.add('dark');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('boxar-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// محاكاة بسيطة لمحرر BOXAR الآمن: نعرض النص المتوقع بدل تنفيذ JavaScript عشوائيًا.
runCode.addEventListener('click', () => {
  const source = codeInput.value;
  const match = source.match(/name\s*=\s*["']([^"']+)["']/);
  const name = match ? match[1] : 'BOXAR';
  codeResult.textContent = `مرحبًا بك في ${name}!\nتم التنفيذ بنجاح ✓`;
});

document.querySelectorAll('.start-path').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('#practice').scrollIntoView({ behavior: 'smooth' });
    codeInput.focus();
  });
});
