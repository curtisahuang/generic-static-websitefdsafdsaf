document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tab-panel");

  function activate(key) {
    tabs.forEach((t) => {
      const active = t.dataset.tab === key;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", String(active));
    });
    panels.forEach((p) => {
      p.classList.toggle("active", p.dataset.panel === key);
    });
  }

  tabs.forEach((t) =>
    t.addEventListener("click", () => activate(t.dataset.tab || "uk"))
  );

  // Deep-linking: open correct tab if #recipe-us in URL
  if (location.hash === "#recipe-us") activate("us");
  else activate("uk");

  console.log("Smash Burgers site loaded");
});