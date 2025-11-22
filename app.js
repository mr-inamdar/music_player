const media_query_for_mobile = window.matchMedia("(max-width: 499px)");
display_nav_bar = ()=>{
    if (media_query_for_mobile.matches){
        options = document.getElementById("options");
        // options.style.right = "0px";
        options.style.display = "flex";
    }
}
close_nav_bar = ()=>{
    if (media_query_for_mobile.matches){
        options = document.getElementById("options");
        // options.style.right = "-200px";
        options.style.display = "none";
    }
}
// Handle hash change and screen size
function handleHashChange() {
  const isMobile = media_query_for_mobile.matches;
  const hash = location.hash;

  if (isMobile) {
    switch (hash) {
      case "#playlist":
        showSection({ playList: true });
        break;
      case "#search":
        showSection({ search: true });
        break;
      default:
        showSection({ home: true });
        break;
    }
  } else {
    // Desktop view: show all except search
    showSection({ desktop: true });
  }
}
const playlist = document.getElementById("playlist");
const songs = document.getElementById("songs");

// Handle hash change and screen size
function handleHashChange() {
  const isMobile = media_query_for_mobile.matches;
  const hash = location.hash;

  if (isMobile) {
    switch (hash) {
      case "#playlist":
        showSection({ playList: true });
        break;
      default:
        showSection({ home: true });
        break;
    }
  } else {
    // Desktop view: show all except search
    showSection({ desktop: true });
  }
}

// Show/hide sections based on flags
function showSection({ playList = false, search = false, home = false, desktop = false }) {
  songs.style.display = (home || desktop) ? "block" : "none";
  playlist.style.display = (playList || desktop) ? "block" : "none";
}
// Navigation functions
function display_playlist_page() {
  if (media_query_for_mobile.matches) location.hash = "#playlist";
}
function display_home_page() {
  if (media_query_for_mobile.matches) location.hash = "";
}
// Event listeners
window.addEventListener("load", handleHashChange);
window.addEventListener("hashchange", handleHashChange);
media_query_for_mobile.addEventListener("change", handleHashChange)

// Image Slider
let pics = [
    'pics/25.jpg',
    'pics/30.jpg',
    'pics/3.jpg',
    'pics/8.jpg',
    'pics/21.jpg'
];
let names = [
    {name: 'Jug Jug Jeeve-Shiddat<div class="subtitel">Sachet Tandon</div>', attribute:"activate_song_popup('pics/25.jpg', 'Jug Jug Jeeve-Shiddat', 'जुग जुग जिए - शिद्दत', 'جگ جگ جیوے-شدت', 'songs/25.mp3', 'Sachet Tandon')"},
    {name: `Haseen<div class="subtitel">Talwiinder, NDS & Rippy Grewal</div>`,attribute:"activate_song_popup('pics/30.jpg', 'Haseen','हसीन','حسین', 'songs/hn.mp3', 'Talwiinder, NDS & Rippy Grewal')"},
    {name: `Ude Dil Befikre (From "Befikre")<div class="subtitel">Vishal and Sheykhar & Benny Dayal</div>`, attribute:"activate_song_popup('pics/3.jpg', 'Ude Dil Befikre (From Befikre)','उड़े दिल बेफिक्र (फिल्म बे फिक्र से)','نشے سی چھا گئی (فلم بے فکرسے)', 'songs/b1.mp3', 'Vishal and Sheykhar & Benny Dayal')"},
    {name: `Emotional Fool-The bride of  humpty sharma<div class="subtitel">Sharib Toshi & Toshi Sabri</div>`, attribute:"activate_song_popup('pics/8.jpg', 'Emotional Fool-The bride of  humpty sharma','इमोशनल फूल-दी ब्राइड ओएफ हम्प्टी शर्मा','ایموشنل فول-دی برائیڈ آف ہمپٹی شرما', 'songs/h1.mp3', 'Sharib Toshi & Toshi Sabri')"},
    {name: `Dil Ibaadat-Tum Mile<div class="subtitel">Kk, Emraan Hashmi</div>`, attribute:"activate_song_popup('pics/21.jpg', 'il Ibaadat-Tum Mile','दिल इबादत-तुम मिले','دل عبادت-تم ملے', 'songs/21.mp3', 'K.K.')"}
]

let index = 0;
let pic_tag = document.getElementById('poster_pic');
let numbar = document.querySelector('.trending_song_item span');
let pic = document.querySelector('.trending_song_item img');
let name = document.querySelector('.trending_song_item h5');
let iTag = document.querySelector(".trending_song_item i");

