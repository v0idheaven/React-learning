import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import pic from "./pic.jpg";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src={pic} alt="Profile" />;
}

function Intro() {
  return (
    <div>
      <h1>Varun Yadav</h1>
      <p>
        Software Developer, Passionate about building scalable web applications.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="⚛️" color="#61DAFB" />
      <Skill skill="JavaScript" emoji="🟢" color="#F7DF1E" />
      <Skill skill="CSS" emoji="🎨" color="#264DE4" />
      <Skill skill="HTML" emoji="🧱" color="#E34C26" />
      <Skill skill="Python" emoji="🟢" color="#3776AB" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
