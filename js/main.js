const LINE_URL = 'https://line.me/R/ti/p/@600rlvkq?ts=06191832&oat_content=url';
document.addEventListener('DOMContentLoaded', () => {
  // mobile menu
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  if (burger && nav) burger.addEventListener('click', () => nav.classList.toggle('open'));

  // floating LINE button
  if (!document.querySelector('.fab')) {
    const a = document.createElement('a');
    a.className = 'fab';
    a.href = LINE_URL; a.target = '_blank'; a.rel = 'noopener';
    a.setAttribute('aria-label', 'LINEで相談・予約する');
    a.innerHTML = '<span>💬</span><span>LINEで相談<small>モニター1,000円〜</small></span>';
    document.body.appendChild(a);
  }
});
