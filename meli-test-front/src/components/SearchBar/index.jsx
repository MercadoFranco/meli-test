import "./styles.sass";
import MeliLogo from "src/assets/Logo_ML.png";
import SearchIcon from "src/assets/ic_Search.png";

import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  const [searchValue, setSearchValue] = useState(q ?? "");

  const handleChange = ({ target }) => {
    setSearchValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.length > 0) {
      navigate(`/items?q=${searchValue}`);
    }
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <Link to="/">
          <img className="logo" src={MeliLogo} alt="Logo de Mercado Libre" />
        </Link>

        <form className="searchbar" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            value={searchValue}
            onChange={handleChange}
          />
          <button type="submit">
            <img src={SearchIcon} alt="Search" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
