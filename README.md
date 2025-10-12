🎬 Movie Search App

A simple and responsive web app to search for movies and series using the OMDb API. It allows users to:

- Search for movies/series by title
- View detailed information in a modal
- Navigate results with pagination (planned/optional)
- (Filtering by type and favorites are not implemented in the current version)

---

📦 Files

- `index.html` – Main HTML layout with search input, modal, and movie grid container  
- `styles.css` – App styling using CSS Grid, responsive design, modal styles, background image, and button effects  
- `app.js` – Handles OMDb API requests, DOM updates, modal interactions, and error handling  
- `favicon.png`, `background.jpg` – Assets (ensure these are placed in the same directory)  

---

🔧 Setup

1. Sign up at [OMDb API](http://www.omdbapi.com/apikey.aspx) to get your free API key.
2. Replace the placeholder API key (`4ece73f7`) in `app.js` with your own.
3. Clone or download the repository.
4. Open `index.html` in your browser.

---

✨ Features

- 🔍 Movie Search  
  Search movies using the OMDb API.

- 🎞 Movie Cards  
  Show posters, titles, and release years in a responsive grid.

- ❓ Fallback for Missing Posters 
  Automatically shows a placeholder when a movie poster is missing.

- 📝 Movie Details Modal 
  View detailed information in a modal popup by clicking a movie card.

- ⬆️ "Go to Top" Button  
  Floating button to quickly scroll to the top of the page.

- 🎨 Custom Styling 
  Includes a background image, favicon, and interactive hover effects.

- ✅ Responsive Design  
  Adapts layout to mobile, tablet, and desktop using CSS Grid.

- ⌨️ Enter Key Support 
  Pressing "Enter" in the input field triggers the search.

- ⚠️ Error Handling  
  Graceful handling for empty results, invalid input, and network/API errors.

---

💡 Tech Stack

- HTML5  
  Semantic layout structure for accessibility and clarity.

- CSS3 
  Responsive layout with Grid, Flexbox, custom styles, modal effects, and background image.

- JavaScript (Vanilla JS)  
  DOM manipulation, event handling, fetch requests, modal behavior, and rendering logic.

---

🧪 Testing

Tested and verified on:

- ✅ Google Chrome  
- ✅ Mozilla Firefox  
- ✅ Microsoft Edge

---

⚠ Known Limitations

- ❌ No backend/database storage  
- ❌ No favorites or localStorage  
- ❌ No pagination or type filtering yet  
- ⚠ OMDb API key limits depend on your plan (free or paid)

---

Feel free to fork or contribute to improve this project!
