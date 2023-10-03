import "./css/Board.css";
import "./css/button.css";
import "./css/select.css";
import { useEffect, useState } from "react";

const Board = () => {
	const [snakeBody, setSnakeBody] = useState([32]);
	const [food, setFood] = useState(Math.floor(Math.random() * 400));
	const [currDir, setCurrDir] = useState("Left");
	const [score, setScore] = useState(0);
	const [speed, setSpeed] = useState(100);
	const [high,setHigh] = useState(localStorage.getItem('score')===null? 0: localStorage.getItem('score'));
	const dimension = 30;
	let val = 1;
	let movement;

	const board = [];
	for (let i = 0; i < dimension; i++) {
		let temp = [];
		for (let j = 0; j < dimension; j++) {
			temp.push(val++);
		}
		board.push(temp);
	}

	const getClassNames = (col,row) => {
		// console.log(food + "    " + typeof snakeBody);
		let classname = "cell";

		//color for each column
		if((Math.floor(row/2)*2 === row && Math.floor(col/2)*2 === col) || (Math.floor(row/2)*2 !== row && Math.floor(col/2)*2 !== col)){
			classname+=" dark";
		}
		else{
			classname+=" light";
		}
		if (snakeBody.includes(col)) {
			classname += " cell-snake";
			if (snakeBody[0] === col) {
				classname += " head";
			}
		}
		if (col === food) {
			classname += " food";
		}
		return classname;
	};

	const generateNewSnake = (newHead) => {
		const sn = snakeBody.slice();
		sn.unshift(newHead);
		if (newHead === food) {
			consumeFood();
		} else sn.pop();
		return sn;
	};

	const moveSnake = (dir) => {
		let newHead;
		let sn;
		switch (dir) {
			case "Left":
				newHead = snakeBody[0] - 1;
				if (newHead % dimension === 0) {
					newHead += dimension;
				}
				// if (snakeBody.includes(newHead)) {
				// 	alert("Game Over");
				// 	reset();
				// 	return;
				// }
				if (gameOver(newHead)) return;
				sn = generateNewSnake(newHead);
				setSnakeBody(sn);
				break;

			case "Right":
				newHead = snakeBody[0] + 1;
				if (snakeBody[0] % dimension === 0) {
					newHead -= dimension;
				}
				// if (snakeBody.includes(newHead)) {
				// 	alert("Game Over");
				// 	reset();
				// 	return;
				// }
				if (gameOver(newHead)) return;
				sn = generateNewSnake(newHead);
				setSnakeBody(sn);
				break;

			case "Up":
				newHead = snakeBody[0] - dimension;
				if (newHead <= 0) {
					newHead = dimension * dimension - dimension + snakeBody[0];
				}
				// if (snakeBody.includes(newHead)) {
				// 	alert("Game Over");
				// 	reset();
				// 	return;
				// }
				if (gameOver(newHead)) return;
				sn = generateNewSnake(newHead);
				setSnakeBody(sn);
				break;

			case "Down":
				newHead = snakeBody[0] + dimension;
				if (newHead > dimension * dimension) {
					newHead =
						snakeBody[0] - (dimension * dimension - dimension);
				}
				// if (snakeBody.includes(newHead)) {
				// 	alert("Game Over");
				// 	reset();
				// 	return;
				// }
				if (gameOver(newHead)) return;
				sn = generateNewSnake(newHead);
				setSnakeBody(sn);
				break;

			default:
				break;
		}
	};

	const gameOver = (newHead) => {
		if (snakeBody.includes(newHead)) {
			alert("Game Over");
			if(score>high){
				localStorage.setItem("score",score);
				setHigh(score);
			}
			reset();
			return true;
		}
		return false;
	};

	const foodGenerator = () => {
		let f = Math.floor(Math.random() * 400);
		if (snakeBody.includes(f)) {
			return foodGenerator();
		} else return f;
	};

	const consumeFood = () => {
		setScore(score + 1);
		setFood(foodGenerator());
	};

	const reset = () => {
		clearInterval(movement, moveSnake);
		setScore(0);
		setCurrDir("Left");
		setFood(foodGenerator());
		setSnakeBody([32]);
	};

	const setSnakeSpeed = (event) => {
		setSpeed(event.target.value);
	};

	// ? move snake after certain time using setInterval
	useEffect(() => {
		let movement = setInterval(() => {
			moveSnake(currDir);
		}, speed);
		return () => {
			clearInterval(movement, moveSnake);
		};
	});

	// ? change direction using keys
	useEffect(() => {
		document.addEventListener("keydown", (event) => {
			let code = event.code;
			switch (code) {
				case "ArrowUp":
				case "KeyW":
					if(currDir!=='Down'){setCurrDir("Up");}
					break;
				case "ArrowDown":
				case "KeyS":
					if(currDir!=='Up'){setCurrDir("Down");}
					break;
				case "ArrowLeft":
				case "KeyA":
					setCurrDir("Left");
					break;
				case "ArrowRight":
				case "KeyD":
					if(currDir!=='Left'){setCurrDir("Right");}
					break;
				default:
					break;
			}
		});
	});

	return (
		<>
			<div className="d-flex align-items-center container">
				<div className="col-1"></div>
				<div className="wrapper col-6">
					{board.map((row, index) => {
						return (
							<div key={index} className="row">
								{row.map((col, ind) => {
									const classNames = getClassNames(col,index);
									return (
										<div
											key={ind}
											className={classNames}
										>
											{classNames.includes('food') && <div></div>}
										</div>
									);
								})}
							</div>
						);
					})}
				</div>

				<div className="col-2"></div>

				<div className="col-3 d-flex flex-column align-items-center info">
					<h2 className="high mb-4">
						High Score:<span>{high}</span>
					</h2>
					<h2 className="score mb-4">
						Score:<span>{score}</span>
					</h2>
					<button className="glowing-btn mb-3" onClick={reset}>
						<span className="glowing-txt">RESET</span>
					</button>
					<select
						name="speed"
						id="speed"
						onChange={setSnakeSpeed}
						className="glowing-btn"
					>
						<option value="100">1x</option>
						<option value="75">1.5x</option>
						<option value="50">2x</option>
					</select>
				</div>
			</div>
		</>
	);
};

export default Board;
