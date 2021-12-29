import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  const [exerciseList, setExerciseList] = useState([
    {
      id: "1",
      completed: true,
      title: "Ejercicio 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempore expedita dicta, quos fuga similique suscipit, eius culpa facilis tempora a quas esse.",
    },
  ]);

  const getData = () => {
    console.log(exerciseList);
  };
  const addExercise = (newExercise) => {
    setExerciseList([...exerciseList, newExercise]);
  };
  const deleteExercise = (id) => {
    if (window.confirm("r u sure?")) {
      const aux = exerciseList.filter((item) => item.id !== id);
      setExerciseList(aux);
    }
  };
  const updateExercise = (id, exercise) => {
    const clone = [...exerciseList];
    const index = exerciseList.findIndex((item) => item.id === id);

    clone[index].title = exercise.title;
    clone[index].description = exercise.description;
    setExerciseList(clone);
  };
  const toggleCompleted = (id) => {
    const clone = [...exerciseList];
    const index = exerciseList.findIndex((item) => item.id === id);
    clone[index].completed = !clone[index].completed;
    setExerciseList(clone);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Home
          exerciseList={exerciseList}
          addExercise={addExercise}
          deleteExercise={deleteExercise}
          toggleCompleted={toggleCompleted}
          updateExercise={updateExercise}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
