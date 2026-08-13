/* ==========================================================================
   محرك التطبيق — منصة حسام أبو علي لتعليم السواقة
   يدير: الصفحة الرئيسية، محرك الاختبارات القابل لإعادة الاستخدام، شاشة
   النتائج، ووضع المراجعة. مبني بشكل يسهّل لاحقاً إضافة تسجيل دخول وحفظ
   تقدم الطالب دون تعديل بنية البيانات (انظر js/data.js).
   ========================================================================== */

const App = {
  state: {
    view: "home", // home | quiz | result | review
    categoryKey: null,
    questions: [],
    index: 0,
    answers: [], // { questionId, selectedIndex, status: 'correct'|'incorrect'|'pending' }
  },

  el: {},

  init() {
    this.cacheEls();
    this.renderCategoryCards();
    this.bindGlobalEvents();
    this.route();
  },

  cacheEls() {
    this.el.categoryGrid = document.getElementById("categoryGrid");
    this.el.quizApp = document.getElementById("quizApp");
    this.el.homeSections = document.querySelectorAll("[data-home-section]");
    this.el.mobileNav = document.getElementById("mobileNav");
    this.el.hamburger = document.getElementById("hamburgerBtn");
    this.el.header = document.querySelector(".site-header");
  },

  bindGlobalEvents() {
    document.querySelectorAll("[data-start-category]").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.openCategory(btn.getAttribute("data-start-category"));
      });
    });

    document.querySelectorAll("[data-scroll-home]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.goHome();
      });
    });

    this.el.hamburger?.addEventListener("click", () => {
      this.el.mobileNav.classList.toggle("open");
    });
    this.el.mobileNav?.querySelectorAll("a, button").forEach((a) => {
      a.addEventListener("click", () => this.el.mobileNav.classList.remove("open"));
    });
  },

  route() {
    // Simple hash-based entry so links like #signs can deep-link into a category.
    const hash = window.location.hash.replace("#", "");
    if (CATEGORIES[hash]) {
      this.openCategory(hash);
    }
  },

  goHome() {
    this.state.view = "home";
    this.el.quizApp.classList.remove("active");
    this.el.homeSections.forEach((s) => (s.style.display = ""));
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  /* ------------------------------  الصفحة الرئيسية  ----------------------- */
  renderCategoryCards() {
    const html = Object.values(CATEGORIES)
      .map(
        (cat) => `
      <article class="category-card">
        <div class="category-icon">${ICONS[cat.icon]}</div>
        <h3>${cat.title}</h3>
        <p class="desc">${cat.description}</p>
        <div class="category-meta">
          <span class="category-count">
            ${cat.examLength && cat.questions.length > cat.examLength
              ? `امتحان من <strong>${cat.examLength}</strong> سؤالاً (من بنك ${cat.questions.length})`
              : `<strong>${cat.questions.length}</strong> سؤال`}
          </span>
          <button class="btn btn-navy" data-start-category="${cat.key}">ابدأ التدريب</button>
        </div>
      </article>`
      )
      .join("");
    this.el.categoryGrid.innerHTML = html;
    this.el.categoryGrid.querySelectorAll("[data-start-category]").forEach((btn) => {
      btn.addEventListener("click", () => this.openCategory(btn.getAttribute("data-start-category")));
    });
  },

  /* ------------------------  شاشة اختيار مجموعة الأسئلة  -------------------- */
  SET_SIZE: 30,

  openCategory(categoryKey) {
    const cat = CATEGORIES[categoryKey];
    if (!cat) return;

    this.state.view = "landing";
    this.state.categoryKey = categoryKey;

    const setSize = this.SET_SIZE;
    const total = cat.questions.length;
    const setCount = Math.ceil(total / setSize);
    const sets = [];
    for (let i = 0; i < setCount; i++) {
      const start = i * setSize;
      const end = Math.min(start + setSize, total);
      sets.push({ start, end, label: `الأسئلة ${start + 1} - ${end}` });
    }

    const setsHtml = sets
      .map(
        (s) => `<button class="btn btn-navy set-btn" data-set-start="${s.start}" data-set-end="${s.end}">${s.label}</button>`
      )
      .join("");

    this.el.homeSections.forEach((s) => (s.style.display = "none"));
    this.el.quizApp.classList.add("active");
    this.el.mobileNav?.classList.remove("open");

    this.el.quizApp.innerHTML = `
      <div class="container">
        <button class="back-home-link" data-scroll-home>${ICONS.arrowBack} العودة للرئيسية</button>

        <div class="quiz-title-block" style="margin-bottom:22px;">
          <h2>${cat.title}</h2>
          <span>${cat.description}</span>
        </div>

        <div class="landing-primary-actions">
          <button class="btn btn-gold" id="startRandomBtn">
            ${ICONS.target} امتحان تجريبي عشوائي (${Math.min(cat.examLength || setSize, total)} سؤالاً)
          </button>
          <button class="btn btn-outline-navy" id="startFullBankBtn">تدرّب على كامل البنك (${total} سؤالاً)</button>
        </div>

        <div class="landing-sets-block">
          <h3 class="landing-sets-title">أو اختر مجموعة أسئلة محددة</h3>
          <div class="sets-grid">${setsHtml}</div>
        </div>
      </div>
    `;

    document.getElementById("startRandomBtn").addEventListener("click", () => this.startQuiz(categoryKey));
    document.getElementById("startFullBankBtn").addEventListener("click", () => this.startQuiz(categoryKey, { fullBank: true }));
    this.el.quizApp.querySelector("[data-scroll-home]").addEventListener("click", (e) => {
      e.preventDefault();
      this.goHome();
    });
    this.el.quizApp.querySelectorAll(".set-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const start = parseInt(btn.getAttribute("data-set-start"), 10);
        const end = parseInt(btn.getAttribute("data-set-end"), 10);
        this.startQuiz(categoryKey, { range: [start, end] });
      });
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  /* --------------------------------  الاختبار  ----------------------------- */
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  startQuiz(categoryKey, options = {}) {
    const cat = CATEGORIES[categoryKey];
    if (!cat) return;

    this.state.view = "quiz";
    this.state.categoryKey = categoryKey;
    this.state.index = 0;
    this.state.answers = [];

    // Three modes:
    // - options.range: a fixed numbered set from the landing screen (e.g. "1-30"),
    //   always the same underlying questions, but re-shuffled in order each time.
    // - options.fullBank: drill the entire question bank.
    // - default: a fresh random exam-length batch drawn from the whole bank.
    const shouldShuffleOptions = categoryKey !== "public_vehicle";
    let basePool;
    if (options.range) {
      const [start, end] = options.range;
      basePool = cat.questions.slice(start, end);
      this.state.setRange = options.range;
    } else if (options.fullBank || !cat.examLength) {
      basePool = cat.questions;
      this.state.setRange = null;
    } else {
      basePool = this.shuffle(cat.questions).slice(0, Math.min(cat.examLength, cat.questions.length));
      this.state.setRange = null;
    }
    const pool = this.shuffle(basePool);

    this.state.isFullBank = !!options.fullBank || (!cat.examLength && !options.range);
    this.state.questions = pool.map((q) => {
      if (!shouldShuffleOptions) return { ...q, displayOptions: q.options.map((t, i) => ({ t, i })) };
      const paired = q.options.map((t, i) => ({ t, i }));
      return { ...q, displayOptions: this.shuffle(paired) };
    });

    this.el.homeSections.forEach((s) => (s.style.display = "none"));
    this.el.quizApp.classList.add("active");
    this.el.mobileNav?.classList.remove("open");
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.renderQuestion();
  },

  retryOptions() {
    if (this.state.setRange) return { range: this.state.setRange };
    if (this.state.isFullBank) return { fullBank: true };
    return {};
  },

  currentCategory() {
    return CATEGORIES[this.state.categoryKey];
  },

  renderQuestion() {
    const { questions, index } = this.state;
    const total = questions.length;
    const q = questions[index];
    const cat = this.currentCategory();
    const letters = ["أ", "ب", "ج", "د"];
    const pct = Math.round((index / total) * 100);

    const signBlock =
      cat.key === "signs"
        ? `<div class="sign-image-wrap">${q.image ? `<img src="${q.image}" alt="إشارة سير" width="300" height="300" loading="lazy">` : signSVG(q.signType)}</div>`
        : "";

    const optionsHtml = q.displayOptions
      .map(
        (opt, pos) => `
      <button class="option-btn" data-pos="${pos}" data-original-index="${opt.i}">
        <span class="opt-letter">${letters[pos]}</span>
        <span class="opt-text">${opt.t}</span>
        <span class="opt-icon">${ICONS.check}</span>
      </button>`
      )
      .join("");

    this.el.quizApp.innerHTML = `
      <div class="container">
        <button class="back-home-link" data-scroll-home>${ICONS.arrowBack} العودة للرئيسية</button>

        <div class="quiz-topbar">
          <div class="quiz-title-block">
            <h2>${cat.title}</h2>
            <span>${this.state.setRange
              ? `مجموعة الأسئلة ${this.state.setRange[0] + 1} - ${this.state.setRange[1]} (من بنك ${cat.questions.length})`
              : this.state.isFullBank
              ? `تدريب شامل على كامل بنك الأسئلة (${cat.questions.length} سؤالاً)`
              : `امتحان تجريبي عشوائي — ${total} سؤالاً من أصل ${cat.questions.length} في البنك`}</span>
          </div>
          <div class="quiz-counter">السؤال ${index + 1} من ${total}</div>
        </div>

        <div class="road-progress" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100">
          <div class="road-fill" style="width:${pct}%"></div>
          <div class="road-dash"></div>
          <div class="road-car" style="right:${pct}%">${ICONS.car}</div>
        </div>

        <div class="question-card">
          <div class="question-eyebrow">${ICONS.target} ${cat.shortTitle}</div>
          ${signBlock}
          <h3 class="question-text">${q.question}</h3>
          <div class="options-list">${optionsHtml}</div>
          <div class="feedback-banner" id="feedbackBanner"></div>
        </div>

        <div class="quiz-nav-row">
          <div class="side">
            <button class="btn btn-ghost" id="prevBtn" ${index === 0 ? "disabled" : ""}>السؤال السابق</button>
            <button class="btn btn-ghost" id="exitBtn">إنهاء التدريب</button>
          </div>
          <button class="btn btn-gold" id="nextBtn" disabled>السؤال التالي ←</button>
        </div>
      </div>
    `;

    this.el.quizApp.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => this.selectOption(btn));
    });
    document.getElementById("nextBtn").addEventListener("click", () => this.nextQuestion());
    document.getElementById("prevBtn").addEventListener("click", () => this.prevQuestion());
    document.getElementById("exitBtn").addEventListener("click", () => this.confirmExit());
    this.el.quizApp.querySelector("[data-scroll-home]").addEventListener("click", (e) => {
      e.preventDefault();
      this.confirmExit();
    });

    // If this question was already answered (via "previous"), restore state.
    const existing = this.state.answers.find((a) => a.questionId === q.id);
    if (existing) this.lockQuestion(existing.selectedOriginalIndex, true);
  },

  selectOption(btn) {
    const q = this.state.questions[this.state.index];
    const originalIndex = parseInt(btn.getAttribute("data-original-index"), 10);
    const already = this.state.answers.find((a) => a.questionId === q.id);
    if (already) return; // prevent accidental changes after submit

    let status;
    if (q.correctAnswer === null || q.correctAnswer === undefined) {
      status = "pending";
    } else {
      status = originalIndex === q.correctAnswer ? "correct" : "incorrect";
    }

    this.state.answers.push({
      questionId: q.id,
      selectedOriginalIndex: originalIndex,
      status,
    });

    this.lockQuestion(originalIndex, false);
  },

  lockQuestion(selectedOriginalIndex, isRestoring) {
    const q = this.state.questions[this.state.index];
    const buttons = this.el.quizApp.querySelectorAll(".option-btn");
    const hasKey = q.correctAnswer !== null && q.correctAnswer !== undefined;

    buttons.forEach((b) => {
      const oi = parseInt(b.getAttribute("data-original-index"), 10);
      b.disabled = true;
      if (hasKey && oi === q.correctAnswer) {
        b.classList.add("correct");
      } else if (oi === selectedOriginalIndex && hasKey) {
        b.classList.add("incorrect");
      } else if (oi !== selectedOriginalIndex) {
        b.classList.add("dim");
      }
      if (!hasKey && oi === selectedOriginalIndex) {
        b.classList.add("dim");
        b.style.borderColor = "var(--gold-500)";
      }
    });

    const banner = document.getElementById("feedbackBanner");
    if (!hasKey) {
      banner.className = "feedback-banner pending show";
      banner.innerHTML = `⏳ هذا السؤال قيد مراجعة الإدارة (لم يتم بعد اعتماد إجابة رسمية له من ملف المصدر).`;
    } else if (selectedOriginalIndex === q.correctAnswer) {
      banner.className = "feedback-banner correct show";
      banner.innerHTML = `${ICONS.check} إجابة صحيحة ✓ ${q.explanation ? `<span class="feedback-explain">${q.explanation}</span>` : ""}`;
    } else {
      banner.className = "feedback-banner incorrect show";
      banner.innerHTML = `${ICONS.cross} إجابة خاطئة ✗ — الإجابة الصحيحة: ${q.options[q.correctAnswer]}${q.explanation ? `<span class="feedback-explain">${q.explanation}</span>` : ""}`;
    }

    document.getElementById("nextBtn").disabled = false;
  },

  nextQuestion() {
    if (this.state.index < this.state.questions.length - 1) {
      this.state.index++;
      this.renderQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      this.finishQuiz();
    }
  },

  prevQuestion() {
    if (this.state.index > 0) {
      this.state.index--;
      this.renderQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },

  confirmExit() {
    if (this.state.answers.length > 0 && this.state.answers.length < this.state.questions.length) {
      const ok = window.confirm("هل تريد إنهاء التدريب والعودة إلى الرئيسية؟ لن يتم احتساب النتيجة.");
      if (!ok) return;
    }
    this.goHome();
  },

  /* --------------------------------  النتيجة  ------------------------------ */
  finishQuiz() {
    this.state.view = "result";
    const { answers, questions } = this.state;
    const cat = this.currentCategory();

    const gradable = answers.filter((a) => a.status !== "pending");
    const correct = answers.filter((a) => a.status === "correct").length;
    const incorrect = answers.filter((a) => a.status === "incorrect").length;
    const pending = answers.filter((a) => a.status === "pending").length;
    const pct = gradable.length ? Math.round((correct / gradable.length) * 100) : 0;

    let msg, headline;
    if (gradable.length === 0) {
      headline = "تم إنهاء التدريب 🚕";
      msg = "جميع أسئلة هذا القسم قيد مراجعة الإدارة حالياً. راجع إجاباتك أدناه بانتظار اعتماد المفاتيح الرسمية.";
    } else if (pct >= 85) {
      headline = "ممتاز! 🎉";
      msg = `لقد أجبت بشكل صحيح على ${correct} من أصل ${gradable.length} سؤالًا قابلاً للتصحيح.`;
    } else if (pct >= 60) {
      headline = "جيد، استمر بالتدريب 👍";
      msg = `أجبت بشكل صحيح على ${correct} من أصل ${gradable.length} سؤالًا. راجع الإجابات الخاطئة لتحسين نتيجتك.`;
    } else {
      headline = "تحتاج إلى المزيد من التدريب 💪";
      msg = `راجع الإجابات الخاطئة وحاول مرة أخرى. أجبت بشكل صحيح على ${correct} من أصل ${gradable.length}.`;
    }

    this.el.quizApp.innerHTML = `
      <div class="container">
        <div class="result-card">
          <div class="result-ring" style="--pct:${pct}"><strong>${gradable.length ? pct + "%" : "—"}</strong><span>نسبة النجاح</span></div>
          <h3>${headline}</h3>
          <p class="msg">${msg}</p>
          <div class="result-stats">
            <div class="result-stat ok"><strong>${correct}</strong><span>إجابات صحيحة</span></div>
            <div class="result-stat bad"><strong>${incorrect}</strong><span>إجابات خاطئة</span></div>
            ${pending ? `<div class="result-stat pending"><strong>${pending}</strong><span>قيد المراجعة</span></div>` : ""}
            <div class="result-stat"><strong>${questions.length}</strong><span>مجموع الأسئلة</span></div>
          </div>
          <div class="result-actions">
            <button class="btn btn-gold" id="retryBtn">إعادة الامتحان</button>
            <button class="btn btn-navy" id="reviewBtn">مراجعة الإجابات</button>
            <button class="btn btn-ghost" id="homeBtn">العودة للرئيسية</button>
          </div>
          <p style="margin-top:18px; font-size:0.88rem; color:var(--ink-dim);">
            ${this.state.setRange
              ? `أنهيت مجموعة الأسئلة ${this.state.setRange[0] + 1} - ${this.state.setRange[1]}.`
              : this.state.isFullBank
              ? `أنهيت للتو تدريباً شاملاً على كامل البنك.`
              : `هذا امتحان تجريبي عشوائي من ${questions.length} سؤالاً.`}
            <button id="backToSetsBtn" style="background:none;border:none;color:var(--navy-700);font-weight:700;text-decoration:underline;cursor:pointer;">
              عرض كل مجموعات الأسئلة
            </button>
          </p>
        </div>
      </div>
    `;

    document.getElementById("retryBtn").addEventListener("click", () => this.startQuiz(cat.key, this.retryOptions()));
    document.getElementById("reviewBtn").addEventListener("click", () => this.renderReview());
    document.getElementById("homeBtn").addEventListener("click", () => this.goHome());
    document.getElementById("backToSetsBtn").addEventListener("click", () => this.openCategory(cat.key));
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  /* -------------------------------  وضع المراجعة  --------------------------- */
  renderReview() {
    this.state.view = "review";
    const { questions, answers } = this.state;
    const cat = this.currentCategory();

    const itemsHtml = questions
      .map((q) => {
        const ans = answers.find((a) => a.questionId === q.id);
        const hasKey = q.correctAnswer !== null && q.correctAnswer !== undefined;
        let tagClass = "pending", tagText = "قيد المراجعة", itemClass = "is-pending";
        let studentLine = "";
        let correctLine = "";

        if (ans && hasKey) {
          if (ans.status === "correct") {
            tagClass = "ok"; tagText = "إجابة صحيحة"; itemClass = "is-correct";
            studentLine = `<p class="ra correct-line">✓ إجابتك: ${q.options[ans.selectedOriginalIndex]}</p>`;
          } else {
            tagClass = "bad"; tagText = "إجابة خاطئة"; itemClass = "is-incorrect";
            studentLine = `<p class="ra wrong-line">✗ إجابتك: ${q.options[ans.selectedOriginalIndex]}</p>`;
            correctLine = `<p class="ra correct-line">✓ الإجابة الصحيحة: ${q.options[q.correctAnswer]}</p>`;
          }
        } else if (ans && !hasKey) {
          studentLine = `<p class="ra pending-line">إجابتك: ${q.options[ans.selectedOriginalIndex]} — بانتظار اعتماد المفتاح الرسمي</p>`;
        } else {
          studentLine = `<p class="ra pending-line">لم تتم الإجابة عن هذا السؤال</p>`;
        }

        return `
        <div class="review-item ${itemClass}">
          <span class="review-tag ${tagClass}">${tagText}</span>
          <p class="rq">${q.question}</p>
          ${studentLine}
          ${correctLine}
          ${q.explanation ? `<p class="ra" style="color:var(--ink-dim)">${q.explanation}</p>` : ""}
        </div>`;
      })
      .join("");

    this.el.quizApp.innerHTML = `
      <div class="container">
        <button class="back-home-link" id="backToResultBtn">${ICONS.arrowBack} العودة للنتيجة</button>
        <div class="quiz-title-block" style="margin-bottom:20px;">
          <h2>مراجعة إجابات: ${cat.title}</h2>
          <span>راجع كل سؤال وتحقق من إجابتك مقابل الإجابة الصحيحة</span>
        </div>
        <div class="review-list">${itemsHtml}</div>
        <div class="result-actions" style="margin-top:30px;">
          <button class="btn btn-gold" id="retryBtn2">إعادة الامتحان</button>
          <button class="btn btn-ghost" id="homeBtn2">العودة للرئيسية</button>
        </div>
      </div>
    `;
    document.getElementById("backToResultBtn").addEventListener("click", () => this.finishQuiz());
    document.getElementById("retryBtn2").addEventListener("click", () => this.startQuiz(cat.key, this.retryOptions()));
    document.getElementById("homeBtn2").addEventListener("click", () => this.goHome());
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
};

document.addEventListener("DOMContentLoaded", () => App.init());
