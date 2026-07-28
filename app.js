// Async function to fetch live books from the Google Books API
async function getRecommendations() {
  const selectedGenre = document.getElementById("genreSelect").value;
  const selectedLength = document.getElementById("lengthSelect").value;
  const container = document.getElementById("resultsContainer");

  // Show loading indicator
  container.innerHTML = `<p style="color: var(--text-gold); text-align: center; width: 100%; font-weight: 600;">Searching global database...</p>`;

  try {
    // 1. Clean the genre string so the API understands it
    let cleanGenre = selectedGenre.toLowerCase().trim();
    let query = "subject:fiction"; // Default fallback

    if (cleanGenre !== "any" && cleanGenre !== "") {
      // Use quotes for multi-word genres like "dark romance"
      query = `subject:"${cleanGenre}"`;
    }

    // 2. Fetch data from Google Books API
    let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=15&langRestrict=en`);
    let data = await response.json();

    // Fallback: If strict 'subject' search returns nothing, do a broader keyword search
    if (!data.items || data.items.length === 0) {
      const fallbackQuery = cleanGenre === "any" ? "bestseller" : cleanGenre;
      response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(fallbackQuery)}&maxResults=15&langRestrict=en`);
      data = await response.json();
    }

    if (!data.items || data.items.length === 0) {
      container.innerHTML = `<p style="color: var(--text-muted); text-align: center; width: 100%;">No books found. Try selecting 'Any Genre'!</p>`;
      return;
    }

    const maxScore = 20; 

    // 3. Process and score books
    const scoredBooks = data.items.map(item => {
      const info = item.volumeInfo;
      let matchScore = 10; // Base score for genre match

      const pageCount = info.pageCount || 0;
      let bookLengthCategory = "medium";
      if (pageCount > 0 && pageCount < 300) bookLengthCategory = "short";
      if (pageCount >= 500) bookLengthCategory = "epic";

      if (selectedLength === "any" || bookLengthCategory === selectedLength) {
        matchScore += 10;
      } else if (pageCount === 0) {
        matchScore += 5;
      }

      const matchPercentage = Math.round((matchScore / maxScore) * 100);

      // Safe cover image replacement
      let coverImg = "https://via.placeholder.com/150x220?text=No+Cover";
      if (info.imageLinks) {
        coverImg = info.imageLinks.thumbnail || info.imageLinks.smallThumbnail;
        coverImg = coverImg.replace("http:", "https:");
      }

      return {
        title: info.title || "Unknown Title",
        author: info.authors ? info.authors.join(", ") : "Unknown Author",
        description: info.description ? info.description.substring(0, 130) + "..." : "No description available for this title.",
        cover: coverImg,
        rating: info.averageRating ? info.averageRating : "4.2",
        genre: cleanGenre === "any" ? "Popular Fiction" : selectedGenre,
        length: pageCount ? `${pageCount} pages` : "Standard Length",
        score: matchScore,
        matchPercentage: matchPercentage
      };
    });

    // 4. Sort highest match percentage first
    scoredBooks.sort((a, b) => b.score - a.score);

    displayResults(scoredBooks);

  } catch (error) {
    console.error("Error fetching books:", error);
    container.innerHTML = `<p style="color: #ef4444; text-align: center; width: 100%;">Connection error. Please try clicking search again!</p>`;
  }
}

// Function to render matching books into card layouts
function displayResults(recommendedBooks) {
  const container = document.getElementById("resultsContainer");
  container.innerHTML = ""; 

  recommendedBooks.forEach(book => {
    const card = document.createElement("article");
    card.className = "book-card";

    let badgeClass = "badge-low";
    if (book.matchPercentage >= 80) badgeClass = "badge-high";
    else if (book.matchPercentage >= 50) badgeClass = "badge-mid";

    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${book.cover}" alt="Cover of ${book.title}" onerror="this.src='https://via.placeholder.com/150x220?text=No+Cover'">
        <span class="match-badge ${badgeClass}">${book.matchPercentage}% Match</span>
      </div>
      <div class="book-info">
        <h3>${book.title}</h3>
        <p class="author">by ${book.author}</p>
        <div class="tags">
          <span class="tag">${book.genre}</span>
          <span class="tag">${book.length}</span>
          <span class="tag">⭐ ${book.rating}</span>
        </div>
        <p class="description">${book.description}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

// Attach listener
document.getElementById("recommendBtn").addEventListener("click", getRecommendations);

// Load books immediately on page start
getRecommendations();
