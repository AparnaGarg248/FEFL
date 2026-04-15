import React from "react";
import { useState, useEffect } from "react";

function MovieTask() {
  const [response, setResponse] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  function inputHandler(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    let newArr = response.filter((movie) => {
      if (movie.movie.includes(search)) {
        return true;
      }
    });
    setFilteredArray(newArr);
  }, [search, response]);

  console.log(filteredArray);

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
      <input
        type="text"
        placeholder="search movies..."
        onChange={inputHandler}
      />

      <div
        style={{
          display: "flex",
          height: "100dvh",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {filteredArray.map((movie) => {
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

export default MovieTask;


// Without Use Effect

// import React, { useState, useEffect } from "react";

// function MovieTask() {
//   const [response, setResponse] = useState([]);
//   const [search, setSearch] = useState("");

//   function inputHandler(event) {
//     // console.log(event.target.value)
//     setSearch(event.target.value);
//   }

//   // movies filter out from response array
//   // condition search state variable as a substring exist movie name

//     let newArr = response.filter((movie) => {
//       if (movie.movie.includes(search)) {
//         return true;
//       }
//     });

//   useEffect(() => {
//     fetch("https://feecq.github.io/api/movies.json")
//       .then((resp) => resp.json())
//       .then((data) => {
//         setResponse(data);
//         console.log(data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   console.log("component rendered....");

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="search movies..."
//         onChange={inputHandler}
//       />

//       <div
//         style={{
//           display: "flex",
//           height: "100dvh",
//           justifyContent: "center",
//           backgroundColor: "lightgrey",
//           flexWrap: "wrap",
//         }}
//       >
//         {newArr.map((movie) => {
//           return (
//             <div
//               key={movie.id}
//               style={{
//                 height: "300px",
//                 width: "200px",
//                 margin: "10px",
//                 backgroundColor: "white",
//                 textAlign: "center",
//                 padding: "5px",
//                 border: "1px solid black",
//               }}
//             >
//               <img
//                 src={movie.image}
//                 style={{
//                   height: "170px",
//                   width: "190px",
//                 }}
//               />

//               <h4>{movie.movie}</h4>
//               <h6>Rating: {movie.rating}</h6>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default MovieTask;
