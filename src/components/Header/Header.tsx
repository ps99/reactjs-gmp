import React from 'react';
import Logo from '../../images/header-logo.svg'

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header-logo"><img src={Logo} alt="NetflixRoulette" /></a>
      <button className="header-add-new br4">+ add movie</button>
      <fieldset className="header-search">
        <h3>Find your movie</h3>
        <input className="header-search__input br4" placeholder="What do you want to watch?" type="text" name="search" id="search" />
        <button className="header-search__button br4">Search</button>
      </fieldset>
    </header>
  );
}

export default Header;
