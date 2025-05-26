// Embedded video data categorized by category
const videoData = {
  "General Studies": [
    { id: "dQw4w9WgXcQ", title: "General Studies Video 1" },
    { id: "3JZ_D3ELwOQ", title: "General Studies Video 2" },
    { id: "e-ORhEE9VVg", title: "General Studies Video 3" },
    { id: "kXYiU_JCYtU", title: "General Studies Video 4" },
    { id: "RgKAFK5djSk", title: "General Studies Video 5" },
    { id: "fLexgOxsZu0", title: "General Studies Video 6" }
  ],
  "Quantitative Aptitude": [
    { id: "L_jWHffIx5E", title: "Quantitative Aptitude Video 1" },
    { id: "eY52Zsg-KVI", title: "Quantitative Aptitude Video 2" },
    { id: "60ItHLz5WEA", title: "Quantitative Aptitude Video 3" },
    { id: "hT_nvWreIhg", title: "Quantitative Aptitude Video 4" },
    { id: "uelHwf8o7_U", title: "Quantitative Aptitude Video 5" },
    { id: "fJ9rUzIMcZQ", title: "Quantitative Aptitude Video 6" }
  ],
  "English Language": [
    { id: "V-_O7nl0Ii0", title: "English Language Video 1" },
    { id: "hY7m5jjJ9mM", title: "English Language Video 2" },
    { id: "JGwWNGJdvx8", title: "English Language Video 3" },
    { id: "09R8_2nJtjg", title: "English Language Video 4" },
    { id: "OPf0YbXqDm0", title: "English Language Video 5" },
    { id: "YQHsXMglC9A", title: "English Language Video 6" }
  ],
  "Reasoning Ability": [
    { id: "M7lc1UVf-VE", title: "Reasoning Ability Video 1" },
    { id: "sNPnbI1arSE", title: "Reasoning Ability Video 2" },
    { id: "RgKAFK5djSk", title: "Reasoning Ability Video 3" },
    { id: "kXYiU_JCYtU", title: "Reasoning Ability Video 4" },
    { id: "fLexgOxsZu0", title: "Reasoning Ability Video 5" },
    { id: "e-ORhEE9VVg", title: "Reasoning Ability Video 6" }
  ]
};

// Function to create video iframe thumbnail element
function createVideoThumbnail(video) {
  const div = document.createElement("div");
  div.className = "cursor-pointer rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow";
  div.title = video.title;
  div.innerHTML = `
    <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${video.title}" class="w-full h-auto object-cover" loading="lazy" />
    <div class="p-2 text-center font-semibold text-gray-800">${video.title}</div>
  `;
  div.addEventListener("click", () => openVideoPopup(video.id));
  return div;
}

// Function to open video popup and play video
function openVideoPopup(videoId) {
  const popup = document.getElementById("video-popup");
  const iframe = document.getElementById("popup-video");
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  popup.classList.remove("hidden");
}

// Function to close video popup and stop video
function closeVideoPopup() {
  const popup = document.getElementById("video-popup");
  const iframe = document.getElementById("popup-video");
  iframe.src = "";
  popup.classList.add("hidden");
}

// Function to render video categories and videos
function renderVideoCategories() {
  const container = document.getElementById("video-categories");
  container.innerHTML = "";
  for (const category in videoData) {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "bg-white rounded shadow p-4";

    const categoryTitle = document.createElement("h2");
    categoryTitle.className = "text-xl font-semibold mb-4";
    categoryTitle.textContent = category;
    categoryDiv.appendChild(categoryTitle);

    const videosGrid = document.createElement("div");
    videosGrid.className = "grid grid-cols-1 sm:grid-cols-2 gap-4";

    videoData[category].forEach(video => {
      const videoThumb = createVideoThumbnail(video);
      videosGrid.appendChild(videoThumb);
    });

    categoryDiv.appendChild(videosGrid);
    container.appendChild(categoryDiv);
  }
}

// Event listeners for popup close button and outside click
document.addEventListener("DOMContentLoaded", () => {
  renderVideoTabs();
  renderVideosForCategory(Object.keys(videoData)[0]);

  const closeBtn = document.getElementById("close-popup");
  const popup = document.getElementById("video-popup");

  closeBtn.addEventListener("click", closeVideoPopup);

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      closeVideoPopup();
    }
  });
});

// Function to render category tabs
function renderVideoTabs() {
  const tabsContainer = document.getElementById("video-tabs");
  tabsContainer.innerHTML = "";
  Object.keys(videoData).forEach((category, index) => {
    const tab = document.createElement("button");
    tab.textContent = category;
    tab.className = " rounded-xl px-4 py-2 -mb-px border-b-2 border-transparent hover:border-blue-600 focus:outline-none";
    if (index === 0) {
      tab.classList.add("border-blue-600", "font-semibold" ,"bg-blue-600","text-white");
    }
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      Array.from(tabsContainer.children).forEach(child => {
        child.classList.remove("border-blue-600", "font-semibold","bg-blue-600","text-white");
      });
      // Add active class to clicked tab
      tab.classList.add("border-blue-600", "font-semibold","bg-blue-600","text-white");
      // Render videos for selected category
      renderVideosForCategory(category);
    });
    tabsContainer.appendChild(tab);
  });
}

// Function to render videos for a selected category
function renderVideosForCategory(category) {
  const videoListContainer = document.getElementById("video-list");
  videoListContainer.innerHTML = "";
  videoData[category].forEach(video => {
    const videoThumb = createVideoThumbnail(video);
    videoListContainer.appendChild(videoThumb);
  });
}
