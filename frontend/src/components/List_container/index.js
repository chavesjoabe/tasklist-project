import React, { useEffect, useState } from "react";
import apiClient from "../../api/api.client";
import Card from "../Card";
import CardCompleted from "../Card_completed";
import "./style.css";

const ListContainer = () => {
  const [showForm, setShowForm] = useState(false);
  const [doneTasks, setDoneTasks] = useState([]);
  const [undoneTasks, setUndoneTasks] = useState([]);
  const [task, setTask] = useState({
    name: "",
    date: "",
    tag: "",
  });
  const [reload, setReload] = useState(false);

  useEffect(() => {
    (async () => {
      const getDoneTasks = await apiClient.getAllDoneTasks();
      setDoneTasks(getDoneTasks);
      const getUndoneTasks = await apiClient.getAllUndoneTasks();
      setUndoneTasks(getUndoneTasks);
    })();
  }, [reload]);

  const toogleForm = () => {
    if (showForm === false) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };

  const toogleReload = () => {
    if (reload === false) {
      setReload(true);
    } else {
      setReload(false);
    }
  };

  const changeTaskSituation = async (taskId) => {
    try {
      const updatedTask = await apiClient.changeTaskSituation(taskId);
      console.log(updatedTask);
      toogleReload();
    } catch (error) {
      window.alert(error);
    }
  };

  const handleOnPressAddAReminder = async () => {
    try {
      const createdTask = await apiClient.createTask(task);
      console.log(createdTask);
      toogleForm();
      toogleReload();
    } catch (error) {
      window.alert("error");
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
            name="name"
            onChange={(event) => {
              setTask({ ...task, [event.target.name]: event.target.value });
            }}
          />
          <div className="select-container">
            <select
              type="select"
              placeholder="date"
              className="select"
              name="date"
              defaultValue={""}
              onChange={(event) => {
                setTask({ ...task, [event.target.name]: event.target.value });
              }}
            >
              <option hidden>Select Date</option>
              <option value="Date1">Date 1</option>
              <option value="Date2">Date 2</option>
              <option value="Date3">Date 3</option>
            </select>
            <select
              type="select"
              placeholder="tags"
              className="select"
              name="tag"
              defaultValue={""}
              onChange={(event) => {
                setTask({ ...task, [event.target.name]: event.target.value });
              }}
            >
              <option hidden>Select a Tag</option>
              <option value="Tag1">Tag 1</option>
              <option value="Tag2">Tag 2</option>
              <option value="Tag3">Tag 3</option>
            </select>
            <button
              className="task-list-input-btn"
              onClick={handleOnPressAddAReminder}
            >
              Add Reminder
            </button>
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
            id={task._id}
            callback={changeTaskSituation}
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
            id={task._id}
            callback={changeTaskSituation}
          />
        ))}
      </div>
    </div>
  );
};

export default ListContainer;
