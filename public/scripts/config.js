// function checkWidth(init)
// {
//     /*If browser resized, check width again */
//     if ($(window).width() < 1300) {
//         $('#my-event-block-list').removeClass('uk-child-width-1-4@s');
//         $('#my-event-block-list').addClass('uk-child-width-1-3@s');
//     }
//     else {
//         if (!init) {
//             $('#my-event-block-list').addClass('uk-child-width-1-4@s');
//             $('#my-event-block-list').removeClass('uk-child-width-1-3@s');
//         }
//     }
// }

// $(document).ready(function() {
//     checkWidth(true);

//     $(window).resize(function() {
//         checkWidth(false);
//     });
// });

const mediaQuery = window.matchMedia('(max-width: 1300px)')
function handleTabletChange(e) {
    var a = document.getElementById("my-event-block-list");
    if (e.matches) {
        document.getElementById("my-event-block-list").classList.remove('uk-child-width-1-4@s');
        document.getElementById("my-event-block-list").classList.add('uk-child-width-1-3@s');
    }
    else {
        document.getElementById("my-event-block-list").classList.add('uk-child-width-1-4@s');
        document.getElementById("my-event-block-list").classList.remove('uk-child-width-1-3@s');
    }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)





var table = 
[
    {
    "tag": "tag-prev",
    "tittle" : "1 Изучение такого прикола короч ну это да",
    "text" : "1Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
    "date" : "20.11.2022  19:00",
    "img" : "/imgs/prev.png"
    },
    {
    "tag": "tag-prev",
    "tittle" : "2 Изучение такого прикола короч ну это да",
    "text" : "1Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
    "date" : "20.11.2022  19:00",
    "img" : "/imgs/prev.png"
    },
    {
    "tag": "tag-prev",
    "tittle" : "2 Изучение такого прикола короч ну это да",
    "text" : "1Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
    "date" : "20.11.2022  19:00",
    "img" : "/imgs/prev.png"
    },
    {
    "tag": "tag-prev",
    "tittle" : "2 Изучение такого прикола короч ну это да",
    "text" : "1Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
    "date" : "20.11.2022  19:00",
    "img" : "/imgs/prev.png"
    },
    {
    "tag": "tag-next",
    "tittle" : "1 Изучение такого прикола короч ну это да",
    "text" : "1Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
    "date" : "20.11.2022  19:00",
    "img" : "/imgs/next.png"
    }
]