function updatePic(){
    // pic_tag.style.opacity = 0;
    setTimeout(() =>{
        pic_tag.src = pics[index];
        numbar.innerHTML = `0${index+1}`;
        pic.src = pics[index];
        name.innerHTML = names[index].name;
        iTag.setAttribute("onclick", names[index].attribute);
        // pic_tag.style.opacity = 1;
    }, 500);
}
function next_pic() {
    index = (index+1) % pics.length;
    updatePic();
}

function prev_pic() {
    index = (index - 1 + pics.length) % pics.length;
    updatePic();
}
// autopic updation
setInterval(next_pic, 60000);

// slider button
let pop_song_right1 = document.getElementById("pop_song_right1");
let pop_song_left1 = document.getElementById("pop_song_left1");
let pop_songs1 = document.querySelector(".pop_songs");

pop_song_right1.addEventListener("click", ()=>{
    pop_songs1.scrollLeft += 330;
})
pop_song_left1.addEventListener("click", ()=>{
    pop_songs1.scrollLeft -= 330;
})

let pop_song_right2 = document.getElementById("pop_song_right2");
let pop_song_left2 = document.getElementById("pop_song_left2");
let pop_songs2 = document.querySelector("#popular_songs1 .pop_songs");

pop_song_right2.addEventListener("click", ()=>{
    pop_songs2.scrollLeft += 330;
})
pop_song_left2.addEventListener("click", ()=>{
    pop_songs2.scrollLeft -= 330;
})
let pop_song_right3 = document.getElementById("pop_song_right3");
let pop_song_left3 = document.getElementById("pop_song_left3");
let pop_songs3 = document.querySelector("#popular_songs2 .pop_songs");

pop_song_right3.addEventListener("click", ()=>{
    pop_songs3.scrollLeft += 330;
})
pop_song_left3.addEventListener("click", ()=>{
    pop_songs3.scrollLeft -= 330;
})
let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let pa_container = document.getElementById("pa_container");

pop_art_right.addEventListener("click", ()=>{
    pa_container.scrollLeft += 330;
});
pop_art_left.addEventListener("click", ()=>{
    pa_container.scrollLeft -= 330;
});

let pop_al_left = document.getElementById("pop_al_left");
let pop_al_right = document.getElementById("pop_al_right");
let album_container = document.querySelector("#movie_songs .pop_songs");

pop_al_right.addEventListener("click", ()=>{
    album_container.scrollLeft += 330;
});
pop_al_left.addEventListener("click", ()=>{
    album_container.scrollLeft -= 330;
});

// song playing Satup System + search system
let all_songs = []
let search_results = document.querySelector("#search_system .search_results");
let search_input = document.querySelector("#search_system input");
fetch('songs_details.json')
    .then(res => res.json())
    .then(data => {
        all_songs = data;

        all_songs.forEach(element => {
            const {en, hi, ur, pic, artist, song} = element;
            let card = document.createElement('div');
            card.classList.add('card');

            //card.setAttribute(`onclick`, `activate_song_popup('${pic}', '${en}', '${hi}', '${ur}', '${song}', '${artist}')`);

            card.innerHTML = `
                            <img src=${pic} alt="">
                            <div class="content">
                                <marquee behavior="loop" direction="-1" width="100%"><span lang="angreji" id="angreji">${en}</span> &nbsp; <span lang="hindi" id="hindi">${hi}</span> &nbsp; <span lang="urdu" id="urdu">${ur}</span></marquee>
                                <div class="subtitel">${artist}</div>
                            </div>
                            <i class="bi playListPlay bi-play-circle-fill" onclick="activate_song_popup('${pic}', '${en}', '${hi}', '${ur}', '${song}', '${artist}')"></i>
            `;
            search_results.appendChild(card);
        });
    });
function find_matches() {
    let input_value = search_input.value.trim().toLowerCase(); // lower-case for English
    // let search_results = document.getElementsByClassName("search_results")[0];
    let items = search_results.querySelectorAll(".search_results .card");

    items.forEach(i =>{
        let as = i.querySelector(".content");
        let text_value = as.textContent || as.innerHTML;

        // normalize and compare
        let text_normalized = text_value.trim().toLowerCase();

        if (text_normalized.includes(input_value)) {
            i.style.display = "flex";
        } else {
            i.style.display = "none";
        }
    })

    // Hide list if empty input
    if (search_input.value.length === 0) {
        search_results.style.display = "none";
    } else {
        search_results.style.display = "";
    }
}
search_input.addEventListener("keyup", () => {
    find_matches();
});


