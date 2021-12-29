import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  const [exerciseList, setExerciseList] = useState([]);
  const URL = "http://localhost:3000/data";
  const getData = async () => {
    try {
      const response = await axios(URL);
      setExerciseList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addExercise = async (newExercise) => {
    try {
      await axios.post(URL, newExercise);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteExercise = async (id) => {
    if (window.confirm("r u sure?")) {
      try {
        await axios.delete(`${URL}/${id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const updateExercise = async (id, exercise) => {
    try {
      await axios.patch(`${URL}/${id}`, exercise);
    } catch (error) {
      console.log(error);
    }
  };
  const toggleCompleted = async (id, isCompleted) => {
    try {
      await axios.patch(`${URL}/${id}`, { completed: !isCompleted });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [exerciseList]);
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
