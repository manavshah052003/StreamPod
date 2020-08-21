var markup = function(id, name, author, image) {

    return `
    
    
    <div class="card">
        <div class="panel">
        <div class="title">
            ${name}
        </div>
        <div class="author">
            ${author}
        </div>
        <div class="control">
            <button onclick="mint()" class="prev">
            <i class="material-icons">fast_rewind</i>
            </button>
            <button id="playbtn${id}" onclick="play(this, ${id})" class="playbtn">
            <i class="material-icons">play_arrow</i> 
            </button>
            
            <button onclick="maxt()" class="next">
            
             <i class="material-icons">fast_forward</i>
                
            </button>
        </div>
        </div>
        <div class="image">
        <img src="${image}"/>
        </div>
        </div>
        
        
        `;

};

var aud = new Audio();

var lastsong = null;


var i = 0,
    text;
text = "     AudioBook Player "



function typing() {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
}
setInterval(typing, 300);



var songs = [


    {
        name: "21 Lessons for the 21st Century Part 1",
        artist: "Yuval Noah Harari",
        poster: "https://thumbs2.imgbox.com/e0/c0/bg7qfnch_t.jpg",
        song: "https://drive.google.com/uc?export=download&id=1G-zgjHl81jVeo7nWewsWXpvz4-1zTO98",
        isPlay: false
    },



    {
        name: "21 Lessons for the 21st Century Part 2",
        artist: "Yuval Noah Harari",
        poster: "https://thumbs2.imgbox.com/e0/c0/bg7qfnch_t.jpg",
        song: "https://drive.google.com/uc?export=download&id=1G5pTwqb5H-1ErDhaK2Bj_ceh0BcLwM6j",
        isPlay: false
    },



    {
        name: "21 Lessons for the 21st Century Part 3",
        artist: "Yuval Noah Harari",
        poster: "https://thumbs2.imgbox.com/e0/c0/bg7qfnch_t.jpg",
        song: "https://drive.google.com/uc?export=download&id=1G8pd9zfMDkkwmZ9RaZFd02tJDQKryaeR",
        isPlay: false
    },



    {
        name: "21 Lessons for the 21st Century Part 4",
        artist: "Yuval Noah Harari",
        poster: "https://thumbs2.imgbox.com/e0/c0/bg7qfnch_t.jpg",
        song: "https://drive.google.com/uc?export=download&id=1GCujFzw2fqj30aafiSp4rxxdt1BVNQam",
        isPlay: false
    },



    {
        name: "21 Lessons for the 21st Century Part 5",
        artist: "Yuval Noah Harari",
        poster: "https://thumbs2.imgbox.com/e0/c0/bg7qfnch_t.jpg",
        song: "https://drive.google.com/uc?export=download&id=1GGVaerCAG7-8DLkkCguyxQd8XDk4BpZd",
        isPlay: false
    },

    {
        name: "21 Lessons for the 21st Century Part 6",
        artist: "Yuval Noah Harari",
        poster: "https://thumbs2.imgbox.com/e0/c0/bg7qfnch_t.jpg",
        song: "https://drive.google.com/uc?export=download&id=1GINK_m2gOjD9h7hu-wDB9V9Ib6yXUAMi",
        isPlay: false
    },


    {
        name: "21 Lessons for the 21st Century Part 7",
        artist: "Yuval Noah Harari",
        poster: "https://thumbs2.imgbox.com/e0/c0/bg7qfnch_t.jpg",
        song: "https://drive.google.com/uc?export=download&id=1GV87QdkYL3I_-LtmYhf4jRGyHYUeEjXA",
        isPlay: false
    },

    {
        name: "21 Lessons for the 21st Century Part 8",
        artist: "Yuval Noah Harari",
        poster: "https://thumbs2.imgbox.com/e0/c0/bg7qfnch_t.jpg",
        song: "https://drive.google.com/uc?export=download&id=1G_i8Rhl0TnrXk165wVTreR-IZUUO4vs8",
        isPlay: false
    },

    {
        name: "21 Lessons for the 21st Century Part 9",
        artist: "Yuval Noah Harari",
        poster: "https://thumbs2.imgbox.com/e0/c0/bg7qfnch_t.jpg",
        song: "https://drive.google.com/uc?export=download&id=1Gc6JEBNxaK1ncb_LN9Loxi7Lstfr4nJq",
        isPlay: false
    },


    {
        name: "21 Lessons for the 21st Century Part 10",
        artist: "Yuval Noah Harari",
        poster: "https://thumbs2.imgbox.com/e0/c0/bg7qfnch_t.jpg",
        song: "https://drive.google.com/uc?export=download&id=1GdPNqm_CPq5HzSJYRQuoWHhilQ6DLU5o",
        isPlay: false
    },


    {
        name: "21 Lessons for the 21st Century Part 11",
        artist: "Yuval Noah Harari",
        poster: "https://thumbs2.imgbox.com/e0/c0/bg7qfnch_t.jpg",
        song: "https://drive.google.com/uc?export=download&id=1GglRRNcMU6P0x5Cstd1BfMdJoDE-cIRr",
        isPlay: false
    }




    // {
    //     name: "Closer",
    //     artist: "Chainsmoker, Ft. Halsey",
    //     poster: "https://wallpapercave.com/wp/wp4606687.jpg",
    //     song: "https://dl.dropbox.com/s/zrll5kci35tyvw1/The%20Chainsmokers%20-%20Closer%20ft%20Halsey.mp3?dl=0",
    //     isPlay: false
    // },

    // {
    //     name: "Yummy",
    //     artist: "Justin Biebet",
    //     poster: "https://miro.medium.com/max/640/0*jfJeWbzVcwZ06Sok.jpg",
    //     song: "https://dl.dropbox.com/s/s0hh28w0h59chuu/Justin%20Bieber%20-%20Yummy.mp3?dl=0",
    //     isPlay: false
    // },


    // {
    //     name: "Despacito",
    //     artist: "Daddy Yankee, Louis Foncy",
    //     poster: "https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY120_CR19,0,82,120_AL_.jpg",
    //     song: "https://dl.dropbox.com/s/5v7lazyj1x0yz5r/Luis%20Fonsi%20-%20Despacito%20ft%20Daddy%20Yankee.mp3?dl=0",
    //     isPlay: false
    // },

    // {
    //     name: "Old Town Road",
    //     artist: "Lil Nas",
    //     poster: "https://musicrow.com/wp-content/uploads/2019/05/Old-Town-Road-poster.jpg",
    //     song: "https://dl.dropbox.com/s/j1y8td9gbtg8j2q/Lil%20Nas%20X%20-%20Old%20Town%20Road%20ft%20Billy%20Ray%20Cyrus.mp3?dl=0",
    //     isPlay: false
    // },


    // {
    //     name: "Duniya",
    //     artist: "Arijit Singh",
    //     poster: "https://a10.gaanacdn.com/gn_img/song/NOXWVgbkqL/XWVvAmzgWk/size_l_1551078085.webp",
    //     song: "https://dl.dropbox.com/s/rroqqu5gfa36lck/Luka%20Chuppi%20Duniyaa%20Song%20Kartik%20Aaryan%20Kriti%20Sanon%20Akhil%20Dhvani%20B%20Abhijit%20V%20Kunaal%20V.mp3?dl=0",
    //     isPlay: false
    // },

    // {
    //     name: "Tujhe Kitna Chahne Lage",
    //     artist: "Arijit Singh",
    //     poster: "https://sklktecdnems01.cdnsrv.jio.com/c.saavncdn.com/763/Tujhe-Kitna-Chahne-Lage-From-Kabir-Singh--Hindi-2019-20190531075012-150x150.jpg",
    //     song: "https://dl.dropbox.com/s/2kecjxyo8ge6v1t/LYRICAL%20Tujhe%20Kitna%20Chahne%20Lage%20Kabir%20Singh%20Mithoon%20Feat%20Arijit%20Singh%20Shahid%20Kapoor%20Kiara%20A.mp3?dl=0",
    //     isPlay: false
    // },


    // {
    //     name: "Ik Mulaaqat",
    //     artist: "Nushrat Barucha",
    //     poster: "https://a10.gaanacdn.com/gn_img/song/qaLKY623pO/LKY981QaKp/size_m_1567770655.webp",
    //     song: "https://dl.dropbox.com/s/b03y9227qql35iu/Ik%20Mulaqaat%20-%20Full%20Dream%20Girl%20Ayushmann%20Khurrana%20Nushrat%20Bharucha%20Altamash%20F%20%26%20Palak%20M.mp3?dl=0",
    //     isPlay: false
    // },



    // {
    //     name: "Baam",
    //     artist: "Nancy Momoland",
    //     poster: "https://newzfresh.com/wp-content/uploads/2020/04/Nancy_Momoland_whatsapp_dp.jpg",
    //     song: "https://dl.dropbox.com/s/kk9nc6opb5tcp3l/MOMOLAND%EB%AA%A8%EB%AA%A8%EB%9E%9C%EB%93%9C%20_%20BAAM.mp3?dl=0",
    //     isPlay: false
    // },



    // {
    //     name: "Lehanga",
    //     artist: "Jass Manak",
    //     poster: "https://hrmp3.com/upload_file/3/6/thumb-Mainu%20Lehenga%20Punjabi%20Mp3%20Song%20(HrMp3.Com).jpg",
    //     song: "https://dl.dropbox.com/s/wpadkau25wkequs/Lehanga%20Jass%20Manak%20Song%20Latest%20Punjabi%20Song%202019%20GeetMP3.mp3?dl=0",
    //     isPlay: false
    // },


    // {
    //     name: "Nazm Nazm ",
    //     artist: "Arko Pravo Mukherjee",
    //     poster: "https://makemykaraoke.com/images/thumbnails/300/300/detailed/47/Bareilly-Ki-Barfi-Nazm-Nazm.jpg",
    //     song: "https://dl.dropbox.com/s/iq3xaq929zlac75/Nazm%20Nazm%20-%20al%20Bareilly%20Ki%20Barfi%20Kriti%20Sanon%20Ayushmann%20Khurrana%20%26%20Rajkummar%20Rao%20Arko.mp3?dl=0",
    //     isPlay: false
    // },


    // {
    //     name: "Shaitaan Ka Saala",
    //     artist: "Vishal",
    //     poster: "https://a10.gaanacdn.com/gn_img/song/7rVW1Rbk56/VW1evp65Wk/size_l_1570445948.webp",
    //     song: "https://dl.dropbox.com/s/zwq0x6wl08z14xn/Shaitan%20Ka%20Saala%20-%20Full%20Song%20Housefull%204%20Akshay%20Kumar%20Bala%20Bala%20Shaitan%20Ka%20Sala%20Full%20Song.mp3?dl=0",
    //     isPlay: false
    // },


    // {
    //     name: "Abhi to party shuru hui h",
    //     artist: "Badshah",
    //     poster: "https://static.toiimg.com/thumb/msid-48099531,width-800,height-600,resizemode-75/48099531.jpg",
    //     song: "https://dl.dropbox.com/s/b6l7up3ucus12fd/%27Abhi%20Toh%20Party%20Shuru%20Hui%20Hai%27%20FULL%20Song%20Khoobsurat%20Badshah%20Aastha.mp3?dl=0",
    //     isPlay: false
    // },
    // {
    //     name: "Teri Mitti",
    //     artist: "B Praak",
    //     poster: "https://static.toiimg.com/thumb/msid-68426152,width-800,height-600,resizemode-75,imgsize-96150/68426152.jpg",
    //     song: "https://dl.dropbox.com/s/ynzle4xr0vds5jk/Teri%20Mitti%20-%20Kesari%20Akshay%20Kumar%20%26%20Parineeti%20Chopra%20Arko%20B%20Praak%20Manoj%20Muntashir.mp3?dl=0",
    //     isPlay: false
    // },

    // {
    //     name: "Sakhiyaan",
    //     artist: "Maninder Buttar",
    //     poster: "https://a10.gaanacdn.com/gn_img/albums/zLp36PvbrG/Lp36pOL0br/size_l_1540031667.webp",
    //     song: "https://dl.dropbox.com/s/i4dp4yls9zum3lx/Sakhiyaan%20Maninder%20Buttar%20MixSingh%20Latest%20Punjabi%20Song%202018.mp3?dl=0",
    //     isPlay: false
    // },



    // {
    //     name: "Love Dose",
    //     artist: "Yo Yo Honey Singh",
    //     poster: "https://resize1.indiatvnews.com/en/resize/oldbucket/360_-/entertainmentbollywood/IndiaTv49e8dd_love-dose-song.jpg",
    //     song: "https://dl.dropbox.com/s/bp8a3gngyrriu9a/Official%20Love%20Dose%20Full%20Song%20Yo%20Yo%20Honey%20Singh%20Desi%20Kalakar.mp3?dl=0",
    //     isPlay: false
    // },



    // {
    //     name: "Blue Eyes",
    //     artist: "Yo Yo Honey Singh",
    //     poster: "https://a10.gaanacdn.com/gn_img/albums/g4w3vwrWjJ/4w3vwD9GWj/size_m.webp",
    //     song: "https://dl.dropbox.com/s/78kgphpj426rimj/Blue%20Eyes%20YO%20YO%20Honey%20Singh.mp3?dl=0",
    //     isPlay: false
    // },




    // {
    //     name: "Desi Kalakaar",
    //     artist: "Yo Yo Honey Singh",
    //     poster: "https://a10.gaanacdn.com/gn_img/albums/w4MKPObojg/4MKPD941Ko/size_l.webp",
    //     song: "https://dl.dropbox.com/s/5zrv5k4qdd5o46r/Desi%20Kalakaar%20Full%20AUDIO%20Song%20Yo%20Yo%20Honey%20Singh%20Desi%20Kalakaar%20Honey%20Singh%20New%20Songs%202014.mp3?dl=0",
    //     isPlay: false
    // },




    // {
    //     name: "Lamborghini",
    //     artist: "The Doorbeen, Ft Ragini",
    //     poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Lamberghini_song_cover.jpeg/220px-Lamberghini_song_cover.jpeg",
    //     song: "https://dl.dropbox.com/s/hk7qlpouf49j2pk/Lamberghini%20Full%20The%20Doorbeen%20Feat%20Ragini%20Latest%20Punjabi%20Song%202018%20Speed%20Records.mp3?dl=0",
    //     isPlay: false
    // },




    // {
    //     name: "Dheeme Dheeme",
    //     artist: "Tony Kakkar,Neha  Kakkar",
    //     poster: "https://a10.gaanacdn.com/gn_img/song/Dk9KN2KBx1/9KNerJPdbB/size_m_1573453065.webp",
    //     song: "https://dl.dropbox.com/s/gg4vakgmq8xgzii/Dheeme%20Dheeme%20Full%20Song%20Pati%20Patni%20Aur%20Woh%20Kartik%20Aryan%20Dheeme%20Dheeme%20Tony%20Kakkar%20Neha%20Kakkar.m4a?dl=0",
    //     isPlay: false
    // },


    // {
    //     name: "Genda Phool ",
    //     artist: "Badshah",
    //     poster: "https://images.indianexpress.com/2020/04/genda-phool-759.jpg",
    //     song: "https://dl.dropbox.com/s/31vcnh61oq5ltcj/Badshah%20-%20Genda%20Phool%20JacquelineFernandez%20Payal%20Dev%202020.mp3?dl=0",
    //     isPlay: false
    // },



    // {
    //     name: "Humsafar ",
    //     artist: "Akhil Sachdeva",
    //     poster: "https://static.toiimg.com/thumb/msid-57204393,imgsize-155220,width-800,height-600,resizemode-75/57204393.jpg",
    //     song: "https://dl.dropbox.com/s/3x91m3x5wcmupzs/Humsafar%20Full%20Varun%20%26%20Alia%20Bhatt%20Akhil%20Sachdeva%20Badrinath%20Ki%20Dulhania.mp3?dl=0",
    //     isPlay: false
    // },


    // {
    //     name: "The bhoot song ",
    //     artist: "Mika Singh",
    //     poster: "https://www.theindianwire.com/wp-content/uploads/2019/10/Bhoot-Song.jpg",
    //     song: "https://dl.dropbox.com/s/lzothl31pj8qz0n/Lyrical%20The%20Bhoot%20Song%20Housefull%204%20Akshay%20Kumar%20Nawazuddin%20Siddiqui%20Mika%20Singh%20Farhad%20Samji.mp3?dl=0",
    //     isPlay: false
    // },

    // {
    //     name: "Ramayan Theme Song",
    //     artist: "Ravindra Jain",
    //     poster: "https://akm-img-a-in.tosshub.com/sites/ichowk/story/small/202003/ramayana-1-311_032820061047.jpg",
    //     song: "https://dl.dropbox.com/s/3o2lziidric3tf6/Mangal%20Bhavan%20Amangal%20Haari%20Ramayan%20Title%20Song%201987.mp3?dl=0",
    //     isPlay: false
    // },


    // {
    //     name: "Sanjeevni Buti ",
    //     artist: "Ravindra Jain",
    //     poster: "https://images.assettype.com/freepressjournal%2F2020-04%2F188f1dc1-55d1-4194-81b1-89ccdbbae454%2F91978837_850074375404455_2767622649729184657_n.jpg?rect=0%2C0%2C760%2C428&format=webp&w=400&dpr=2.8",
    //     song: "https://dl.dropbox.com/s/y9wm4r2j9j9oy1v/Sanjivani%20Buti%20-%20Kalnemi%20Ka%20Vadh%20Ram%20jai%20jai%20Ram%20song%20Himalayan%20me%20hnuman.mp3?dl=0",
    //     isPlay: false
    // }


];

