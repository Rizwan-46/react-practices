import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



function Card(){
  return(
  <div className='card'>
  <Avater />
  <div className='data'>
  <Intro />
  <SkillList />
  </div>
  </div>
  )
}

function Avater() {
  return(
    <img className='avater' src="C:\Users\Rizwan\Desktop\React-1\my-app\public\hoo.jpeg" alt="Main"></img>
  )
}
function Intro(){
  return(
    <div className='intro'>
      <h2>Rizwan Akbar</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio libero voluptatum quaerat, nobis nulla totam at qui explicabo. Eaque error tempore ipsa delectus. Quaerat cum sed, ratione nam, dolor rem fugit error, molestias id nobis necessitatibus. Pariatur ab officia odio incidunt reprehenderit eaque ex, eligendi nemo deserunt magnam.</p>
    </div>
  )
}
function SkillList(){
  return(
    <div className='skill-lists' color="green">
      <Skill skill = "React" color="yellow"/>
      <Skill skill = "HTML + CSS" color="brown"/>
      <Skill skill = "GitHub" color="red"/>
      <Skill skill = "Javascript" color="blue"/>
      <Skill skill = "Anagular" color="orange"/>
    </div>
  )
}
function Skill(props){
  return (
    <div className="skills" style={{backgroundColor:props.color}}>
      <span>{props.skill}</span>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Card />
  </React.StrictMode>
);

