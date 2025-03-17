const toggleButtons = document.querySelectorAll(".queationSection");
const toggleDescriptions = document.querySelectorAll(".WhatWeDoDesc");
const toggleSwitchers = document.querySelectorAll(".toggleSwitcher");

toggleButtons.forEach((button, index) => {
  button.onclick = () => {
    toggleDescriptions.forEach((text, i) => {
      if (i != index) text.style.display = "none";
    });
    toggleSwitchers.forEach((swticher, i) => {
      if (i != index) swticher.style.transform = "rotate(0deg)";
    });

    const currentButton = toggleButtons[index];
    const currentDescription = toggleDescriptions[index];
    const currentSwitcher = toggleSwitchers[index];

    const isTextVisible = currentDescription.style.display === "block";
    currentDescription.style.display = isTextVisible ? "none" : "block";

    currentSwitcher.style.transform =
      currentSwitcher.style.transform === "rotate(90deg)"
        ? "rotate(0deg)"
        : "rotate(90deg)";
  };
});

const whyUsLink = document.querySelector("whyUsLink");
const galleryLink = document.querySelector("galleryLink");
const questionsLink = document.querySelector("questions");
const adventageLink = document.querySelector("adventageLink");

const whyUsId = document.getElementById("whyUsId");
const faqBlock = document.getElementById("faqBlock");
const gallery = document.querySelector("galleryLink");
const adventage = document.getElementById("adventage");

whyUsLink.addEventListener("click", () => {
  document.getElementById("whyUsId").scrollIntoView({ behavior: "smooth" });
});
questionsLink.addEventListener("click", () => {
  document.getElementById("faqBlock").scrollIntoView({ behavior: "smooth" });
});
galleryLink.addEventListener("click", () => {
  document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
});
adventageLink.addEventListener("click", () => {
  document.getElementById("adventage").scrollIntoView({ behavior: "smooth" });
});
