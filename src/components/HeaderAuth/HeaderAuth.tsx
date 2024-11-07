import css from './HeaderAuth.module.css';
import icons from '../../images/icons.svg';
import Button from '../Button/Button';

const HeaderAuth = () => {
  return (
    <div className={css.auth}>
      <Button className={css.login} aria-label="Log in">
        <svg className={css.login_icon}>
          <use href={`${icons}#log-in`} />
        </svg>
        Log in
      </Button>

      <Button className={css.register} aria-label="Registration">
        Registration
      </Button>
    </div>
  );
};

export default HeaderAuth;
