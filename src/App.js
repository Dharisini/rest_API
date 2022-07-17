import Axios from "axios";
import React, { useState } from "react";
// import React from "react";
import "./App.css";

// const url = " ";

function App() {
  const [comments, setCommentsl] = useState([]);
  // const [, setEmail] = useState("");

  const getComment = () => {
    Axios.get("https://jsonplaceholder.typicode.com/comments").then(
      (response) => {
        //console.log(response.data);
        setCommentsl(response?.data);
      }
    );
// ? operational chaining 
    // const createPost = () => {
    //   Axios.get("https://jsonplaceholder.typicode.com/comments/1").then(
    //     (response) => {
    //       console.log(response.data);
    //     }
    //   );
    //     Axios.post("https://jsonplaceholder.typicode.com/comments", {
    //       title: "why la?",
    //     }).then(response.data);
    // };
  };

  return (
    <div className="App">
      <h1> Helloooo</h1>
      <button onClick={getComment}> Fetch that email!</button>
      {/* {email} */}
      {
        /* <button2 onClick={createPost}> create that!</button2> */
        // comments.forEach(
        //   (comment) => {
        //     console.log(comment);
        //   }
        // )

        comments.map((comment) => {
          return <p>{comment.email}</p>;
        })
      }
    </div>
  );
}

export default App;
