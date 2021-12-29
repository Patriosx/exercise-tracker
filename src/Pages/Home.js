import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ExerciseList from "../components/ExerciseList";
import Navbar from "../components/Navbar";
import TabFilter from "../components/TabFilter";
import Create from "./Create";
import Update from "./Update";

const Home = ({
  addExercise,
  exerciseList,
  deleteExercise,
  toggleCompleted,
  updateExercise,
}) => {
  const [filter, setFilter] = useState("all");

  const filterHandler = (filter) => {
    console.log(filter);
    setFilter(filter);
  };

  let jsx = (
    <ExerciseList
      exerciseList={exerciseList}
      deleteExercise={deleteExercise}
      toggleCompleted={toggleCompleted}
      filterHandler={filterHandler}
    />
  );

  if (filter === "completed") {
    jsx = (
      <ExerciseList
        exerciseList={exerciseList.filter(
          (exercise) => exercise.completed === true
        )}
        deleteExercise={deleteExercise}
        toggleCompleted={toggleCompleted}
        filterHandler={filterHandler}
      />
    );
  } else if (filter === "uncompleted") {
    jsx = (
      <ExerciseList
        exerciseList={exerciseList.filter(
          (exercise) => exercise.completed === false
        )}
        deleteExercise={deleteExercise}
        toggleCompleted={toggleCompleted}
        filterHandler={filterHandler}
      />
    );
  }
  return (
    <div className="home-container">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={[
            <TabFilter filterHandler={filterHandler} filter={filter} />,
            jsx,
          ]}
        />
        <Route path="/create" element={<Create addExercise={addExercise} />} />
        <Route
          path="/update/:id"
          element={
            <Update
              updateExercise={updateExercise}
              exerciseList={exerciseList}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Home;