window.onscroll = function() {

    var nav = document.getElementById("nav");
    var textb = document.getElementById("text");

    textb.style.transform = "translate(0, -" + window.scrollY / 2 + "px)"

    if (window.scrollY >= 145) {

        nav.style.background = "#07CFD4";



    } else {

        nav.style.background = "transparent";

    }

}

window.onload = function() {

    var container = document.getElementById("container");

    for (var i = 0; i <= songs.length - 1; i++) {

        container.innerHTML += markup(i, songs[i].name, songs[i].artist, songs[i].poster);

    }
    var pre = document.getElementById("pre");

    pre.style.display = "none";


}

function opensearch() {

    document.getElementById("sbar").style.right = "0";

    scrollTo(0, 145);

}

function openm() {

    document.getElementById("drop").style.left = "0";

}

function closem() {

    document.getElementById("drop").style.left = "-300px";

}

function closesearch() {

    document.getElementById("sbar").style.right = "-100%";

    document.getElementById("inp").value = "";

    var cardc = document.getElementsByClassName("card");

    for (var i = 0; i <= cardc.length - 1; i++) {

        cardc[i].style.display = "";

    }

}

function search() {
    var m = document.getElementsByClassName("card");
    var inp = document.getElementById("inp").value.toUpperCase();
    for (var i = 0; i <= m.length - 1; i++) {
        if (m[i].innerHTML.toUpperCase().indexOf(inp) != -1) {
            m[i].style.display = "";
        } else {
            m[i].style.display = "none";
        }
    }
}

