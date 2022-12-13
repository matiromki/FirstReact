const CreatePage = () => {
    return (
        <main class="uk-container uk-container-large" uk-height-viewport="expand: true">
            <h1 class="uk-heading-divider">Создание мероприятия</h1>
            <form id="create-event-form" class="create_form uk-width-3-4@m uk-margin-auto" action="" method="POST">
                <fieldset class="uk-fieldset uk-margin">
                    <legend class="uk-legend uk-margin-small-left uk-text-lead uk-text-bold">Оcновная информация</legend>
                    <div class="uk-card uk-card-body uk-card-default card-options1 uk-margin-medium-bottom">
                        <h4 class="uk-margin-small-bottom uk-margin-small-top">Название</h4>
                        <p class="uk-margin-small-top">Назовите ваше событие ярко и кратко, чтобы заинтересовать пользователей.</p>
                            <input class="uk-input" name="eventName" type="text" placeholder="Введите название мероприятия" required autocomplete="off"/>
                        <h4 class="uk-margin-small-bottom">Описание</h4>
                        <p class="uk-margin-small-top">Расскажите, что будет на мероприятии и чем оно полезно. Рекомендуем делать описание на 3–4 абзаца.</p>
                            <input class="uk-input" name="eventInfo" type="text" placeholder="Введите описание мероприятия" required autocomplete="off" rows="3"/>
                        <h4 class="uk-margin-small-bottom">Дата</h4>
                        <p class="uk-margin-small-top">Укажите дату начала мероприятия.</p>
                        <input type="date" id="start" />
                    </div>

                    <legend class="uk-legend uk-margin-small-left uk-text-lead uk-text-bold">Сетевое мероприятие</legend>
                    <div class="uk-card uk-card-body uk-card-default card-options1 uk-margin-medium-bottom">
                        <h4 class="uk-margin-small-bottom">Ссылка на мероприятие</h4> 
                        <p class="uk-margin-small-top">Введите ссылку, если собираетесь проводить сетевое мероприятие. Сетевые мероприятия позволяют подключать другие точки кипения и дают доступ к аудитории других регионов.</p>
                            <input class="uk-input" name="eventLink" type="text" placeholder="Введите ссылку" autocomplete="off"/>
                    </div>

                    <legend class="uk-legend uk-margin-small-left uk-text-lead uk-text-bold">Баннер</legend>
                    <div class="uk-card uk-card-body uk-card-default card-options1">
                        <h4 class="uk-margin-small-bottom">Добавление изображения</h4> 
                        <p class="uk-margin-small-top">Формат: .jpg и .png, вес: до 2 Mb.</p>
                        <div class="js.upload uk-form-custom">
                            <input id="create-img-file" type="file"/>                    
                            <button id="create-img-file-button" type="button" class="uk-button-primary color-purple create-img-file-button">Выбрать</button>
                        </div>                         
                    </div>
                    <div class="uk-margin uk-text-right uk-margin-small-right">
                        <button type="submit" class="uk-button uk-button-default confirm-button">Отправить</button>
                    </div>
                </fieldset>
            </form>
        </main>

    );
}

export {CreatePage};