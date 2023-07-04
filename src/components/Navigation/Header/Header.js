import { LoginMenu } from 'components/Navigation/LogInMenu/LogInMenu';
import css from './Header.module.css';
import { OwnNavigation } from "components/Navigation/OwnNavigation/OwnNavigation";
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <ul className={css.nav_list}>
          <OwnNavigation />
          {isLoggedIn ? <UserMenu /> : <LoginMenu />}
        </ul>
      </nav>
    </header>
  );
}
