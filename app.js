// Deep links also reveal the native, keyboard-accessible game introductions.
function revealLinkedDetail() {
  const id = window.location.hash.slice(1);
  const target = document.getElementById(id);
  if (target instanceof HTMLDetailsElement) target.open = true;
}
window.addEventListener('hashchange', revealLinkedDetail);
document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#detail-"]');
  if (!link) return;
  const detail = document.getElementById(link.hash.slice(1));
  if (detail instanceof HTMLDetailsElement) detail.open = true;
});
revealLinkedDetail();
document.getElementById('year').textContent = new Date().getFullYear();
