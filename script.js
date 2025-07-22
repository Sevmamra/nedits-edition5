// Toggle dropdown menu
document.getElementById('menu-toggle').addEventListener('click', () => {
  const dropdown = document.getElementById('dropdown');
  dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});
