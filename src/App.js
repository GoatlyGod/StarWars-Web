import React, { useEffect } from "react";
import "../src/App.css";
import Card from "./components/Card";

const App = () => {
  // const [details,setDetails] = useState([])
  // const [characters, setCharacters] = useState([])
  // useEffect(() => {
  //   fetch ()
  
  return (
    <React.Fragment>
      <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <form className="form-inline">
          <button type="button active" className="btn btn-outline-dark text-light"><i className="fa fa-facebook"></i></button>
          <button type="button active" className="btn btn-outline-dark text-secondary"><i className="fa fa-twitter"></i></button>
          <button type="button active" className="btn btn-outline-dark text-secondary"><i className="fa fa-instagram"></i></button>
          <button type="button active" className="btn btn-outline-dark text-secondary"><i className="fa fa-youtube"></i></button>
        </form>

        <b className="navbar-brand" href="#">STARWARS</b>

        
        <div class="d-flex">
          <div class="dropdown mr-1">
            <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
              Favorites
            </button>
          </div>
        </div>
      </nav>
      

    </div>
    

   
      <div className="Boy input-group">
        <input type="text" className="Search form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa fa-search"></i></button>
        </div>
      </div>
    

      <div>
        <h1 className="subtitle">Characters</h1>
      </div>
      <div className="box2 container">
        <div className="row">
          <div className="box1 d-flex flex-col flex-nowrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div>
        <h1 className="subtitle">Planets</h1>
      </div>
      <div className="box2 container">
        <div className="row">
          <div className="box1 d-flex flex-col flex-nowrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;