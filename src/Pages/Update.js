import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Update = ({ updateExercise, exerciseList }) => {
  const navigate = useNavigate();
  const params = useParams().id;
  const [exercise, setExercise] = useState({
    title: getExercise().title,
    description: getExercise().description,
  });

  function getExercise() {
    return exerciseList.find((item) => item.id === params);
  }
  const handleInput = (e) => {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  };
  const onUpdateExercise = (e) => {
    e.preventDefault();
    updateExercise(params, exercise);
    navigate("/");
  };
  return (
    <div className="create-container">
      <h1>Update Exerise</h1>
      <form action="" onSubmit={onUpdateExercise}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          value={exercise.title}
          onChange={handleInput}
          required
        />
        <textarea
          type="text"
          name="description"
          id="description"
          placeholder="description"
          rows="10"
          value={exercise.description}
          onChange={handleInput}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