function mint() {
    var isPlaying = aud.currentTime > 0 && !aud.paused && !aud.ended && aud.readyState > 2;

    if (isPlaying) {
        aud.currentTime = aud.currentTime - 10;
    }
}

function maxt() {
    var isPlaying = aud.currentTime > 0 && !aud.paused && !aud.ended && aud.readyState > 2;

    if (isPlaying) {
        aud.currentTime = aud.currentTime + 10;
    }
}






function play(e, i) {



    if (songs[i].isPlay == false) {

        var loadmusic = document.getElementById("loadmusic");

        loadmusic.style.transform = "scaleY(1)";


        aud.addEventListener('loadeddata', function()  {

            loadmusic.style.transform = "scaleY(0)"; 
        }, false);


        if (lastsong == null) {

            e.innerHTML = "<i class='material-icons'>pause</i>";

            aud.src = songs[i].song;

            aud.play();

            songs[i].isPlay = true;

            lastsong = i;

        } else {

            songs[lastsong].isPlay = false;

            document.getElementById("playbtn" + lastsong).innerHTML = "<i class='material-icons'>play_arrow</i>";

            e.innerHTML = "<i class='material-icons'>pause</i>";

            aud.src = songs[i].song;

            aud.play();

            songs[i].isPlay = true;

            lastsong = i;

        }



    } else {

        var isPlaying = aud.currentTime > 0 && !aud.paused && !aud.ended && aud.readyState > 2;

        if (isPlaying) {

            e.innerHTML = "<i class='material-icons'>play_arrow</i>";

            songs[i].isPlay = false;

            aud.pause();

            lastsong = null;

        }
    }
}