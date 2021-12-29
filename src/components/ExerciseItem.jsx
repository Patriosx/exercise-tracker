import React from "react";
import { Link } from "react-router-dom";
import "./exerciseItem.css";

const ExerciseItem = ({ exercise, deleteExercise, toggleCompleted }) => {
  // setCurrent
  const onDelete = (id) => {
    deleteExercise(id);
  };
  const onToggleCompleted = (id, isCompleted) => {
    toggleCompleted(id, isCompleted);
  };
  return (
    <div
      key={exercise.id}
      className={`exercise-card ${
        exercise.completed ? "card-completed" : "card-incompleted"
      }`}
    >
      <div className="actions">
        <p onClick={() => onToggleCompleted(exercise.id, exercise.completed)}>
          🔚
        </p>
        <p onClick={() => onDelete(exercise.id)}>❌</p>
        {/* Voy a la ruta con un valor dinamico (la id) que puedo recoger donde fue enviada */}
        <Link to={`update/${exercise.id}`}>🖊</Link>
      </div>
      <h3>{exercise.title}</h3>
      <div className="description">
        <p>{exercise.description}</p>
      </div>
    </div>
  );
};

export default ExerciseItem;
