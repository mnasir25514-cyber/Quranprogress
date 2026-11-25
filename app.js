/* ==========================================================
   QURAN LEARNING WEBSITE
   Student reports, online books and video library.
   ========================================================== */


/* ==========================================================
   1. STUDENT RECORDS
   ========================================================== */

const students = [

    {
        id: "muhammad",
        name: "Muhammad",
        type: "Quran Student",

        level: "1st Para",
        current: "1st Para",

        currentDetail:
            "Muhammad has completed his Quran reading. His current recorded Para is the 1st Para.",

        next: "Surah Al-Qadr",

        nextDetail:
            "Next Hifz target: continue preparing and revising Surah Al-Qadr.",

        rating: 4.5,

        featuredStar: true,
        quranCompleted: true,

        description:
            "Quran reading, memorization, and revision progress.",

        teacherReview:
            "Alhamdulillah! Congratulations to Muhammad on completing the Quran. This is a wonderful achievement and a moment to be proud of. May Allah make the Quran a source of guidance and blessings in his life. Keep revising the memorized Surahs carefully and continue the Hifz journey with the same dedication.",

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

        level: "18th Para",
        current: "18th Para",

        currentDetail:
            "Nusaiba is continuing her Quran studies in the 18th Para.",

        next: "Surah Al-Qadr",

        nextDetail:
            "Next Hifz target: prepare and revise Surah Al-Qadr regularly.",

        rating: 4,

        description:
            "Quran reading, memorization, and revision progress.",

        teacherReview:
            "MashaAllah, Nusaiba is making steady progress in her Quran studies. She has continued her learning in the 18th Para and has also added Surah At-Takathur to her memorized Surahs. Keep revising the completed Surahs with care and give regular attention to the next Hifz target. May Allah increase her knowledge and make her journey easy.",

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
        current: "Surah Quraish",

        currentDetail:
            "Currently reading and practising Surah Quraish.",

        next: "Continue Surah Quraish",

        nextDetail:
            "Focus on correct pronunciation, steady reading, and regular practice at home.",

        rating: 4,
        weeklyRating: 4,

        description:
            "Junior Quran reading and weekly learning progress.",

        teacherReview:
            "MashaAllah, Ibrahim is progressing with his Amma Para lessons and has reached Surah Quraish. He should continue practising with a clear voice and careful pronunciation. Regular revision at home and attentive participation in online lessons will help him become a more confident reader. Keep up the good effort.",

        weeklyComment:
            "Ibrahim is continuing his Amma Para work. Please practise Surah Quraish at home, read aloud during the online lesson, and pay attention to the teacher's corrections.",

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

        currentDetail:
            "Mustafa is continuing his Noorani Qaida practice on Takhti 13.",

        next: "Takhti 14",

        nextDetail:
            "After completing the current Takhti confidently, he can move on to Takhti 14.",

        rating: 5,
        weeklyRating: 5,

        description:
            "Junior Noorani Qaida and weekly learning progress.",

        teacherReview:
            "MashaAllah, Mustafa has shown excellent effort in his Noorani Qaida learning. His progress deserves appreciation. He should continue practising Takhti 13 carefully, paying attention to every letter and its pronunciation. Keep this positive attitude and regular home revision going. Well done!",

        weeklyComment:
            "Excellent effort this week. Continue practising Takhti 13 at home, read each exercise aloud, and prepare confidently for the next Takhti.",

        weeklyHistory: [
            { week: "This week", rating: 5 },
            { week: "Previous week", rating: 4 },
            { week: "Two weeks ago", rating: 3 }
        ]
    }

];


/* ==========================================================
   2. YOUTUBE LEARNING LIBRARY
   ========================================================== */

