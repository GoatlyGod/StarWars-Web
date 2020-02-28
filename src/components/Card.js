import React from "react";
import heartOutline from "../assets/heart-outline.svg";
const Card = () => {
  return (
    <div>
      <div class="card mr-3 ml-1">
        <img
          src="https://cdn.mos.cms.futurecdn.net/fWdeQQoFWwwgxqHSJ3HkpV-1200-80.jpg"
          class="card-img-top"
          alt="This is an img"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div class="d-flex justify-content-around">
            <a class="btn btn-primary" href="...">
                Go somewhere
            </a>
            <button type="button" class="btn btn-outline-warning">
            <img src={heartOutline} alt="favorite"></img>
            </button>
          </div>
          

        </div>
      </div>
    </div>
  );
};
export default Card;
