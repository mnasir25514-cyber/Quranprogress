/* =====================================================
   QURAN LEARNING WEBSITE
   Student reports + Islamic YouTube Learning Library
/* ==========================================================================
   DATA STRUCTURES
   ========================================================================== */

// 1. Student Information Array
const students = [
    {
        id: 1,
        name: "Muhammad",
        category: "Quran Student",
        currentLevelLabel: "Current Para",
        currentLevelValue: "29th Para",
        targetLabel: "Current Hifz target",
        targetValue: "Surah Al-Qadr",
        nextStep: "Memorize Surah Al-Qadr",
        rating: 4,
        alert: null, // No red alert
        completedHifz: [
            "Surah Al-Fatiha", 
            "Surah An-Naas", 
            "Surah Al-Falaq", 
            "Surah An-Nasr", 
            "Surah Al-Lahab", 
            "Surah Al-Kausar", 
            "Surah Al-Feel" // Included as requested
        ],
        teacherReview: "Muhammad did not memorize Surah Al-Feel on time. Please take Hifz practice seriously and make sure he revises regularly at home so he stays on schedule.",
        weeklyReview: null,
        weeklyHistory: null
    },
    {
        id: 2,
        name: "Nusaiba",
        category: "Quran Student",
        currentLevelLabel: "Current Para",
        currentLevelValue: "17th Para",
        targetLabel: "Current Hifz target",
        targetValue: "Surah Al-Qadr",
        nextStep: "Memorize Surah Al-Qadr",
        rating: 4,
        alert: null, // No red alert
        completedHifz: [
            "Surah Al-Fatiha", 
            "Surah An-Naas", 
            "Surah Al-Falaq", 
            "Surah An-Nasr", 
            "Surah Al-Lahab", 
            "Surah Al-Kausar", 
            "Surah Al-Feel" // Included as requested
        ],
        teacherReview: "Nusaiba did not memorize Surah Al-Feel on time. Please take Hifz practice seriously and make sure she revises regularly at home so she stays on schedule.",
        weeklyReview: null,
        weeklyHistory: null
    },
    {
        id: 3,
        name: "Ibrahim",
        category: "Junior — Amma Para",
        currentLevelLabel: "Current Lesson",
        currentLevelValue: "Surah Al-Kawthar",
        targetLabel: "Next Step",
        targetValue: "Practice at home",
        nextStep: "Surah Al-Kawthar Revision",
        rating: 4,
        alert: "Indiscipline in class", // Red alert requested
        completedHifz: null,
        teacherReview: "Ibrahim needs to show better discipline in Quran class and give more attention to his home lesson. Please help him practise regularly at home and follow classroom instructions.",
        weeklyReview: "Ibrahim should be more disciplined during Quran class and focus carefully on his home lesson. Please practise Surah Al-Kawthar together at home before the next session.",
        weeklyHistory: [
            { label: "This Week", rating: 4 },
            { label: "Previous Week", rating: 4 },
            { label: "Two Weeks Ago", rating: 3 }
        ]
    },
    {
        id: 4,
        name: "Mustafa",
        category: "Junior — Noorani Qaida",
        currentLevelLabel: "Current Takhti",
        currentLevelValue: "Takhti 13",
        targetLabel: "Next Takhti",
        targetValue: "Takhti 14",
        nextStep: "Master Takhti 13",
        rating: 4,
        alert: "Indiscipline in class", // Red alert requested
        completedHifz: null,
        teacherReview: "Mustafa needs to show better discipline in Quran class and give more attention to his home lesson. Please help him follow classroom instructions and practise Takhti 13 regularly at home.",
        weeklyReview: "Mustafa should be more disciplined during Quran class and focus carefully on his home lesson. Please practise Takhti 13 together at home before the next session.",
        weeklyHistory: [
            { label: "This Week", rating: 4 },
            { label: "Previous Week", rating: 4 },
            { label: "Two Weeks Ago", rating: 3 }
        ]
    }
];

