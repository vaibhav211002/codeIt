// import { useState } from "react";
// import MyComp from "./myComp";
// import "./theme.css";
// function Theme(){
//     const [compTheme,setCompTheme] = useState("light");
//     const [themeColor,setThemeColor] = useState("white");
//     return(
//         <>
//             <div className="row justify-content-between my-2">
//                 <div className="col-6 mx-3">
//                     <h2>Theme Tab</h2>
//                 </div>
//                 <div className="pallete col-2 row" >
//                     <div id="one" tabIndex={1} onFocus={changeThemeColor}></div>
//                     <div id="two" tabIndex={1} onFocus={changeThemeColor}></div>
//                     <div id="three" tabIndex={1} onFocus={changeThemeColor}></div>
//                 </div>
//                 <div className="form-check form-switch col-2 my-3">
//                     <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeTheme}/>
//                     <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><strong>Dark Mode</strong></label>
//                 </div>
//             </div>
//             <MyComp pageTheme = {pageTheme}/>
//         </>
//     );
//     function pageTheme(){
//         if(compTheme==='dark'){
//             document.body.style.backgroundColor = themeColor;
//             return {color:"white",backgroundColor:themeColor,border:"none"}
//         }
//         else{
//             document.body.style.backgroundColor = themeColor;
//             return {color:"black",backgroundColor:themeColor,border:"none"}
//         }
//     }
//     function changeTheme(){
//         if(compTheme==="light"){
//             setCompTheme("dark");
//             pageTheme();
//             document.getElementById("one").style.backgroundColor = "brown";
//             document.getElementById("two").style.backgroundColor = "red";
//             document.getElementById("three").style.backgroundColor = "blue";
//             document.body.style.color = "white";
//             document.body.style.backgroundColor = "black";
             
//         }
//         else{
//             setCompTheme("light");
//             pageTheme();
//             document.getElementById("one").style.backgroundColor = "cyan";
//             document.getElementById("two").style.backgroundColor = "beige";
//             document.getElementById("three").style.backgroundColor = "aquamarine";
//             document.body.style.color = "black";
//             document.body.style.backgroundColor = "white";
//         }
//         console.log(compTheme);
//     }
//     function changeThemeColor(event){
//         setThemeColor(window.getComputedStyle(event.target).backgroundColor);
//     }
// }

// export default Theme;