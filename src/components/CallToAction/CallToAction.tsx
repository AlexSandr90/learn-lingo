import Button from '../Button/Button';
import css from './CallToAction.module.scss';

const CallToAction = () => {
  return (
    <div className={css.wrap}>
      <h1>
        Unlock your potential with the best <span>language</span> tutors
      </h1>
      <p>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>

      <Button ariaLabel='Get started' className={css.button}>Get started</Button>
    </div>
  );
};

export default CallToAction;
