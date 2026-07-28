 // Async function to fetch live books from the Google Books API
async function getRecommendations() {
  const selectedGenre = document.getElementById("genreSelect").value;
  const selectedLength = document.getElementById("lengthSelect").value;
  const container = document.getElementById("resultsContainer");

  // Show a loading message while the API fetches data
  container.innerHTML = `<p style="color: var(--text-gold); text-align: center; width: 100%; font-weight: 600;">Searching the global database...</p>`;

  try {
    // 1. Build the search query based on the selected genre
    let query = "subject:";
    if (selectedGenre === "any") {
      query += "fiction"; // Default fallback if 'any' is selected
    } else {
      query += selectedGenre; 
    }

    // 2. Fetch data from Google Books API (fetching up to 12 results)
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12&langRestrict=en`);
    const data = await response.json();

    if (!data.items) {
      container.innerHTML = `<p style="color: var(--text-muted); text-align: center; width: 100%;">No books found. Try different filters!</p>`;
      return;
    }

    // 3. Map the messy API data into our clean book card format and score them
    const maxScore = 20; 

    const scoredBooks = data.items.map(item => {
      const info = item.volumeInfo;
      let matchScore = 0;

      // Genre match: The API already filters by genre, so automatic +10 points
      matchScore += 10;

      // Determine Length category from actual page count
      const pageCount = info.pageCount || 0;
      let bookLengthCategory = "medium";
      if (pageCount > 0 && pageCount < 300) bookLengthCategory = "short";
      if (pageCount >= 500) bookLengthCategory = "epic";

      // Length check (+10 pts)
      if (selectedLength === "any" || bookLengthCategory === selectedLength) {
        matchScore += 10;
      } else if (pageCount === 0) {
        matchScore += 5; // Partial credit if the publisher didn't provide a page count
      }

      // Calculate final match percentage
      const matchPercentage = Math.round((matchScore / maxScore) * 100);

      // Return the clean object
      return {
        title: info.title || "Unknown Title",
        author: info.authors ? info.authors.join(", ") : "Unknown Author",
        description: info.description ? info.description.substring(0, 140) + "..." : "No description available for this book.",
        // Force HTTPS for images so GitHub Pages doesn't block them
        cover: info.imageLinks ? info.imageLinks.thumbnail.replace('http:', 'https:') : "https://via.placeholder.com/150x220?text=No+Cover",
        rating: info.averageRating || "N/A",
        genre: selectedGenre === "any" ? (info.categories ? info.categories[0] : "Fiction") : selectedGenre,
        length: pageCount ? `${pageCount} pages` : "Unknown length",
        score: matchScore,
        matchPercentage: matchPercentage
      };
    });

    // 4. Sort by match percentage descending
    scoredBooks.sort((a, b) => b.score - a.score);

    // 5. Render the HTML
    displayResults(scoredBooks);

  } catch (error) {
    console.error("Error fetching books:", error);
    container.innerHTML = `<p style="color: #ef4444; text-align: center; width: 100%;">Error connecting to the book database. Please try again later.</p>`;
  }
}

// Function to render matching books dynamically into HTML cards
function displayResults(recommendedBooks) {
  const container = document.getElementById("resultsContainer");
  container.innerHTML = ""; // Clear loading message

  recommendedBooks.forEach(book => {
    const card = document.createElement("article");
    card.className = "book-card";

    // Determine badge color class based on percentage
    let badgeClass = "badge-low";
    if (book.matchPercentage >= 80) badgeClass = "badge-high";
    else if (book.matchPercentage >= 50) badgeClass = "badge-mid";

    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${book.cover}" alt="Cover of ${book.title}">
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

// Attach event listener to button
document.getElementById("recommendBtn").addEventListener("click", getRecommendations);

// Initial load
getRecommendations();
