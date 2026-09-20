const books = [
  {
    id: 1,
    title: 'تاريخ العرب قبل الإسلام',
    author: 'أحمد بن محمد',
    category: 'تاريخ',
    language: 'العربية',
    pages: 420,
    cover:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
    description:
      'دراسة شاملة عن الجذور التاريخية للعرب، الحضارات، التحولات الاجتماعية، والأحداث الكبرى التي شكلت مسار الأمة.',
    featured: true,
  },
  {
    id: 2,
    title: 'الرياضيات للمبتدئين',
    author: 'سارة القحطاني',
    category: 'رياضيات',
    language: 'العربية',
    pages: 310,
    cover:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
    description:
      'كتاب مبسط يشرح المفاهيم الأساسية في الحساب والجبر والهندسة بأسلوب تدريجي ومريح مناسب للمبتدئين.',
    featured: true,
  },
  {
    id: 3,
    title: 'الفقه في الحياة اليومية',
    author: 'محمد العتيبي',
    category: 'دين',
    language: 'العربية',
    pages: 360,
    cover:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80',
    description:
      'رؤية تطبيقية للمعاملات الدينية، العبادات، والأحكام المتعلقة بالحياة اليومية بأسلوب واضح وميسر.',
    featured: false,
  },
  {
    id: 4,
    title: 'مقدمة في علوم الأرض',
    author: 'ليلى الزهراني',
    category: 'علوم',
    language: 'العربية',
    pages: 275,
    cover:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=900&q=80',
    description:
      'استعراض شامل لمفاهيم جيولوجيا الأرض، المناخ، الموارد الطبيعية، والتغيرات البيئية من منظور علمي.',
    featured: true,
  },
  {
    id: 5,
    title: 'الأدب العربي القديم',
    author: 'عبد الرحمن الشمري',
    category: 'أدب',
    language: 'العربية',
    pages: 390,
    cover:
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80',
    description:
      'رحلة داخل الشعر والخطابة والنثر العربي، مع تحليل جمالي وتاريخي لأهم الشخصيات والحركات.',
    featured: false,
  },
  {
    id: 6,
    title: 'الطب الحديث للمجتمعات',
    author: 'أنوار النجار',
    category: 'طب',
    language: 'العربية',
    pages: 330,
    cover:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    description:
      'مقدمة عملية لفهم الأمراض الشائعة، العناية الصحية، والوقاية من خلال تطبيقات علمية مبسطة.',
    featured: false,
  },
  {
    id: 7,
    title: 'الفلسفة والوعي',
    author: 'د. خالد السديري',
    category: 'فلسفة',
    language: 'العربية',
    pages: 290,
    cover:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
    description:
      'مقدمة في الأسئلة الكبرى عن الوعي، العقل، والمعنى، مع ربطها بالتاريخ الفكري العربي والغربي.',
    featured: false,
  },
  {
    id: 8,
    title: 'تطوير الذات والنجاح',
    author: 'رنا الحربي',
    category: 'تنمية',
    language: 'العربية',
    pages: 250,
    cover:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    description:
      'خطة عملية لتطوير العادات، بناء المهارات، وتعزيز الثقة بالنفس لتحقيق تقدم مستمر واتخاذ قرارات أفضل.',
    featured: true,
  },
];

const categories = ['الكل', 'تاريخ', 'دين', 'رياضيات', 'علوم', 'أدب', 'طب', 'فلسفة', 'تنمية'];

const state = {
  selectedCategory: 'الكل',
  query: '',
  favorites: new Set(),
  theme: 'dark',
};

const featuredBooksEl = document.getElementById('featuredBooks');
const booksGridEl = document.getElementById('booksGrid');
const categoryListEl = document.getElementById('categoryList');
const favoritesListEl = document.getElementById('favoritesList');
const resultCountEl = document.getElementById('resultCount');
const favoritesCountEl = document.getElementById('favoritesCount');
const searchInputEl = document.getElementById('searchInput');
const modalEl = document.getElementById('bookModal');
const modalContentEl = document.getElementById('modalContent');

function getFilteredBooks() {
  return books.filter((book) => {
    const matchesCategory =
      state.selectedCategory === 'الكل' || book.category === state.selectedCategory;
    const searchText = `${book.title} ${book.author} ${book.category}`.toLowerCase();
    const matchesQuery = searchText.includes(state.query.trim().toLowerCase());
    return matchesCategory && matchesQuery;
  });
}

function createCategoryChips() {
  categoryListEl.innerHTML = categories
    .map(
      (category) => `
        <button
          class="category-pill ${state.selectedCategory === category ? 'active' : ''}"
          type="button"
          data-category="${category}"
        >
          ${category}
        </button>
      `
    )
    .join('');

  categoryListEl.querySelectorAll('.category-pill').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedCategory = button.dataset.category;
      render();
    });
  });
}

