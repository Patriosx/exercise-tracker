import React, { useState } from "react";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
const Create = ({ addExercise }) => {
  const [exercise, setExercise] = useState({
    title: "",
    description: "",
    completed: false,
  });
  let navigate = useNavigate();
  const handleInputChange = (e) => {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  };
  const onAddExercise = (e) => {
    e.preventDefault();
    const newExercise = { ...exercise, id: uuid() };
    addExercise(newExercise);
    setExercise({ title: "", description: "" });
    navigate("/");
  };
  return (
    <div className="create-container">
      <h1>Create Exerise</h1>
      <form action="" onSubmit={onAddExercise}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          value={exercise.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          type="text"
          name="description"
          id="description"
          placeholder="description"
          rows="10"
          value={exercise.description}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Create;
