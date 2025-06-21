function showPage(event, pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active', 'fade-in');
  });

  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    setTimeout(() => {
      targetPage.classList.add('fade-in');
    }, 10);
    targetPage.scrollIntoView({ behavior: 'smooth' });
  }

  const navLinks = document.querySelectorAll('.nav-links li');
  navLinks.forEach(link => link.classList.remove('active'));
  if (event && event.target) {
    event.target.classList.add('active');
  }
}

function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  fetch("https://script.google.com/macros/s/AKfycbxnz8NnqAQO-EdGxVG1pIoOaaefHw61_thSc2PFpzVY1zLzROBsVMdpQ873bdbD0Ez2/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(res => {
    if (res.ok) {
      alert("✅ ส่งข้อมูลเรียบร้อยแล้วครับ");
      form.reset();
    } else {
      throw new Error("เกิดข้อผิดพลาดในการส่งข้อมูล");
    }
  })
  .catch(err => {
    console.error("Error:", err);
    alert("❌ เกิดข้อผิดพลาดในการส่งข้อมูล");
  });
}

