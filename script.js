document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const dropdown = document.getElementById("dropdown");

  let isOpen = false;

  toggleBtn.addEventListener("click", () => {
    if (!isOpen) {
      dropdown.style.display = "flex";
      dropdown.style.flexDirection = "column";
      dropdown.style.animation = "slideDown 0.3s ease forwards";
    } else {
      dropdown.style.animation = "slideUp 0.3s ease forwards";
      setTimeout(() => {
        dropdown.style.display = "none";
      }, 300);
    }
    isOpen = !isOpen;
  });
});
