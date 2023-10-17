let bookList = books;
//@ts-check

/**
 * @type {Array} bookList
 */

let matches = bookList;
let page = 1;
const BOOKS_PER_PAGE = 36; // -------------- Number of books per page -------------- //

// -------------- Checking for a valid 'books' array -------------- //
if (!books || !Array.isArray(books)) throw Error("Source required");

// -------------- Day and night objects -------------- //
const css = {
  day: {
    dark: "10, 10, 20",
    light: "255, 255, 255",
  },
  night: {
    dark: "255, 255, 255",
    light: "10, 10, 20",
  },
};

// -------------- Initialize 'fragment' properly -------------- //
const fragment = document.createDocumentFragment(); // -------------- An empty document fragment -------------- //
// -------------- Extract the first batch of books to show -------------- //
const extracted = books.slice(0, BOOKS_PER_PAGE);

// -------------- Define the Book Preview component class -------------- //
class BookPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .preview {
          border-width: 0;
          font-family: Roboto, sans-serif;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          cursor: pointer;
          text-align: left;
          border-radius: 8px;
          border: 1px solid rgba(var(--color-dark), 0.15);
          background: rgba(var(--color-light), 1);
        }
        
        @media (min-width: 60rem) {
          .preview {
            padding: 1rem;
          }
        }
        
        .preview_hidden {
          display: none;
        }
        
        .preview:hover {
          background: rgba(var(--color-blue), 0.05);
        }
        
        .preview__image {
          width: 48px;
          height: 70px;
          object-fit: cover;
          background: grey;
          border-radius: 2px;
          box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
        }
        
        .preview__info {
          padding: 1rem;
        }
        
        .preview__title {
          margin: 0 0 0.5rem;
          font-weight: bold;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          color: rgba(var(--color-dark), 0.8);
        }
        
        .preview__author {
          color: rgba(var(--color-dark), 0.4);
        }
      </style>
      <div class="preview">
        <img class="preview__image" alt="">
        <div class="preview__info">
          <h3 class="preview__title"></h3>
          <p class="preview__author"></p>
        </div>
      </div>
    `;
  }

  // -------------- Define properties for book data -------------- //
  set bookData(data) {
    this.setAttribute("data-title", data.title);
    this.setAttribute("data-author", data.author);
    this.setAttribute("data-image", data.image);
    this.setAttribute("data-description", data.description);
  }

  get bookData() {
    return {
      title: this.getAttribute("data-title"),
      author: this.getAttribute("data-author"),
      image: this.getAttribute("data-image"),
      description: this.getAttribute("data-description"),
    };
  }

  // -------------- Lifecycle method: Called when the element is connected to the DOM -------------- //
  connectedCallback() {
    this.updatePreview();
  }

  // -------------- Method to update the preview with the book data -------------- //
  updatePreview() {
    // ------------ Sets or returns a reference to the DOM tree inside the ShadowRoot. -------------- //
    // ------------ The mode of the ShadowRoot, either open or closed ------------- //
    const titleElement = this.shadowRoot.querySelector(".preview__title");
    const authorElement = this.shadowRoot.querySelector(".preview__author");
    const imageElement = this.shadowRoot.querySelector(".preview__image");

    const data = this.bookData;

    titleElement.textContent = data.title;
    authorElement.textContent = `Author: ${data.author}`;
    imageElement.src = data.image;
    imageElement.alt = data.title;
  }
}

// -------------- Define the custom element -------------- //
customElements.define("book-preview", BookPreview);

let dataListItems = document.querySelector("[data-list-items]");

for (const { author, image, title, id, description, published } of extracted) {
  const preview = document.createElement("book-preview");
  preview.bookData = {
    author,
    image,
    title,
    id,
    description,
    published,
  };
  dataListItems.appendChild(preview);
}

// -------------- Initialize 'genres' properly -------------- //
// -------------- Document fragment for genres -------------- //
const allGenres = document.createDocumentFragment();
const optionElement = document.createElement("option");
optionElement.value = "any";
optionElement.innerText = "All Genres";
// -------------- Add 'all genres' to document -------------- //
allGenres.appendChild(optionElement);

// -------------- Loop through genres and create option elements -------------- //
for (const [id, name] of Object.entries(genres)) {
  const element = document.createElement("option");
  element.value = id;
  element.innerText = name;
  allGenres.appendChild(element); // -------------- Add option to document -------------- //
}

// -------------- Get the data-search-genres attribute -------------- //
const dataSearchGenres = document.querySelector("[data-search-genres]");
dataSearchGenres.appendChild(allGenres);

// -------------- Initialize 'authors' & create document fragment -------------- //
const allAuthors = document.createDocumentFragment();
const authorElement = document.createElement("option");
authorElement.value = "any";
authorElement.innerText = "All Authors";
allAuthors.appendChild(authorElement);

// -------------- Loop through authors -------------- //
for (const [id, name] of Object.entries(authors)) {
  const element = document.createElement("option");
  element.value = id;
  element.innerText = name;
  allAuthors.appendChild(element);
}

// -------------- Assuming 'data-search-authors' is a DOM element -------------- //
const dataSearchAuthors = document.querySelector("[data-search-authors]");
dataSearchAuthors.appendChild(allAuthors);

// -------------- Initialize 'v' properly and set documentElement properties
const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const v = isDarkTheme ? "night" : "day";
// -------------- Set css variables for selected themes -------------- //
document.documentElement.style.setProperty("--color-dark", css[v].dark);
document.documentElement.style.setProperty("--color-light", css[v].light);

// -------------- Correct the assignment of 'data-list-button' -------------- //
let dataListButton = document.querySelector("[data-list-button]");
dataListButton.textContent = `Show more (${
  matches.length - page * BOOKS_PER_PAGE > 0
    ? matches.length - page * BOOKS_PER_PAGE
    : 0
})`;

dataListButton.disabled = matches.length - page * BOOKS_PER_PAGE <= 0;

// -------------- Correct event listeners by adding 'function' -------------- //
dataSearchCancel = document.querySelector("[data-search-cancel]");
dataSearchCancel.addEventListener("click", function () {
  const dataSearchOverlay = document.querySelector("[data-search-overlay]");
  dataSearchOverlay.open = false; // -------------- Close search overlay when cancel is clicked -------------- //
});
// -------------- Get data-settings-cancel element -------------- //
dataSettingsCancel = document.querySelector("[data-settings-cancel]");
dataSettingsCancel.addEventListener("click", function () {
  const settingsOverlay = document.querySelector("[data-settings-overlay]");
  if (settingsOverlay) {
    settingsOverlay.open = false;
  }
});
// -------------- Get DOM Attribute -------------- //
dataSettingsForm = document.querySelector("[data-settings-form]");
dataSettingsForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(dataSettingsForm);

  for (const [name, value] of formData.entries()) {
    console.log(`${name}: ${value}`); // -------------- Log form field names and values -------------- //
  }

  const settingsOverlay = document.querySelector("[data-settings-overlay]");
  if (settingsOverlay) {
    settingsOverlay.open = false; // -------------- Close settings overlay after submission -------------- //
  }
});

// -------------- Close the book preview when the 'data-list-close' element is clicked -------------- //
const dataListClose = document.querySelector("[data-list-close]");
dataListClose.addEventListener("click", () => {
  const overlayDialog = document.querySelector("[data-list-active]");
  overlayDialog.open = false;
});

// -------------- Get the data-list-button element -------------- //
dataListButton = document.querySelector("[data-list-button]");
dataListButton.addEventListener("click", function () {
  const startIndex = page * BOOKS_PER_PAGE;
  const endIndex = startIndex + BOOKS_PER_PAGE;

  // -------------- Get the books to display on the current page -------------- //
  const nextPageItems = matches.slice(startIndex, endIndex);

  let dataListItems = document.querySelector("[data-list-items]");

  for (const {
    author,
    image,
    title,
    id,
    description,
    published,
  } of nextPageItems) {
    const preview = document.createElement("book-preview");
    preview.bookData = {
      author,
      image,
      title,
      id,
      description,
      published,
    };
    dataListItems.appendChild(preview);
  }

  page++;

  // -------------- Update the show more button based on remaining books -------------- //
  dataListButton.textContent = `Show more (${
    matches.length - page * BOOKS_PER_PAGE > 0
      ? matches.length - page * BOOKS_PER_PAGE
      : 0
  })`;
  // -------------- Disable the button if there are no more books to show -------------- //
  dataListButton.disabled = matches.length - page * BOOKS_PER_PAGE <= 0;
});

// -------------- Get data-header-search and data-search-overlay elements -------------- //
dataHeaderSearch = document.querySelector("[data-header-search]");
dataHeaderSearch.addEventListener("click", function () {
  const dataSearchOverlay = document.querySelector("[data-search-overlay]");
  dataSearchOverlay.open = true;
  if (dataSearchOverlay.open === true) {
    const dataSearchTitle = document.querySelector("[data-search-title]");
    dataSearchTitle.focus();
  }
});

dataHeaderSettings = document.querySelector("[data-header-settings]");
dataHeaderSettings.addEventListener("click", function () {
  const dataSettingsOverlay = document.querySelector("[data-settings-overlay]");
  dataSettingsOverlay.open = true; // -------------- Open the settings overlay -------------- //
});

dataSearchForm = document.querySelector("[data-search-form]");
dataSearchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  const result = [];

  for (const book of books) {
    const titleMatch =
      filters.title.trim() === "" ||
      book.title.toLowerCase().includes(filters.title.toLowerCase());
    const authorMatch =
      filters.author === "any" || book.author === filters.author;
    let genreMatch = false;

    if (filters.genre === "any") {
      genreMatch = true;
    } else {
      for (const genre of book.genres) {
        if (genre === filters.genre) {
          genreMatch = true;
          break;
        }
      }
    }

    if (titleMatch && authorMatch && genreMatch) {
      result.push(book);
    }

    const dataSearchOverlay = document.querySelector("[data-search-overlay]");
    dataSearchOverlay.open = false; // -------------- Close search overlay -------------- //
  }

  const dataListMessage = document.querySelector("[data-list-message]");
  let dataListItems = document.querySelector("[data-list-items]");

  if (result.length < 1) {
    dataListMessage.classList.add("list__message_show"); // -------------- Show message -------------- //
    dataListItems.innerHTML = ""; // -------------- Clear book list -------------- //
  } else {
    dataListMessage.classList.remove("list__message_show"); // -------------- Remove message -------------- //

    dataListItems.innerHTML = ""; // -------------- Clear list -------------- //
    matches = result; // -------------- Update the 'matches' array with filtered books -------------- //
    const extracted = matches.slice(0, BOOKS_PER_PAGE);
    // -------------- Create preview elements -------------- //
    for (const {
      author,
      image,
      title,
      id,
      description,
      published,
    } of extracted) {
      const preview = document.createElement("book-preview");
      preview.bookData = {
        author,
        image,
        title,
        id,
        description,
        published,
      };
      dataListItems.appendChild(preview);
    }

    dataListButton.textContent = `Show more (${
      matches.length - page * BOOKS_PER_PAGE > 0
        ? matches.length - page * BOOKS_PER_PAGE
        : 0
    })`;
    // -------------- Disable the button if there are no more books to show -------------- //
    dataListButton.disabled = matches.length - page * BOOKS_PER_PAGE <= 0;
  }
});

dataSettingsOverlay = document.querySelector("[data-settings-overlay]");
dataSettingsOverlay.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const result = Object.fromEntries(formData);

  // -------------- Update color scheme based on the selected theme -------------- //
  document.documentElement.style.setProperty(
    "--color-dark",
    css[result.theme].dark
  );
  document.documentElement.style.setProperty(
    "--color-light",
    css[result.theme].light
  );
  dataSettingsOverlay.open = false;
});

// -------------- Get all elements with 'data-list-items' -------------- //
dataListItems = document.querySelectorAll("[data-list-items]");
dataListItems.forEach(function (element) {
  element.addEventListener("click", function (event) {
    const pathArray = Array.from(event.path || event.composedPath());
    let active = null;

    for (const node of pathArray) {
      if (active) {
        break;
      }

      for (const singleBook of books) {
        if (singleBook.title === node.dataset?.title) {
          active = singleBook;
          break;
        }
      }
    }

    if (!active) {
      return;
    }

    const overlayDialog = document.querySelector("[data-list-active]");

    const overlayTitle = overlayDialog.querySelector("[data-list-title]");
    const overlaySubtitle = overlayDialog.querySelector("[data-list-subtitle]");
    const overlayDescription = overlayDialog.querySelector(
      "[data-list-description]"
    );
    const overlayImage = overlayDialog.querySelector("[data-list-image]");
    const overlayBlur = overlayDialog.querySelector("[data-list-blur]");

    overlayTitle.textContent = active.title;
    overlaySubtitle.textContent = `Author: ${
      authors[active.author]
    } (${new Date(active.published).getFullYear()})`;
    overlayDescription.textContent = active.description;
    overlayImage.src = active.image;
    overlayImage.alt = active.title;
    overlayBlur.src = active.image;
    overlayDialog.open = true;
  });
});
// -------------------------------------------------------- END OF CODE -------------------------------------------------------- //