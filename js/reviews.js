/* ==========================================================================
   نظام التقييمات بالنجوم — مدرسة حسام أبو علي لتعليم السواقة
   يستخدم Firebase Firestore كقاعدة بيانات مجانية لتخزين تقييمات الزوار
   وعرضها للجميع مع حساب المعدل العام تلقائياً.
   كما يرسل إشعار إيميل تلقائي عبر EmailJS، ويعرض زر واتساب اختياري
   لإرسال نسخة من التقييم مباشرة إلى رقم المدرسة.

   ⚠️ قبل التشغيل: عبّي بيانات "firebaseConfig" و"EMAILJS_CONFIG" أدناه
   (راجع تعليمات الإعداد التي أرسلتها لك).
   ========================================================================== */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// 🔧 عبّي هذا الكائن ببيانات مشروعك على Firebase (Project settings > مقاطع كود الويب)
const firebaseConfig = {
  apiKey: "AIzaSyAqu8SLlW1mR9KgHVpTva7uk7QfZtOu_N8",
  authDomain: "drivingschool-9dd74.firebaseapp.com",
  projectId: "drivingschool-9dd74",
  storageBucket: "drivingschool-9dd74.firebasestorage.app",
  messagingSenderId: "141700630082",
  appId: "1:141700630082:web:1db9e7a3f9c1e35ddd0fdb",
};