// 2. YouTube Learning Library Array
// YouTube standard URL converted to privacy-enhanced embed URL
const videos = [
    {
        title: "Surah Recitation",
        category: "Surah Recitation",
        description: "Surah Al-Feel recitation to help with pronunciation.",
        url: "https://www.youtube-nocookie.com/embed/DoBVa94v3pI"
    },
    {
        title: "Stories of the Sahabah (RA)",
        category: "Sahabah Stories",
        description: "Watch this and get ready for the quiz that may be held next week for Nusaiba and Muhammad.",
        url: "https://www.youtube-nocookie.com/embed/ZSLMniXcFuk"
    },
    {
        title: "Islamic Lessons for Students",
        category: "Islamic Lessons",
        description: "A must-watch video.",
        url: "https://www.youtube-nocookie.com/embed/_NxLoGB0fXw"
    }
];


/* ==========================================================================
   INITIALIZATION & UTILITIES
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    setCurrentDate();
    renderDashboard();
    renderVideos('All', '');
    
    // Set dynamic year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
});

// Utility to generate Star Ratings HTML
function getStarsHTML(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += '<i class="fa-solid fa-star"></i>';
        } else {
            starsHtml += '<i class="fa-regular fa-star"></i>';
        }
    }
    return starsHtml;
}

// Display Current Date in Header
function setCurrentDate() {
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    document.getElementById('current-date').textContent = today.toLocaleDateString('en-US', dateOptions);
}

// Scroll down to Dashboard from Hero button
function scrollToDashboard() {
    document.getElementById('dashboard-view').scrollIntoView({ behavior: 'smooth' });
}


/* ==========================================================================
   STUDENT DASHBOARD LOGIC
   ========================================================================== */

function renderDashboard() {
    const grid = document.getElementById('student-grid');
    grid.innerHTML = '';

    students.forEach(student => {
        // Build Alert Badge if exists
        const alertHtml = student.alert 
            ? `<div class="alert-badge"><i class="fa-solid fa-triangle-exclamation"></i> ${student.alert}</div>` 
            : '';

        // Avatar Initial
        const initial = student.name.charAt(0);

        // Card HTML
        const card = document.createElement('div');
        card.className = 'student-card';
        card.onclick = () => showStudentDetail(student.id);
        card.innerHTML = `
            <div class="avatar">${initial}</div>
            <h4>${student.name}</h4>
            <div class="category">${student.category}</div>
            
            <div class="stars">
                ${getStarsHTML(student.rating)}
            </div>

            <div class="progress-info">
                <p>${student.currentLevelLabel}: <span>${student.currentLevelValue}</span></p>
                <p>${student.targetLabel}: <span>${student.targetValue}</span></p>
            </div>
            
            ${alertHtml}
        `;
        grid.appendChild(card);
    });
}


/* ==========================================================================
   STUDENT DETAIL LOGIC
   ========================================================================== */

