import React, { useState } from 'react'
import "./stylesheets/Main.css"
import List  from "./list";
function Main() {
  const [map, add] = useState({list:['Shop','Exercise'],word:""});
  function _add(str) {
    add((prevState) => {
      return {"list":[...prevState["list"],str],"word":""};
    });
  }
  function _word(str){
    add((prevState) => {
      return {"list":[...prevState["list"]],"word":str};
    });
  }
  return (
    <div className='main'>
      {
        map['list'].map((i, key) => (
          <div><List view={i}/></div>
        ))}
      <div>
        <input onChange={(event)=>{
          const val=event.target.value;
          _word(val);
        }}
        value={map["word"]}
        >

        </input>
        <button onClick={() => _add(map['word'])}>add</button>
      </div>
    </div>
  );
}
export default Main;