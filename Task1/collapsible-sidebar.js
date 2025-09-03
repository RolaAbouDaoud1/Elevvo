  const toggleBtn = document.querySelector('.toggle-btn'); 
  const sidebar = document.getElementById('aside');
  const icon = toggleBtn.querySelector('i');

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");

    if (sidebar.classList.contains("open")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times"); 
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });