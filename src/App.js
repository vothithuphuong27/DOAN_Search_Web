import React, { useState } from 'react';
import './App.css';
import Fuse from 'fuse.js';

import characters from './characters.json';


function App() {
  const [query, setQuery] = useState('');

  const fuse = new Fuse(characters, {
    keys: [
      'NameBook',
      'Author',
    ],
    includeScore: true
  });

  // const results = fuse.search(query);
  // const characterResults = query ? results.map(character => character.item) : characters;

  const results = fuse.search(query);
  const characterResults = results.map(results => results.item)
  // function onSearch({ currentTarget }) {
  //   updateQuery(currentTarget.value);
  // }

  function handleOnSearch({ currentTarget = {} }) {
    const { value } = currentTarget;
    setQuery(value);
  }

  return (
    <>
      <header className="App-header">
        <img className="backgr" src="images/logo.jpg" alt="logo" />
        <img className="logo-img" src="http://wp.acmeedesign.com/bookstore/wp-content/uploads/2016/01/logo_green.png"></img>
        <div className="container">
          <h1 className="chude"> SEARCH BOOK</h1>
          <h4><marquee>Một cuốn sách hay cho ta một điều tốt, một người bạn tốt cho ta một điều hay.</marquee></h4>
        </div>
      </header>
      <main className="container">
        <ul className="characters">
          {characterResults.map(character => {
            const { NameBook, Author, thumb } = character;
            return (
              <li key={NameBook} className="character">
                <span className="character-thumb" style={{
                  backgroundImage: `url(${thumb})`
                }} />
                <ul className="character-meta">
                  <li>
                    <strong>Name:</strong> {NameBook}
                  </li>
                  <li>
                    <strong>Author:</strong> {Author}
                  </li>
                </ul>
              </li>
            )
          })}
        </ul>
        <aside>
          <form className="search">
            <button class="icon"><i class="fa fa-search"></i></button>
            <input type="text" value={query} onChange={handleOnSearch} placeholder="Search" />
          </form>
        </aside>
        <div id="icon-logo">
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-google"></a>
        </div>
      </main>
      <div class="fb-page"
        data-href="https://www.facebook.com/Thu-Ph%C6%B0%C6%A1ng-101590585156852"
        data-width="380"
        data-hide-cover="false"
        data-show-facepile="false">
      </div>
    </>
  );
}
export default App;