function showStudentDetail(studentId) {
    const student = students.find(s => s.id === studentId);
    if (!student) return;

    // View toggling
    document.getElementById('dashboard-view').classList.add('hidden-view');
    document.getElementById('detail-view').classList.remove('hidden-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const detailContent = document.getElementById('detail-content');
    const initial = student.name.charAt(0);
    const todayStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    // 1. Common Header
    let html = `
        <div class="detail-card">
            <div class="detail-header">
                <div class="avatar">${initial}</div>
                <div class="detail-title">
                    <h2>${student.name}</h2>
                    <div class="category">${student.category}</div>
                    <div class="stars">${getStarsHTML(student.rating)}</div>
                </div>
            </div>
            
            <div class="detail-grid">
                <!-- Column 1: Current Status & Teacher Review -->
                <div class="detail-col">
                    <div class="info-block">
                        <h4><i class="fa-solid fa-location-crosshairs"></i> Current Progress</h4>
                        <div class="progress-info" style="background: transparent; padding:0;">
                            <p>${student.currentLevelLabel}: <span>${student.currentLevelValue}</span></p>
                            <p>${student.targetLabel}: <span>${student.targetValue}</span></p>
                        </div>
                    </div>
                    
                    <div class="info-block">
                        <h4><i class="fa-solid fa-comment-dots"></i> Teacher's Review</h4>
                        <div class="review-box">"${student.teacherReview}"</div>
                    </div>
                </div>
                
                <!-- Column 2: Specific Data (Hifz List OR Weekly History) -->
                <div class="detail-col">
    `;

    // 2. Conditional rendering based on student type
    if (student.completedHifz) {
        // Quran Students (Muhammad & Nusaiba)
        let hifzItems = student.completedHifz.map(surah => 
            `<li><i class="fa-solid fa-circle-check"></i> ${surah}</li>`
        ).join('');

        html += `
            <div class="info-block">
                <h4><i class="fa-solid fa-book-open"></i> Completed Hifz</h4>
                <ul class="hifz-list">
                    ${hifzItems}
                </ul>
                <div class="next-target">
                    <div>
                        <div style="font-size: 0.85rem; opacity: 0.9;">Next Target</div>
                        <strong>${student.nextStep}</strong>
                    </div>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        `;
    } else if (student.weeklyHistory) {
        // Junior Students (Ibrahim & Mustafa)
        html += `
            <div class="info-block">
                <h4><i class="fa-solid fa-calendar-week"></i> Weekly Review</h4>
                <div class="review-box" style="background: var(--bg-cream); border-color: var(--gold-accent);">
                    "${student.weeklyReview}"
                </div>
            </div>

            <div class="info-block">
                <h4><i class="fa-solid fa-clock-rotate-left"></i> Rating History</h4>
                <ul class="history-list">
                    ${student.weeklyHistory.map(hist => `
                        <li>
                            <span>${hist.label}</span>
                            <span class="stars" style="margin:0;">${getStarsHTML(hist.rating)}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    // 3. Close HTML tags
    html += `
                </div> <!-- End Col 2 -->
            </div> <!-- End Grid -->
            <div class="update-date">Last Updated: ${todayStr}</div>
        </div>
    `;

    detailContent.innerHTML = html;
}

function hideStudentDetail() {
    document.getElementById('detail-view').classList.add('hidden-view');
    document.getElementById('dashboard-view').classList.remove('hidden-view');
}


/* ==========================================================================
   YOUTUBE LIBRARY LOGIC
   ========================================================================== */

// Event listeners for search and filters
document.getElementById('video-search').addEventListener('input', (e) => {
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    renderVideos(activeFilter, e.target.value);
});

document.getElementById('category-filters').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        // Update active class
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Render based on new filter and current search term
        const searchTerm = document.getElementById('video-search').value;
        renderVideos(e.target.dataset.filter, searchTerm);
    }
});

