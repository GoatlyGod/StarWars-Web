import React, { useEffect, useState } from "react";
import "../src/App.css";
import StarWars from "./components/StarWars";
import PeopleCard from "./components/PeopleCard";
import PlanetCard from "./components/PlanetCard";
const App = () => {
  const [details, setDetails] = useState(null);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://swapi.co/api/people")
      .then(res => res.json())
      .then(res =>
        setCharacters(
          res.results.map((character, id) => ({
            name: character.name,
            gender: character.gender,
            eyeColor: character.eye_color,
            hairColor: character.hair_color
          }))
        )
      );
  }, []);

  return (
    <React.Fragment>
      <StarWars />
      <div>
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <form className="form-inline">
            <button
              type="button active"
              className="btn btn-outline-dark text-light"
            >
              <i className="fa fa-facebook"></i>
            </button>
            <button
              type="button active"
              className="btn btn-outline-dark text-secondary"
            >
              <i className="fa fa-twitter"></i>
            </button>
            <button
              type="button active"
              className="btn btn-outline-dark text-secondary"
            >
              <i className="fa fa-instagram"></i>
            </button>
            <button
              type="button active"
              className="btn btn-outline-dark text-secondary"
            >
              <i className="fa fa-youtube"></i>
            </button>
          </form>

          <b className="navbar-brand" href="#">
            STARWARS
          </b>

          <div class="d-flex">
            <div class="dropdown mr-1">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                id="dropdownMenuOffset"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-offset="10,20"
              >
                Favorites
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div className="Boy input-group">
        <input
          type="text"
          className="Search form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>

      <div>
        <h1 className="subtitle">Characters</h1>
      </div>
      <div className="box2 container">
        <div className="row">
          <div className="box1 d-flex flex-col flex-nowrap">
            {characters.map((character,index) => {
              return (
                <PeopleCard key={index}  name={character.name} eyeColor={character.eyeColor} hairColor={character.hairColor} gender={character.gender} />
              ) 
            })}
          
          </div>
        </div>
      </div>
      <div>
        <h1 className="subtitle">Planets</h1>
      </div>
      <div className="box2 container">
        <div className="row">
          <div className="box1 d-flex flex-col flex-nowrap">
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
