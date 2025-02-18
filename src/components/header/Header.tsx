import { ToggleDarkMode } from '../toggle-dark-mode/ToggleDarkMode';
import './header.css';
export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        {/* <img className="header__logo" src="" alt="" /> */}
        Readmatic
      </h1>

      <ToggleDarkMode />
    </header>
  );
};
