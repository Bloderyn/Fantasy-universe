const data = {
    nav: [
        { label: "MAPS", href: "#maps" },
        { label: "ADVENTURES", href: "#adventures" },
        { label: "NOVELS", href: "#novels" },
        { label: "TIMELINE", href: "#timeline" }
    ],

    codex: [
        { id: "characters",
            title: "CHARACTERS",
            img: "main-page/Images/character.jpg",
            alt: "Image representing characters",
            href: "",
            description: "Biographies of major and minor characters inhabiting this fantasy universe.",
        },
        { id: "races", 
            title: "RACES",
            img: "main-page/Images/races.jpg",
            href: "",
            description: "Insights into the species that shape civilizations, conflicts, and myths.",
        },
        { id: "society",
            title: "SOCIETY",
            img: "main-page/Images/society.jpg",
            href: "",
            description: "Insights into the social systems that shape kingdoms, tribes and empires.",
        },
        { id: "gods", 
            title: "GODS", 
            img: "main-page/Images/gods.jpg",
            href: "",
            description: "An overview of the deities governing the realms and their spheres of power.",
        },
        { id: "religions", 
            title: "RELIGIONS",
            img: "main-page/Images/religions.jpg",
            href: "",
            description: "Belief systems, cults, and spiritual practices shaped by the world's divine forces.",
        },
        { id: "geography",
            title: "GEOGRAPHY",
            img: "main-page/Images/geography.jpg",
            href: "",
            description: "The environments, regions, and geographic forces that define the setting.",
        },
        { id: "magic",
            title: "MAGIC",
            img: "main-page/Images/magic.jpg",
            href: "",
            description: "An overview of magical systems, energies, and the principles behind their use.",
        },
        { id: "items",
            title: "ITEMS",
            img: " main-page/Images/items.jpg",
            href: "",
            description: "Artifacts, relics, weapons and crafted objects of significance throughout the realms.",
        },
        { id: "monsterpedia", 
            title: "MONSTERPEDIA",
            img: "main-page/Images/monsterpedia.jpg",
            href: "",
            description: "An overview of the world's fauna, natural, cursed, or born of magic.", 
        },
        { id: "technology",
            title: "TECHNOLOGY",
            img: "main-page/Images/technology.jpg",
            href: "",
            description: "Tools, inventions, and advancements that shape everyday life and warfare.",
        },
        { id: "history",
            title: "HISTORY",
            img: "main-page/Images/history.jpg",
            href: "",
            description: "Key moments, historical figures, and epoch-defining events across the realms.",
        },
        { id: "cultures",
            title: "CULTURES",
            img: "main-page/Images/cultures.jpg",
            href: "",
            description: "An overview of cultural identities, festival, symbols, and shared traditions.",
        },
    ],

    articles: [
        {
            title: "The Trees of Souls",
            img: "main-page/Images/article-tree-of-souls.png",
            excerpt: "Elva’lanor historians tell that the Trees of Souls were once living elves who offered their final breath to protect their kin against the Void. On quiet nights, when the moonlight settles on the groves, their trees shimmer with a soft silver or golden glow, as if the ancestors are still watching. Travelers say you can feel their presence in the air, a hush,a pulse, a memory, guiding those who walk beneath their branches ",
            href: "#", 
        },
    ],

    footer: {
      about: {
        title: "ABOUT", 
        links: [
          { label: "About the universe", href: "#" },
          { label: "About the creator", href: "#" },
          { label: "Contact", href: "#" },
          { label: "Updates", href: "#" },
          { label: "Support", href: "#" }
        ],
      },
      resources: {
        title: "RESOURCES",
        links: [
          { label: "Terms", href: "#" },
          { label: "Privacy", href: "#" },
        ],
      },
      copy: "© 2025 Fantasy Universe. All rights reserved.",
    },
};



// Function to render navigation bar dynamically
function renderNav() {
  const linksEl = document.getElementById("nav-links");
  if (!linksEl) return;

  linksEl.innerHTML = "";

  data.nav.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    link.className = "nav-item";
    linksEl.appendChild(link);
  });
}

// Function to render Codex section dynamically
function renderCodex() {
  const codexGrid = document.getElementById("codex-grid");
  codexGrid.innerHTML = "";

  data.codex.forEach((item) => {
    const card = document.createElement("a");
    card.className = "codex-card";
    card.href = `#${item.id}`;

    card.innerHTML = `
      <img src="${item.img}" alt="${item.alt}">
      <h2>${item.title}</h2>
      <p>${item.description}</p>
    `;

    codexGrid.appendChild(card);
  });
}

// Function to render Articles section dynamically
function renderArticles() {
  const wrapper = document.getElementById("article-wrapper");
  wrapper.innerHTML = "";

  data.articles.forEach((article) => {
    const articleEl = document.createElement("article");
    articleEl.className = "article-card";

    articleEl.innerHTML = `
      <div class="article-image">
      <img src="${article.img}" alt="${article.title}">
      </div>
      <div class="article-content">
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <a href="${article.href}" class="read-more">Read Article</a>
      </div>
    `;

    wrapper.appendChild(articleEl);
  });
}


// Function to render Footer dynamically
function renderFooter() {
  const aboutEl = document.getElementById("footer-about");
  const resourcesEl = document.getElementById("footer-resources");
  const copyEl = document.getElementById("footer-copy");

  //About section 
  aboutEl.innerHTML = `
    <h4>${data.footer.about.title}</h4>
    <ul>
      ${data.footer.about.links
      .map(link => `<li><a href="${link.href}">${link.label}</a></li>`)
      .join("")}
    </ul>
  `;

  //Resources section
  resourcesEl.innerHTML = `
    <h4>${data.footer.resources.title}</h4>
    <ul>
      ${data.footer.resources.links
      .map(link => `<li><a href="${link.href}">${link.label}</a></li>`)
      .join("")}
    </ul>
  `;

  // Copyright section
  copyEl.innerHTML = `<p>${data.footer.copy}</p>`;
}


// DOM ready event to initialize rendering
document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderCodex();
  renderArticles();
  renderFooter();

  console.log("Page content rendered successfully.");
});


