(function () {
  'use strict';

  // ----------------- CONFIG (edit to your needs) -----------------
  const CONFIG = {
    profile: {
      name: "Empty",
      // Localized bio (optional). If you provide a string instead, it will be shown as-is.
      bio: {
        en: "Content creator • all my links in one place",
        ro: "Creator de conținut • toate link-urile mele, într-un singur loc",
        ru: "Создатель контента • все мои ссылки в одном месте",
        de: "Content Creator • alle meine Links an einem Ort"
      },
      avatar: "https://i.pravatar.cc/200?img=5",
      tags: ["Creator", "Streamer", "Cosplay"]
    },
    links: [
      { label: "Instagram", url: "https://instagram.com/username" },
      { label: "OnlyFans", url: "https://onlyfans.com/username" },
      { label: "Facebook", url: "https://facebook.com/username" },
      { label: "YouTube", url: "https://youtube.com/@username" },
      { label: "Twitter / X", url: "https://x.com/username" },
      { label: "MyAnimeList", url: "https://myanimelist.net/profile/username" },
      // { label: "TikTok", url: "https://tiktok.com/@username" },
      // { label: "Website", url: "https://example.com", brand: "#22c55e", icon: "mdi:web" },
    ],
    footer: {
      text: {
        en: "Made with ❤️",
        ro: "Creat cu ❤️",
        ru: "Сделано с ❤️",
        de: "Erstellt mit ❤️"
      },
      siteLabel: "@username",
      siteUrl: "#"
    },
    // Default language
    defaultLang: "ro"
  };

  // ----------------- TRANSLATIONS -----------------
  const SUPPORTED_LANGS = ["en", "ro", "ru", "de"];

  const I18N = {
    en: {
      app: {
        description: "All my links in one place."
      },
      aria: {
        profile: "Profile",
        tags: "Tags",
        themeToggle: "Toggle theme",
        share: "Share",
        links: "Links"
      },
      link: {
        openInNewTabSuffix: "open in new tab"
      },
      share: {
        text: "My links:"
      },
      toast: {
        linkCopied: "Link copied to clipboard!",
        linkReady: "Link ready to copy."
      },
      host: {
        email: "email",
        phone: "phone"
      },
      default: {
        profile: "Profile",
        linkLabel: "Link"
      },
      footer: {
        madeWithLove: "Made with ❤️"
      },
      bio: {
        default: "Content creator • all my links in one place"
      },
      lang: {
        switchLabel: "Change language"
      }
    },

    ro: {
      app: {
        description: "Toate link-urile mele într-un singur loc."
      },
      aria: {
        profile: "Profil",
        tags: "Etichete",
        themeToggle: "Schimbă tema",
        share: "Distribuie",
        links: "Link-uri"
      },
      link: {
        openInNewTabSuffix: "deschide în filă nouă"
      },
      share: {
        text: "Link-urile mele:"
      },
      toast: {
        linkCopied: "Link copiat în clipboard!",
        linkReady: "Link pregătit pentru copiere."
      },
      host: {
        email: "email",
        phone: "telefon"
      },
      default: {
        profile: "Profil",
        linkLabel: "Link"
      },
      footer: {
        madeWithLove: "Creat cu ❤️"
      },
      bio: {
        default: "Creator de conținut • toate link-urile mele, într-un singur loc"
      },
      lang: {
        switchLabel: "Schimbă limba"
      }
    },

    ru: {
      app: {
        description: "Все мои ссылки в одном месте."
      },
      aria: {
        profile: "Профиль",
        tags: "Теги",
        themeToggle: "Сменить тему",
        share: "Поделиться",
        links: "Ссылки"
      },
      link: {
        openInNewTabSuffix: "открыть в новой вкладке"
      },
      share: {
        text: "Мои ссылки:"
      },
      toast: {
        linkCopied: "Ссылка скопирована в буфер обмена!",
        linkReady: "Ссылка готова к копированию."
      },
      host: {
        email: "почта",
        phone: "телефон"
      },
      default: {
        profile: "Профиль",
        linkLabel: "Ссылка"
      },
      footer: {
        madeWithLove: "Сделано с ❤️"
      },
      bio: {
        default: "Создатель контента • все мои ссылки в одном месте"
      },
      lang: {
        switchLabel: "Сменить язык"
      }
    },

    de: {
      app: {
        description: "Alle meine Links an einem Ort."
      },
      aria: {
        profile: "Profil",
        tags: "Tags",
        themeToggle: "Design wechseln",
        share: "Teilen",
        links: "Links"
      },
      link: {
        openInNewTabSuffix: "in neuem Tab öffnen"
      },
      share: {
        text: "Meine Links:"
      },
      toast: {
        linkCopied: "Link in die Zwischenablage kopiert!",
        linkReady: "Link zum Kopieren bereit."
      },
      host: {
        email: "E-Mail",
        phone: "Telefon"
      },
      default: {
        profile: "Profil",
        linkLabel: "Link"
      },
      footer: {
        madeWithLove: "Erstellt mit ❤️"
      },
      bio: {
        default: "Content Creator • alle meine Links an einem Ort"
      },
      lang: {
        switchLabel: "Sprache ändern"
      }
    }
  };

  // Known platforms mapping (icon + brand)
  const PLATFORM_DB = {
    instagram: { icon: "mdi:instagram", brand: "#E1306C" },
    onlyfans: { icon: "simple-icons:onlyfans", brand: "#00AFF0" },
    facebook: { icon: "mdi:facebook", brand: "#1877F2" },
    youtube: { icon: "mdi:youtube", brand: "#FF0033" },
    twitter: { icon: "mdi:twitter", brand: "#1D9BF0" },
    x: { icon: "mdi:twitter", brand: "#1D9BF0" },
    tiktok: { icon: "ic:baseline-tiktok", brand: "#111111" },
    myanimelist: { icon: "simple-icons:myanimelist", brand: "#2E51A2" },
    twitch: { icon: "mdi:twitch", brand: "#9146FF" },
    discord: { icon: "mdi:discord", brand: "#5865F2" },
    spotify: { icon: "mdi:spotify", brand: "#1DB954" },
    patreon: { icon: "simple-icons:patreon", brand: "#FF424D" },
    website: { icon: "mdi:web", brand: "#22c55e" }
  };

  // ----------------- STATE & HELPERS -----------------
  const State = { lang: CONFIG.defaultLang || "en" };

  const getNested = (obj, path) => path.split('.').reduce((o, k) => (o && o[k] != null ? o[k] : undefined), obj);
  const t = (key) => getNested(I18N[State.lang], key) || getNested(I18N.en, key) || key;

  const safeString = (s) => (s == null ? "" : String(s));

  const LANG_NATIVE = { en: "English", ro: "Română", ru: "Русский", de: "Deutsch" };

  function normalizeLang(lang) {
    if (!lang) return null;
    let l = String(lang).toLowerCase();
    if (l.includes("-")) l = l.split("-")[0];
    return SUPPORTED_LANGS.includes(l) ? l : null;
  }

  function detectLang() {
    // 1) URL ?lang=
    const m = /[?&]lang=([a-zA-Z-]+)/.exec(window.location.search);
    if (m) {
      const q = normalizeLang(m[1]);
      if (q) return q;
    }
    // 2) localStorage
    try {
      const saved = normalizeLang(localStorage.getItem("lang"));
      if (saved) return saved;
    } catch {}
    // 3) navigator
    if (Array.isArray(navigator.languages)) {
      for (const l of navigator.languages) {
        const n = normalizeLang(l);
        if (n) return n;
      }
    }
    const nav = normalizeLang(navigator.language || navigator.userLanguage);
    return nav || normalizeLang(CONFIG.defaultLang) || "en";
  }

  function localizedText(value) {
    if (!value) return "";
    if (typeof value === "string") return value;
    if (typeof value === "object") {
      return value[State.lang] || value.en || value.ro || value.ru || value.de || "";
    }
    return "";
  }

  // ----------------- THEME -----------------
  const Theme = {
    get() {
      try {
        return localStorage.getItem("theme") || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      } catch { return "light"; }
    },
    set(tName) {
      try {
        document.documentElement.setAttribute("data-theme", tName);
        localStorage.setItem("theme", tName);
        Theme.updateToggleIcon(tName);
      } catch (e) { console.error("Theme set error:", e); }
    },
    toggle() {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      Theme.set(next);
      const btn = document.getElementById("themeToggle");
      if (btn) btn.setAttribute("aria-pressed", String(next === "dark"));
    },
    updateToggleIcon(tName) {
      const ic = document.querySelector("#themeToggle iconify-icon");
      if (ic) ic.setAttribute("icon", tName === "dark" ? "ph:moon-stars-duotone" : "ph:sun-dim-duotone");
    },
    init() {
      const tName = Theme.get();
      Theme.set(tName);
      const btn = document.getElementById("themeToggle");
      if (btn) {
        btn.setAttribute("aria-pressed", String(tName === "dark"));
        btn.addEventListener("click", Theme.toggle);
      }
    }
  };

  // ----------------- UTILS -----------------
  function validUrlOrBlank(url) {
    if (!url) return "#";
    try {
      const u = new URL(url);
      const allowed = ["http:", "https:"];
      return allowed.includes(u.protocol) ? url : "#";
    } catch {
      if (url.startsWith("mailto:") || url.startsWith("tel:")) return url;
      return "#";
    }
  }

  function hostFromUrl(url) {
    if (!url) return "";
    if (url.startsWith("mailto:")) return t("host.email");
    if (url.startsWith("tel:")) return t("host.phone");
    try {
      const u = new URL(url);
      return u.host.replace(/^www\./, "");
    } catch {
      return "";
    }
  }

  function guessPlatform(link) {
    const label = (link.label || "").toLowerCase();
    const host = hostFromUrl(link.url).toLowerCase();
    const hm = [
      ["instagram", ["instagram.com"]],
      ["onlyfans", ["onlyfans.com"]],
      ["facebook", ["facebook.com", "fb.com"]],
      ["youtube", ["youtube.com", "youtu.be"]],
      ["twitter", ["twitter.com"]],
      ["x", ["x.com"]],
      ["tiktok", ["tiktok.com"]],
      ["myanimelist", ["myanimelist.net"]],
      ["twitch", ["twitch.tv"]],
      ["discord", ["discord.com", "discord.gg"]],
      ["spotify", ["spotify.com"]],
      ["patreon", ["patreon.com"]],
      ["website", []]
    ];
    for (const [key, hosts] of hm) {
      if (label.includes(key)) return key;
      if (hosts.some(h => host.includes(h))) return key;
    }
    return "website";
  }

  function platformData(link) {
    const key = guessPlatform(link);
    const defaults = PLATFORM_DB[key] || PLATFORM_DB.website;
    return {
      icon: link.icon || defaults.icon,
      brand: link.brand || defaults.brand,
      key
    };
  }

  function showToast(msg) {
    let el = document.querySelector(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => el.classList.remove("show"), 1800);
  }

  function enableIconFallbacks() {
    try {
      const hasIconify = !!(window.customElements && window.customElements.get && window.customElements.get("iconify-icon"));
      if (!hasIconify) document.documentElement.classList.add("no-iconify");
    } catch {
      document.documentElement.classList.add("no-iconify");
    }
  }

  // ----------------- RENDER -----------------
  function applyI18nStatics() {
    // html lang
    document.documentElement.setAttribute("lang", State.lang);

    // Meta descriptions
    const desc = t("app.description");
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", desc);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", desc);

    // Header aria labels
    const header = document.querySelector("header.profile");
    if (header) header.setAttribute("aria-label", t("aria.profile"));

    const tagsWrap = document.getElementById("tags");
    if (tagsWrap) tagsWrap.setAttribute("aria-label", t("aria.tags"));

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) themeBtn.setAttribute("aria-label", t("aria.themeToggle"));

    const shareBtn = document.getElementById("shareBtn");
    if (shareBtn) shareBtn.setAttribute("aria-label", t("aria.share"));

    const section = document.querySelector("section");
    if (section) section.setAttribute("aria-label", t("aria.links"));

    // Update language switch group label
    const langGroup = document.getElementById("langSwitch");
    if (langGroup) langGroup.setAttribute("aria-label", t("lang.switchLabel"));

    // Update active state on language buttons
    const btns = document.querySelectorAll('#langSwitch .btn.lang');
    btns.forEach(btn => {
      const isActive = btn.getAttribute("data-lang") === State.lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
      const code = btn.getAttribute("data-lang");
      btn.setAttribute("title", LANG_NATIVE[code] || code.toUpperCase());
      btn.setAttribute("aria-label", LANG_NATIVE[code] || code.toUpperCase());
    });
  }

  function renderProfile() {
    const p = CONFIG.profile || {};
    // Title
    const titleSuffix = t("aria.links");
    const name = p.name || t("default.profile");
    document.title = `${name} | ${titleSuffix}`;

    // Avatar, name, bio
    const avatar = document.getElementById("avatar");
    if (avatar) {
      avatar.src = p.avatar || "";
      avatar.alt = p.name ? `Avatarul lui ${p.name}` : "Avatar";
    }

    const nameEl = document.getElementById("name");
    if (nameEl) nameEl.textContent = p.name || "";

    const bioEl = document.getElementById("bio");
    if (bioEl) {
      const bioText = localizedText(p.bio) || t("bio.default");
      bioEl.textContent = bioText;
    }

    const tagsWrap = document.getElementById("tags");
    if (tagsWrap) {
      tagsWrap.innerHTML = "";
      (p.tags || []).forEach(tg => {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = tg;
        tagsWrap.appendChild(span);
      });
    }
  }

  function createLinkItem(link) {
    const { icon, brand } = platformData(link);
    const host = hostFromUrl(link.url);

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "link-card";
    a.href = validUrlOrBlank(link.url);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", `${link.label || t("default.linkLabel")} – ${t("link.openInNewTabSuffix")}`);
    a.style.setProperty("--brand-local", brand || "#8b5cf6");

    // Icon
    const iconWrap = document.createElement("div");
    iconWrap.className = "link-icon";

    const ic = document.createElement("iconify-icon");
    ic.setAttribute("icon", icon || "mdi:link-variant");
    ic.setAttribute("width", "22");

    const fallback = document.createElement("span");
    fallback.className = "fallback-glyph";
    fallback.textContent = (link.label || "•").trim().charAt(0).toUpperCase() || "•";

    iconWrap.appendChild(ic);
    iconWrap.appendChild(fallback);

    // Content
    const content = document.createElement("div");
    content.className = "link-content";

    const title = document.createElement("div");
    title.className = "link-title";
    title.textContent = link.label || t("default.linkLabel");

    const sub = document.createElement("div");
    sub.className = "link-sub";
    sub.textContent = host;

    content.appendChild(title);
    content.appendChild(sub);

    // Arrow
    const arrow = document.createElement("div");
    arrow.className = "link-arrow";
    const ai = document.createElement("iconify-icon");
    ai.setAttribute("icon", "ph:arrow-up-right-duotone");
    ai.setAttribute("width", "20");
    arrow.appendChild(ai);

    a.appendChild(iconWrap);
    a.appendChild(content);
    a.appendChild(arrow);

    li.appendChild(a);
    return li;
  }

  function renderLinks() {
    const wrap = document.getElementById("linksList");
    if (!wrap) return;
    wrap.innerHTML = "";
    (CONFIG.links || []).forEach(link => {
      if (!link || !link.url) return;
      wrap.appendChild(createLinkItem(link));
    });
  }

  function renderFooter() {
    const f = CONFIG.footer || {};
    const footerText = document.getElementById("footerText");
    const siteLink = document.getElementById("siteLink");
    if (!footerText || !siteLink) return;

    const text = localizedText(f.text) || t("footer.madeWithLove");
    footerText.firstChild && (footerText.firstChild.textContent = `${text} · `);
    siteLink.textContent = safeString(f.siteLabel || "@username");
    siteLink.href = f.siteUrl || "#";
  }

  function initShare() {
    const btn = document.getElementById("shareBtn");
    if (!btn) return;

    btn.addEventListener("click", async () => {
      const shareData = {
        title: document.title,
        text: t("share.text"),
        url: window.location.href
      };
      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(shareData.url);
          showToast(t("toast.linkCopied"));
        } else {
          const ok = window.prompt("Copy this link:", shareData.url);
          if (ok !== null) showToast(t("toast.linkReady"));
        }
      } catch (e) {
        try {
          await navigator.clipboard.writeText(shareData.url);
          showToast(t("toast.linkCopied"));
        } catch {
          console.error("Share/clipboard error:", e);
        }
      }
    });
  }

  function initLangSwitch() {
    const container = document.getElementById("langSwitch");
    if (!container) return;
    container.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-lang]");
      if (!btn) return;
      const code = btn.getAttribute("data-lang");
      if (!SUPPORTED_LANGS.includes(code)) return;
      setLang(code);
    });
  }

  function setLang(lang) {
    const normalized = normalizeLang(lang) || CONFIG.defaultLang || "en";
    State.lang = normalized;
    try { localStorage.setItem("lang", normalized); } catch {}
    applyI18nStatics();
    renderProfile();
    renderLinks();
    renderFooter();
  }

  // ----------------- INIT -----------------
  document.addEventListener("DOMContentLoaded", () => {
    try {
      enableIconFallbacks();
      Theme.init();

      // Language
      const initial = detectLang();
      initLangSwitch();
      setLang(initial);

      initShare();
    } catch (e) {
      console.error("Init error:", e);
    }
  });

})();
