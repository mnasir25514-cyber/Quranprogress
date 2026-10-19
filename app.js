/* =====================================================
   QURAN LEARNING WEBSITE
   Student Reports + Islamic YouTube Learning Library
   Edit your student details and video links in this file.
   ===================================================== */

/* ---------------- STUDENT INFORMATION ---------------- */

const students = [
    {
        id: "muhammad",
        name: "Muhammad",
        type: "Quran Student",
        level: "29th Para",
        current: "Surah Al-Feel",
        next: "Continue Surah Al-Feel",
        rating: 4.5,
        description: "Quran reading and Hifz progress",
        notice: "Surah Al-Feel has not been memorized yet.",
        teacherReview:
            "MashaAllah! Muhammad is making good progress with the Quran. He is currently working on Surah Al-Feel. Regular revision and practice will help strengthen his memorization.",
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
        rating: 3.5,
        description: "Quran reading and Hifz progress",
        notice: "Surah Al-Feel has not been memorized yet.",
        teacherReview:
            "Nusaiba is continuing her Quran learning and should keep practising Surah Al-Feel. Regular revision at home will help improve her confidence and strengthen memorization.",
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
        rating: 5,
        weeklyRating: 5,
        description: "Junior Quran reading progress",
        teacherReview:
            "Ibrahim needs to improve his reading fluency and pronunciation. Please help him practise reading the Surahs at home before Quran sessions. Regular practice will help him read more confidently.",
        weeklyComment:
            "Needs improvement in reading. Please practise the current Surah at home before each Quran session, focusing on clear pronunciation and steady reading.",
        weeklyHistory: [
            { week: "This Week", rating: 5 },
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
        rating: 5,
        weeklyRating: 5,
        description: "Junior Noorani Qaida progress",
        teacherReview:
            "Excellent progress, Mustafa! MashaAllah, he is doing very well in Noorani Qaida and has reached Takhti 13. Keep up the excellent effort and continue practising the lesson at home before each Quran session.",
        weeklyComment:
            "Excellent effort this week! Keep practising Takhti 13 carefully and read the lesson at home before the next Quran session.",
        weeklyHistory: [
            { week: "This Week", rating: 5 },
            { week: "Previous Week", rating: 4 },
            { week: "2 Weeks Ago", rating: 3 }
        ]
    }
];


/* ---------------- YOUTUBE VIDEO LIBRARY ----------------
   Edit these video entries whenever you want.

   Allowed categories:
   "Surah Recitation"
   "Sahabah Stories"
   "Islamic Lessons"
   ------------------------------------------------------- */

const videos = [
    {
        id: 1,
        title: "Surah Recitation",
        category: "Surah Recitation",
        description: "Surah Al-Feel recitation to help with pronunciation.",
        url: "https://youtu.be/DoBVa94v3pI?si=0dkuDGzpNd8-9HUh"
    },
    {
        id: 2,
        title: "Stories of the Sahabah (RA)",
        category: "Sahabah Stories",
        description: "Watch this and prepare for the quiz that may be held next week for Nusaiba and Muhammad.",
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

function getInitial(name) {
    return name.charAt(0).toUpperCase();
}

function formatRating(number) {
    return Number.isInteger(number) ? String(number) : number.toFixed(1);
}

function getRatingText(number) {
    if (number >= 4.5) return "Excellent";
    if (number >= 3.5) return "Very Good";
    if (number >= 3) return "Good";
    if (number >= 2) return "Needs More Practice";
    return "Needs Improvement";
}

/* Displays full, half, and empty stars correctly. */
function getStarsMarkup(number) {
    let markup = "";

    for (let i = 1; i <= 5; i++) {
        let starClass = "star-icon is-empty";

        if (number >= i) {
            starClass = "star-icon is-full";
        } else if (number >= i - 0.5) {
            starClass = "star-icon is-half";
        }

        markup +=
            '<span class="' + starClass + '" aria-hidden="true">★</span>';
    }

    return markup;
}

function getStars(number) {
    return "★".repeat(Math.floor(number)) +
        (number % 1 ? "⯪" : "") +
        "☆".repeat(5 - Math.ceil(number));
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
            '<div class="student-avatar">' +
                getInitial(student.name) +
            '</div>' +
            '<h3 class="student-name">' +
                student.name +
            '</h3>' +
            '<span class="student-type">' +
                student.type +
            '</span>';

        if (student.notice) {
            const notice = document.createElement("span");
            notice.className = "student-warning";

            const symbol = document.createElement("span");
            symbol.className = "warning-symbol";
            symbol.setAttribute("aria-hidden", "true");
            symbol.textContent = "!";

            notice.appendChild(symbol);
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
                formatRating(student.rating) + '/5' +
            '</span>';

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
            ? "Continue practising Surah Al-Feel before marking it as memorized."
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
            formatRating(student.rating) + '/5' +
        '</span>';

    ratingStars.setAttribute(
        "aria-label",
        formatRating(student.rating) + " out of 5 stars"
    );

    if (student.notice) {
        currentDetail.classList.add("warning-detail");
        currentDetail.textContent = student.notice;
    } else {
        currentDetail.classList.remove("warning-detail");
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
        stars.innerHTML = getStarsMarkup(item.rating);
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

        if (
            hostname === "youtu.be" ||
            hostname.endsWith(".youtu.be")
        ) {
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
                const parts =
                    parsedUrl.pathname.split("/").filter(Boolean);

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
            "Please add a valid YouTube URL to this video in app.js.";

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