const videos = [

    {
        id: 1,
        title: "Surah Recitation",
        category: "Surah Recitation",

        description:
            "Surah Al-Feel recitation to help with pronunciation.",

        url:
            "https://youtu.be/DoBVa94v3pI?si=0dkuDGzpNd8-9HUh"
    },


    {
        id: 2,
        title: "Stories of the Sahabah (RA)",
        category: "Sahabah Stories",

        description:
            "Watch this and prepare for the quiz for Nusaiba and Muhammad.",

        url:
            "https://youtu.be/ZSLMniXcFuk?si=S3tlz9RJ_-kZ-kUc"
    },


    {
        id: 3,
        title: "Islamic Lessons for Students",
        category: "Islamic Lessons",

        description:
            "A useful Islamic lesson for our students.",

        url:
            "https://youtu.be/_NxLoGB0fXw?si=CfqqwuNxr8Twjv9e"
    }

];


/* ==========================================================
   3. ONLINE BOOK RESOURCES
   ========================================================== */

const books = {

    amma: {
        title: "Amma Para — Para 30",

        description:
            "Colour-coded Tajweed Quran in Indo-Pak script. From Surah An-Naba to Surah An-Naas.",

        pdfUrl:
            "https://herquranacademy.com/assets/quran/para-30-her-quran-academy.pdf?v=90bb5082",

        sourceUrl:
            "https://herquranacademy.com/quran/para-30/"
    },


    qaida: {
        title: "Noorani Qaida",

        description:
            "Complete Noorani Qaida with English instructions, hosted by Taqwa Foundation.",

        pdfUrl:
            "https://taqwafoundation.com/wp-content/uploads/noorani-qaida.pdf",

        sourceUrl:
            "https://taqwafoundation.com/resources/noorani-qaida-online/"
    }

};


/* ==========================================================
   4. ELEMENT REFERENCES
   ========================================================== */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);


const studentGrid = $("#student-grid");
const reportSection = $("#report-section");
const backButton = $("#back-button");

const currentDate = $("#current-date");
const studentCount = $("#student-count");

const reportAvatar = $("#report-avatar");
const reportName = $("#report-name");
const reportType = $("#report-type");
const reportLevel = $("#report-level");
const reportDescription = $("#report-description");

const completionBadge = $("#completion-badge");

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

const featuredTitle = $("#featured-title");
const featuredDescription = $("#featured-description");
const featuredPlaceholder = $("#featured-placeholder");
const videoPlayer = $("#video-player");
const emptyVideos = $("#empty-videos");

const bookReaderPanel = $("#book-reader-panel");
const bookFrame = $("#book-frame");
const readerTitle = $("#reader-title");
const readerDescription = $("#reader-description");
const readerOpenPdf = $("#reader-open-pdf");
const readerFallbackLink = $("#reader-fallback-link");


/* ==========================================================
   5. GENERAL HELPERS
   ========================================================== */

function getInitial(name) {

    return name.trim().charAt(0).toUpperCase();

}


function formatRating(rating) {

    return Number.isInteger(rating)
        ? String(rating)
        : rating.toFixed(1);

}


function getRatingLabel(rating) {

    if (rating >= 5) return "Outstanding";
    if (rating >= 4.5) return "Excellent";
    if (rating >= 4) return "Very good";
    if (rating >= 3) return "Good effort";

    return "Keep practising";

}


function updateDate() {

    currentDate.textContent =
        new Date().toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric"
        });

}


/* Create accessible star markup */

function createStars(rating, extraClass = "") {

    let html = `<span class="star-set ${extraClass}" aria-hidden="true">`;

    for (let i = 1; i <= 5; i++) {

        let starClass = "star-icon is-empty";

        if (rating >= i) {

            starClass = "star-icon is-full";

        } else if (rating >= i - 0.5) {

            starClass = "star-icon is-half";

        }

        html += `<span class="${starClass}">★</span>`;

    }

    html += "</span>";

    return html;

}


/* ==========================================================
   6. STUDENT DASHBOARD CARDS
   ========================================================== */

