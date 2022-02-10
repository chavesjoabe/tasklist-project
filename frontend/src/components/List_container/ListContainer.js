import React, { useState } from "react";
import Card from "../Card/Card";
import CardCompleted from "../Card_completed/Card_completed";
import "./style.css";

const ListContainer = () => {
  const [showForm, setShowForm] = useState(false);

  const toogleForm = () => {
    if (showForm === false) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };

  return (
    <div className="container">
      <div className="task-list-header">
        <h1 className="task-list-header-title">Todo</h1>
        <button className="task-list-header-btn" onClick={toogleForm}>
          Create Reminder
        </button>
      </div>
      {showForm ? (
        <div className="input-container">
          <input
            type="text"
            placeholder="Reminder Title"
            className="text-input"
          />
          <div className="select-container">
            <select type="select" placeholder="date" className="select">
              <option value="Date1">Date 1</option>
              <option value="Date2">Date 2</option>
              <option value="Date3">Date 3</option>
            </select>
            <select type="select" placeholder="tags" className="select">
              <option value="Tag1">Tag 1</option>
              <option value="Tag2">Tag 2</option>
              <option value="Tag3">Tag 3</option>
            </select>
            <button className="task-list-input-btn">Add Reminder</button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="list-card-container">
        <Card title="Organize photo shoot" date="Today" tag="Work" />
        <Card title="Buy milk" date="Today" tag="Grocery" />
        <Card title="keep coding" date="Today" tag="Work" />
      </div>
      <div className="list-completed-container">
        <h1 className="task-list-completed-title"> Completed </h1>
        <CardCompleted title="Organize photo shoot" date="Today" tag="Work" />
        <CardCompleted title="Organize photo shoot" date="Today" tag="Work" />
        <CardCompleted title="Organize photo shoot" date="Today" tag="Work" />
      </div>
    </div>
  );
};

export default ListContainer;
