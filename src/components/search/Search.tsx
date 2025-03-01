import { SearchIcon } from '../icons/SearchIcon';
import './search.css';

type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};
export const Search = ({ setSearchTerm }: Props) => {
  return (
    <div className="search">
      <label className="search__label" htmlFor="search">
        Search
      </label>
      <input
        className="search__input"
        type="search"
        name="search"
        id="search"
        placeholder="search section"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchIcon className="search__icon" />
    </div>
  );
};
