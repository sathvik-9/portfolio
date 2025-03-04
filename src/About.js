import React from 'react'

const About = () => {
    let i = 0;
    let name= "Sathvik K";
    let speed = 50;
    let typeWriter = () => {
        if (i <name.length) {
            document.getElementById("name").innerHTML += name.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
  return (
    <div>
      <div className="navbar pageChange">
        <h1>About me</h1>
      </div>
      <div className="App-header">
        <p id="name" onClick={typeWriter}>My name is </p>
        <p></p>
      </div>
    </div>
  )
}

export default About
