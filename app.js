
/* ==========================================================
   QURAN LEARNING — STUDENT PROGRESS PORTAL
   Edit the students and videos arrays to update the website.
   ========================================================== */

/* ---------------- STUDENT DATA ---------------- */

const students = [
    {
        id: "muhammad",
        name: "Muhammad",
        type: "Quran Student",
        level: "30th Para",
        current: "30th Para",
        currentDetail: "Continuing Quran study in the 30th Para.",
        next: "Surah Al-Qadr",
        nextDetail: "Next Hifz target — practise and revise Surah Al-Qadr regularly.",
        rating: 4.5,
        featuredStar: true,
        description: "Quran reading, revision, and Hifz progress.",
        teacherReview: "MashaAllah, Muhammad is making pleasing progress in his Quran journey. He has continued building his memorization and is moving forward in the 30th Para. Keep up the regular revision at home, listen carefully during recitation, and approach the next Hifz target, Surah Al-Qadr, with confidence and consistency.",
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
        current: "17th Para",
        currentDetail: "Continuing Quran study in the 17th Para.",
        next: "Surah Al-Qadr",
        nextDetail: "Next Hifz target — practise and revise Surah Al-Qadr regularly.",
        rating: 4,
        featuredStar: true,
        description: "Quran reading, revision, and Hifz progress.",
        teacherReview: "MashaAllah, Nusaiba has shown encouraging effort and has added another Surah to her memorization. Her Hifz list now includes Surah At-Takathur as well. She should continue revising her completed Surahs with care and prepare steadily for the next target, Surah Al-Qadr. Keep up the good work.",
        completedSurahs: [
            "Surah Al-Fatiha",
            "Surah An-Naas",
            "Surah Al-Falaq",
            "Surah An-Nasr",
            "Surah Al-Lahab",
            "Surah Al-Kausar",
            "Surah Al-Feel",
            "Surah At-Takathur"
        ]
    },
    {
        id: "ibrahim",
        name: "Ibrahim",
        type: "Junior · Amma Para",
        level: "Amma Para",
        current: "Surah Al-Quraish",
        currentDetail: "Currently reading and practising Surah Al-Quraish.",
        next: "Continue Surah Al-Quraish",
        nextDetail: "Focus on clear pronunciation, steady reading, and regular home practice.",
        rating: 4,
        weeklyRating: 4,
        description: "Junior Quran reading and weekly learning progress.",
        notice: "Indiscipline in class",
        teacherReview: "Ibrahim is making progress in his Amma Para lessons and has moved on to Surah Al-Quraish. He can do even better by listening carefully, following class instructions, and giving his home lesson a little focused practice each day. With steady effort and good classroom manners, he can achieve excellent progress.",
        weeklyComment: "Good effort this week. Ibrahim should continue working on Surah Al-Quraish, listen attentively during the lesson, and practise his home lesson regularly. Improving classroom discipline will help him make the most of every session.",
        weeklyHistory: [
            { week: "This week", rating: 4 },
            { week: "Previous week", rating: 4 },
            { week: "Two weeks ago", rating: 3 }
        ]
    },
    {
        id: "mustafa",
        name: "Mustafa",
        type: "Junior · Noorani Qaida",
        level: "Takhti 13",
        current: "Takhti 13",
        currentDetail: "Continuing practice on Takhti 13.",
        next: "Takhti 14",
        nextDetail: "The next step is to complete the current Takhti confidently and move ahead.",
        rating: 5,
        weeklyRating: 5,
        description: "Junior Noorani Qaida and weekly learning progress.",
        notice: "Indiscipline in class",
        teacherReview: "MashaAllah, Mustafa has shown very good ability in his Noorani Qaida work and has earned an excellent rating this week. He should keep the same enthusiasm while also listening carefully, following classroom instructions, and practising Takhti 13 at home. Consistent focus will make his progress even stronger.",
        weeklyComment: "Excellent learning effort this week. Mustafa should maintain his good work, show discipline throughout the Quran class, and give a little time to his home lesson each day. Keep moving forward with confidence.",
        weeklyHistory: [
            { week: "This week", rating: 5 },
            { week: "Previous week", rating: 4 },
            { week: "Two weeks ago", rating: 3 }
        ]
    }
];

/* ---------------- YOUTUBE VIDEO LIBRARY ----------------
   To add a video, copy one object and change its details.
   Available categories:
   Surah Recitation | Sahabah Stories | Islamic Lessons
   ------------------------------------------------------ */

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
        description: "Watch this and get ready for the quiz that may be held next week for Nusaiba and Muhammad.",
        url: "https://youtu.be/ZSLMniXcFuk?si=S3tlz9RJ_-kZ-kUc"
    },
    {
        id: 3,
        title: "Islamic Lessons for Students",
        category: "Islamic Lessons",
        description: "A must-watch video for our students.",
        url: "https://youtu.be/_NxLoGB0fXw?si=CfqqwuNxr8Twjv9e"
    }
];