function renderFeaturedBooks() {
  const featured = books.filter((book) => book.featured).slice(0, 4);

  featuredBooksEl.innerHTML = featured
    .map(
      (book) => `
        <article class="book-card">
          <div class="cover">
            <img src="${book.cover}" alt="${book.title}" />
            <button
              class="favorite-btn ${state.favorites.has(book.id) ? 'active' : ''}"
              type="button"
              data-id="${book.id}"
              aria-label="إضافة إلى المفضلة"
            >
              ${state.favorites.has(book.id) ? '♥' : '♡'}
            </button>
          </div>
          <div class="book-body">
            <h3>${book.title}</h3>
            <div class="meta">
              <span>${book.author}</span>
              <span class="label-badge">${book.category}</span>
            </div>
            <div class="book-actions">
              <button class="read-btn" type="button" data-open="${book.id}">اقرأ</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  attachBookActions();
}

function renderBooks() {
  const filteredBooks = getFilteredBooks();

  resultCountEl.textContent = `${filteredBooks.length} كتاب`;

  if (!filteredBooks.length) {
    booksGridEl.innerHTML = '<div class="empty-state">لا توجد نتائج تطابق بحثك حاليًا.</div>';
    return;
  }

  booksGridEl.innerHTML = filteredBooks
    .map(
      (book) => `
        <article class="book-card">
          <div class="cover">
            <img src="${book.cover}" alt="${book.title}" />
            <button
              class="favorite-btn ${state.favorites.has(book.id) ? 'active' : ''}"
              type="button"
              data-id="${book.id}"
              aria-label="إضافة إلى المفضلة"
            >
              ${state.favorites.has(book.id) ? '♥' : '♡'}
            </button>
          </div>
          <div class="book-body">
            <h3>${book.title}</h3>
            <div class="meta">
              <span>${book.author}</span>
              <span class="label-badge">${book.category}</span>
            </div>
            <div class="book-actions">
              <button class="read-btn" type="button" data-open="${book.id}">اقرأ</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  attachBookActions();
}

function renderFavorites() {
  const favoriteBooks = books.filter((book) => state.favorites.has(book.id));
  favoritesCountEl.textContent = favoriteBooks.length;

  if (!favoriteBooks.length) {
    favoritesListEl.innerHTML = '<div class="empty-state">قائمة المفضلة فارغة حاليًا.</div>';
    return;
  }

  favoritesListEl.innerHTML = favoriteBooks
    .map(
      (book) => `
        <div class="favorite-item">
          <img src="${book.cover}" alt="${book.title}" />
          <div class="favorite-meta">
            <h4>${book.title}</h4>
            <small>${book.author}</small>
          </div>
          <button class="read-btn" type="button" data-open="${book.id}">فتح</button>
        </div>
      `
    )
    .join('');

  attachBookActions();
}

function attachBookActions() {
  document.querySelectorAll('[data-open]').forEach((button) => {
    button.addEventListener('click', () => {
      const book = books.find((item) => item.id === Number(button.dataset.open));
      if (book) openBookModal(book);
    });
  });

  document.querySelectorAll('[data-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.id);
      if (state.favorites.has(id)) {
        state.favorites.delete(id);
      } else {
        state.favorites.add(id);
      }
      render();
    });
  });
}

function openBookModal(book) {
  modalContentEl.innerHTML = `
    <div class="modal-cover">
      <img src="${book.cover}" alt="${book.title}" />
    </div>
    <div class="modal-text">
      <h2>${book.title}</h2>
      <div class="meta-line">
        <span>المؤلف: ${book.author}</span>
        <span>التصنيف: ${book.category}</span>
        <span>اللغة: ${book.language}</span>
      </div>
      <div class="meta-line">
        <span>الصفحات: ${book.pages}</span>
      </div>
      <p>${book.description}</p>
      <div class="modal-cta">
        <button class="primary" type="button">قراءة الآن</button>
        <button class="ghost" type="button" data-fav="${book.id}">
          ${state.favorites.has(book.id) ? 'حذف من المفضلة' : 'أضف للمفضلة'}
        </button>
      </div>
    </div>
  `;

  const favButton = modalContentEl.querySelector('[data-fav]');
  favButton?.addEventListener('click', () => {
    const id = Number(favButton.dataset.fav);
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
    } else {
      state.favorites.add(id);
    }
    render();
    openBookModal(books.find((item) => item.id === id));
  });

  modalEl.classList.remove('hidden');
  modalEl.setAttribute('aria-hidden', 'false');
}

function closeBookModal() {
  modalEl.classList.add('hidden');
  modalEl.setAttribute('aria-hidden', 'true');
}

function render() {
  createCategoryChips();
  renderFeaturedBooks();
  renderBooks();
  renderFavorites();
}

searchInputEl.addEventListener('input', (event) => {
  state.query = event.target.value;
  renderBooks();
});

document.getElementById('themeToggle').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.body.style.setProperty(
    '--bg',
    state.theme === 'dark' ? '#07111d' : '#edf3fb'
  );
  document.body.style.setProperty(
    '--bg-2',
    state.theme === 'dark' ? '#0d1a2b' : '#ffffff'
  );
  document.body.style.setProperty(
    '--text',
    state.theme === 'dark' ? '#edf5ff' : '#0d2238'
  );
  document.body.style.setProperty(
    '--muted',
    state.theme === 'dark' ? '#9bb4d0' : '#516a84'
  );
  document.body.style.setProperty(
    '--card',
    state.theme === 'dark' ? 'rgba(19, 31, 45, 0.96)' : '#ffffff'
  );
  document.body.style.setProperty(
    '--panel',
    state.theme === 'dark' ? 'rgba(15, 28, 41, 0.92)' : '#f7fbff'
  );
});

modalEl.addEventListener('click', (event) => {
  if (event.target.dataset.close !== undefined) {
    closeBookModal();
  }
});

document.querySelector('.primary-btn').addEventListener('click', () => {
  document.getElementById('books').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.secondary-btn').addEventListener('click', () => {
  document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
});

render();
