const table = 
[
    {
    "tag": "tag-prev",
    "tittle" : "123s Изучение такого прикола короч ну это да",
    "text" : "1Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
    "date" : "20.11.2022  19:00",
    "img" : "prev.png"
    },
    {
    "tag": "tag-prev",
    "tittle" : "2 Изучение такого прикола короч ну это да",
    "text" : "1Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
    "date" : "20.11.2022  19:00",
    "img" : "prev.png"
    },
    {
    "tag": "tag-prev",
    "tittle" : "2 Изучение такого прикола короч ну это да",
    "text" : "1Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
    "date" : "20.11.2022  19:00",
    "img" : "prev.png"
    },
    {
    "tag": "tag-prev",
    "tittle" : "2 Изучение такого прикола короч ну это да",
    "text" : "1Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
    "date" : "20.11.2022  19:00",
    "img" : "prev.png"
    },
    {
    "tag": "tag-next",
    "tittle" : "1 Изучение такого прикола короч ну это да",
    "text" : "1Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
    "date" : "20.11.2022  19:00",
    "img" : "next.png"
    }
];

function Card() {
  const mas_return = [];
  table.forEach(x => {
    mas_return.push( 
      <li class={"uk-active " + x.tag}>
          <div uk-grid>
              <div>
                  <div class="uk-card uk-card-default uk-card-small card-options">
                      <div class="uk-card-media-top">
                          <img src={require("./img-for-events/"+x.img)} class="card-img"/>
                      </div>
                      <div class="uk-card-body">
                          <h4 class="uk-card-tittle card-tittle">{x.tittle}</h4>
                          <p class="card-text">{x.text}</p>
                      </div>
                      <div class="uk-card-footer">
                          <span uk-icon="icon: info; ratio: 0.8"></span>
                          <span class="uk-text-meta">
                              <time>{x.date}</time>
                          </span>
                      </div>
                  </div>
              </div>
          </div>
        </li>);
  });
  return (mas_return);
}

export default Card;