/* ---------------- ELEMENT REFERENCES ---------------- */

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const studentGrid = $("#student-grid");
const reportSection = $("#report-section");
const backButton = $("#back-button");
const studentCount = $("#student-count");
const currentDate = $("#current-date");

const reportAvatar = $("#report-avatar");
const reportName = $("#report-name");
const reportType = $("#report-type");
const reportLevel = $("#report-level-value");
const reportDescription = $("#report-description");
const currentLearning = $("#current-learning");
const currentDetail = $("#current-detail");
const nextLearning = $("#next-learning");
const nextDetail = $("#next-detail");

const hifzSection = $("#hifz-section");
const weeklySection = $("#weekly-section");
const surahList = $("#surah-list");
const completionCount = $("#completion-count");
const weeklyScore = $("#weekly-score");
const weeklyStarsNumber = $("#weekly-stars-number");
const weeklyRating = $("#weekly-rating");
const weeklyComment = $("#weekly-comment");
const weeklyProgressFill = $("#weekly-progress-fill");
const weeklyHistoryList = $("#weekly-history-list");
const ratingStars = $("#rating-stars");
const teacherReview = $("#teacher-review");
const lastUpdated = $("#last-updated");

const videoGrid = $("#video-grid");
const videoSearch = $("#video-search");
const categoryFilters = $("#category-filters");
const videoPlayer = $("#video-player");
const featuredTitle = $("#featured-title");
const featuredDescription = $("#featured-description");
const featuredPlaceholder = $("#featured-placeholder");
const emptyVideos = $("#empty-videos");

/* ---------------- DISPLAY HELPERS ---------------- */

function getInitial(name) {
    return name.trim().charAt(0).toUpperCase();
}

function formatRating(rating) {
    return Number.isInteger(rating) ? String(rating) : rating.toFixed(1);
}

function getRatingLabel(rating) {
    if (rating >= 5) return "Outstanding";
    if (rating >= 4.5) return "Excellent";
    if (rating >= 4) return "Very good";
    if (rating >= 3) return "Good effort";
    return "Keep practising";
}

function makeStars(rating, extraClass = "") {
    let html = `<span class="star-set ${extraClass}" aria-hidden="true">`;

    for (let index = 1; index <= 5; index++) {
        let className = "star-icon is-empty";
        if (rating >= index) className = "star-icon is-full";
        else if (rating >= index - 0.5) className = "star-icon is-half";
        html += `<span class="${className}">★</span>`;
    }

    html += `</span>`;
    return html;
}

function updateDate() {
    currentDate.textContent = new Date().toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}

/* ---------------- STUDENT CARDS ---------------- */

function renderStudentCards() {
    studentGrid.innerHTML = "";

    students.forEach((student, index) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "student-card";
        card.style.animationDelay = `${index * 80}ms`;
        card.setAttribute("aria-label", `Open ${student.name}'s progress report`);

        const top = document.createElement("div");
        top.className = "student-card-top";

        const avatar = document.createElement("span");
        avatar.className = "student-avatar";
        avatar.textContent = getInitial(student.name);

        const studentInfo = document.createElement("span");
        studentInfo.className = "student-info";

        const nameLine = document.createElement("span");
        nameLine.className = "student-name-line";

        const name = document.createElement("strong");
        name.className = "student-name";
        name.textContent = student.name;
        nameLine.appendChild(name);

        if (student.featuredStar) {
            const rgbStar = document.createElement("span");
            rgbStar.className = "rgb-star";
            rgbStar.textContent = "★";
            rgbStar.setAttribute("aria-label", "Featured student");
            rgbStar.title = "Featured student";
            nameLine.appendChild(rgbStar);
        }

        const type = document.createElement("span");
        type.className = "student-type";
        type.textContent = student.type;

        studentInfo.append(nameLine, type);
        top.append(avatar, studentInfo);
        card.appendChild(top);

        if (student.notice) {
            const warning = document.createElement("span");
            warning.className = "student-warning";
            warning.innerHTML = `<span class="warning-mark" aria-hidden="true">!</span>`;
            warning.appendChild(document.createTextNode(student.notice));
            card.appendChild(warning);
        }

        const progress = document.createElement("span");
        progress.className = "student-progress-preview";
        progress.innerHTML = `<span class="preview-label">CURRENT PROGRESS</span><strong></strong>`;
        $("strong", progress).textContent = student.current;
        card.appendChild(progress);

        const footer = document.createElement("span");
        footer.className = "student-card-footer";
        footer.innerHTML = `${makeStars(student.rating)}<span class="rating-value">${formatRating(student.rating)} / 5</span>`;
        card.appendChild(footer);

        card.addEventListener("click", () => showStudentReport(student));
        studentGrid.appendChild(card);
    });

    studentCount.textContent = String(students.length).padStart(2, "0");
}

