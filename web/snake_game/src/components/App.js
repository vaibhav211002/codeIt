import "./css/App.css";
import Board from "./Board.js";
import Home from "./Homepage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="app">
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/Board" element={<Board/>}></Route>
        </Routes>
			</div>
		</Router>
	);
}

export default App;