function renderStudents() {

    studentGrid.innerHTML = "";

    students.forEach((student, index) => {

        const card = document.createElement("button");

        card.type = "button";
        card.className = "student-card";

        card.style.animationDelay = `${index * 75}ms`;

        card.setAttribute(
            "aria-label",
            `Open ${student.name}'s progress report`
        );


        /* Top information */

        const top = document.createElement("span");

        top.className = "student-card-top";


        const avatar = document.createElement("span");

        avatar.className = "student-avatar";
        avatar.textContent = getInitial(student.name);


        const info = document.createElement("span");

        info.className = "student-info";


        const nameLine = document.createElement("span");

        nameLine.className = "student-name-line";


        const name = document.createElement("strong");

        name.className = "student-name";
        name.textContent = student.name;

        nameLine.appendChild(name);


        /* RGB star only for Muhammad */

        if (student.featuredStar) {

            const star = document.createElement("span");

            star.className = "rgb-star";
            star.textContent = "★";
            star.setAttribute("aria-label", "Special achievement");

            nameLine.appendChild(star);

        }


        const type = document.createElement("span");

        type.className = "student-type";
        type.textContent = student.type;

        info.append(nameLine, type);

        top.append(avatar, info);

        card.appendChild(top);


        /* Quran completion badge */

        if (student.quranCompleted) {

            const badge = document.createElement("span");

            badge.className = "student-completed-badge";
            badge.textContent = "✦ QURAN COMPLETED";

            card.appendChild(badge);

        }


        /* Current progress */

        const progress = document.createElement("span");

        progress.className = "student-progress-preview";

        progress.innerHTML =
            `<span class="preview-label">CURRENT PROGRESS</span>
             <strong></strong>`;

        $(".student-progress-preview strong", progress).textContent =
            student.current;

        card.appendChild(progress);


        /* Rating */

        const footer = document.createElement("span");

        footer.className = "student-card-footer";

        footer.innerHTML =
            `${createStars(student.rating)}
             <span class="rating-value">${formatRating(student.rating)} / 5</span>`;

        card.appendChild(footer);


        card.addEventListener("click", () => {

            showStudentReport(student);

        });


        studentGrid.appendChild(card);

    });


    studentCount.textContent =
        String(students.length).padStart(2, "0");

}


/* ==========================================================
   7. STUDENT REPORTS
   ========================================================== */

