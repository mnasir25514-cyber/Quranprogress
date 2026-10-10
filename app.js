
/* =====================================================
   QURAN LEARNING WEBSITE
   Student reports + Islamic YouTube Learning Library

   EDIT YOUR VIDEOS IN THE videos ARRAY BELOW.
   ===================================================== */


/* ---------------- STUDENT INFORMATION ---------------- */

const students = [
    {
        id: "muhammad",
        name: "Muhammad",
        type: "Quran Student",
        level: "28th Para",
        current: "Surah Al-Feel",
        next: "Continue Surah Al-Feel",
        rating: 5,
        description: "Quran reading and Hifz progress",
        teacherReview: "MashaAllah! Muhammad is making good progress with the Quran. Keep revising the learned Surahs regularly.",
        completedSurahs: [
            "Surah Al-Fatiha",
            "Surah An-Naas",
            "Surah Al-Falaq",
            "Surah An-Nasr",
            "Surah Al-Lahab",
            "Surah Al-Kausar"
        ]
    },
    {
        id: "nusaiba",
        name: "Nusaiba",
        type: "Quran Student",
        level: "16th Para",
        current: "Surah Al-Feel",
        next: "Continue Surah Al-Feel",
        rating: 5,
        description: "Quran reading and Hifz progress",
        teacherReview: "MashaAllah! Nusaiba is progressing nicely with her Quran learning. Regular revision will help strengthen the Surahs already learned.",
        completedSurahs: [
            "Surah Al-Fatiha",
            "Surah An-Naas",
            "Surah Al-Falaq",
            "Surah An-Nasr",
            "Surah Al-Lahab",
            "Surah Al-Kausar"
        ]
    },
    {
        id: "ibrahim",
        name: "Ibrahim",
        type: "Junior - Amma Para",
        level: "Amma Para",
        current: "Surah Al-Lahab",
        next: "Continue Surah Al-Lahab",
        rating: 4,
        weeklyRating: 4,
        description: "Junior Quran reading progress",
        teacherReview: "Ibrahim is doing well. He is currently working on Surah Al-Lahab. With regular practice, his reading will continue to improve.",
        weeklyComment: "Very good effort this week. Keep practicing the current Surah.",
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
        teacherReview: "Mustafa is making good progress in Noorani Qaida. He is currently on Takhti 13.",
        weeklyComment: "Good progress this week. Keep practicing Takhti 13 carefully.",
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

   Replace the example URL with a real YouTube URL.
   ------------------------------------------------ */

const videos = [<iframe width="560" height="315" src="https://www.youtube.com/embed/DoBVa94v3pI?si=6fetI2_TlwOA_8tH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    {
        id: 1,
        title: "Surah Recitation",
        category: "Surah Recitation",
        description: "Add your selected Surah recitation video here.",
        url: "PASTE_YOUTUBE_URL_HERE"
    },
    {
        id: 2,
        title: "Stories of the Sahabah (RA)",
        category: "Sahabah Stories",
        description: "Add a teacher-selected story about the Sahabah (RA).",
        url: "PASTE_YOUTUBE_URL_HERE"
    },
    {
        id: 3,
        title: "Islamic Lessons for Students",
        category: "Islamic Lessons",
        description: "Add an Islamic lesson for your students to watch.",
        url: "PASTE_YOUTUBE_URL_HERE"
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

function getInitial(name) {
    return name.charAt(0).toUpperCase();
}

function getRatingText(number) {
    if (number === 5) return "Excellent";
    if (number === 4) return "Very Good";
    if (number === 3) return "Good";
    if (number === 2) return "Needs More Practice";
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

        card.innerHTML =
            '<div class="student-avatar">' +
                getInitial(student.name) +
            '</div>' +
            '<h3 class="student-name">' +
                student.name +
            '</h3>' +
            '<span class="student-type">' +
                student.type +
            '</span>' +
            '<div class="student-current">' +
                '<span>Currently</span>' +
                '<strong>' + student.current + '</strong>' +
            '</div>' +
            '<div class="student-rating" aria-label="' +
                student.rating + ' out of 5 stars">' +
                getStars(student.rating) +
            '</div>';

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
    currentDetail.textContent = "Currently learning and practicing this lesson.";

    nextLearning.textContent = student.next;
    nextDetail.textContent = "The next step in the learning journey.";

    teacherReview.textContent = student.teacherReview;
    lastUpdated.textContent = new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    ratingStars.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");

        star.className = "star";
        star.textContent = i <= student.rating ? "★" : "☆";

        ratingStars.appendChild(star);
    }

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
    completionCount.textContent = student.completedSurahs.length + " completed";

    student.completedSurahs.forEach(function(surah) {
        const item = document.createElement("div");

        item.className = "surah-item completed";
        item.innerHTML =
            '<div class="surah-number">✓</div>' +
            '<span></span>';

        item.querySelector("span").textContent = surah;
        surahList.appendChild(item);
    });

    const current = document.createElement("div");

    current.className = "surah-item current";
    current.innerHTML =
        '<div class="surah-number">→</div>' +
        '<span></span>';

    current.querySelector("span").textContent = student.current;
    surahList.appendChild(current);
}

function showJuniorProgress(student) {
    hifzSection.hidden = true;
    weeklySection.hidden = false;

    const rating = student.weeklyRating;

    weeklyScore.textContent = getStars(rating);
    weeklyStarsNumber.textContent = rating;
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


/*
   Accepts common YouTube links:
   youtube.com/watch?v=VIDEO_ID
   youtu.be/VIDEO_ID
   youtube.com/embed/VIDEO_ID
   youtube.com/shorts/VIDEO_ID
*/

function getYouTubeId(url) {
    if (!url || typeof url !== "string") {
        return "";
    }

    const trimmedUrl = url.trim();

    if (!trimmedUrl ||
        trimmedUrl === "PASTE_YOUTUBE_URL_HERE") {
        return "";
    }

    try {
        const parsedUrl = new URL(trimmedUrl);
        const hostname = parsedUrl.hostname.toLowerCase();
        let videoId = "";

        if (hostname === "youtu.be" || hostname.endsWith(".youtu.be")) {
            videoId = parsedUrl.pathname.split("/").filter(Boolean)[0] || "";
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

        if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
            return "";
        }

        return videoId;
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

        const searchableText =
            (video.title + " " + video.category + " " +
            video.description).toLowerCase();

        const matchesSearch = searchableText.includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    filteredVideos.forEach(function(video) {
        const card = document.createElement("article");
        card.className = "video-card";

        if (video.id === activeVideoId) {
            card.classList.add("selected");
        }

        const thumbnail = document.createElement("div");
        thumbnail.className = "video-thumbnail";

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

        thumbnail.style.cursor = "pointer";
        thumbnail.setAttribute("role", "button");
        thumbnail.setAttribute("tabindex", "0");
        thumbnail.setAttribute("aria-label", "Play " + video.title);

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
    featuredDescription.textContent = video.category + " · Selected by your teacher";

    featuredPlaceholder.hidden = true;
    videoPlayer.hidden = false;

    videoPlayer.innerHTML = "";

    const iframe = document.createElement("iframe");

    iframe.src =
        "https://www.youtube-nocookie.com/embed/" +
        youtubeId +
        "?rel=0";

    iframe.title = video.title;
    iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";

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
