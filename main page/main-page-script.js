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
            img: "images/character.png",
            alt: "Image representing characters",
            href: "",
            description: "Biographies of major and minor characters inhabiting this fantasy universe.",
        },
        { id: "races", 
            title: "RACES",
            img: "images/races.png",
            href: "",
            description: "Insights into the species that shape civilizations, conflicts, and myths.",
        },
        { id: "society",
            title: "SOCIETY",
            img: "images/society.png",
            href: "",
            description: "Insights into the social systems that shape kingdoms, tribes and empires.",
        },
        { id: "gods", 
            title: "GODS", 
            img: "images/gods.png",
            href: "",
            description: "An overview of the deities governing the realms and their spheres of power.",
        },
        { id: "religions", 
            title: "RELIGIONS",
            img: "images/religions.png",
            href: "",
            description: "Belief systems, cults, and spiritual practices shaped by the world's divine forces.",
        },
        { id: "geography",
            title: "GEOGRAPHY",
            img: "images/geography.png",
            href: "",
            description: "The environments, regions, and geographic forces that define the setting.",
        },
        { id: "magic",
            title: "MAGIC",
            img: "images/magic.png",
            href: "",
            description: "An overview of magical systems, energies, and the principles behind their use.",
        },
        { id: "items",
            title: "ITEMS",
            img: "images/items.png",
            href: "",
            description: "Artifacts, relics, weapons and crafted objects of significance throughout the realms.",
        },
        { id: "monsterpedia", 
            title: "MONSTERPEDIA",
            img: "images/monsterpedia.png",
            href: "",
            description: "An overview of the world's fauna, natural, cursed, or born of magic.", 
        },
        { id: "technology",
            title: "TECHNOLOGY",
            img: "images/technology.png",
            href: "",
            description: "Tools, inventions, and advancements that shape everyday life and warfare.",
        },
        { id: "history",
            title: "HISTORY",
            img: "images/history.png",
            href: "",
            description: "Key moments, historical figures, and epoch-defining events across the realms.",
        },
        { id: "cultures",
            title: "CULTURES",
            img: "images/cultures.png",
            href: "",
            description: "An overview of cultural identities, festival, symbols, and shared traditions.",
        },
    ],

    articles: [
        {
            title: "The Trees of Souls",
            img: "images/article-trees-of-souls.png",
            excerpt: "Elva’lanor historians tell that the Trees of Souls were once living elves who offered their final breath to protect their kin against the Void. On quiet nights, when the moonlight settles on the groves, their treesshimmer with a soft silver or golden glow, as if the ancestors are still watching. Travelers say you can feel their presence in the air, a hush,a pulse, a memory, guiding those who walk beneath their branches ",
            href: "#", 
        },
    ]
}

// Function to render navigation bar dynamically
function renderNav() {
  const navEl = document.getElementById("main-nav");
  navEl.innerHTML = "";

  data.nav.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    link.className = "nav-item";
    navEl.appendChild(link);
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
      <img src="${article.image}" alt="${article.title}">
      <div class="article-content">
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <a href="${article.href}" class="read-more">Read Article →</a>
      </div>
    `;

    wrapper.appendChild(articleEl);
  });
}

// Quand le DOM est prêt, on génère tout
document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderCodex();
  renderArticles();
  renderFooter();

  console.log("Page générée depuis data ✅");
});