function showStudentReport(student) {

    $(".hero-section").hidden = true;
    $(".students-section").hidden = true;

    reportSection.hidden = false;
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


    /* Muhammad Quran completion badge */

    completionBadge.hidden = !student.quranCompleted;


    /* Last updated */

    lastUpdated.textContent =
        new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });


    /* Main rating */

    ratingStars.innerHTML =
        `${createStars(student.rating, "large-stars")}
         <span class="rating-value">${formatRating(student.rating)} / 5</span>`;


    ratingStars.setAttribute(
        "aria-label",
        `${formatRating(student.rating)} out of 5 stars`
    );


    /* Choose the correct report type */

    if (Array.isArray(student.completedSurahs)) {

        renderHifzProgress(student);

    } else {

        renderWeeklyProgress(student);

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* Quran student Hifz report */

function renderHifzProgress(student) {

    hifzSection.hidden = false;

    weeklySection.hidden = true;

    surahList.innerHTML = "";


    completionCount.textContent =
        `${student.completedSurahs.length} memorized`;


    student.completedSurahs.forEach((surah) => {

        const item = document.createElement("div");

        item.className = "surah-item";


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


    /* Next Hifz target */

    const target = document.createElement("div");

    target.className = "surah-item is-current";


    const arrow = document.createElement("span");

    arrow.className = "surah-check";
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


/* Junior student weekly report */

function renderWeeklyProgress(student) {

    hifzSection.hidden = true;

    weeklySection.hidden = false;


    weeklyScore.innerHTML =
        createStars(student.weeklyRating, "weekly-stars");


    weeklyStarsNumber.textContent =
        formatRating(student.weeklyRating);


    weeklyRating.textContent =
        getRatingLabel(student.weeklyRating);


    weeklyComment.textContent =
        student.weeklyComment;


    weeklyProgressFill.style.width =
        `${student.weeklyRating * 20}%`;


    weeklyHistoryList.innerHTML = "";


    student.weeklyHistory.forEach((entry) => {

        const row = document.createElement("div");

        row.className = "history-item";


        const label = document.createElement("span");

        label.className = "history-week";
        label.textContent = entry.week;


        const score = document.createElement("span");

        score.className = "history-score";

        score.innerHTML =
            `${createStars(entry.rating)}
             <strong>${formatRating(entry.rating)}/5</strong>`;


        row.append(label, score);

        weeklyHistoryList.appendChild(row);

    });

}


/* Back to dashboard */

function returnToDashboard() {

    reportSection.hidden = true;

    reportSection.setAttribute("aria-hidden", "true");

    $(".hero-section").hidden = false;

    $(".students-section").hidden = false;


    $("#students").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


backButton.addEventListener("click", returnToDashboard);


$("#home-link").addEventListener("click", (event) => {

    event.preventDefault();

    returnToDashboard();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================================
   8. ONLINE BOOK READER
   ========================================================== */

function openBook(bookKey) {

    const book = books[bookKey];

    if (!book) {

        console.error("Book resource was not found:", bookKey);

        return;

    }


    readerTitle.textContent = book.title;

    readerDescription.textContent = book.description;


    readerOpenPdf.href = book.pdfUrl;

    readerFallbackLink.href = book.pdfUrl;


    /*
       Load the PDF from its original host.

       The website does not copy, edit or rehost
       the original Quran or Qaida text.
    */

    bookFrame.src = `${book.pdfUrl}#view=FitH`;


    bookReaderPanel.hidden = false;


    bookReaderPanel.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}


document.querySelectorAll(".open-book").forEach((button) => {

    button.addEventListener("click", () => {

        const bookKey = button.dataset.book;

        openBook(bookKey);

    });

});


$("#close-reader").addEventListener("click", () => {

    bookReaderPanel.hidden = true;

    /*
       Stop the PDF viewer from remaining active
       after the reader is closed.
    */

    bookFrame.src = "about:blank";

    $("#online-classroom").scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

});


/* ==========================================================
   9. YOUTUBE LIBRARY
   ========================================================== */

const categories = [

    "All lessons",

    "Surah Recitation",

    "Sahabah Stories",

    "Islamic Lessons"

];


let selectedCategory = "All lessons";

let selectedVideoId = null;


/* Extract a YouTube video ID safely */

function extractYouTubeId(url) {

    if (typeof url !== "string") {

        return "";

    }


    try {

        const parsed = new URL(url.trim());

        const host = parsed.hostname.toLowerCase();

        let id = "";


        if (
            host === "youtu.be" ||
            host.endsWith(".youtu.be")
        ) {

            id =
                parsed.pathname.split("/").filter(Boolean)[0] || "";

        } else if (

            host === "youtube.com" ||
            host.endsWith(".youtube.com") ||
            host === "youtube-nocookie.com" ||
            host.endsWith(".youtube-nocookie.com")

        ) {

            if (parsed.pathname === "/watch") {

                id = parsed.searchParams.get("v") || "";

            } else {

                const parts =
                    parsed.pathname.split("/").filter(Boolean);

                if (

                    parts.length > 1 &&

                    ["embed", "shorts", "live"].includes(parts[0])

                ) {

                    id = parts[1];

                }

            }

        }


        return /^[A-Za-z0-9_-]{11}$/.test(id)
            ? id
            : "";

    } catch (error) {

        return "";

    }

}


/* Video category filters */

function renderCategoryFilters() {

    categoryFilters.innerHTML = "";


    categories.forEach((category) => {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "filter-button";

        button.textContent = category;

        button.setAttribute(
            "aria-pressed",
            String(category === selectedCategory)
        );


        if (category === selectedCategory) {

            button.classList.add("is-active");

        }


        button.addEventListener("click", () => {

            selectedCategory = category;

            renderCategoryFilters();

            renderVideoCards();

        });


        categoryFilters.appendChild(button);

    });

}


/* Render video cards */

function renderVideoCards() {

    const searchTerm =
        videoSearch.value.trim().toLowerCase();


    const filteredVideos = videos.filter((video) => {

        const categoryMatch =
            selectedCategory === "All lessons" ||
            video.category === selectedCategory;


        const searchableText = (

            video.title + " " +
            video.description + " " +
            video.category

        ).toLowerCase();


        return categoryMatch &&
            searchableText.includes(searchTerm);

    });


    videoGrid.innerHTML = "";

    emptyVideos.hidden = filteredVideos.length !== 0;


    filteredVideos.forEach((video, index) => {

        const youtubeId = extractYouTubeId(video.url);


        const card = document.createElement("article");

        card.className = "video-card";

        card.style.animationDelay = `${index * 60}ms`;


        if (video.id === selectedVideoId) {

            card.classList.add("is-selected");

        }


        /* Thumbnail */

        const thumbnail = document.createElement("button");

        thumbnail.type = "button";

        thumbnail.className = "video-thumb";

        thumbnail.setAttribute(
            "aria-label",
            `Play ${video.title}`
        );


        if (youtubeId) {

            const image = document.createElement("img");

            image.src =
                `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

            image.alt = "";

            image.loading = "lazy";


            image.onerror = () => {

                image.remove();

                thumbnail.classList.add("fallback");

            };


            thumbnail.appendChild(image);

        } else {

            thumbnail.classList.add("fallback");

        }


        const playIcon = document.createElement("span");

        playIcon.className = "thumb-play";

        playIcon.textContent = "▶";

        thumbnail.appendChild(playIcon);


        thumbnail.addEventListener("click", () => {

            playVideo(video);

        });


        /* Card content */

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

        action.textContent = "Play lesson ↗";


        action.addEventListener("click", () => {

            playVideo(video);

        });


        body.append(tag, title, description, action);

        card.append(thumbnail, body);

        videoGrid.appendChild(card);

    });

}


/* Play video in the main player */

function playVideo(video) {

    const youtubeId = extractYouTubeId(video.url);


    if (!youtubeId) {

        featuredTitle.textContent = video.title;

        featuredDescription.textContent =
            "This video URL is not valid. Please check its link in app.js.";

        featuredPlaceholder.hidden = false;

        videoPlayer.hidden = true;

        videoPlayer.innerHTML = "";

        return;

    }


    selectedVideoId = video.id;

    featuredTitle.textContent = video.title;

    featuredDescription.textContent =
        `${video.category} · Selected for learning`;


    featuredPlaceholder.hidden = true;

    videoPlayer.hidden = false;

    videoPlayer.innerHTML = "";


    const iframe = document.createElement("iframe");

    iframe.src =
        `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`;

    iframe.title = video.title;

    iframe.loading = "lazy";

    iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

    iframe.allowFullscreen = true;

    iframe.referrerPolicy =
        "strict-origin-when-cross-origin";


    videoPlayer.appendChild(iframe);


    renderVideoCards();


    $("#featured-video").scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


videoSearch.addEventListener("input", renderVideoCards);


/* ==========================================================
   10. BISMILLAH LOADER
   ========================================================== */

function hideLoader() {

    const loader = $("#site-loader");

    if (!loader) {

        return;

    }


    loader.classList.add("is-hidden");


    window.setTimeout(() => {

        loader.remove();

    }, 850);

}


/* ==========================================================
   11. START WEBSITE
   ========================================================== */

updateDate();

renderStudents();

renderCategoryFilters();

renderVideoCards();


if (document.readyState === "complete") {

    window.setTimeout(hideLoader, 650);

} else {

    window.addEventListener("load", () => {

        window.setTimeout(hideLoader, 650);

    }, { once: true });


    /*
       Fallback in case an external font or resource
       delays the normal load event.
    */

    window.setTimeout(hideLoader, 3000);

}
