function showPage(pageId) {
  // ซ่อนทุกหน้า
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active', 'fade-in');
  });

  // แสดงหน้าที่เลือก
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    setTimeout(() => {
      targetPage.classList.add('fade-in');
    }, 10); // เลื่อนลื่น + fade-in
    targetPage.scrollIntoView({ behavior: 'smooth' });
  }

  // เปลี่ยนเมนู active
  const navLinks = document.querySelectorAll('.nav-links li');
  navLinks.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');
}