let isPlaylist_song = true;
let random_index = 0;

let gana = new Audio("songs/d1.mp3");
let wave = document.getElementsByClassName("wave")[0];
let play_icon = document.getElementById("master_play_icon");
let palyed_song_ka_pic = document.getElementById("poster_master_play");
let played_song_ka_naam_angreji = document.querySelector("#title marquee #angreji");
let played_song_ka_naam_hindi = document.querySelector("#title marquee #hindi");
let played_song_ka_naam_urdu = document.querySelector("#title marquee #urdu");
let played_song_ke_artist_ka_naam = document.querySelector("#title .subtitle");
let dowload_music = document.getElementById("dowload_music");
let progres_bar = document.getElementById("seek");

function play_audio(song_ki_pic, song_ka_naam_angreji, song_ka_naam_hindi,song_ka_naam_urdu, artist_ka_naam) {
    if (!wave.classList.contains('active')) {
        play_icon.classList.remove("bi-play-circle");
        play_icon.classList.add("bi-pause-circle");
        wave.classList.add("active");
    }
    palyed_song_ka_pic.src = song_ki_pic;
    played_song_ka_naam_angreji.innerHTML = song_ka_naam_angreji;
    played_song_ka_naam_hindi.innerHTML = song_ka_naam_hindi;
    played_song_ka_naam_urdu.innerHTML = song_ka_naam_urdu;
    played_song_ke_artist_ka_naam.innerHTML = artist_ka_naam;
    gana.play();
}
function play_next_song() {
    if (isPlaylist_song) {
        gana.src =  playlist_song[playlist_indexing].song;
        dowload_music.setAttribute(`download`, `${playlist_song[playlist_indexing].artist}-${playlist_song[playlist_indexing].en}`);
        dowload_music.href = playlist_song[playlist_indexing].song;
        makeAllBackground();
        Array.from(document.querySelectorAll("#playlist_songs li"))[playlist_indexing].style.background ='rgb(105, 105, 105, 0.1)';
        makeAllPlays();
        playlist_play_icon = document.getElementById(`${playlist_indexing+1}`);
        playlist_play_icon.classList.remove("bi-play-circle-fill");
        playlist_play_icon.classList.add("bi-pause-circle-fill");
        play_audio(playlist_song[playlist_indexing].pic, playlist_song[playlist_indexing].en, playlist_song[playlist_indexing].hi, playlist_song[playlist_indexing].ur, playlist_song[playlist_indexing].artist);
    } else{
        gana.src =  all_songs[random_index].song;
        dowload_music.setAttribute(`download`, `${all_songs[random_index].artist}-${all_songs[random_index].en}`);
        dowload_music.href = all_songs[random_index].song;
        play_audio(all_songs[random_index].pic, all_songs[random_index].en, all_songs[random_index].hi, all_songs[random_index].ur, all_songs[random_index].artist);
    }
}
const makeAllBackground = ()=>{
    Array.from(document.querySelectorAll("#playlist_songs li")).forEach((el)=>{
        el.style.background ='rgb(49, 46, 46)';
    })
}
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("playListPlay")).forEach((el)=>{
        el.classList.remove("bi-pause-circle-fill");
        el.classList.add("bi-play-circle-fill");
    })
}
// let canExicute = false;
function togglePlayPause() {
        if (play_icon.classList.contains("bi-play-circle")) {
            if (isPlaylist_song) {
                Array.from(document.querySelectorAll("#playlist_songs li i"))[playlist_indexing].classList.remove("bi-play-circle-fill");
                Array.from(document.querySelectorAll("#playlist_songs li i"))[playlist_indexing].classList.add("bi-pause-circle-fill");
            }
            wave.classList.add("active");
            play_icon.classList.remove("bi-play-circle");
            play_icon.classList.add("bi-pause-circle");
            gana.play();
        } else {
            play_icon.classList.remove("bi-pause-circle");
            play_icon.classList.add("bi-play-circle");
            wave.classList.remove("active");
            makeAllBackground();
            makeAllPlays();
            gana.pause();
        }  
}
const call_play_next_song = () => {
    if (random_index >= all_songs.length) {
        random_index = 0;
    }
    random_index++;
    play_next_song();
}
const play_previous_song = () =>{
    if (random_index <= 0) {
        random_index = all_songs.length -1;
    }else{
        random_index-=2;
    }
    play_next_song();
}
// listen to Events 
// Musiq Duration
let current_time = document.getElementById("current_time");
let current_end = document.getElementById("current_end");
let bar2 = document.getElementById("bar2");
let dot = document.querySelector(".bar .dot");

