/* ==========================================
            LOADER
========================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1500);

});

/* ==========================================
            STICKY HEADER
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,0,0,.90)";

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

    }

    else {

        header.style.background = "rgba(0,0,0,.65)";

        header.style.boxShadow = "none";

    }

});

/* ==========================================
            BACK TO TOP BUTTON
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {
        // 1. Scroll Event: Jab page neeche scroll ho tab hi button nazar aaye
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) { // 200px scroll karne par show hoga
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        });

        // 2. Click Event: Arrow par click karne par smoothly top par jaye
        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
/* ==========================================
            SMOOTH NAVIGATION
========================================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Mobile menu ke liye future use

    });

});

/* ==========================================
            HERO BUTTONS
========================================== */

const heroButtons = document.querySelectorAll(".primary-btn, .secondary-btn");

heroButtons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", function () {

        button.style.transform = "translateY(0) scale(1)";

    });

});

/* ==========================================
            GALLERY HOVER EFFECT
========================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(function (image) {

    image.addEventListener("mouseenter", function () {

        image.style.filter = "brightness(110%)";

    });

    image.addEventListener("mouseleave", function () {

        image.style.filter = "brightness(100%)";

    });

});
/* ==========================================
            BOOKING FORM
========================================== */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("🎉 Thank you! Your wedding booking request has been submitted successfully.");

    bookingForm.reset();

});

/* ==========================================
            SCROLL ANIMATION
========================================== */

const animatedElements = document.querySelectorAll(
    ".service-card, .package-card, .gallery-grid img, .why-card, .testimonial-card, .contact-card"
);

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.20

});

animatedElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(60px)";

    element.style.transition = "all .8s ease";

    observer.observe(element);

});

/* ==========================================
            ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
            PACKAGE SELECTION
========================================== */

const packageButtons = document.querySelectorAll(".package-card .primary-btn");

packageButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const packageName =
            this.parentElement.querySelector("h3").textContent;

        alert("💍 You selected the " + packageName + " Package.");

    });

});

/* ==========================================
            IMAGE CLICK EFFECT
========================================== */

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        image.style.transform = "scale(1.12)";

        setTimeout(function () {

            image.style.transform = "scale(1)";

        }, 300);

    });

});

/* ==========================================
            CONTACT CARDS
========================================== */

const contactCards = document.querySelectorAll(".contact-card");

contactCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.boxShadow = "0 0 25px rgba(212,175,55,.35)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.boxShadow = "none";

    });

});
/* ==========================================
            HERO TYPING EFFECT
========================================== */

const heroTitle = document.querySelector(".hero-content h1");

if (heroTitle) {

    const originalText = heroTitle.innerHTML;

    heroTitle.innerHTML = "";

    let index = 0;

    function typeEffect() {

        if (index < originalText.length) {

            heroTitle.innerHTML += originalText.charAt(index);

            index++;

            setTimeout(typeEffect, 40);

        }

    }

    setTimeout(typeEffect, 600);

}

/* ==========================================
            SCROLL PROGRESS BAR
========================================== */

const progressBar = document.createElement("div");

progressBar.id = "scrollProgress";

document.body.appendChild(progressBar);

window.addEventListener("scroll", function () {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / pageHeight) * 100;

    progressBar.style.width = progress + "%";

});

/* ==========================================
            MOUSE GLOW EFFECT
========================================== */

const glow = document.createElement("div");

glow.id = "mouseGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove", function (event) {

    glow.style.left = event.clientX + "px";

    glow.style.top = event.clientY + "px";

});

/* ==========================================
            BUTTON RIPPLE EFFECT
========================================== */

const allButtons = document.querySelectorAll("button, .primary-btn, .secondary-btn");

allButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = button.getBoundingClientRect();

        ripple.style.left = (event.clientX - rect.left) + "px";

        ripple.style.top = (event.clientY - rect.top) + "px";

        button.appendChild(ripple);

        setTimeout(function () {

            ripple.remove();

        }, 600);

    });

});

/* ==========================================
            RANDOM QUOTES
========================================== */

const weddingQuotes = [

    "Love is the greatest adventure. ❤️",

    "Every love story deserves a beautiful beginning. 💍",

    "Together is a wonderful place to be. ✨",

    "Creating memories that last forever. 🌹"

];

const quoteElement = document.querySelector(".hero-text");

if (quoteElement) {

    setInterval(function () {

        const randomIndex = Math.floor(Math.random() * weddingQuotes.length);

        quoteElement.textContent = weddingQuotes[randomIndex];

    }, 5000);

}

/* ==========================================
            CURRENT YEAR
========================================== */

const copyright = document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.innerHTML =
        `© ${year} Elysium Wedding. All Rights Reserved.`;

}

/* ==========================================
            CONSOLE MESSAGE
========================================== */

console.log("%cWelcome to Elysium Wedding 💙",
    "color:#D4AF37;font-size:18px;font-weight:bold;");

