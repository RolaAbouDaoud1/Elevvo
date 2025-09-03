  const posts = [
    {title: "AI in 2025", category: "tech", img: "https://picsum.photos/400/200?1", desc: "Exploring the future of artificial intelligence.", date: "Aug 20, 2025"},
    {title: "My Trip to Japan", category: "travel", img: "https://picsum.photos/400/200?2", desc: "Sharing my adventures in Tokyo and Kyoto.", date: "Aug 15, 2025"},
    {title: "Best Pasta Recipes", category: "food", img: "https://picsum.photos/400/200?3", desc: "Delicious homemade pasta ideas.", date: "Aug 10, 2025"},
    {title: "Top 10 Coding Tips", category: "tech", img: "https://picsum.photos/400/200?4", desc: "Improve your productivity as a developer.", date: "Aug 5, 2025"},
    {title: "Exploring Paris", category: "travel", img: "https://picsum.photos/400/200?5", desc: "A weekend in the city of love.", date: "Aug 1, 2025"},
    {title: "Street Food Around the World", category: "food", img: "https://picsum.photos/400/200?6", desc: "Tasting local flavors everywhere.", date: "Jul 28, 2025"},
    {title: "The Rise of Quantum Computing", category: "tech", img: "https://picsum.photos/400/200?7", desc: "Quantum computers are here!", date: "Jul 20, 2025"},
    {title: "Backpacking in South America", category: "travel", img: "https://picsum.photos/400/200?8", desc: "A budget-friendly adventure.", date: "Jul 10, 2025"},
    {title: "Healthy Smoothie Ideas", category: "food", img: "https://picsum.photos/400/200?9", desc: "Quick and healthy drinks.", date: "Jul 5, 2025"}
  ];


  const postsPerPageByCategory = {
    all: 6,    
    tech: 4,    
    travel: 3,  
    food: 2     
  };

  let currentPage = 1;
  let currentCategory = "all";
  let searchQuery = "";

  function displayPosts() {
    const container = document.getElementById("blog-container");
    container.innerHTML = "";

    let filtered = posts;

  
    if (currentCategory !== "all") {
      filtered = filtered.filter(p => p.category === currentCategory);
    }


    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    const postsPerPage = postsPerPageByCategory[currentCategory] || 4;
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginated = filtered.slice(start, end);

    if (paginated.length === 0) {
      container.innerHTML = "<p style='text-align:center;'>No posts found.</p>";
    } else {
      paginated.forEach(post => {
        container.innerHTML += `
          <div class="card">
            <img src="${post.img}" alt="${post.title}">
            <div class="card-content">
              <h3>${post.title}</h3>
              <p>${post.desc}</p>
              <small>${post.date}</small>
            </div>
          </div>
        `;
      });
    }


    setupPagination(filtered.length, postsPerPage);
  }

    function setupPagination(totalPosts, postsPerPage) {
      const pagination = document.getElementById("pagination");
      pagination.innerHTML = "";
      const totalPages = Math.ceil(totalPosts / postsPerPage);

      if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
          pagination.innerHTML += `
            <button 
              onclick="goToPage(${i})" 
              class="${i === currentPage ? 'active' : ''}"
            >${i}</button>
          `;
        }
      }
    }


  function goToPage(page) {
    currentPage = page;
    displayPosts();
  }

  function filterPosts(category) {
    currentCategory = category;
    currentPage = 1;
    displayPosts();
  }

  function searchPosts() {
    searchQuery = document.getElementById("searchInput").value;
    currentPage = 1;
    displayPosts();
  }


  displayPosts();