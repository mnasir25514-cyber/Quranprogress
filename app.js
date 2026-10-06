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

const studentGrid = document.getElementById("student-grid");
const reportSection = document.getElementById("report-section");
const backButton = document.getElementById("back-button");

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


function getStars(number) {
    let result = "";

    for (let i = 1; i <= 5; i++) {
        if (i <= number) {
            result += "★";
        } else {
            result += "☆";
        }
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
    const today = new Date();

    currentDate.textContent = today.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}


function createStudentCards() {
    studentGrid.innerHTML = "";

    students.forEach(function(student, index) {
        const card = document.createElement("div");

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
                '<strong>' +
                    student.current +
                '</strong>' +
            '</div>' +

            '<div class="student-rating">' +
                getStars(student.rating) +
            '</div>';

        card.addEventListener("click", function() {
            showStudent(student);
        });

        studentGrid.appendChild(card);
    });
}


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
    nextDetail.textContent = "This is the next step in the learning journey.";

    teacherReview.textContent = student.teacherReview;

    ratingStars.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");

        star.className = "star";

        if (i <= student.rating) {
            star.classList.add("active");
        }

        star.textContent = "★";

        ratingStars.appendChild(star);
    }

    lastUpdated.textContent = "6 October 2026";

    if (student.completedSurahs) {
        showQuranProgress(student);
    } else {
        showJuniorProgress(student);
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showQuranProgress(student) {
    hifzSection.style.display = "block";
    weeklySection.style.display = "none";

    surahList.innerHTML = "";

    completionCount.textContent =
        student.completedSurahs.length + " Completed";

    student.completedSurahs.forEach(function(surah) {
        const item = document.createElement("div");

        item.className = "surah-item completed";

        item.innerHTML =
            '<div class="surah-number">✓</div>' +
            '<span>' + surah + '</span>';

        surahList.appendChild(item);
    });

    const current = document.createElement("div");

    current.className = "surah-item current";

    current.innerHTML =
        '<div class="surah-number">→</div>' +
        '<span>' + student.current + '</span>';

    surahList.appendChild(current);
}


function showJuniorProgress(student) {
    hifzSection.style.display = "none";
    weeklySection.style.display = "block";

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

        history.innerHTML =
            '<span class="history-week">' +
                item.week +
            '</span>' +

            '<span class="history-stars">' +
                getStars(item.rating) +
            '</span>';

        weeklyHistoryList.appendChild(history);
    });
}


backButton.addEventListener("click", function() {
    reportSection.classList.remove("active");
    reportSection.setAttribute("aria-hidden", "true");

    document.querySelector(".welcome-section").style.display = "";
    document.querySelector(".students-section").style.display = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


studentCount.textContent = students.length;

setDate();

createStudentCards();