gana.addEventListener('timeupdate', () => {
    let musiq_curr = gana.currentTime;
    let musiq_dur = gana.duration;
    let mint1 = Math.floor(musiq_dur/60);
    let sec1 = Math.floor(musiq_dur%60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    current_end.innerText = `${mint1}:${sec1}`;

    let mint2 = Math.floor(musiq_curr / 60);
    let sec2 = Math.floor(musiq_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    current_time.innerText = `${mint2}:${sec2}`;

    progress = parseInt((gana.currentTime/gana.duration) * 100);
    progres_bar.value = progress;

    let seek_bar = seek.value;
    bar2.style.width = `${seek_bar}%`;
    dot.style.left = `${seek_bar}%`;
});

progres_bar.addEventListener('change', ()=>{
    gana.currentTime = (progres_bar.value  * gana.duration)/100;
});

// Audio System
let vol_icon = document.getElementById("vol_icon");
let vol_input = document.getElementById("vol_input");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol_input.addEventListener('change',()=>{
    if (vol_input.value == 0) {
        vol_icon.classList.remove("bi-volume-up-fill");
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-mute-fill");
    } else if(vol_input.value <= 50 && vol_input.value > 0){
        vol_icon.classList.remove("bi-volume-up-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.add("bi-volume-down-fill");
    }else if(vol_input.value > 50 && vol_input.value <= 100){
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.add("bi-volume-up-fill");
    }
    let vol = vol_input.value;
    vol_bar.style.width = `${vol}%`;
    vol_dot.style.left =`${vol}%`;
    gana.volume = vol / 100;
});

function play_music(song_src, song_ki_pic, song_ka_naam_angreji, song_ka_naam_hindi, song_ka_naam_urdu, artist_ka_naam) {
    isPlaylist_song = false;
    closeBtn.click();
    gana.src = song_src;
    dowload_music.setAttribute(`download`, `${artist_ka_naam}-${song_ka_naam_angreji}`);
    dowload_music.href = song_src;
    play_audio(song_ki_pic, song_ka_naam_angreji, song_ka_naam_hindi, song_ka_naam_urdu, artist_ka_naam);
}
// song Info System
const SongPopup = document.getElementById("SongPopup");
const closeBtn = document.getElementById("closeBtn");
let popuppic = document.querySelector(".popup-box img");
let naam = document.querySelector(".popup-box #popup_details marquee");
let playButton = document.querySelector(".popup-box #popup_details button");

const activate_song_popup = (img_src, song_ka_naam_angreji, song_ka_naam_hindi, song_ka_naam_urdu, song_src, artist_ka_naam) => {
    popuppic.src = img_src;
    naam.innerHTML = artist_ka_naam + "-" + song_ka_naam_angreji;
    playButton.setAttribute(`onclick`, `play_music("${song_src}", "${img_src}", "${song_ka_naam_angreji}", "${song_ka_naam_hindi}", "${song_ka_naam_urdu}", "${artist_ka_naam}")`);
    SongPopup.style.display = "flex";
};

closeBtn.onclick = () =>{
  SongPopup.style.display = "none";
};

window.onclick = (e) =>{
  if(e.target === SongPopup) {
    SongPopup.style.display = "none";
  }
};

// Playlist Playing
let playlist_song = [
    {"en":"Choote Na Kabhi Tera Daaman", "hi":"तुम्हारा दामन कभी न छूटे", "ur":"چھوٹے نہ کبھی تیرا دامن", "pic":"pics/kgn.webp", "artist":"Milad Raza Qadri","song":"songs/kgn.mp3"},
    {"en":"Jogi-Shaadi Mein Zaroor Aana", "hi":"जोगी-शादी में जरूर आना", "ur":"جوگی-شادی میں ضرور آنا", "pic":"pics/2.jpg", "artist":"Yasser Desai & Aakanksha Sharma","song":"songs/2.mp3"},
    {"en":"Nashe Si Chadh Gayi (From 'Befikre')", "hi":"नशे सी छा गई (फिल्म 'बे फिक्र' से)", "ur":"نشے سی چھا گئی (فلم 'بے فکر' سے)", "pic":"pics/3.jpg", "artist":"Vishal and Sheykhar & Arijit Sing","song":"songs/b2.mp3"},
    {"en":"Dhadak Title Track-Dhadak", "hi":"धड़क शीर्षक गीत - धड़क", "ur":"دھڑک ٹائٹل ٹریک-دھڑک", "pic":"pics/d.jpg", "artist":"Ajay Gogavale & Shreya Ghoshal","song":"songs/d1.mp3"},
    {"en":"Jug Jug Jeeve-Shiddat", "hi":"जुग जुग जिए - शिद्दत", "ur":"جگ جگ جیو - شدت", "pic":"pics/25.jpg", "artist":"Sachet Tandon","song":"songs/25.mp3"},
    {"en":"Tu Hai", "hi":"तू है", "ur":"تو ہے", "pic":"pics/38.jpg", "artist":"Darshan Raval, Prakriti Giri","song":"songs/38.mp3"},
    {"en":"Raanjhanaa-Raanjhanaa", "hi":"रांझणा-रांझणा", "ur":"رانجھنا-رانجھنا", "pic":"pics/7.jpg", "artist":"Jaswinder Singh & Shiraz Uppal","song":"songs/7.mp3"},
    {"en":"Samjhawan-The Bride Of Humpty Sharma", "hi":"समझावन - हम्प्टी शर्मा की दुल्हन", "ur":"سمجھاون-دی برائیڈ آف ہمپٹی شرما", "pic":"pics/8.jpg", "artist":"Dharma Productions","song":"songs/hs2.mp3"},
    {"en":"Vaara Re-Dhadak", "hi":"वारा रे-धड़क", "ur":"وارا ری - دھڑک", "pic":"pics/d.jpg", "artist":"Ajay Gogavale","song":"songs/d2.mp3"},
    {"en":"Jalebi Title Track - Jalebi", "hi":"जलेबी टाइटल ट्रैक - जलेबी", "ur":"جلیبی ٹائٹل ٹریک - جلیبی", "pic":"pics/14.jpg", "artist":"KK, Tanishk Bagchi","song":"songs/j3.mp3"}
]
let playlist_indexing = 3;
Array.from(document.querySelectorAll("#playlist_songs li .playListPlay")).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        let index = el.target.id;
        playlist_indexing = index-1;
        isPlaylist_song = true;
        if (el.target.classList.contains('bi-pause-circle-fill')) {
            el.target.classList.remove("bi-pause-circle-fill");
            el.target.classList.add("bi-play-circle-fill");
            togglePlayPause();
        } else {
            makeAllPlays();
            makeAllBackground();
            Array.from(document.querySelectorAll("#playlist_songs li"))[index-1].style.background ='rgba(58, 58, 91, 0.5)';
            el.target.classList.remove("bi-play-circle-fill");
            el.target.classList.add("bi-pause-circle-fill");
            gana.src = playlist_song[index-1].song;
            dowload_music.setAttribute(`download`, `${playlist_song[index-1].artist}-${playlist_song[index-1].en}`);
            dowload_music.href = playlist_song[index-1].song;
            play_audio(playlist_song[index-1].pic, playlist_song[index-1].en, playlist_song[index-1].hi, playlist_song[index-1].ur, playlist_song[index-1].artist);
        } 
    })
})
// update karna padega
// Shuffle + gana (Audio Element)
let shuffle = document.getElementsByClassName("shuffle")[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;
    switch (a) {
        case 'next':
            shuffle.classList.add('bi-repeat-1');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
        case 'repeat':
            shuffle.classList.add('bi-shuffle');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-repeat-1');
            shuffle.innerHTML = 'random';
            break;
        case 'random':
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-repeat-1');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});

const next_musiq = ()=>{
    // index++;
    if (isPlaylist_song) {
        if (playlist_indexing >= playlist_song.length) {
            playlist_indexing = 1;
        } else {
            playlist_indexing++;
        }
        gana.src = playlist_song[playlist_indexing].song;
        dowload_music.setAttribute(`download`, `${playlist_song[playlist_indexing].artist}-${playlist_song[playlist_indexing].en}`);
        dowload_music.href = playlist_song[playlist_indexing].song;
        makeAllBackground();
        Array.from(document.querySelectorAll("#playlist_songs li"))[playlist_indexing+1].style.background ='rgb(105, 105, 105, 0.1)';
        makeAllPlays();
        playlist_play_icon = document.getElementById(`${playlist_indexing+1}`);
        playlist_play_icon.classList.remove("bi-play-circle-fill");
        playlist_play_icon.classList.add("bi-pause-circle-fill");
        play_audio(playlist_song[playlist_indexing].pic, playlist_song[playlist_indexing].en, playlist_song[playlist_indexing].hi, playlist_song[playlist_indexing].ur, playlist_song[playlist_indexing].artist);
    } else {
        gana.src = all_songs[random_index].song;
        dowload_music.setAttribute(`download`, `${all_songs[random_index].artist}-${all_songs[random_index].en}`);
        dowload_music.href = all_songs[random_index].song;
        play_audio(all_songs[random_index].pic, all_songs[random_index].en, all_songs[random_index].hi, all_songs[random_index].ur, all_songs[random_index].artist);
        if (random_index >= all_songs.length) {
            random_index = 1;
        } else {
            random_index++;
        }
    }
   
}
const repeat_musiq = ()=>{
    //index;
    if (isPlaylist_song) {
        playlist_indexing;
        gana.src = playlist_song[playlist_indexing].song;
        dowload_music.setAttribute(`download`, `${playlist_song[playlist_indexing].artist}-${playlist_song[playlist_indexing].en}`);
        dowload_music.href = playlist_song[playlist_indexing].song;
        makeAllBackground();
        Array.from(document.querySelectorAll("#playlist_songs li"))[playlist_indexing+1].style.background ='rgb(105, 105, 105, 0.1)';
        makeAllPlays();
        playlist_play_icon = document.getElementById(`${playlist_indexing+1}`);
        playlist_play_icon.classList.remove("bi-play-circle-fill");
        playlist_play_icon.classList.add("bi-pause-circle-fill");
        play_audio(playlist_song[playlist_indexing].pic, playlist_song[playlist_indexing].en, playlist_song[playlist_indexing].hi, playlist_song[playlist_indexing].ur, playlist_song[playlist_indexing].artist);
    } else {
        gana.src = all_songs[random_index].song;
        dowload_music.setAttribute(`download`, `${all_songs[random_index].artist}-${all_songs[random_index].en}`);
        dowload_music.href = all_songs[random_index].song;
        play_audio(all_songs[random_index].pic, all_songs[random_index].en, all_songs[random_index].hi, all_songs[random_index].ur, all_songs[random_index].artist);
        random_index;
    }
}
const random_musiq = ()=>{
    if (isPlaylist_song) {
        if (playlist_indexing >= playlist_song.length) {
            playlist_indexing = 1;
        } else {
            playlist_indexing = Math.floor((Math.random() * playlist_song.length) + 1);
        }
        gana.src = playlist_song[playlist_indexing].song;
        dowload_music.setAttribute(`download`, `${playlist_song[playlist_indexing].artist}-${playlist_song[playlist_indexing].en}`);
        dowload_music.href = playlist_song[playlist_indexing].song;
        makeAllBackground();
        Array.from(document.querySelectorAll("#playlist_songs li"))[playlist_indexing+1].style.background ='rgb(105, 105, 105, 0.1)';
        makeAllPlays();
        playlist_play_icon = document.getElementById(`${playlist_indexing+1}`);
        playlist_play_icon.classList.remove("bi-play-circle-fill");
        playlist_play_icon.classList.add("bi-pause-circle-fill");
        play_audio(playlist_song[playlist_indexing].pic, playlist_song[playlist_indexing].en, playlist_song[playlist_indexing].hi, playlist_song[playlist_indexing].ur, playlist_song[playlist_indexing].artist);
    } else {
        gana.src = all_songs[random_index].song;
        dowload_music.setAttribute(`download`, `${all_songs[random_index].artist}-${all_songs[random_index].en}`);
        dowload_music.href = all_songs[random_index].song;
        play_audio(all_songs[random_index].pic, all_songs[random_index].en, all_songs[random_index].hi, all_songs[random_index].ur, all_songs[random_index].artist);
        if (random_index >= all_songs.length) {
            random_index = 1;
        } else {
            random_index = Math.floor((Math.random() * all_songs.length) + 1);
        }
    }
}
gana.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;
    switch (b) {
        case 'repeat':
            repeat_musiq();
            break;
        case 'next':
            next_musiq();
            break;
        case 'random':
            random_musiq();
            break;
    }
});