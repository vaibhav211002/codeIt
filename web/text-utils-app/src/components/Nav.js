import { useState } from "react";
import MyComp from "./myComp";
import "./Nav.css";
// import { Link } from "react-router-dom";
function Nav(){
    const [compTheme,setCompTheme] = useState("light");
    const [themeColor,setThemeColor] = useState("white");
    return(
        <>
        <nav class={`navbar navbar-expand-lg  navbar-${compTheme} bg-${compTheme}`}>
            <div class="container-fluid">
                {/* <Link class="navbar-brand" to="#">TextUtils</Link> */}
                <a class="navbar-brand" href="#">TextUtils</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        {/* <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className="pallete col-2 row" >
                    <div id="one" tabIndex={1} onFocus={changeThemeColor}></div>
                    <div id="two" tabIndex={1} onFocus={changeThemeColor}></div>
                    <div id="three" tabIndex={1} onFocus={changeThemeColor}></div>
                </div>
                <div className="form-check form-switch col-2 my-3">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeTheme}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><strong>Dark Mode</strong></label>
                </div>
        </nav>
        <MyComp pageTheme = {pageTheme}/>
        </>
    );
    function pageTheme(){
        if(compTheme==='dark'){
            if(themeColor!=="white"){
                document.body.style.backgroundColor = themeColor;
                return {color:"white",backgroundColor:themeColor,border:"2px black solid"}
            }
            else{
                document.body.style.backgroundColor = "gray";
                return {color:"white",backgroundColor:"gray",border:"2px white solid"}
            }
        }
        else{
            document.body.style.backgroundColor = themeColor;
            return {color:"black",backgroundColor:themeColor,border:"2px black solid"}
        }
    }
    function changeTheme(){
        if(compTheme==="light"){
            setCompTheme("dark");
            pageTheme();
            // document.body.style.backgroundColor = "black";
            document.getElementById("one").style.backgroundColor = "rgb(9,20,38)";
            document.getElementById("two").style.backgroundColor = "rgb(30,9,26)";
            document.getElementById("three").style.backgroundColor = "rgb(35,10,15)";
            document.body.style.color = "white";


             
        }
        else{
            setCompTheme("light");
            pageTheme();
            document.getElementById("one").style.backgroundColor = "cyan";
            document.getElementById("two").style.backgroundColor = "beige";
            document.getElementById("three").style.backgroundColor = "aquamarine";
            document.body.style.color = "black";
            document.body.style.backgroundColor = "white";
        }
        console.log(compTheme);
    }
    function changeThemeColor(event){
        setThemeColor(window.getComputedStyle(event.target).backgroundColor);
    }
}

export default Nav;