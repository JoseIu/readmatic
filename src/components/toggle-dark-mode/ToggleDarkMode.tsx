import { useEffect, useState } from 'react';
import { MoonIcon } from '../icons/MoonIcon';
import { SunIcon } from '../icons/SunIcon';
import './toggleDarkMode.css';
export const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  return (
    <div className="toggle-mode">
      <input
        onChange={(e) => setDarkMode(e.target.checked)}
        className="toggle-mode__input"
        type="checkbox"
        name="darkmode-toggle"
        id="darkmode-toggle"
      />
      <label className="toggle-mode__label" htmlFor="darkmode-toggle">
        <button className="toggle-mode__button">
          <SunIcon className="toggle-mode__icon" />
        </button>
        <button className="toggle-mode__button">
          <MoonIcon className="toggle-mode__icon" />
        </button>
      </label>
    </div>
  );
};
