// JSON data for dynamic sections
const latestNotifications = [
  "New batch starting from 1st July 2024. Enroll now!",
  "Holiday on 15th August for Independence Day.",
  "Free seminar on exam strategies on 20th June."
];

const upcomingExams = [
  { name: "WB SSC GROUP C", date: "September 2025",  },
  { name: "SSC CGL Tier 1", date: "10th September 2024", link: "https://example.com/ssc-cgl-tier1" },
  { name: "Bank PO Mains", date: "5th October 2024" },
  { name: "Bank PO Mains", date: "5th October 2024", link: "https://example.com/bank-po-mains" }
];

const youtubeVideos = [
  { id: "ULnadm9XwGE", title: "YouTube video 1" },
  { id: "2n4Yood6Fv0", title: "YouTube video 2" },
  { id: "GSRTQLUlISw", title: "YouTube video 3" }
];

// Function to populate Latest Notifications
function populateLatestNotifications() {
  const container = document.querySelector("#notifications ul");
  container.innerHTML = "";
  latestNotifications.forEach(notification => {
    const li = document.createElement("li");
    li.textContent = notification;
    container.appendChild(li);
  });
}

// Function to populate Upcoming Exams with conditional links
function populateUpcomingExams() {
  const container = document.querySelector("#upcoming-exams ul");
  container.innerHTML = "";
  upcomingExams.forEach(exam => {
    const li = document.createElement("li");
    if (exam.link) {
      const a = document.createElement("a");
      a.href = exam.link;
      a.textContent = `${exam.name} - ${exam.date}`;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.className = "text-blue-700 hover:underline";
      li.appendChild(a);
    } else {
      li.textContent = `${exam.name} - ${exam.date}`;
    }
    container.appendChild(li);
  });
}

// Function to populate YouTube Videos
function populateYouTubeVideos() {
  const container = document.querySelector("#videos .grid");
  container.innerHTML = "";
  youtubeVideos.forEach(video => {
    const div = document.createElement("div");
    div.className = "rounded overflow-hidden shadow-lg";
    div.innerHTML = `<iframe class="w-full" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/${video.id}" title="${video.title}" frameborder="0" allowfullscreen loading="lazy"></iframe>`;
    container.appendChild(div);
  });
}

const socialMediaLinks = [
  { name: "Facebook", url: "https://facebook.com/mastermosaiacademy", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="#1877F2" class="w-6 h-6" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1-3 3-3h2v3h-2c-.5 0-1 .5-1 1v2h3l-1 3h-2v7A10 10 0 0022 12z"/></svg>` },
  { name: "Twitter", url: "https://twitter.com/mastermosaiacademy", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="#1DA1F2" class="w-6 h-6" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3 1 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>` },
  { name: "Instagram", url: "https://instagram.com/mastermosaiacademy", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="#E4405F" class="w-6 h-6" viewBox="0 0 24 24"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 3a1 1 0 110 2 1 1 0 010-2zm-5 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/></svg>` },
  { name: "Telegram", url: "https://t.me/mastermosaiacademy", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="#0088CC" class="w-6 h-6" viewBox="0 0 24 24"><path d="M9.04 15.5l-.4 4.5c.57 0 .82-.25 1.12-.55l2.7-2.6 5.6 4.1c1.03.57 1.77.27 2.04-.95L23 6.5c.3-1.3-.45-1.9-1.3-1.6L2.5 10.7c-1.3.5-1.28 1.2-.22 1.5l5.9 1.8 13.7-8.6c.65-.4 1.25-.2.76.3"/></svg>` },
  { name: "YouTube", url: "https://www.youtube.com/@MastermosaiAcademy", icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" class="w-6 h-6" viewBox="0 0 24 24"><path d="M 19.615 3.184 c -1.604 -0.11 -8.07 -0.11 -8.07 -0.11 s -6.466 0 -8.07 0.11 c -1.68 0.115 -2.98 1.42 -3.1 3.1 c -0.11 1.6 -0.11 4.94 -0.11 4.94 s 0 3.34 0.11 4.94 c 0.12 1.68 1.42 2.98 3.1 3.1 c 1.6 0.11 8.07 0.11 8.07 0.11 s 6.47 0 8.07 -0.11 c 1.68 -0.12 2.98 -1.42 3.1 -3.1 c 0.11 -1.6 0.11 -4.94 0.11 -4.94 s 0 -3.34 -0.11 -4.94 c -0.12 -1.68 -1.42 -2.98 -3.1 -3.1 z m -11.615 8.816 v -5 l 8 4 l -8 4 z"/></svg>` }
];

// Function to populate social media links dynamically
function populateSocialMediaLinks() {
  const container = document.querySelector("#social-media-links");
  if (!container) return;
  container.innerHTML = "";
  socialMediaLinks.forEach(link => {
    if (link.url) {
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", link.name);
      a.className = "text-current hover:text-gray-300 mx-2";
      a.innerHTML = link.icon;
      container.appendChild(a);
    }
  });
}


// Initialize all dynamic content
document.addEventListener("DOMContentLoaded", () => {
  const phoneLink = document.getElementById('phone-link');
  const emailLink = document.getElementById('email-link');
  const callNowBtn = document.querySelector('a[title="Call Now"]');
  if (phoneLink && emailLink && callNowBtn && typeof contactInfo !== 'undefined') {
    phoneLink.href = `tel:${contactInfo.phone}`;
    phoneLink.textContent = contactInfo.phone;
    emailLink.href = `mailto:${contactInfo.email}`;
    emailLink.textContent = contactInfo.email;
    callNowBtn.href = `tel:${contactInfo.callNowNumber}`;
  }
});



// Initialize all dynamic content
document.addEventListener("DOMContentLoaded", () => {
  populateLatestNotifications();
  populateUpcomingExams();
  populateYouTubeVideos();
  populateSocialMediaLinks();
});
