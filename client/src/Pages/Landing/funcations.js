window.toggleFaq = function (button) {
  const faq = button.parentElement;
  faq.classList.toggle("active");
  const text = faq.querySelector(".faq-text");
  text.style.display = text.style.display === "none" ? "block" : "none";

  if (faq.classList.contains("active")) {
    button.style.transform = "rotate(180deg)";
    button.style.backgroundColor = "#a876aa";
    button.style.borderColor = "#a876aa";
    button.style.color = "#fff";
  } else {
    button.style.transform = "none";
    button.style.backgroundColor = "transparent";
    button.style.borderColor = "#e6e6e6";
    button.style.color = "inherit";
  }
};
