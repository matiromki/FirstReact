import Next from "./imgs/next.png";

function App() {
  return (
    <li class="uk-active tag-next">
      <div uk-grid>
        <div>
          <div class="uk-card uk-card-default uk-card-small card-options">
            <div class="uk-card-media-top">
              <img src={Next} class="card-img" alt="Next"/>
            </div>
            <div class="uk-card-body">
              <h4 class="uk-card-tittle card-tittle">4 Изучение такого прикола короч ну это да</h4>
              <p class="card-text"> 4Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.</p>
            </div>
            <div class="uk-card-footer">
              <span uk-icon="icon: info; ratio: 0.8"></span>
              <span class="uk-text-meta">
                <time datetime="2022-12-20f19:00">20.11.2022  19:00</time>
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default App;
