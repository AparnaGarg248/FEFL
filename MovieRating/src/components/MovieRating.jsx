import React from "react";
import { useState, useEffect } from "react";

function MovieRating() {
  const [response, setResponse] = useState([]);
  const [filter, setFilter] = useState("Greater than 9");

  function dropDownHandler(event) {
    setFilter(event.target.value);
  }

  let newArr = response.filter((movie) => {
    if (filter == "Greater than 9" && movie.rating >= 9) {
      return true;
    } else if (filter == "Smaller than 9" && movie.rating < 9) {
      return true;
    }
  });

  useEffect(() => {
    fetch("https://feecq.github.io/api/movies.json")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setResponse(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <select onChange={dropDownHandler}>
        <option value="Greater than 9">Greater than 9</option>
        <option value="Smaller than 9">Smaller than 9</option>
      </select>

      <div
        style={{
          display: "flex",
          height: "100dvh",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {newArr.map((movie) => {
          return (
            <div
              style={{
                height: "300px",
                width: "250px",
                border: "1px solid black",
                margin: "10px",
                textAlign: "center",
                paddingTop: "5px",
              }}
            >
              <img
                src={movie.image}
                style={{
                  height: "170px",
                  width: "240px",
                }}
              />
              <h4>{movie.movie}</h4>
              <h6>Rating {movie.rating}</h6>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MovieRating;
