

   

        function game(){
            let user = document.getElementById("input");
            let cpu = Math.floor(Math.random()*3);
            let res = document.getElementById("result");
            console.log(cpu);
            console.log(user.value);


            let imgs = {
                '0' : '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yNy8qhOEwGWMsVSW01fnIplLtmQsIIOFinWXcIOahg&s" id="img1"><br><span>Snake</span>',
                '1' : '<img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/conversions/b8a1309a-ba53-48c7-bca3-9c36aab2338a-thumb.jpg" id="img2"><br><span>Water</span>',
                '2' : '<img src="https://m.media-amazon.com/images/I/61x3aam6d8L._AC_UF1000,1000_QL80_.jpg" id="img3"><br><span>Gun</span>'
            };


            if(cpu=='0' && user.value=='0'){
                document.getElementById("contcpu").innerHTML = imgs['0'];
                document.getElementById("contuser").innerHTML = imgs['0'];
                res.innerHTML = '<span style="color:gray">Tie</span>';
                user.value="";
                document.getElementById("contcpu").style.border=0;
                document.getElementById("contuser").style.border=0;
            }
            else if(cpu=='1' && user.value=='1'){
                document.getElementById("contcpu").innerHTML = imgs['1'];
                document.getElementById("contuser").innerHTML = imgs['1']; 
                res.innerHTML = '<span style="color:gray">Tie</span>';
                user.value="";
                document.getElementById("contcpu").style.border=0;
                document.getElementById("contuser").style.border=0;
            }
            else if(cpu=='2' && user.value=='2'){
                document.getElementById("contcpu").innerHTML = imgs['2'];
                document.getElementById("contuser").innerHTML = imgs['2'];
                res.innerHTML = '<span style="color:gray">Tie</span>';
                user.value=""; 
                document.getElementById("contcpu").style.border=0;
                document.getElementById("contuser").style.border=0;
            }
            else if(cpu=='0' && user.value=='1'){
                document.getElementById("contcpu").innerHTML = imgs['0'];
                document.getElementById("contuser").innerHTML = imgs['1']; 
                res.innerHTML = '<span style="color:red">You Lose</span>';
                user.value="";
                document.getElementById("contcpu").style.border=0;
                document.getElementById("contuser").style.border=0;
            }
            else if(cpu=='0' && user.value=='2'){
                document.getElementById("contcpu").innerHTML = imgs['0'];
                document.getElementById("contuser").innerHTML = imgs['2']; 
                res.innerHTML = '<span style="color:green">You Win</span>';
                user.value="";
                document.getElementById("contcpu").style.border=0;
                document.getElementById("contuser").style.border=0;
            }
            else if(cpu=='1' && user.value=='2'){
                document.getElementById("contcpu").innerHTML = imgs['1'];
                document.getElementById("contuser").innerHTML = imgs['2']; 
                res.innerHTML = '<span style="color:red">You Lose</span>';
                user.value="";
                document.getElementById("contcpu").style.border=0;
                document.getElementById("contuser").style.border=0;

            }
            else if(cpu=='2' && user.value=='1'){
                document.getElementById("contcpu").innerHTML = imgs['2'];
                document.getElementById("contuser").innerHTML = imgs['1']; 
                res.innerHTML = '<span style="color:green">You Win</span>';
                user.value="";
                document.getElementById("contcpu").style.border=0;
                document.getElementById("contuser").style.border=0;
            }
            else if(cpu=='1' && user.value=='0'){
                document.getElementById("contcpu").innerHTML = imgs['1'];
                document.getElementById("contuser").innerHTML = imgs['0']; 
                res.innerHTML = '<span style="color:green">You Win</span>';
                user.value="";
                document.getElementById("contcpu").style.border=0;
                document.getElementById("contuser").style.border=0;
            }
            else if(cpu=='2' && user.value=='0'){
                document.getElementById("contcpu").innerHTML = imgs['2'];
                document.getElementById("contuser").innerHTML = imgs['0'];
                res.innerHTML = '<span style="color:red">You Lose</span>';
                user.value="";
                document.getElementById("contcpu").style.border=0;
                document.getElementById("contuser").style.border=0; 
            }
            else{
            // if(user.value !='2' && user.value !='0' && user.value !='1'){
                res.innerHTML = '<span style="color:red">Enter Valid Number</span>';
                user.value="";
            }
            
        }

        document.getElementById("input").addEventListener("keypress",function(event){
            if(event.key=="Enter"){
                    // game();
                    document.getElementById("submit").click();
            }
        })
 