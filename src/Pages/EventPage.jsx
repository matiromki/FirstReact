import { useParams, useLoaderData } from 'react-router-dom'
import { useAuth } from '../hook/useAuth'


const EventPage = () => {
    //для примера
    const {user, password} = useAuth();
    const {id} = useParams();
    const event = useLoaderData();
    return(
        <main class="uk-container uk-container-large" uk-height-viewport="expand: true">
            <div class="uk-card uk-card-default uk-card-body card-for-event">
                <div>
                    <div class="uk-panel uk-margin-medium-bottom">
                        <img class="uk-align-center uk-align-center uk-align-right@l uk-margin-remove-adjacent uk-margin-medium-right@l" src={require("../img-for-events/"+event.img)} width="500" alt="Пример изображения"/>    
                        <h2>{event.tittle}<span class="uk-text-muted">{" #"+id}</span></h2>
                        <p class="card-event-text">Дата проведения: {event.text}</p>
                    </div>
                    <div class="uk-flex uk-flex-between uk-flex-middle">
                        <div>
                            <span uk-icon="icon: info; ratio: 0.8"></span>
                            <span> </span>
                            <span class="uk-text-meta">
                                <time>{event.date}</time>
                            </span>
                        </div>
                        <button class="uk-button uk-button-default confirm-button"> Присоедниться</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

const eventLoader = ({params}) => {
    //запрос на определенный эвент
    const events = [
        {
        "cardId" : "122",
        "tittle" : "Мероприятие 122",
        "text" : "111 Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
        "date" : "11.11.2022 19:00",
        "img" : "not-found.png"
        },
        {
        "cardId" : "123",
        "tittle" : "Мероприятие 123",
        "text" : "112 Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
        "date" : "11.23.2022 19:00",
        "img" : "not-found.png"
        },
        {
        "cardId" : "124",
        "tittle" : "Мероприятие 124",
        "text" : "113 Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
        "date" : "12.09.2022 19:00",
        "img" : "not-found.png"
        },
        {
        "cardId" : "125",
        "tittle" : "Мероприятие 125",
        "text" : "114 Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
        "date" : "12.09.2022 20:00",
        "img" : "not-found.png"
        },
        {
        "cardId" : "126",
        "tittle" : "Мероприятие 126",
        "text" : "115 Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
        "date" : "12.10.2022 19:00",
        "img" : "not-found.png"
        },
        {
            "cardId" : "126",
            "tittle" : "Мероприятие 126",
            "text" : "115 Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
            "date" : "12.16.2022 19:00",
            "img" : "not-found.png"
        }
    ];
    const id = params.id;
    const event = events.find(x => x.cardId == id);
    return event; 
}

// async function getEvents()  { 
//     const Id = useParams();
//     try {
//         const nowDate = new Date();
//         const {data:response} = await axios.post("http://localhost:8000/api/data/token")
//         const events = response.map(x => x.data)
//         events.sort( (a, b) => new Date(b.date) - new Date(a.date)).forEach(element => {
//         if (new Date(element.date) > nowDate) {
//             element["tag"] = "tag-next";
//         }
//         else {
//             element["tag"] = "tag-prev";
//         }
//         const first = element.date.substring(0, 3);
//         const second = element.date.substring(3, 6);
//         element.date = second + first + element.date.substring(6, element.date.lenght);
//         });
//         return events;
    
//     }
//     catch {
//         console.log("Не работает :(");
//     }
// }
// const eventLoader = async () => {
//     const id = params.id;
//     return defer({
//         UserEvents: getEvents()
//     }) 

// }

export {EventPage, eventLoader};