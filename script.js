// Navbar Section Code //

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");

  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});

const navbar_link = document.querySelectorAll("#navbar a");

navbar_link.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");

    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-xmark");
  });
});

// About Read More Code //
const readBtn = document.getElementById("readmore-btn");
const extra = document.getElementById("about-extra");

function toggleExtra(e) {
  e.preventDefault(); // giữ <a> nhưng không chuyển trang
  const expanded = readBtn.getAttribute("aria-expanded") === "true";

  readBtn.setAttribute("aria-expanded", String(!expanded));
  extra.setAttribute("aria-hidden", String(expanded));
  extra.classList.toggle("is-expanded");

  readBtn.textContent = expanded ? "Read More" : "Read Less";
}

extra.classList.remove("is-expanded");
extra.classList.add("is-collapsed");
readBtn.addEventListener("click", toggleExtra);

// Contact Section Code //
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // chặn redirect Formspree

    const formData = new FormData(contactForm);

    try {
      const res = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        showToast("✅ Tin nhắn của bạn đã được gửi thành công!");
        contactForm.reset();
      } else {
        // cố gắng đọc lỗi chi tiết từ Formspree
        let msg = "❌ Có lỗi xảy ra, vui lòng thử lại.";
        try {
          const data = await res.json();
          if (data && Array.isArray(data.errors)) {
            msg = "❌ " + data.errors.map((e) => e.message).join(", ");
          }
        } catch (_) {}
        showToast(msg, false);
      }
    } catch (err) {
      showToast("⚠️ Không thể gửi. Kiểm tra kết nối mạng!", false);
    }
  });
}

function showToast(message, ok = true) {
  const toast = document.createElement("div");
  toast.className = `toast ${ok ? "ok" : "error"}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  // trigger animation
  requestAnimationFrame(() => toast.classList.add("show"));

  // auto hide
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
