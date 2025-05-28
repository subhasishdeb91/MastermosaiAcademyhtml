// Embedded video data categorized by category
const videoData = {
    "চঞ্চল ঘোষ": [
    { id: "5WFsqfh2MWw", title: "Day 1 - নিমেষে সমাধান লসাগু গসাগু" },
    { id: "8WRjROwxiM8", title: "Day 2 - লসাগু ও গসাগু নিমেষে সমাধান" },
    { id: "FFfufz7L3Vk", title: "Day 3 - lcm hcf basic level and short method" },
    { id: "j5OcHRcY_90", title: "Day 4 - Chanchal Ghosh Number System" },
    { id: "G8aJmZjQffs", title: "Day 5 - Chanchal Ghosh Number System"},
    { id: "zhflgUb0aLY", title: "Day 6 - Chanchal Ghosh Number System" },
    { id: "bx0U1qPVWyg", title: "Day 7 - NUMBER SYSTEM SHORTCUT" },
    { id: "CP5Qsg_sT_Y", title: "Day 8 - Number System Short Tricks" },
    { id: "tfuTC1Rclt0", title: "Day 9 - Number System Tricks " },
    { id: "wvI3dm0wq5Y", title: "Day 10 - Number system shortcut method" }
    ],
  "Basic Maths": [
    { id: "6OAukBbYJu8", title: "এবার বেসিক লেভেল ম্যাথ একদম হবে ক্লিয়ার" },
    { id: "GSRTQLUlISw", title: "ভগ্নাংশের যোগ বিয়োগ একদম বেসিক কনসেপ্ট থেকে শেখো" },
    { id: "h_l0n2b-3PQ", title: "ভগ্নাংশের ছোট বড় একদম বেসিক লেভেল" },
    { id: "vpnKI3P11wQ", title: "অনুপাত এর প্রকারভেদ/খুব সহজে অনুপাতের অংক শেখো" },
    { id: "M_0vMHlYoBo", title: "Number System Short Tricks" },
    { id: "qkWdxTMS28o", title: "বেসিক ক্যালকুলেশন | X-এর মান নির্ণয়" },
    { id: "lw5X9U40YxE", title: "বেসিক ক্যালকুলেশন Day 02 " },
    { id: "zQKmnMYpH_I", title: "ভগ্নাংশের বেসিক লেভেল রেমিডিয়াল ক্লাস" },
    { id: "FArYFq9XX2Y", title: "ভগ্নাংশের রেমিডিয়াল ক্লাস" }
    
  ]
  // ,
  // "Quantitative Aptitude": [
  //   { id: "L_jWHffIx5E", title: "Quantitative Aptitude Video 1" },
  //   { id: "eY52Zsg-KVI", title: "Quantitative Aptitude Video 2" },
  //   { id: "60ItHLz5WEA", title: "Quantitative Aptitude Video 3" },
  //   { id: "hT_nvWreIhg", title: "Quantitative Aptitude Video 4" },
  //   { id: "uelHwf8o7_U", title: "Quantitative Aptitude Video 5" },
  //   { id: "fJ9rUzIMcZQ", title: "Quantitative Aptitude Video 6" }
  // ],
  // "English Language": [
  //   { id: "V-_O7nl0Ii0", title: "English Language Video 1" },
  //   { id: "hY7m5jjJ9mM", title: "English Language Video 2" },
  //   { id: "JGwWNGJdvx8", title: "English Language Video 3" },
  //   { id: "09R8_2nJtjg", title: "English Language Video 4" },
  //   { id: "OPf0YbXqDm0", title: "English Language Video 5" },
  //   { id: "YQHsXMglC9A", title: "English Language Video 6" }
  // ],
  // "Reasoning Ability": [
  //   { id: "M7lc1UVf-VE", title: "Reasoning Ability Video 1" },
  //   { id: "sNPnbI1arSE", title: "Reasoning Ability Video 2" },
  //   { id: "RgKAFK5djSk", title: "Reasoning Ability Video 3" },
  //   { id: "kXYiU_JCYtU", title: "Reasoning Ability Video 4" },
  //   { id: "fLexgOxsZu0", title: "Reasoning Ability Video 5" },
  //   { id: "e-ORhEE9VVg", title: "Reasoning Ability Video 6" }
  // ]
};

// Function to create video iframe thumbnail element
function createVideoThumbnail(video) {
  const div = document.createElement("div");
  div.className = "cursor-pointer rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow";
  div.title = video.title;
  div.innerHTML = `
    <div class="relative overflow-hidden pt-[56.25%]"><img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${video.title}" class="w-full h-full object-cover absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" loading="lazy" />
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" class="w-12 sm:w-16" viewBox="0 0 24 24"><path d="M 19.615 3.184 c -1.604 -0.11 -8.07 -0.11 -8.07 -0.11 s -6.466 0 -8.07 0.11 c -1.68 0.115 -2.98 1.42 -3.1 3.1 c -0.11 1.6 -0.11 4.94 -0.11 4.94 s 0 3.34 0.11 4.94 c 0.12 1.68 1.42 2.98 3.1 3.1 c 1.6 0.11 8.07 0.11 8.07 0.11 s 6.47 0 8.07 -0.11 c 1.68 -0.12 2.98 -1.42 3.1 -3.1 c 0.11 -1.6 0.11 -4.94 0.11 -4.94 s 0 -3.34 -0.11 -4.94 c -0.12 -1.68 -1.42 -2.98 -3.1 -3.1 z m -11.615 8.816 v -5 l 8 4 l -8 4 z"></path></svg>
    </div>
    </div>
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