console.log("%cDesigned with ❤️ using HTML, CSS & JavaScript",
    "color:white;font-size:14px;");

/* ==========================================
            END OF FILE
========================================== */

console.log("Elysium.js Loaded Successfully.");
const links = document.querySelectorAll('nav a');

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});
window.calculatedStyle = "Romantic & Elegant";
/* ==========================================
        DREAM WEDDING QUIZ — PART 1
========================================== */

const quizQuestions = [
    {
        question: "What kind of wedding atmosphere do you dream of?",
        options: [
            "Romantic & Elegant",
            "Royal & Grand",
            "Modern & Stylish",
            "Nature & Bohemian"
        ]
    },

    {
        question: "Which wedding decoration speaks to you?",
        options: [
            "Soft flowers & candles",
            "Golden lights & luxury",
            "Minimal & classy",
            "Greenery & natural elements"
        ]
    },

    {
        question: "What color mood would you choose?",
        options: [
            "Blush & White",
            "Gold & Burgundy",
            "Black & White",
            "Green & Cream"
        ]
    },

    {
        question: "What should your wedding feel like?",
        options: [
            "A romantic fairytale",
            "A royal celebration",
            "A stylish modern event",
            "A peaceful garden dream"
        ]
    }
];

let currentQuestion = 0;
let quizAnswers = [];

console.log("Dream Wedding Quiz loaded!");
console.log("Total Questions:", quizQuestions.length);
/* ==========================================
        DREAM WEDDING QUIZ — PART 2
========================================== */

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const answerContainer = document.getElementById("answerContainer");
const nextQuestion = document.getElementById("nextQuestion");

let selectedAnswer = null;

loadQuestion();

nextQuestion.addEventListener("click", function () {

    if (selectedAnswer === null) {
        alert("Please choose an answer first.");
        return;
    }

    quizAnswers.push(selectedAnswer);

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        loadQuestion();

    } else {

        showResult();

    }

});


