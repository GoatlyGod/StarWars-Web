import React from 'react';



const App = () => {
  return(
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <form className="form-inline">
          <button type="button active" className="btn btn-outline-dark text-light"><i className="fa fa-facebook"></i></button>
          <button type="button active" className="btn btn-outline-dark text-secondary"><i className="fa fa-twitter"></i></button>
          <button type="button active" className="btn btn-outline-dark text-secondary"><i className="fa fa-instagram"></i></button>
          <button type="button active" className="btn btn-outline-dark text-secondary"><i className="fa fa-youtube"></i></button>
        </form>

        <b className="navbar-brand" href="#">STARWARS</b>

        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn my-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
          
        </form>
      </nav>
     
    </div>

    
      
          
  
       
       
      
    
  )
}

export default App;
