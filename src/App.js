import React, { useState } from "react";
import "./App.css";
import axios from 'axios';


const App = () => {
  const [file, setFile] = useState({
    Files:"",
    loaded:0
  });

  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);

    setFile({
      Files: event.target.files[0],
      loaded: 0,
    });
  };

  const onClickHandler = (e) => {

    e.preventDefault();
    const data = new FormData();
    data.append("avatar", file.Files);
    axios.post("http://localhost:4000/upload", data, {  
    })
    .then(res => {
      
      console.log(res.statusText)
    })
  };
 

  return (
    <div>
      <div>
        <form action="">
          <input type="file" name="avatar" onChange={onChangeHandler} />

          <input type="submit" value="submit " onClick={onClickHandler} />
        </form>
      </div>
    </div>
  );
};

export default App;
