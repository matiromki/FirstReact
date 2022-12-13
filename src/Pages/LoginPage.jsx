import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth'

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        const password = form.userpass.value;

        signin(user, password, () => navigate(fromPage, {replace: true}));
    }

  return (
    <main uk-height-viewport="expand: true">
    <form onSubmit={handleSubmit} class="uk-container uk-container-small">
      <div class="uk-card uk-card-default uk-card-body card-options1">
        <h1 class="uk-margin-small-bottom">Регистарция</h1>
        <div class="uk-card uk-card-body uk-card-small">
            <h4 class="uk-margin-small-bottom uk-margin-small-top">Логин</h4>
                <input class="uk-input" name="username" type="text" placeholder="Введите логин" required autocomplete="off"/>
            <h4 class="uk-margin-small-bottom">Пароль</h4>
                <input class="uk-input uk-margin-medium-bottom" name="userpass" type="text" placeholder="Введите пароль" required autocomplete="off" rows="3"/>
                <button type="submit" class="uk-button uk-button-default uk-align-right confirm-button">Отправить</button>
        </div>
        </div>
      </form>
    </main>
    
  )
}

export {LoginPage};