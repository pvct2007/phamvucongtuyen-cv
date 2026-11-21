// ==============================
// CHUYỂN ĐỔI NGÔN NGỮ VIỆT - ANH
// ==============================

const languageToggle = document.getElementById("languageToggle");

let currentLanguage = localStorage.getItem("cvLanguage") || "vi";

function updateLanguage() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-vi][data-en]").forEach((element) => {
    element.textContent = element.dataset[currentLanguage];
  });

  if (languageToggle) {
    languageToggle.textContent = currentLanguage === "vi" ? "EN" : "VI";
  }
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "vi" ? "en" : "vi";

    localStorage.setItem("cvLanguage", currentLanguage);

    updateLanguage();
  });
}

updateLanguage();


// ==============================
// CHỨC NĂNG IN / TẢI CV PDF
// ==============================

const printButton = document.getElementById("printButton");

if (printButton) {
  printButton.addEventListener("click", () => {
    window.print();
  });
}


// ==============================
// MENU TRÊN ĐIỆN THOẠI
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navigation = document.querySelector(".topbar nav");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
    });
  });
}
// ===== LIGHT / DARK MODE =====

const themeButtons = document.querySelectorAll(".theme-toggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  themeButtons.forEach((button) => {
    const icon = button.querySelector(".theme-icon");

    if (icon) {
      icon.textContent = theme === "dark" ? "☀️" : "🌙";
    }

    button.title = theme === "dark"
      ? "Chuyển sang chế độ sáng"
      : "Chuyển sang chế độ tối";

    button.setAttribute(
      "aria-label",
      theme === "dark"
        ? "Chuyển sang chế độ sáng"
        : "Chuyển sang chế độ tối"
    );
  });
}

// Lấy chế độ đã lưu
let currentTheme = "light";

try {
  currentTheme = localStorage.getItem("cvTheme") || "light";
} catch (error) {
  currentTheme = "light";
}

applyTheme(currentTheme);

// Bấm nút để đổi chế độ
themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const newTheme =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";

    try {
      localStorage.setItem("cvTheme", newTheme);
    } catch (error) {
    }

    applyTheme(newTheme);
  });
});