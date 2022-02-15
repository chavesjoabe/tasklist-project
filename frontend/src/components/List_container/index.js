import React, { useEffect, useState } from "react";
import apiClient from "../../api/api.client";
import Card from "../Card";
import CardCompleted from "../Card_completed";
import "./style.css";

const ListContainer = () => {
  const [showForm, setShowForm] = useState(false);
  const [doneTasks, setDoneTasks] = useState([]);
  const [undoneTasks, setUndoneTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const getDoneTasks = await apiClient.getAllDoneTasks();
      setDoneTasks(getDoneTasks);
      const getUndoneTasks = await apiClient.getAllUndoneTasks();
      setUndoneTasks(getUndoneTasks);
    })();
  }, []);

  const toogleForm = () => {
    if (showForm === false) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };

  const toogleTaskSituation = () => {};

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
        {undoneTasks.map((task) => (
          <Card
            key={task._id}
            title={task.name}
            date={task.date}
            tag={task.tag}
          />
        ))}
      </div>
      <div className="list-completed-container">
        <h1 className="task-list-completed-title"> Completed </h1>
        {doneTasks.map((task) => (
          <CardCompleted
            key={task._id}
            title={task.name}
            date={task.date}
            tag={task.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default ListContainer;
