document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    // keep inline fallback for older browsers
    nav.style.display = nav.classList.contains("open") ? "block" : "";
  });

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("Contact form:", data);
    alert("Thanks! Message captured in console.");
    form.reset();
  });

  // Copy email button
  const copyBtn = document.getElementById("copy-email");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const emailEl = document.getElementById("email-text");
      const email = emailEl ? emailEl.textContent.trim() : "you@example.com";
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy email"), 1800);
      } catch (err) {
        // fallback
        const ta = document.createElement("textarea");
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
          copyBtn.textContent = "Copied!";
        } catch (e) {
          alert("Copy to clipboard failed — email: " + email);
        }
        ta.remove();
        setTimeout(() => (copyBtn.textContent = "Copy email"), 1800);
      }
    });
  }
});