/* ---------------- STUDENT REPORTS ---------------- */

function showStudentReport(student) {
    $(".hero-section").hidden = true;
    $(".students-section").hidden = true;
    reportSection.hidden = false;
    reportSection.classList.add("is-visible");
    reportSection.setAttribute("aria-hidden", "false");

    reportAvatar.textContent = getInitial(student.name);
    reportName.textContent = student.name;
    reportType.textContent = student.type;
    reportLevel.textContent = student.level;
    reportDescription.textContent = student.description;
    currentLearning.textContent = student.current;
    currentDetail.textContent = student.currentDetail;
    nextLearning.textContent = student.next;
    nextDetail.textContent = student.nextDetail;
    teacherReview.textContent = student.teacherReview;
    lastUpdated.textContent = new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    ratingStars.innerHTML = `${makeStars(student.rating, "large-stars")}<span class="rating-value">${formatRating(student.rating)} / 5</span>`;
    ratingStars.setAttribute("aria-label", `${formatRating(student.rating)} out of 5 stars`);

    if (Array.isArray(student.completedSurahs)) {
        renderHifzProgress(student);
    } else {
        renderWeeklyProgress(student);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHifzProgress(student) {
    hifzSection.hidden = false;
    weeklySection.hidden = true;
    surahList.innerHTML = "";
    completionCount.textContent = `${student.completedSurahs.length} memorized`;

    student.completedSurahs.forEach((surah) => {
        const item = document.createElement("div");
        item.className = "surah-item is-complete";

        const check = document.createElement("span");
        check.className = "surah-check";
        check.textContent = "✓";

        const label = document.createElement("span");
        label.className = "surah-label";
        label.textContent = surah;

        const status = document.createElement("span");
        status.className = "surah-status";
        status.textContent = "MEMORIZED";

        item.append(check, label, status);
        surahList.appendChild(item);
    });

    const target = document.createElement("div");
    target.className = "surah-item is-current";

    const arrow = document.createElement("span");
    arrow.className = "surah-check target-arrow";
    arrow.textContent = "→";

    const targetLabel = document.createElement("span");
    targetLabel.className = "surah-label";
    targetLabel.textContent = student.next;

    const targetStatus = document.createElement("span");
    targetStatus.className = "surah-status";
    targetStatus.textContent = "NEXT HIFZ";

    target.append(arrow, targetLabel, targetStatus);
    surahList.appendChild(target);
}

function renderWeeklyProgress(student) {
    hifzSection.hidden = true;
    weeklySection.hidden = false;

    weeklyScore.innerHTML = makeStars(student.weeklyRating, "weekly-stars");
    weeklyStarsNumber.textContent = formatRating(student.weeklyRating);
    weeklyRating.textContent = getRatingLabel(student.weeklyRating);
    weeklyComment.textContent = student.weeklyComment;
    weeklyProgressFill.style.width = `${student.weeklyRating * 20}%`;

    weeklyHistoryList.innerHTML = "";

    student.weeklyHistory.forEach((entry) => {
        const row = document.createElement("div");
        row.className = "history-item";

        const label = document.createElement("span");
        label.className = "history-week";
        label.textContent = entry.week;

        const score = document.createElement("span");
        score.className = "history-score";
        score.innerHTML = `${makeStars(entry.rating)}<strong>${formatRating(entry.rating)}/5</strong>`;

        row.append(label, score);
        weeklyHistoryList.appendChild(row);
    });
}

function returnToDashboard() {
    reportSection.hidden = true;
    reportSection.classList.remove("is-visible");
    reportSection.setAttribute("aria-hidden", "true");
    $(".hero-section").hidden = false;
    $(".students-section").hidden = false;
    $("#students").scrollIntoView({ behavior: "smooth", block: "start" });
}

backButton.addEventListener("click", returnToDashboard);

$("#home-link").addEventListener("click", (event) => {
    event.preventDefault();
    returnToDashboard();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---------------- YOUTUBE LIBRARY ---------------- */

const categories = [
    "All lessons",
    "Surah Recitation",
    "Sahabah Stories",
    "Islamic Lessons"
];

let selectedCategory = "All lessons";
let selectedVideoId = null;

function extractYouTubeId(url) {
    if (typeof url !== "string") return "";

    try {
        const parsed = new URL(url.trim());
        const host = parsed.hostname.toLowerCase();
        let id = "";

        if (host === "youtu.be" || host.endsWith(".youtu.be")) {
            id = parsed.pathname.split("/").filter(Boolean)[0] || "";
        } else if (
            host === "youtube.com" || host.endsWith(".youtube.com") ||
            host === "youtube-nocookie.com" || host.endsWith(".youtube-nocookie.com")
        ) {
            if (parsed.pathname === "/watch") {
                id = parsed.searchParams.get("v") || "";
            } else {
                const parts = parsed.pathname.split("/").filter(Boolean);
                if (parts.length > 1 && ["embed", "shorts", "live"].includes(parts[0])) {
                    id = parts[1];
                }
            }
        }

        return /^[A-Za-z0-9_-]{11}$/.test(id) ? id : "";
    } catch (error) {
        return "";
    }
}

function renderCategoryButtons() {
    categoryFilters.innerHTML = "";

    categories.forEach((category) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "filter-button";
        button.textContent = category;
        button.setAttribute("aria-pressed", String(category === selectedCategory));

        if (category === selectedCategory) button.classList.add("is-active");

        button.addEventListener("click", () => {
            selectedCategory = category;
            renderCategoryButtons();
            renderVideoCards();
        });

        categoryFilters.appendChild(button);
    });
}

function renderVideoCards() {
    const searchTerm = videoSearch.value.trim().toLowerCase();

    const filtered = videos.filter((video) => {
        const categoryMatch = selectedCategory === "All lessons" || video.category === selectedCategory;
        const content = `${video.title} ${video.description} ${video.category}`.toLowerCase();
        return categoryMatch && content.includes(searchTerm);
    });

    videoGrid.innerHTML = "";
    emptyVideos.hidden = filtered.length !== 0;

    filtered.forEach((video, index) => {
        const youtubeId = extractYouTubeId(video.url);
        const card = document.createElement("article");
        card.className = "video-card";
        card.style.animationDelay = `${index * 60}ms`;
        if (video.id === selectedVideoId) card.classList.add("is-selected");

        const thumbButton = document.createElement("button");
        thumbButton.type = "button";
        thumbButton.className = "video-thumb";
        thumbButton.setAttribute("aria-label", `Play ${video.title}`);

        if (youtubeId) {
            const image = document.createElement("img");
            image.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
            image.alt = "";
            image.loading = "lazy";
            image.onerror = () => {
                image.remove();
                thumbButton.classList.add("thumb-fallback");
            };
            thumbButton.appendChild(image);
        } else {
            thumbButton.classList.add("thumb-fallback");
        }

        const play = document.createElement("span");
        play.className = "thumb-play";
        play.textContent = "▶";
        thumbButton.appendChild(play);
        thumbButton.addEventListener("click", () => playVideo(video));

        const body = document.createElement("div");
        body.className = "video-card-body";

        const tag = document.createElement("span");
        tag.className = "video-tag";
        tag.textContent = video.category;

        const title = document.createElement("h3");
        title.textContent = video.title;

        const description = document.createElement("p");
        description.textContent = video.description;

        const action = document.createElement("button");
        action.type = "button";
        action.className = "video-action";
        action.textContent = "Play lesson  ↗";
        action.addEventListener("click", () => playVideo(video));

        body.append(tag, title, description, action);
        card.append(thumbButton, body);
        videoGrid.appendChild(card);
    });
}

function playVideo(video) {
    const youtubeId = extractYouTubeId(video.url);

    if (!youtubeId) {
        featuredTitle.textContent = video.title;
        featuredDescription.textContent = "This video link is not a valid YouTube URL. Please check it in app.js.";
        featuredPlaceholder.hidden = false;
        videoPlayer.hidden = true;
        videoPlayer.innerHTML = "";
        return;
    }

    selectedVideoId = video.id;
    featuredTitle.textContent = video.title;
    featuredDescription.textContent = `${video.category} · Selected for learning`;
    featuredPlaceholder.hidden = true;
    videoPlayer.hidden = false;
    videoPlayer.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`;
    iframe.title = video.title;
    iframe.loading = "lazy";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    videoPlayer.appendChild(iframe);

    renderVideoCards();
    $("#featured-video").scrollIntoView({ behavior: "smooth", block: "center" });
}

videoSearch.addEventListener("input", renderVideoCards);

/* ---------------- PAGE STARTUP ---------------- */

function hideLoader() {
    const loader = $("#site-loader");
    if (!loader) return;
    loader.classList.add("is-hidden");
    window.setTimeout(() => loader.remove(), 850);
}

updateDate();
renderStudentCards();
renderCategoryButtons();
renderVideoCards();

if (document.readyState === "complete") {
    window.setTimeout(hideLoader, 650);
} else {
    window.addEventListener("load", () => window.setTimeout(hideLoader, 650), { once: true });
    window.setTimeout(hideLoader, 2500);
}
