// ===============================
// SupportHub Script
// ===============================

// FAQ Accordion

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.display === "block"){

            answer.style.display = "none";

        }else{

            answer.style.display = "block";

        }

    });

});

// Back To Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topButton.style.display="flex";

    }else{

        topButton.style.display="none";

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// Animated Statistics

const stats=document.querySelectorAll(".stat-card h2");

stats.forEach(stat=>{

    const finalNumber=stat.innerText;

    stat.innerText=finalNumber;

});
/* ====================================
   BACK TO TOP BUTTON
==================================== */

.top-btn{

position:fixed;

right:30px;

bottom:30px;

width:55px;

height:55px;

border:none;

border-radius:50%;

background:#2563eb;

color:white;

font-size:22px;

cursor:pointer;

display:none;

justify-content:center;

align-items:center;

box-shadow:0 10px 25px rgba(0,0,0,.2);

transition:.3s;

z-index:999;

}

.top-btn:hover{

transform:scale(1.1);

}

/* ====================================
   FAQ
==================================== */

.faq-answer{

display:none;

animation:fade .3s ease;

}

@keyframes fade{

from{

opacity:0;

transform:translateY(-10px);

}

to{

opacity:1;

transform:translateY(0);

}

}

/* ====================================
   SCROLL ANIMATION
==================================== */

.service-card,
.feature-card,
.testimonial-card,
.contact-card{

transition:.4s;

}

.service-card:hover,
.feature-card:hover,
.testimonial-card:hover,
.contact-card:hover{

transform:translateY(-10px);

}