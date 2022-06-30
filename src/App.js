import './App.css';
import { Routes, Route } from "react-router-dom";
import Todo from './Components/Todo';
import CompletedTask from './Components/CompletedTask';
import Calender from './Components/Calender';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path='/completed-task' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
    </div>
  );
}

export default App;
