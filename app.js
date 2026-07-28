// Local Database with 10 Books per Genre using Open Library Covers API
const books = [
  // --- FANTASY (10 Books) ---
  { title: "A Court of Thorns and Roses", author: "Sarah J. Maas", genre: "fantasy", length: "medium", rating: "4.8", cover: "https://covers.openlibrary.org/b/id/12832810-L.jpg", description: "Feyre's survival in a harsh wilderness comes at a high price when she kills a wolf and is captured by a faerie lord." },
  { title: "Fourth Wing", author: "Rebecca Yarros", genre: "fantasy", length: "epic", rating: "4.9", cover: "https://covers.openlibrary.org/b/id/13812901-L.jpg", description: "Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, but is forced into the deadly Riders Quadrant." },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "fantasy", length: "epic", rating: "4.7", cover: "https://covers.openlibrary.org/b/id/8231996-L.jpg", description: "The tale of Kvothe, a magically gifted young man who grows to become the most notorious wizard his world has ever seen." },
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "fantasy", length: "short", rating: "4.8", cover: "https://covers.openlibrary.org/b/id/8406786-L.jpg", description: "Bilbo Baggins is a hobbit who enjoys a comfortable life, until Gandalf and thirteen dwarves drag him into a grand quest." },
  { title: "Six of Crows", author: "Leigh Bardugo", genre: "fantasy", length: "medium", rating: "4.8", cover: "https://covers.openlibrary.org/b/id/8311236-L.jpg", description: "Criminal prodigy Kaz Brekker is offered a chance at a deadly heist that could make him rich beyond his wildest dreams." },
  { title: "The Cruel Prince", author: "Holly Black", genre: "fantasy", length: "medium", rating: "4.6", cover: "https://covers.openlibrary.org/b/id/8740263-L.jpg", description: "Jude was seven years old when her parents were murdered and she and her sisters were stolen away to live in Faerie." },
  { title: "Mistborn: The Final Empire", author: "Brandon Sanderson", genre: "fantasy", length: "epic", rating: "4.8", cover: "https://covers.openlibrary.org/b/id/8231856-L.jpg", description: "In a world where ash falls from the sky, a street urchin discovers she possesses the power of Allomancy." },
  { title: "The Ocean at the End of the Lane", author: "Neil Gaiman", genre: "fantasy", length: "short", rating: "4.5", cover: "https://covers.openlibrary.org/b/id/7285026-L.jpg", description: "A middle-aged man returns to his childhood home and remembers the dark, magical events of his past." },
  { title: "Legendborn", author: "Tracy Deonn", genre: "fantasy", length: "epic", rating: "4.7", cover: "https://covers.openlibrary.org/b/id/10522101-L.jpg", description: "After her mother's death, Bree infiltrates a secret society on campus with ties to King Arthur's knights." },
  { title: "A Darker Shade of Magic", author: "V.E. Schwab", genre: "fantasy", length: "medium", rating: "4.6", cover: "https://covers.openlibrary.org/b/id/8235117-L.jpg", description: "Kell is one of the last Magicians with the rare ability to travel between parallel Londons: Red, Grey, White, and Black." },

  // --- ROMANCE (10 Books) ---
  { title: "Twisted Love", author: "Ana Huang", genre: "romance", length: "medium", rating: "4.6", cover: "https://covers.openlibrary.org/b/id/12534900-L.jpg", description: "Alex Volkov is a devil blessed with the face of an angel. When he's forced to look after his best friend's sister, sparks fly." },
  { title: "King of Wrath", author: "Ana Huang", genre: "romance", length: "medium", rating: "4.7", cover: "https://covers.openlibrary.org/b/id/12891201-L.jpg", description: "Dante Russo thrives on control. But when blackmail forces him into an engagement with Vivian Lau, everything shifts." },
  { title: "The Fine Print", author: "Lauren Asher", genre: "romance", length: "medium", rating: "4.6", cover: "https://covers.openlibrary.org/b/id/12547123-L.jpg", description: "Rowan is a billionaire heir who hires Zahra to revitalize an amusement park, only to fall for her against his own rules." },
  { title: "The Love Hypothesis", author: "Ali Hazelwood", genre: "romance", length: "medium", rating: "4.7", cover: "https://covers.openlibrary.org/b/id/12534891-L.jpg", description: "A Ph.D. candidate enters a fake-dating relationship with a notoriously harsh biology professor." },
  { title: "Beach Read", author: "Emily Henry", genre: "romance", length: "medium", rating: "4.5", cover: "https://covers.openlibrary.org/b/id/10188902-L.jpg", description: "Two rival authors stay in neighboring beach houses for the summer and challenge each other to write outside their comfort zones." },
  { title: "It Ends with Us", author: "Colleen Hoover", genre: "romance", length: "medium", rating: "4.6", cover: "https://covers.openlibrary.org/b/id/8318281-L.jpg", description: "Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants in Boston." },
  { title: "Red, White & Royal Blue", author: "Casey McQuiston", genre: "romance", length: "medium", rating: "4.7", cover: "https://covers.openlibrary.org/b/id/9253452-L.jpg", description: "The First Son of the United States falls in love with the Prince of Wales in a secret international affair." },
  { title: "Love & Gelato", author: "Jenna Evans Welch", genre: "romance", length: "short", rating: "4.4", cover: "https://covers.openlibrary.org/b/id/8182912-L.jpg", description: "Lina is spending the summer in Tuscany, discovering the beauty of Italy, love, and her mother's secret past." },
  { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", genre: "romance", length: "medium", rating: "4.8", cover: "https://covers.openlibrary.org/b/id/10231901-L.jpg", description: "Aging Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life." },
  { title: "Icebreaker", author: "Hannah Grace", genre: "romance", length: "epic", rating: "4.5", cover: "https://covers.openlibrary.org/b/id/12891002-L.jpg", description: "A competitive figure skater and a hockey captain are forced to share a rink, leading to unexpected chemistry." },

  // --- THRILLER (10 Books) ---
  { title: "The Silent Patient", author: "Alex Michaelides", genre: "thriller", length: "medium", rating: "4.7", cover: "https://covers.openlibrary.org/b/id/9255831-L.jpg", description: "Alicia Berenson’s life is seemingly perfect. Then, one evening, she shoots her husband five times in the face and never speaks again." },
  { title: "Verity", author: "Colleen Hoover", genre: "thriller", length: "short", rating: "4.7", cover: "https://covers.openlibrary.org/b/id/10541290-L.jpg", description: "Lowen Ashleigh is hired to finish the remaining books of an injured bestselling author, but finds an unsettling manuscript." },
  { title: "Gone Girl", author: "Gillian Flynn", genre: "thriller", length: "medium", rating: "4.6", cover: "https://covers.openlibrary.org/b/id/7289561-L.jpg", description: "On their fifth wedding anniversary, Nick Dunne reports that his beautiful wife Amy has disappeared from their home." },
  { title: "The Housemaid", author: "Freida McFadden", genre: "thriller", length: "medium", rating: "4.7", cover: "https://covers.openlibrary.org/b/id/12839011-L.jpg", description: "Every day I clean the Winchesters' beautiful house. I try on Nina's clothes. But soon I learn their secrets are dangerous." },
  { title: "Rock Paper Scissors", author: "Alice Feeney", genre: "thriller", length: "short", rating: "4.4", cover: "https://covers.openlibrary.org/b/id/11182390-L.jpg", description: "Ten years of marriage. Ten years of secrets. An anniversary weekend in a converted chapel goes terribly wrong." },
  { title: "Behind Closed Doors", author: "B.A. Paris", genre: "thriller", length: "short", rating: "4.5", cover: "https://covers.openlibrary.org/b/id/8181290-L.jpg", description: "Jack and Grace seem like the perfect couple. But why is Grace never allowed to leave the house without Jack?" },
  { title: "The Guest List", author: "Lucy Foley", genre: "thriller", length: "medium", rating: "4.3", cover: "https://covers.openlibrary.org/b/id/10189012-L.jpg", description: "A glamorous celebrity wedding on a remote Irish island turns deadly when a body is discovered during the storm." },
  { title: "One of Us Is Lying", author: "Karen M. McManus", genre: "thriller", length: "medium", rating: "4.6", cover: "https://covers.openlibrary.org/b/id/8319001-L.jpg", description: "Five students walk into detention, but only four walk out alive after the creator of a high school gossip app dies." },
  { title: "The Girl on the Train", author: "Paula Hawkins", genre: "thriller", length: "medium", rating: "4.4", cover: "https://covers.openlibrary.org/b/id/7421890-L.jpg", description: "Rachel catches the same commuter train every morning, watching a couple until she sees something shocking." },
  { title: "Shutter Island", author: "Dennis Lehane", genre: "thriller", length: "medium", rating: "4.6", cover: "https://covers.openlibrary.org/b/id/240726-L.jpg", description: "U.S. Marshal Teddy Daniels arrives at Ashecliffe Hospital for the Criminally Insane to investigate an impossible escape." },

  // --- SCIENCE FICTION (10 Books) ---
  { title: "Dune", author: "Frank Herbert", genre: "sci-fi", length: "epic", rating: "4.8", cover: "https://covers.openlibrary.org/b/id/9121901-L.jpg", description: "Set on the desert planet Arrakis, Paul Atreides must navigate politics, religion, and giant sandworms." },
  { title: "Project Hail Mary", author: "Andy Weir", genre: "sci-fi", length: "epic", rating: "4.9", cover: "https://covers.openlibrary.org/b/id/10542910-L.jpg", description: "A lone astronaut wakes up on a spaceship with amnesia and must figure out how to save humanity from extinction." },
  { title: "Ender's Game", author: "Orson Scott Card", genre: "sci-fi", length: "medium", rating: "4.7", cover: "https://covers.openlibrary.org/b/id/8235290-L.jpg", description: "Young Ender Wiggin is recruited to an elite military academy in space to prepare for an alien invasion." },
  { title: "Dark Matter", author: "Blake Crouch", genre: "sci-fi", length: "medium", rating: "4.6", cover: "https://covers.openlibrary.org/b/id/8189021-L.jpg", description: "Jason Dessen is kidnapped, knocked unconscious, and wakes up in a world where his life is completely different." },
  { title: "The Martian", author: "Andy Weir", genre: "sci-fi", length: "medium", rating: "4.8", cover: "https://covers.openlibrary.org/b/id/7391820-L.jpg", description: "Stranded on Mars after a dust storm, astronaut Mark Watney must use his scientific wits to stay alive." },
  { title: "Fahrenheit 451", author: "Ray Bradbury", genre: "sci-fi", length: "short", rating: "4.5", cover: "https://covers.openlibrary.org/b/id/9253810-L.jpg", description: "In a dystopian future where books are outlawed and burned, fireman Guy Montag begins to question everything." },
  { title: "Neuromancer", author: "William Gibson", genre: "sci-fi", length: "short", rating: "4.3", cover: "https://covers.openlibrary.org/b/id/8231902-L.jpg", description: "A washed-up computer hacker is hired for one ultimate job in cyberspace, inventing the cyberpunk genre." },
  { title: "Red Rising", author: "Pierce Brown", genre: "sci-fi", length: "medium", rating: "4.7", cover: "https://covers.openlibrary.org/b/id/7392100-L.jpg", description: "Darrow is a Red, the lowest caste in a color-coded society on Mars, who infiltrates the ruling Gold class." },
  { title: "All Systems Red", author: "Martha Wells", genre: "sci-fi", length: "short", rating: "4.5", cover: "https://covers.openlibrary.org/b/id/8319200-L.jpg", description: "A lethal security android hacks its own governor module and just wants to be left alone to watch soap operas." },
  { title: "Hyperion", author: "Dan Simmons", genre: "sci-fi", length: "epic", rating: "4.6", cover: "https://covers.openlibrary.org/b/id/301290-L.jpg", description: "Seven pilgrims travel to the mysterious world of Hyperion seeking answers from a terrifying creature known as the Shrike." },

  // --- MYSTERY (10 Books) ---
  { title: "And Then There Were None", author: "Agatha Christie", genre: "mystery", length: "short", rating: "4.8", cover: "https://covers.openlibrary.org/b/id/8231800-L.jpg", description: "Ten strangers are invited to an isolated island, and one by one, they are picked off according to a nursery rhyme." },
  { title: "A Good Girl's Guide to Murder", author: "Holly Jackson", genre: "mystery", length: "medium", rating: "4.7", cover: "https://covers.openlibrary.org/b/id/9253901-L.jpg", description: "Pip Fitz-Amobi re-examines a closed local murder case for her senior project, suspecting the real killer is still free." },
  { title: "The Maid", author: "Nita Prose", genre: "mystery", length: "medium", rating: "4.4", cover: "https://covers.openlibrary.org/b/id/12539012-L.jpg", description: "Molly the maid finds a wealthy guest dead in his bed, and her unusual social traits make her the lead suspect." },
  { title: "The Thursday Murder Club", author: "Richard Osman", genre: "mystery", length: "medium", rating: "4.5", cover: "https://covers.openlibrary.org/b/id/10539100-L.jpg", description: "Four elderly friends in a retirement village meet weekly to investigate unsolved crimes, until a real murder happens." },
  { title: "Big Little Lies", author: "Liane Moriarty", genre: "mystery", length: "medium", rating: "4.5", cover: "https://covers.openlibrary.org/b/id/7391901-L.jpg", description: "A murder at a suburban elementary school trivia night exposes the dangerous secrets of three seemingly perfect mothers." },
  { title: "The Mysterious Affair at Styles", author: "Agatha Christie", genre: "mystery", length: "short", rating: "4.4", cover: "https://covers.openlibrary.org/b/id/8231701-L.jpg", description: "Hercule Poirot makes his iconic debut investigating the fatal poisoning of an heiress in a locked manor house." },
  { title: "Truly Devious", author: "Maureen Johnson", genre: "mystery", length: "medium", rating: "4.5", cover: "https://covers.openlibrary.org/b/id/8319100-L.jpg", description: "True-crime aficionado Stevie Bell attends a prestigious academy with a dark history of a famous cold case kidnapping." },
  { title: "In the Woods", author: "Tana French", genre: "mystery", length: "epic", rating: "4.3", cover: "https://covers.openlibrary.org/b/id/240890-L.jpg", description: "Detective Rob Ryan investigates the murder of a young girl in the same woods where he survived a trauma as a child." },
  { title: "The Cuckoo's Calling", author: "Robert Galbraith", genre: "mystery", length: "epic", rating: "4.3", cover: "https://covers.openlibrary.org/b/id/7289901-L.jpg", description: "Private investigator Cormoran Strike looks into the supposed suicide of a troubled supermodel in London." },
  { title: "The Alienist", author: "Caleb Carr", genre: "mystery", length: "epic", rating: "4.5", cover: "https://covers.openlibrary.org/b/id/301500-L.jpg", description: "In 1896 New York City, a psychologist (alienist) and a reporter team up using new techniques to track a serial killer." }
];

