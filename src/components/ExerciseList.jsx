import React from "react";
import ExerciseItem from "./ExerciseItem";

const ExerciseList = ({ exerciseList, deleteExercise, toggleCompleted }) => {
  return (
    <div className="exerciselist-container">
      <h1>Exercises List</h1>
      <div className="exerciselist-body">
        {exerciseList.map((exercise) => {
          return (
            <ExerciseItem
              key={exercise.id}
              exercise={exercise}
              deleteExercise={deleteExercise}
              toggleCompleted={toggleCompleted}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExerciseList;
