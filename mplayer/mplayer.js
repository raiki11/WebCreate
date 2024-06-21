
var listitems = document.querySelectorAll('li');

for (var i = 0; i < listitems.length; i++) {
    console.log(listitems[i]);
    listitems[i].addEventListener('click',
        (e) => {
            var li = e.target;
            playMusic(li);
        }
    );
}

function playMusic(li) {
    var file = li.getAttribute('data-file');
    var audio = document.querySelector('audio');
    audio.setAttribute('src', file);
    audio.play();

    var activeli = document.querySelector('.active');

    activeli.className = '';
    li.className = 'active';
}

var audio = document.querySelector('audio');
audio.addEventListener('play',
    (e) => {
        var img = document.querySelector('img');
        img.setAttribute('src', 'pict_play.png');
    }
);
audio.addEventListener('pause',
    (e) => {
        var img = document.querySelector('img');
        img.setAttribute('src', 'pict_stop.png');
    }
);

audio.addEventListener('ended',
    (e) => {
        var img = document.querySelector('img');
        img.setAttribute('src', 'pict_stop.png');

        var activeli = document.querySelector('.active');

        var nextli = activeli.nextElementSibling;

        if (nextli != null) {
            playMusic(nextli);
        }

        console.log('active ' + activeli + activeli.getAttribute('data-file'));
        console.log('next ' + nextli + nextli.getAttribute('data-file'));
    }
);

var random = document.querySelector('#random');
random.addEventListener('click',
    (e) => {
        e.preventDefault();
        var listitems = document.querySelectorAll('li');
        var len = listitems.length;
        var rnd = Math.floor(Math.random() * len);
        playMusic(listitems[rnd]);
    }
)