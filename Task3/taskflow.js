  const toggleBtn = document.querySelector('.toggle-btn'); 
        const sidebar = document.getElementById('navbar');
        const icon = toggleBtn.querySelector('i');
         const navLinks = document.querySelectorAll('.nav-link'); 

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
       

        navLinks.forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("open");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        });
});