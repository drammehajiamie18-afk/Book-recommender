// Database of books with matching attributes
const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "fantasy",
    pacing: "fast",
    length: "medium", // short (<300), medium (300-500), long (>500)
    rating: 4.8,
    cover: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?auto=format&fit=crop&w=400&q=80",
    description: "An adventurous journey through Middle-earth filled with magic, dragons, and epic quests."
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "sci-fi",
    pacing: "slow",
    length: "long",
    rating: 4.7,
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=400&q=80",
    description: "A deep political and sci-fi masterpiece set on the desert planet Arrakis."
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "non-fiction",
    pacing: "fast",
    length: "medium",
    rating: 4.9,
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
    description: "Practical strategies to build good habits, break bad ones, and master small behaviors."
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "thriller",
    pacing: "fast",
    length: "medium",
    rating: 4.5,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    description: "A shocking psychological thriller about a woman's act of violence against her husband."
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    genre: "sci-fi",
    pacing: "fast",
    length: "long",
    rating: 4.8,
    cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
    description: "A lone astronaut must save Earth from disaster using science, wit, and unexpected friendship."
  },
  {
    title: "Ender's Game",
    author: "Orson Scott Card",
    genre: "sci-fi",
    pacing: "fast",
    length: "medium",
    rating: 4.5,
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
    description: "A young tactical genius is recruited into a space military academy to prepare for an alien war."
  },

  // THRILLER & MYSTERY
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "thriller",
    pacing: "fast",
    length: "medium",
    rating: 4.5,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    description: "A shocking psychological thriller about a woman's unexpected act of violence against her husband."
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "thriller",
    pacing: "fast",
    length: "medium",
    rating: 4.4,
    cover: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=400&q=80",
    description: "On their fifth wedding anniversary, Nick's wife Amy disappears, unraveling dark secrets."
  },
  {
    title: "The Guest List",
    author: "Lucy Foley",
    genre: "thriller",
    pacing: "slow",
    length: "medium",
    rating: 4.1,
    cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80",
    description: "A glamorous wedding on a remote Irish island turns deadly as storm clouds gather and secrets leak."
  },

  // ROMANCE
  {
    title: "Twisted Love",
    author: "Ana Huang",
    genre: "romance",
    pacing: "fast",
    length: "medium",
    rating: 4.3,
    cover: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?auto=format&fit=crop&w=400&q=80",
    description: "A grumpy bodyguard is tasked with protecting his best friend's sunny sister, sparking dangerous attraction."
  },
  {
    title: "Beach Read",
    author: "Emily Henry",
    genre: "romance",
    pacing: "fast",
    length: "medium",
    rating: 4.3,
    cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    description: "Two rival writers with opposite styles swap genres for the summer to conquer writer's block."
  },

  // NON-FICTION & SELF-HELP
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "non-fiction",
    pacing: "fast",
    length: "medium",
    rating: 4.9,
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
    description: "Practical strategies to build good habits, break bad ones, and master small behaviors."
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "non-fiction",
    pacing: "slow",
    length: "long",
    rating: 4.7,
    cover: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=400&q=80",
    description: "A groundbreaking narrative exploring how Homo sapiens came to dominate the planet."
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    genre: "non-fiction",
    pacing: "fast",
    length: "medium",
    rating: 4.6,
    cover: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=400&q=80",
    description: "Rules for focused success in a distracted world, essential for mastering modern skills."
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "non-fiction",
    pacing: "slow",
    length: "long",
    rating: 4.5,
    cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80",
    description: "An exploration of the two systems that drive the way humans think and make choices."
  },
// DARK ROMANCE
  {
    title: "Twisted Lies",
    author: "Ana Huang",
    genre: "dark-romance",
    pacing: "fast",
    length: "long",
    rating: 4.7,
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1661225395i/62058385.jpg",
    description: "A charming social media influencer and a deadly, possessive tech mogul enter a fake relationship with hidden motives."
  },
  {
    title: "God of Malice",
    author: "Rina Kent",
    genre: "dark-romance",
    pacing: "fast",
    length: "medium",
    rating: 4.4,
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1720736501i/214298303.jpg",
    description: "A dark college romance following a dangerously obsessive psychopath and the artist who draws his relentless focus."
  },

  // MM ROMANCE
  {
    title: "Red, White & Royal Blue",
    author: "Casey McQuiston",
    genre: "mm-romance",
    pacing: "fast",
    length: "medium",
    rating: 4.7,
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w400q=80",
    description: "The First Son of the United States and the Prince of Wales spark a secret romance after a staged public truce."
  },
  {
    title: "Heated Rivalry",
    author: "Rachel Reid",
    genre: "mm-romance",
    pacing: "fast",
    length: "medium",
    rating: 4.6,
    cover: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?auto=format&fit=crop&w=400&q=80",
    description: "Two professional hockey superstars hide a fiery, years-long secret relationship while competing for the championship."
  },

];

console.log("Book Database Loaded successfully! Total books:", books.length);

// Function to generate recommendations based on user selections
function getRecommendations() {
  const selectedGenre = document.getElementById("genreSelect").value;
  const selectedPacing = document.getElementById("pacingSelect").value;
  const selectedLength = document.getElementById("lengthSelect").value;

  const maxScore = 20; // Total possible score (10 + 5 + 5)

  const scoredBooks = books.map(book => {
    let matchScore = 0;

    // Genre check (+10 pts)
    if (selectedGenre === "any" || book.genre === selectedGenre) {
      matchScore += 10;
    }

    // Pacing check (+5 pts)
    if (selectedPacing === "any" || book.pacing === selectedPacing) {
      matchScore += 5;
    }

    // Length check (+5 pts)
    if (selectedLength === "any" || book.length === selectedLength) {
      matchScore += 5;
    }

    // Calculate match percentage
    const matchPercentage = Math.round((matchScore / maxScore) * 100);

    return { ...book, score: matchScore, matchPercentage };
  });

  // Sort by match score descending
  scoredBooks.sort((a, b) => b.score - a.score);

  displayResults(scoredBooks);
}

// Function to render matching books dynamically into HTML cards
function displayResults(recommendedBooks) {
  const container = document.getElementById("resultsContainer");
  container.innerHTML = ""; // Clear previous results

  recommendedBooks.forEach(book => {
    const card = document.createElement("article");
    card.className = "book-card";

    // Determine badge color class based on percentage
    let badgeClass = "badge-low";
    if (book.matchPercentage >= 80) {
      badgeClass = "badge-high";
    } else if (book.matchPercentage >= 50) {
      badgeClass = "badge-mid";
    }

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
          <span class="tag">${book.pacing} pace</span>
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

