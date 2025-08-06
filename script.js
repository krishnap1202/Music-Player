var arr = [
    { songname: "Tees Maar Khan", time: "3:45", url: "./song/tmk.mp3", img: "./img/tmk.webp" },
    { songname: "Dil Main Baji Guitar", time: "4:08", url: "./song/dmbg.mp3", img: "./img/dmbg.webp" },
    { songname: "Chaleya", time: "3:07", url: "./song/chaleya.mp3", img: "./img/c.webp" },
    { songname: "What Jhumka ?", time: "2:32", url: "./song/wj.mp3", img: "./img/wj.webp" },
    { songname: "Bawaal", time: "3:14", url: "./song/bawaal.mp3", img: "./img/b.webp" }
]

var allsongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")

var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")

var audio = new Audio()
var selectedSongs = 0

function mainFunction() {
    var kr = "";

    arr.forEach(function (ki, index) {
        kr += `<div class="song-card" id=${index}>
                    <div class="part1">
                        <img src="${ki.img}" alt="">
                        <h2>${ki.songname}</h2>
                    </div>
                    <h6>${ki.time}</h6>
                </div>`
    })
    allsongs.innerHTML = kr
    
    audio.src = arr[selectedSongs].url
    poster.style.backgroundImage = `url(${arr[selectedSongs].img
    })`
}

mainFunction()

allsongs.addEventListener("click", function (kri) {
    selectedSongs = kri.target.id
    mainFunction();
    play.innerHTML = `<i class="ri-pause-line"></i>`
    kris = 1
    audio.play()
})

 var kris = 0;

play.addEventListener("click", function(){
    if(kris == 0)
    {
        play.innerHTML = `<i class="ri-pause-line"></i>`
        mainFunction()
        audio.play()
        kris = 1;
    }
    else{
        play.innerHTML = `<i class="ri-play-line"></i>`
        mainFunction()
        audio.pause()
        kris = 0;
    }

})

forward.addEventListener("click",function(){
    if(selectedSongs < arr.length - 1){
    selectedSongs ++
    mainFunction();
    audio.play();
    }else{
        forward.style.opacity = 0.4
    }
});
backward.addEventListener("click",function(){
    if(selectedSongs > 0){
    selectedSongs --
    mainFunction();
    audio.play();
    }else{
        backward.style.opacity = 0.4
    }
});