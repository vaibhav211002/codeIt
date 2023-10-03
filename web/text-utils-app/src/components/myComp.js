import { useState } from "react";
function MyComp(props) {
	const [text, setText] = useState("");
	const [small, setSmall] = useState(0);
	const [caps, setCaps] = useState(0);
	// const [pageTheme,setPageTheme] = useState(props.pageTheme);
	const [theme, setTheme] = useState({
		color: "black",
		backgroundColor: "white",
	});
	const [themeText, setThemeText] = useState("Dark Mode");
	return (
		<div className='container my-5' style={props.pageTheme()}>
      div
			<div className='mb-3'>
				<h1 className='my-4'>TextUtils App</h1>
				<textarea
					className='form-control'
					id='exampleFormControlTextarea1'
					rows='8'
					placeholder='Enter text here...'
					value={text}
					style={props.pageTheme()}
					onChange={onChangeFunc}
				></textarea>
				<button
					className='btn btn-primary mx-1 my-3'
					onClick={uppercase}
				>
					UpperCase
				</button>
				<button className='btn btn-primary mx-1' onClick={lowercase}>
					LowerCase
				</button>
				<button className='btn btn-primary mx-1' onClick={inversecase}>
					InverseCase
				</button>
				<button className='btn btn-primary mx-1' onClick={findNreplace}>
					Find and Replace
				</button>
				<button className='btn btn-primary mx-1' onClick={clear}>
					Clear
				</button>
				{/* <button className="btn btn-primary mx-1" onClick={changeTheme}>{themeText}</button> */}
			</div>
			<h2>COUNT</h2>
			<div className='container'>
				{text.split(" ").includes("")
					? text.split(" ").length - 1
					: text.split(" ").length}{" "}
				Words and {text.length} Characters <br />
				{small} Small letters and {caps} capital letters
			</div>
			<h2 className='my-3'>PREVIEW</h2>
			<div className='container'>{text}</div>
		</div>
	);
	function uppercase() {
		setText(text.toUpperCase());
	}
	function lowercase() {
		setText(text.toLowerCase());
	}
	function onChangeFunc(event) {
		let str = event.target.value;
		let cap = 0;
		let sma = 0;
		for (let i = 0; i < text.length; i++) {
			if (text[i] >= "a" && text[i] <= "z") {
				sma++;
			} else if (text[i] >= "A" && text[i] <= "Z") {
				cap++;
			}
		}
		setCaps(cap);
		setSmall(sma);
		setText(str);
	}
	function clear() {
		setText("");
	}
	function inversecase() {
		let cap = 0;
		let sma = 0;
		for (let i = 0; i < text.length; i++) {
			if (text[i] >= "a" && text[i] <= "z") {
				sma++;
			} else if (text[i] >= "A" && text[i] <= "Z") {
				cap++;
			}
		}
		if (sma >= cap) {
			setText(text.toUpperCase());
		} else {
			setText(text.toLowerCase());
		}
	}
	function findNreplace() {
		let word = prompt("Enter the word to replace:");
		let rep = prompt("Enter the word to replace with:");
		setText(text.replaceAll(word, rep));
	}
	// function changeTheme(){
	//   if(pageTheme==='dark'){
	//     setTheme({
	//       color:"white",
	//       backgroundColor:"black"
	//     })
	//     // setThemeText("Light Mode");
	//   }
	//   else{
	//     setTheme({
	//       color:"black",
	//       backgroundColor:"white"
	//     })
	//     // setThemeText("Dark Mode");
	//   }
	// }
}

export default MyComp;