function renderVideos(categoryFilter, searchQuery) {
    const grid = document.getElementById('video-grid');
    grid.innerHTML = '';
    
    const query = searchQuery.toLowerCase().trim();

    const filteredVideos = videos.filter(video => {
        const matchesCategory = categoryFilter === 'All' || video.category === categoryFilter;
        const matchesSearch = video.title.toLowerCase().includes(query) || video.description.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    if (filteredVideos.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No videos found matching your search.</p>`;
        return;
    }

    filteredVideos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <div class="video-wrapper">
                <iframe src="${video.url}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="video-info">
                <div class="video-category">${video.category}</div>
                <h4>${video.title}</h4>
                <p>${video.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}
   EDIT YOUR VIDEOS IN THE videos ARRAY BELOW.
   ===================================================== */

/* ---------------- STUDENT INFORMATION ---------------- */

const students = [
    {
        id: "muhammad",
        name: "Muhammad",
        type: "Quran Student",
        level: "29th Para",
        current: "Surah Al-Qadr",
        next: "Memorize Surah Al-Qadr",
        rating: 4,
        description: "Quran reading and Hifz progress",
        teacherReview: "Muhammad did not memorize Surah Al-Feel on time. Please take Hifz practice seriously and make sure he revises regularly at home so he stays on schedule.",
        completedSurahs: [
            "Surah Al-Fatiha",
            "Surah An-Naas",
            "Surah Al-Falaq",
            "Surah An-Nasr",
            "Surah Al-Lahab",
            "Surah Al-Kausar",
            "Surah Al-Feel"
        ]
    },
    {
        id: "nusaiba",
        name: "Nusaiba",
        type: "Quran Student",
        level: "17th Para",
        current: "Surah Al-Qadr",
        next: "Memorize Surah Al-Qadr",
        rating: 4,
        description: "Quran reading and Hifz progress",
        teacherReview: "Nusaiba did not memorize Surah Al-Feel on time. Please take Hifz practice seriously and make sure she revises regularly at home so she stays on schedule.",
        completedSurahs: [
            "Surah Al-Fatiha",
            "Surah An-Naas",
            "Surah Al-Falaq",
            "Surah An-Nasr",
            "Surah Al-Lahab",
            "Surah Al-Kausar",
            "Surah Al-Feel"
        ]
    },
    {
        id: "ibrahim",
        name: "Ibrahim",
        type: "Junior - Amma Para",
        level: "Amma Para",
        current: "Surah Al-Kawthar",
        next: "Continue practising Surah Al-Kawthar",
        rating: 4,
        weeklyRating: 4,
        description: "Junior Quran reading progress",
        notice: "Indiscipline in class",
        teacherReview: "Ibrahim needs to show better discipline in Quran class and give more attention to his home lesson. Please help him practise regularly at home and follow classroom instructions.",
        weeklyComment: "Ibrahim should be more disciplined during Quran class and focus carefully on his home lesson. Please practise Surah Al-Kawthar together at home before the next session.",
        weeklyHistory: [
            { week: "This Week", rating: 4 },
            { week: "Previous Week", rating: 4 },
            { week: "2 Weeks Ago", rating: 3 }
        ]
    },
    {
        id: "mustafa",
        name: "Mustafa",
        type: "Junior - Noorani Qaida",
        level: "Takhti 13",
        current: "Takhti 13",
        next: "Takhti 14",
        rating: 4,
        weeklyRating: 4,
        description: "Junior Noorani Qaida progress",
        notice: "Indiscipline in class",
        teacherReview: "Mustafa needs to show better discipline in Quran class and give more attention to his home lesson. Please help him follow classroom instructions and practise Takhti 13 regularly at home.",
        weeklyComment: "Mustafa should be more disciplined during Quran class and focus carefully on his home lesson. Please practise Takhti 13 together at home before the next session.",
        weeklyHistory: [
            { week: "This Week", rating: 4 },
            { week: "Previous Week", rating: 4 },
            { week: "2 Weeks Ago", rating: 3 }
        ]
    }
];

/* ---------------- VIDEO LIBRARY ----------------
   Add, edit, or remove video objects in this array.

   category must be one of:
   "Surah Recitation"
   "Sahabah Stories"
   "Islamic Lessons"
   ------------------------------------------------ */

const videos = [
    {
        id: 1,
        title: "Surah Recitation",
        category: "Surah Recitation",
        description: "Surah Al-QADR recitation to help with pronunciation.",
        url: "https://youtu.be/3RLNnB4-0aQ?si=bwzYy01HzzMvQbLg"
    },
    {
        id: 2,
        title: "Stories of the Sahabah (RA)",
        category: "Sahabah Stories",
        description: "Watch this and get ready for the quiz that may be held next week for Nusaiba and Muhammad.",
        url: "https://youtu.be/ZSLMniXcFuk?si=S3tlz9RJ_-kZ-kUc"
    },
    {
        id: 3,
        title: "Islamic Lessons for Students",
        category: "Islamic Lessons",
        description: "A must-watch video.",
        url: "https://youtu.be/_NxLoGB0fXw?si=CfqqwuNxr8Twjv9e"
    }
];

/* ---------------- GET HTML ELEMENTS ---------------- */

const studentGrid = document.getElementById("student-grid");
const reportSection = document.getElementById("report-section");
const backButton = document.getElementById("back-button");
const homeLink = document.getElementById("home-link");

const studentCount = document.getElementById("student-count");
const currentDate = document.getElementById("current-date");

const reportAvatar = document.getElementById("report-avatar");
const reportName = document.getElementById("report-name");
const reportType = document.getElementById("report-type");
const reportDescription = document.getElementById("report-description");
const reportLevel = document.getElementById("report-level");

const currentLearning = document.getElementById("current-learning");
const currentDetail = document.getElementById("current-detail");
const nextLearning = document.getElementById("next-learning");
const nextDetail = document.getElementById("next-detail");

const hifzSection = document.getElementById("hifz-section");
const weeklySection = document.getElementById("weekly-section");
const surahList = document.getElementById("surah-list");
const completionCount = document.getElementById("completion-count");

const weeklyScore = document.getElementById("weekly-score");
const weeklyStarsNumber = document.getElementById("weekly-stars-number");
const weeklyRating = document.getElementById("weekly-rating");
const weeklyComment = document.getElementById("weekly-comment");
const weeklyProgressFill = document.getElementById("weekly-progress-fill");
const weeklyHistoryList = document.getElementById("weekly-history-list");

const ratingStars = document.getElementById("rating-stars");
const teacherReview = document.getElementById("teacher-review");
const lastUpdated = document.getElementById("last-updated");

const videoGrid = document.getElementById("video-grid");
const videoSearch = document.getElementById("video-search");
const categoryFilters = document.getElementById("category-filters");
const videoPlayer = document.getElementById("video-player");
const featuredTitle = document.getElementById("featured-title");
const featuredDescription = document.getElementById("featured-description");
const featuredPlaceholder = document.querySelector(".featured-placeholder");
const emptyVideos = document.getElementById("empty-videos");

/* ---------------- GENERAL HELPERS ---------------- */

function getStars(number) {
    let result = "";

    for (let i = 1; i <= 5; i++) {
        result += i <= number ? "★" : "☆";
    }

    return result;
}

function getStarsMarkup(number) {
    let markup = "";

    for (let i = 1; i <= 5; i++) {
        let starClass = "star-icon is-empty";

        if (number >= i) {
            starClass = "star-icon is-full";
        } else if (number >= i - 0.5) {
            starClass = "star-icon is-half";
        }

        markup += '<span class="' + starClass + '" aria-hidden="true">★</span>';
    }

    return markup;
}

function formatRating(number) {
    return Number.isInteger(number) ? String(number) : number.toFixed(1);
}

function getInitial(name) {
    return name.charAt(0).toUpperCase();
}

function getRatingText(number) {
    if (number >= 4.5) return "Excellent";
    if (number >= 3.5) return "Very Good";
    if (number >= 3) return "Good";
    if (number >= 2) return "Needs More Practice";

    return "Needs Improvement";
}

function setDate() {
    currentDate.textContent = new Date().toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}

/* ---------------- STUDENT CARDS ---------------- */

function createStudentCards() {
    studentGrid.innerHTML = "";

    students.forEach(function(student, index) {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "student-card";
        card.style.animationDelay = (index * 80) + "ms";
        card.setAttribute(
            "aria-label",
            "Open " + student.name + "'s progress report"
        );

        card.innerHTML =
            '<div class="student-avatar">' + getInitial(student.name) + '</div>' +
            '<h3 class="student-name">' + student.name + '</h3>' +
            '<span class="student-type">' + student.type + '</span>';

        if (student.notice) {
            const notice = document.createElement("span");
            notice.className = "student-warning";
            notice.innerHTML =
                '<span class="warning-symbol" aria-hidden="true">!</span>';

            notice.appendChild(document.createTextNode(student.notice));
            card.appendChild(notice);
        }

        const current = document.createElement("div");
        current.className = "student-current";
        current.innerHTML = '<span>Currently</span><strong></strong>';
        current.querySelector("strong").textContent = student.current;
        card.appendChild(current);

        const rating = document.createElement("div");
        rating.className = "student-rating";
        rating.setAttribute(
            "aria-label",
            formatRating(student.rating) + " out of 5 stars"
        );

        rating.innerHTML =
            getStarsMarkup(student.rating) +
            '<span class="rating-value">' +
            formatRating(student.rating) +
            '/5</span>';

        card.appendChild(rating);

        card.addEventListener("click", function() {
            showStudent(student);
        });

        studentGrid.appendChild(card);
    });

    studentCount.textContent = students.length;
}

/* ---------------- STUDENT REPORTS ---------------- */

function showStudent(student) {
    document.querySelector(".welcome-section").style.display = "none";
    document.querySelector(".students-section").style.display = "none";

    reportSection.classList.add("active");
    reportSection.setAttribute("aria-hidden", "false");

    reportAvatar.textContent = getInitial(student.name);
    reportName.textContent = student.name;
    reportType.textContent = student.type;
    reportDescription.textContent = student.description;
    reportLevel.textContent = student.level;

    currentLearning.textContent = student.current;

    currentDetail.textContent =
        student.id === "muhammad" || student.id === "nusaiba"
            ? "New Hifz target: practise and revise " +
              student.current +
              " regularly at home."
            : "Currently learning and practising this lesson.";

    nextLearning.textContent = student.next;
    nextDetail.textContent = "The next step in the learning journey.";

    teacherReview.textContent = student.teacherReview;

    lastUpdated.textContent = new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    ratingStars.innerHTML =
        getStarsMarkup(student.rating) +
        '<span class="rating-value">' +
        formatRating(student.rating) +
        '/5</span>';

    ratingStars.setAttribute(
        "aria-label",
        formatRating(student.rating) + " out of 5 stars"
    );

    if (student.completedSurahs) {
        showQuranProgress(student);
    } else {
        showJuniorProgress(student);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showQuranProgress(student) {
    hifzSection.hidden = false;
    hifzSection.style.display = "block";
    weeklySection.hidden = true;

    surahList.innerHTML = "";
    completionCount.textContent =
        student.completedSurahs.length + " completed";

    student.completedSurahs.forEach(function(surah) {
        const item = document.createElement("div");
        item.className = "surah-item completed";
        item.innerHTML = '<div class="surah-number">✓</div><span></span>';
        item.querySelector("span").textContent = surah;
        surahList.appendChild(item);
    });

    const current = document.createElement("div");
    current.className = "surah-item current";
    current.innerHTML = '<div class="surah-number">→</div><span></span>';
    current.querySelector("span").textContent =
        student.current + " — not memorized yet";

    surahList.appendChild(current);
}

function showJuniorProgress(student) {
    hifzSection.hidden = true;
    hifzSection.style.display = "none";
    weeklySection.hidden = false;

    const rating = student.weeklyRating;

    weeklyScore.innerHTML = getStarsMarkup(rating);
    weeklyStarsNumber.textContent = formatRating(rating);
    weeklyRating.textContent = getRatingText(rating);
    weeklyComment.textContent = student.weeklyComment;
    weeklyProgressFill.style.width = (rating * 20) + "%";

    weeklyHistoryList.innerHTML = "";

    student.weeklyHistory.forEach(function(item) {
        const history = document.createElement("div");
        history.className = "history-item";

        const week = document.createElement("span");
        week.className = "history-week";
        week.textContent = item.week;

        const stars = document.createElement("span");
        stars.className = "history-stars";
        stars.textContent = getStars(item.rating);
        stars.setAttribute(
            "aria-label",
            item.rating + " out of 5 stars"
        );

        history.appendChild(week);
        history.appendChild(stars);
        weeklyHistoryList.appendChild(history);
    });
}

function showStudentList() {
    reportSection.classList.remove("active");
    reportSection.setAttribute("aria-hidden", "true");

    document.querySelector(".welcome-section").style.display = "";
    document.querySelector(".students-section").style.display = "";

    window.scrollTo({ top: 0, behavior: "smooth" });
}

backButton.addEventListener("click", showStudentList);

homeLink.addEventListener("click", function(event) {
    event.preventDefault();
    showStudentList();
});

/* ---------------- YOUTUBE VIDEO LIBRARY ---------------- */

const videoCategories = [
    "All Videos",
    "Surah Recitation",
    "Sahabah Stories",
    "Islamic Lessons"
];

let activeCategory = "All Videos";
let activeVideoId = null;

function getYouTubeId(url) {
    if (!url || typeof url !== "string") return "";

    const trimmedUrl = url.trim();

    if (!trimmedUrl || trimmedUrl === "PASTE_YOUTUBE_URL_HERE") {
        return "";
    }

    try {
        const parsedUrl = new URL(trimmedUrl);
        const hostname = parsedUrl.hostname.toLowerCase();
        let videoId = "";

        if (hostname === "youtu.be" || hostname.endsWith(".youtu.be")) {
            videoId =
                parsedUrl.pathname.split("/").filter(Boolean)[0] || "";
        } else if (
            hostname === "youtube.com" ||
            hostname.endsWith(".youtube.com") ||
            hostname === "youtube-nocookie.com" ||
            hostname.endsWith(".youtube-nocookie.com")
        ) {
            if (parsedUrl.pathname === "/watch") {
                videoId = parsedUrl.searchParams.get("v") || "";
            } else {
                const parts = parsedUrl.pathname.split("/").filter(Boolean);

                if (
                    parts.length >= 2 &&
                    ["embed", "shorts", "live", "v"].includes(parts[0])
                ) {
                    videoId = parts[1];
                }
            }
        }

        return /^[a-zA-Z0-9_-]{11}$/.test(videoId) ? videoId : "";
    } catch (error) {
        return "";
    }
}

function renderCategoryFilters() {
    categoryFilters.innerHTML = "";

    videoCategories.forEach(function(category) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "category-button";

        if (category === activeCategory) {
            button.classList.add("active");
        }

        button.textContent = category;

        button.addEventListener("click", function() {
            activeCategory = category;
            renderCategoryFilters();
            renderVideos();
        });

        categoryFilters.appendChild(button);
    });
}

function renderVideos() {
    videoGrid.innerHTML = "";

    const searchTerm = videoSearch.value.trim().toLowerCase();

    const filteredVideos = videos.filter(function(video) {
        const matchesCategory =
            activeCategory === "All Videos" ||
            video.category === activeCategory;

        const searchableText = (
            video.title + " " +
            video.category + " " +
            video.description
        ).toLowerCase();

        return matchesCategory && searchableText.includes(searchTerm);
    });

    filteredVideos.forEach(function(video) {
        const card = document.createElement("article");
        card.className = "video-card";

        if (video.id === activeVideoId) {
            card.classList.add("selected");
        }

        const thumbnail = document.createElement("div");
        thumbnail.className = "video-thumbnail";
        thumbnail.setAttribute("role", "button");
        thumbnail.setAttribute("tabindex", "0");
        thumbnail.setAttribute("aria-label", "Play " + video.title);
        thumbnail.style.cursor = "pointer";

        const playIcon = document.createElement("span");
        playIcon.className = "thumbnail-icon";
        playIcon.textContent = "▶";

        const categoryLabel = document.createElement("span");
        categoryLabel.className = "video-category-label";
        categoryLabel.textContent = video.category.toUpperCase();

        thumbnail.appendChild(playIcon);
        thumbnail.appendChild(categoryLabel);

        const body = document.createElement("div");
        body.className = "video-card-body";

        const title = document.createElement("h3");
        title.textContent = video.title;

        const description = document.createElement("p");
        description.textContent = video.description;

        const footer = document.createElement("div");
        footer.className = "video-card-footer";

        const tag = document.createElement("span");
        tag.className = "video-category-tag";
        tag.textContent = video.category;

        const watchButton = document.createElement("button");
        watchButton.type = "button";
        watchButton.className = "watch-button";
        watchButton.textContent = "Watch video ▶";

        watchButton.addEventListener("click", function() {
            playVideo(video);
        });

        thumbnail.addEventListener("click", function() {
            playVideo(video);
        });

        thumbnail.addEventListener("keydown", function(event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                playVideo(video);
            }
        });

        footer.appendChild(tag);
        footer.appendChild(watchButton);

        body.appendChild(title);
        body.appendChild(description);
        body.appendChild(footer);

        card.appendChild(thumbnail);
        card.appendChild(body);

        videoGrid.appendChild(card);
    });

    emptyVideos.hidden = filteredVideos.length > 0;
}

function playVideo(video) {
    const youtubeId = getYouTubeId(video.url);

    if (!youtubeId) {
        featuredTitle.textContent = video.title;
        featuredDescription.textContent =
            "This video needs a valid YouTube URL. Edit the videos list in app.js and add its link.";

        featuredPlaceholder.hidden = false;
        videoPlayer.hidden = true;
        videoPlayer.innerHTML = "";

        return;
    }

    activeVideoId = video.id;
    featuredTitle.textContent = video.title;
    featuredDescription.textContent =
        video.category + " · Selected by your teacher";

    featuredPlaceholder.hidden = true;
    videoPlayer.hidden = false;
    videoPlayer.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.src =
        "https://www.youtube-nocookie.com/embed/" + youtubeId + "?rel=0";
    iframe.title = video.title;
    iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.loading = "lazy";

    videoPlayer.appendChild(iframe);

    renderVideos();

    document.getElementById("featured-video").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/* ---------------- START WEBSITE ---------------- */

videoSearch.addEventListener("input", renderVideos);

setDate();
createStudentCards();
renderCategoryFilters();
renderVideos();
