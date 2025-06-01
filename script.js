// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Form: simulate personalized routine display
  const form = document.getElementById("skincare-form");
  const resultSection = document.getElementById("results");
  const resultContainer = document.getElementById("routine-output");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const skinType = form.elements["skin-type"].value;
      const goals = [...form.querySelectorAll("input[name='goals']:checked")].map(g => g.value);

      // Simple recommendation logic
      const recommendations = generateRoutine(skinType, goals);
      displayRoutine(recommendations);
    });
  }

  function generateRoutine(skinType, goals) {
    let routine = [`🌿 Matin : Nettoyant doux (${skinType})`, `🌞 SPF adapté (${skinType})`];

    if (goals.includes("acne")) {
      routine.push("🧴 Traitement anti-acné (acide salicylique)");
    }
    if (goals.includes("hydration")) {
      routine.push("💧 Sérum hydratant (acide hyaluronique)");
    }
    if (goals.includes("glow")) {
      routine.push("✨ Vitamine C pour l'éclat");
    }

    routine.push(`🌙 Soir : Démaquillant + Hydratant riche (${skinType})`);
    return routine;
  }

  function displayRoutine(items) {
    resultContainer.innerHTML = "";
    items.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      resultContainer.appendChild(li);
    });
    resultSection.style.display = "block";
    resultSection.scrollIntoView({ behavior: "smooth" });
  }

  // Theme toggle (dark mode)
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      toggle.textContent = document.body.classList.contains("dark-theme") ? "☀️ Mode clair" : "🌙 Mode sombre";
    });
  }
});
