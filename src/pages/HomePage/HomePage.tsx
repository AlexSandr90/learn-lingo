import CallToAction from '../../components/CallToAction/CallToAction';
import Hero from '../../components/Hero/Hero';
import Stats from '../../components/Stats/Stats';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={css.home_page}>
      <div className={css.call_hero}>
        <CallToAction />
        <Hero />
      </div>
      <Stats />
    </section>
  );
};

export default HomePage;
