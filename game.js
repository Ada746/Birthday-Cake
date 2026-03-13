const parts = [
  ".layer-1",
  ".cream-1",
  ".layer-2",
  ".cream-2",
  ".layer-3",
  ".frost-top",
  ".candle"
];

function resetAll() {
  // Remove animations
  document.querySelectorAll(".drop, .pop").forEach(el => {
    el.classList.remove("drop", "pop");
    // restart animation trick
    void el.offsetWidth;
  });

  // Reset parts opacity (since we use forwards)
  [...parts, ".hb", ".sub"].forEach(sel => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.style.opacity = "0";
  });

  const flame = document.querySelector(".flame");
  flame.classList.remove("show-flame");
  flame.style.opacity = "0";
}

function play() {
  resetAll();

  let t = 0;
  const step = 520; // ms between drops

  parts.forEach((sel) => {
    const el = document.querySelector(sel);
    setTimeout(() => el.classList.add("drop"), t);
    t += step;
  });

  // Show flame a bit after candle lands
  setTimeout(() => {
    const flame = document.querySelector(".flame");
    flame.classList.add("show-flame");
  }, t + 150);

  // Final message pop
  setTimeout(() => {
    document.querySelector(".hb").classList.add("pop");
    document.querySelector(".sub").classList.add("pop");
  }, t + 350);
}

document.getElementById("replay").addEventListener("click", play);
play();
