function showPage(pageId) {
  // ซ่อนทุกหน้า
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  // แสดงหน้าที่เลือก
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // ไฮไลต์เมนูที่เลือก
  const navLinks = document.querySelectorAll('.nav-links li');
  navLinks.forEach(link => link.classList.remove('active'));

  const clickedItem = Array.from(navLinks).find(link => 
    link.textContent.includes(targetPage.querySelector('h2')?.textContent || 'หน้าแรก')
  );

  if (clickedItem) {
    clickedItem.classList.add('active');
  }
}