// 🔧 عبّي هذا الكائن ببيانات حسابك على EmailJS (emailjs.com) — مجاني حتى 200 إيميل/شهر
const EMAILJS_CONFIG = {
  publicKey: "PUT_YOUR_EMAILJS_PUBLIC_KEY",
  serviceId: "PUT_YOUR_EMAILJS_SERVICE_ID",
  templateId: "PUT_YOUR_EMAILJS_TEMPLATE_ID",
  ownerEmail: SITE_CONFIG.email, // الإيميل اللي بيوصله الإشعار (من data.js)
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const reviewsCol = collection(db, "reviews");

// رقم واتساب المدرسة (بصيغة دولية بدون + أو رموز)، مأخوذ من data.js
const SCHOOL_WHATSAPP_NUMBER = SITE_CONFIG.whatsappHref.replace("https://wa.me/", "");

const Reviews = {
  el: {},
  currentRating: 0,
  lastSubmission: null,

  init() {
    this.el.form = document.getElementById("reviewForm");
    if (!this.el.form) return; // القسم غير موجود في الصفحة، لا داعي للمتابعة

    this.el.list = document.getElementById("reviewsList");
    this.el.avgStars = document.getElementById("reviewsAvgStars");
    this.el.avgNumber = document.getElementById("reviewsAvgNumber");
    this.el.avgCount = document.getElementById("reviewsCount");
    this.el.starPicker = document.getElementById("starPicker");
    this.el.ratingInput = document.getElementById("ratingValue");
    this.el.formMsg = document.getElementById("reviewFormMsg");
    this.el.nameInput = document.getElementById("reviewerName");
    this.el.commentInput = document.getElementById("reviewComment");
    this.el.whatsappBtn = document.getElementById("reviewWhatsappBtn");

    if (this.el.whatsappBtn && typeof ICONS !== "undefined" && ICONS.whatsapp) {
      const iconSpan = this.el.whatsappBtn.querySelector(".icon-badge");
      if (iconSpan) iconSpan.innerHTML = ICONS.whatsapp;
    }

    this.buildStarPicker();
    this.bindForm();
    this.bindWhatsappButton();
    this.loadEmailJs();
    this.loadReviews();
  },

  /* -------------------------  منتقي النجوم داخل النموذج  ------------------- */
  buildStarPicker() {
    this.el.starPicker.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "star-pick";
      btn.setAttribute("data-value", String(i));
      btn.setAttribute("aria-label", `${i} نجوم`);
      btn.innerHTML = ICONS.star;
      btn.addEventListener("click", () => this.setRating(i));
      this.el.starPicker.appendChild(btn);
    }
  },

  setRating(value) {
    this.currentRating = value;
    this.el.ratingInput.value = String(value);
    this.el.starPicker.querySelectorAll(".star-pick").forEach((btn) => {
      const v = parseInt(btn.getAttribute("data-value"), 10);
      btn.classList.toggle("active", v <= value);
    });
  },

  /* ------------------------  تحميل مكتبة EmailJS من CDN  -------------------- */
  loadEmailJs() {
    if (window.emailjs) return; // محمّلة مسبقاً
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      if (window.emailjs) window.emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
    };
    document.head.appendChild(script);
  },

  /* -------------------------------  إرسال إيميل  ----------------------------- */
  async sendEmailNotification(review) {
    if (!window.emailjs) return;
    try {
      await window.emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
        to_email: EMAILJS_CONFIG.ownerEmail,
        reviewer_name: review.name,
        rating: review.rating,
        stars: "★".repeat(review.rating) + "☆".repeat(5 - review.rating),
        comment: review.comment,
      });
    } catch (err) {
      // ما منوقف عملية الإرسال الأساسية لو فشل الإيميل، بس منسجل الخطأ
      console.error("Email notification failed:", err);
    }
  },

  /* ------------------------------  زر واتساب  -------------------------------- */
  bindWhatsappButton() {
    if (!this.el.whatsappBtn) return;
    this.el.whatsappBtn.addEventListener("click", () => {
      if (!this.lastSubmission) return;
      const { name, rating, comment } = this.lastSubmission;
      const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
      const text = `تقييم جديد من الموقع 🚗\nالاسم: ${name}\nالتقييم: ${stars} (${rating}/5)\nالتعليق: ${comment}`;
      const url = `https://wa.me/${SCHOOL_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener");
    });
  },

  /* --------------------------------  إرسال تقييم  --------------------------- */
  bindForm() {
    this.el.form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = this.el.nameInput.value.trim() || "زائر";
      const comment = this.el.commentInput.value.trim();
      const rating = this.currentRating;

      if (!rating) {
        this.showMsg("الرجاء اختيار عدد النجوم قبل الإرسال.", "error");
        return;
      }
      if (comment.length < 3) {
        this.showMsg("الرجاء كتابة تعليق قصير عن تجربتك.", "error");
        return;
      }

      const submitBtn = this.el.form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      const originalLabel = submitBtn.textContent;
      submitBtn.textContent = "جارٍ الإرسال...";

      const review = { name: name.slice(0, 60), comment: comment.slice(0, 500), rating };

      try {
        await addDoc(reviewsCol, { ...review, createdAt: serverTimestamp() });

        this.sendEmailNotification(review); // لا ننتظره، يعمل بالخلفية

        this.lastSubmission = review;
        if (this.el.whatsappBtn) this.el.whatsappBtn.hidden = false;

        this.showMsg("شكراً لك! تم إرسال تقييمك بنجاح ✓", "success");
        this.el.form.reset();
        this.setRating(0);
        this.loadReviews();
      } catch (err) {
        console.error("Review submit failed:", err);
        this.showMsg("حدث خطأ أثناء إرسال التقييم. حاول مرة أخرى لاحقاً.", "error");
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    });
  },

  showMsg(text, type) {
    this.el.formMsg.textContent = text;
    this.el.formMsg.className = `review-form-msg show ${type}`;
  },

  /* -----------------------------  تحميل وعرض التقييمات  --------------------- */
  async loadReviews() {
    this.el.list.innerHTML = `<p class="reviews-loading">جارٍ تحميل التقييمات...</p>`;
    try {
      const q = query(reviewsCol, orderBy("createdAt", "desc"), limit(50));
      const snap = await getDocs(q);
      const reviews = snap.docs.map((d) => d.data());

      this.renderSummary(reviews);
      this.renderList(reviews);
    } catch (err) {
      console.error("Loading reviews failed:", err);
      this.el.list.innerHTML = `<p class="reviews-loading">تعذّر تحميل التقييمات حالياً. حاول تحديث الصفحة.</p>`;
    }
  },

  renderSummary(reviews) {
    const count = reviews.length;
    const avg = count ? reviews.reduce((s, r) => s + (r.rating || 0), 0) / count : 0;

    this.el.avgNumber.textContent = count ? avg.toFixed(1) : "—";
    this.el.avgCount.textContent = count
      ? `بناءً على ${count} ${count === 1 ? "تقييم" : "تقييمات"}`
      : "لا توجد تقييمات بعد — كن أول من يقيّم";
    this.el.avgStars.innerHTML = this.starsHtml(Math.round(avg));
  },

  starsHtml(rating) {
    let html = "";
    for (let i = 1; i <= 5; i++) {
      html += `<span class="star ${i <= rating ? "filled" : ""}">${ICONS.star}</span>`;
    }
    return html;
  },

  renderList(reviews) {
    if (!reviews.length) {
      this.el.list.innerHTML = `<p class="reviews-empty">لا توجد تقييمات بعد. شارك رأيك من النموذج المجاور!</p>`;
      return;
    }
    this.el.list.innerHTML = reviews
      .map((r) => {
        const date = r.createdAt?.toDate ? r.createdAt.toDate().toLocaleDateString("ar-LB") : "";
        return `
        <div class="review-card">
          <div class="review-card-head">
            <strong>${this.escapeHtml(r.name || "زائر")}</strong>
            <span class="review-card-stars">${this.starsHtml(r.rating || 0)}</span>
          </div>
          <p class="review-card-comment">${this.escapeHtml(r.comment || "")}</p>
          ${date ? `<span class="review-card-date">${date}</span>` : ""}
        </div>`;
      })
      .join("");
  },

  escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  },
};

document.addEventListener("DOMContentLoaded", () => Reviews.init());
