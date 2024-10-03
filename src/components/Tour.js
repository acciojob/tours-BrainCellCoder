import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p id={`tour-item-para-${id}`}>
          {readMore ? info : `${info.substring(0, 200)}`}
          <button id={`see-more-${id}`} onClick={() => setReadMore(!readMore)}>
            Show more/See less
          </button>
        </p>
        <button
          className="delete-btn"
          id={`delete-btn-${id}`}
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
