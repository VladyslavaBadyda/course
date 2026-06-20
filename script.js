const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav");
const form = document.querySelector("#course-form");
const courseSelect = document.querySelector("#course-select");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".course-select").forEach((button) => {
  button.addEventListener("click", () => {
    courseSelect.value = button.dataset.course;
    document.querySelector("#apply").scrollIntoView({ behavior: "smooth" });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedCourse = courseSelect.value;

  let paymentLink = "";

  switch (selectedCourse) {
    case "Назва курсу":
      paymentLink = "https://send.monobank.ua/jar/AAAA";
      break;

    case "Назва курсу 2":
      paymentLink = "https://send.monobank.ua/jar/BBBB";
      break;

    case "Назва курсу 3":
      paymentLink = "https://send.monobank.ua/jar/CCCC";
      break;

    default:
      alert("Будь ласка, оберіть курс");
      return;
  }

  form.querySelector(".form-success").classList.add("visible");

  setTimeout(() => {
    window.open(paymentLink, "_blank");
  }, 1000);
});

setTimeout(() => {
  window.open(
    "https://send.monobank.ua/jar/ТУТ_ПОСИЛАННЯ_МОНO",
    "_blank"
  );
}, 1000);


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
