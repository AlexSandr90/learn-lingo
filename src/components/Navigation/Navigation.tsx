import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import css from './Navigation.module.scss';
import { auth } from '../../services/firebase';

const getClassName = ({ isActive }: { isActive: boolean }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className={css.navigation}>
      <li>
        <NavLink className={getClassName} to={'/'}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={getClassName} to={'/teachers'}>
          Teachers
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink className={getClassName} to={'/favorites'}>
            Favorite
          </NavLink>
        </li>
      )}
    </nav>
  );
};

export default Navigation;
