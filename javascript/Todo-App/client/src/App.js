import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ToDoApp from './Page/Todolist';

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ToDoApp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
