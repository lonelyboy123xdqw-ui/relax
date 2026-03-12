/* OPEN MEDITATION */

function openMeditation(type){

localStorage.setItem("mode",type)

/* play music trigger for browser permission */

localStorage.setItem("playMusic","true")

window.location="meditation.html"

}


/* BACKGROUND IMAGES */

const images=[

"images/meditate1.png",
"images/meditate2.png",
"images/meditate3.png",
"images/meditate4.png",
"images/meditate5.png"

]

let bgIndex=0

function startSlideshow(){

const bg=document.getElementById("bg")

if(!bg) return

bg.style.backgroundImage=`url(${images[0]})`

setInterval(()=>{

bgIndex++

if(bgIndex>=images.length) bgIndex=0

bg.style.backgroundImage=`url(${images[bgIndex]})`

},5000)

}


/* STEPS */

let steps=[]
let stepIndex=0


const anxietySteps=[

"Prepare Your Space and Body: Find a quiet comfortable spot and close your eyes.",

"Focus on Your Breath: Take slow deep breaths noticing cool air entering and warm air leaving.",

"Perform a Body Scan: Slowly move awareness from head to toes releasing tension.",

"Practice Non-Judgmental Awareness: Notice thoughts and gently let them go.",

"Repeat a Mantra: Use a calming word in your mind.",

"Practice Consistency: Daily meditation reduces anxiety."

]


const stressSteps=[

"Find a quiet place where you will not be interrupted.",

"Sit comfortably with a straight but relaxed back.",

"Focus on your breathing sensation.",

"Observe thoughts without judging them.",

"Gently return attention to breathing.",

"Practice regularly every day.",

"Close the session calmly."

]


const breathSteps=[

"Sit comfortably or lie down.",

"Relax neck and shoulders.",

"Place one hand on chest and one on belly.",

"Inhale slowly expanding belly.",

"Exhale slowly through pursed lips.",

"Make exhale longer than inhale.",

"Try breathing techniques like 4-7-8.",

"Observe breath mindfully."

]


/* SETUP MEDITATION */

function setupMeditation(){

const mode=localStorage.getItem("mode")

const music=document.getElementById("music")

const title=document.getElementById("title")

if(!mode) return


if(mode==="stress"){

steps=stressSteps
title.innerText="Stress Meditation"
music.src="music/om.mp3"

}


if(mode==="anxiety"){

steps=anxietySteps
title.innerText="Anxiety Meditation"
music.src="music/mahabharat.mp3"

}


if(mode==="breath"){

steps=breathSteps
title.innerText="Breathlessness Meditation"
music.src="music/hari.mp3"

}


/* FORCE MUSIC PLAY */

if(localStorage.getItem("playMusic")==="true"){

music.play().catch(()=>{})

}

}


/* NEXT STEP */

function nextStep(){

if(stepIndex < steps.length){

document.getElementById("stepText").innerText=steps[stepIndex]

stepIndex++

}

}


/* GO HOME */

function goHome(){

const music=document.getElementById("music")

if(music){

music.pause()
music.currentTime=0

}

localStorage.removeItem("playMusic")

window.location="index.html"

}


/* INIT */

window.onload=function(){

setupMeditation()

startSlideshow()

}