function loadQuestion() {

    selectedAnswer = null;

    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${quizQuestions.length}`;

    questionText.textContent =
        quizQuestions[currentQuestion].question;

    answerContainer.innerHTML = "";

    quizQuestions[currentQuestion].options.forEach(function (option) {

        const button = document.createElement("button");

        button.className = "quiz-btn";

        button.textContent = option;

        button.addEventListener("click", function () {

            document.querySelectorAll("#answerContainer .quiz-btn")
                .forEach(function (btn) {
                    btn.classList.remove("selected");
                });

            button.classList.add("selected");

            selectedAnswer = option;

        });

        answerContainer.appendChild(button);

    });

}


function showResult() {
    document.getElementById("quizCard").style.display = "none";
    document.getElementById("quizResult").style.display = "block";

    // User ke 1st answer ke mutabiq style save karein
    const userChoice = quizAnswers[0] || "Romantic & Elegant";
    window.calculatedStyle = userChoice;

    document.getElementById("styleName").textContent = "✨ " + userChoice;
    document.getElementById("styleDescription").textContent =
        "Your answers have been analyzed! Selected Style: " + userChoice;
    document.getElementById("recommendedPackage").textContent =
        "Recommended Package: Premium " + userChoice;
    document.getElementById("estimatedBudget").textContent =
        "Estimated Budget: $5,000 - $12,000";

    // Direct Certificate Par Theme Text Set Karein
    const certTag = document.getElementById("certificateStyle");
    if (certTag) {
        certTag.innerText = userChoice;
    }
}
// ==========================================
// ELYSIUM - DYNAMIC CERTIFICATE LOGIC
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById("bookingForm");
    
    // Auto-Generate - ID
    const randomID = "KAL-" + Math.floor(1000 + Math.random() * 9000);
    const certID = document.getElementById("certificateID");
    if (certID) certID.innerText = randomID;

    // Handle Form Submission & Populate Certificate
    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Form Values
            const name = document.getElementById("custName")?.value || "Valued Client";
            const date = document.getElementById("weddingDate")?.value || "13-August-2026";
            const pkg = document.getElementById("weddingPackage")?.value || "Standard";
            const venue = document.getElementById("venueDetails")?.value || "Elysium Premium Venue";

            // Name Update
            const certNameTag = document.getElementById("certName") || document.getElementById("certificateName");
            if (certNameTag) certNameTag.innerText = name;

            // Quiz Style Auto Update (SAFE CHECK: Window Object se read kar raha hai taake code CRASH NA HO)
            const certStyleTag = document.getElementById("certificateStyle");
            if (certStyleTag) {
                if (window.calculatedStyle) {
                    certStyleTag.innerText = window.calculatedStyle;
                } else {
                    certStyleTag.innerText = `${pkg} - Luxury Wedding`;
                }
            }

            const certPkgTag = document.getElementById("certificatePackage");
            if (certPkgTag) certPkgTag.innerText = pkg;

            const certDateTag = document.getElementById("certificateDate");
            if (certDateTag) certDateTag.innerText = date;

            const certVenueTag = document.getElementById("certificateVenue");
            if (certVenueTag) certVenueTag.innerText = venue.length > 30 ? venue.substring(0, 30) + "..." : venue;

            // Scroll Smoothly to Certificate
            const certSection = document.getElementById("certificate");
            if (certSection) {
                certSection.scrollIntoView({ behavior: "smooth" });
            }

            alert("Booking Confirmed! Scroll down to view your Official Certificate.");
        });
    }

    // Print Button Functionality
    const printBtn = document.getElementById("printCertificate");
    if (printBtn) {
        printBtn.addEventListener("click", () => {
            window.print();
        });
    }

    // Interactive Digital Signature Pad
    const canvas = document.getElementById("signaturePad");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let isDrawing = false;

        ctx.strokeStyle = "#111";
        ctx.lineWidth = 2;

        canvas.addEventListener("mousedown", (e) => {
            isDrawing = true;
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        });

        canvas.addEventListener("mousemove", (e) => {
            if (isDrawing) {
                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke();
            }
        });

        canvas.addEventListener("mouseup", () => isDrawing = false);
        canvas.addEventListener("mouseleave", () => isDrawing = false);

        // Clear Signature Button
        const clearBtn = document.getElementById("clearSig");
        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            });
        }
    }
});


    // Sound System Controller
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bgMusic");
    const soundBtn = document.getElementById("soundToggleBtn");
    const soundIcon = document.getElementById("soundIcon");

    if (audio && soundBtn) {
        // Audio volume set karein (Soft Romantic Volume)
        audio.volume = 0.3; 

        soundBtn.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
                soundIcon.innerText = "🔊"; // Playing Icon
                soundBtn.classList.add("playing");
            } else {
                audio.pause();
                soundIcon.innerText = "🔇"; // Muted Icon
                soundBtn.classList.remove("playing");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bgMusic");
    const soundBtn = document.getElementById("soundToggleBtn");
    const soundIcon = document.getElementById("soundIcon");

    if (audio && soundBtn) {
        audio.volume = 0.4; // Soft background volume

        // 1. Manual Play / Pause Toggle Button
        soundBtn.addEventListener("click", (e) => {
            // Document listener ko trigger hone se rokne ke liye
            e.stopPropagation();

            if (audio.paused) {
                audio.play().then(() => {
                    if (soundIcon) soundIcon.innerText = "🔊";
                    soundBtn.classList.add("playing");
                    console.log("Audio playing successfully");
                }).catch(err => {
                    console.log("Audio play error:", err);
                });
            } else {
                audio.pause();
                if (soundIcon) soundIcon.innerText = "🔇";
                soundBtn.classList.remove("playing");
                console.log("Audio paused successfully");
            }
        });

        // 2. User interaction check for browser auto-play restrictions
        const enableAudioOnUserClick = (e) => {
            // Agar click sound button par hi hua hai to double-trigger mat hone dein
            if (soundBtn.contains(e.target)) return;

            if (audio.paused) {
                audio.play().then(() => {
                    if (soundIcon) soundIcon.innerText = "🔊";
                    soundBtn.classList.add("playing");
                }).catch(() => {});
            }
            // Pehli baar click hone ke baad listener remove ho jayega
            document.removeEventListener("click", enableAudioOnUserClick);
        };

        // Page par kisi aur jaga pehle click par sound unlock hoga
        document.addEventListener("click", enableAudioOnUserClick);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bgMusic");
    const soundBtn = document.getElementById("soundToggleBtn");
    const soundIcon = document.getElementById("soundIcon");

    if (audio && soundBtn) {
        audio.volume = 0.4; // Soft background volume

        // Helper function: Audio Play karne ke liye
        function playAudio() {
            audio.play().then(() => {
                if (soundIcon) soundIcon.innerText = "🔊";
                soundBtn.classList.add("playing");
            }).catch(err => {
                console.log("Autoplay blocked by browser:", err);
            });
        }

        // Helper function: Audio Pause karne ke liye
        function pauseAudio() {
            audio.pause();
            if (soundIcon) soundIcon.innerText = "🔇";
            soundBtn.classList.remove("playing");
        }

        // 1. Toggle Button Click Event
        soundBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Global click listener ko trigger hone se rokta hai

            if (audio.paused) {
                playAudio();
            } else {
                pauseAudio();
            }
        });

        // 2. Page par pehle kisi bhi interaction par audio start karne ke liye
        const unlockAudio = () => {
            if (audio.paused) {
                playAudio();
            }
            // Pehli baar interaction hone ke baad listeners ko remove kar dein
            document.removeEventListener("click", unlockAudio);
            document.removeEventListener("keydown", unlockAudio);
            document.removeEventListener("touchstart", unlockAudio);
        };

        // Browser auto-play policy bypass karne ke liye events
        document.addEventListener("click", unlockAudio);
        document.addEventListener("keydown", unlockAudio);
        document.addEventListener("touchstart", unlockAudio);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {
        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    } else {
        console.log("Error: topBtn HTML mein nahi mila!");
    }
});