// Fallback image URL
const fallbackCover = "https://via.placeholder.com/150x220/1e293b/f59e0b?text=Book+Cover";

// Matching Logic Function
function getRecommendations() {
  const selectedGenre = document.getElementById("genreSelect").value;
  const selectedLength = document.getElementById("lengthSelect").value;
  const container = document.getElementById("resultsContainer");

  const scoredBooks = books.map(book => {
    let score = 0;
    const maxScore = 20;

    // Genre Match (+10 pts)
    if (selectedGenre === "any" || book.genre === selectedGenre) {
      score += 10;
    }

    // Length Match (+10 pts)
    if (selectedLength === "any" || book.length === selectedLength) {
      score += 10;
    }

    const matchPercentage = Math.round((score / maxScore) * 100);

    return {
      ...book,
      score: score,
      matchPercentage: matchPercentage
    };
  });

  let filtered = scoredBooks.filter(b => b.score > 0);
  filtered.sort((a, b) => b.score - a.score);

  displayResults(filtered);
}

// Render cards into container
function displayResults(recommendedBooks) {
  const container = document.getElementById("resultsContainer");
  container.innerHTML = "";

  if (recommendedBooks.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); text-align: center; width: 100%;">No books matched your criteria. Try changing filters!</p>`;
    return;
  }

  recommendedBooks.forEach(book => {
    const card = document.createElement("article");
    card.className = "book-card";

    let badgeClass = "badge-low";
    if (book.matchPercentage >= 80) badgeClass = "badge-high";
    else if (book.matchPercentage >= 50) badgeClass = "badge-mid";

    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${book.cover}" alt="Cover of ${book.title}" onerror="this.onerror=null; this.src='${fallbackCover}';">
        <span class="match-badge ${badgeClass}">${book.matchPercentage}% Match</span>
      </div>
      <div class="book-info">
        <h3>${book.title}</h3>
        <p class="author">by ${book.author}</p>
        <div class="tags">
          <span class="tag">${book.genre.toUpperCase()}</span>
          <span class="tag">${book.length.toUpperCase()}</span>
          <span class="tag">⭐ ${book.rating}</span>
        </div>
        <p class="description">${book.description}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

// Event Listener
document.getElementById("recommendBtn").addEventListener("click", getRecommendations);

// Initial Load
getRecommendations();
