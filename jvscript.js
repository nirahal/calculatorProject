element0 = document.getElementById("0");
element1 = document.getElementById("1");
element2 = document.getElementById("2");
element3 = document.getElementById("3");
element4 = document.getElementById("4");
element5 = document.getElementById("5");
element6 = document.getElementById("6");
element7 = document.getElementById("7");
element8 = document.getElementById("8");
element9 = document.getElementById("9");

elementEqual = document.getElementById("=");
elementPlus = document.getElementById("+");
elementMinus = document.getElementById("-");
elementMul = document.getElementById("*");
elementDiv = document.getElementById("/");

elementPoint = document.getElementById(".");
elementC = document.getElementById("C");

result = document.getElementById("result");
var number=[];
var operation;
var isWaiting = 0;

element0.addEventListener("click", function(event){
    if (isWaiting == 0){
        result.innerText = element0.value; 
        isWaiting = 1;
    }
    else{
        result.innerText = result.innerText + element0.value ;    
    }
    event.preventDefault();
    
});
element1.addEventListener("click", function(event){
    if (isWaiting == 0){
        result.innerText = element1.value; 
        isWaiting = 1;
    }
    else{
        result.innerText = result.innerText + element1.value ;    
    }
    event.preventDefault();
    
});
element2.addEventListener("click", function(event){
    if (isWaiting == 0){
        result.innerText = element2.value; 
        isWaiting = 1;
    }
    else{
        result.innerText = result.innerText + element2.value ;   
    }
    event.preventDefault();
    
});
element3.addEventListener("click", function(event){
    if (isWaiting == 0){
        result.innerText = element3.value; 
        isWaiting = 1;
    }
    else{
        result.innerText = result.innerText + element3.value ;   
    }
    event.preventDefault();
    
});
element4.addEventListener("click", function(event){
    if (isWaiting == 0){
        result.innerText = element4.value; 
        isWaiting = 1;
    }
    else{
        result.innerText = result.innerText + element4.value ;   
    }
    event.preventDefault();
    
});
element5.addEventListener("click", function(event){
    if (isWaiting == 0){
        result.innerText = element5.value; 
        isWaiting = 1;
    }
    else{
        result.innerText = result.innerText + element5.value ;   
    }
    event.preventDefault();
    
});
element6.addEventListener("click", function(event){
    if (isWaiting == 0){
        result.innerText = element6.value; 
        isWaiting = 1;
    }
    else{
        result.innerText = result.innerText + element6.value ;   
    }
    event.preventDefault();
});
element7.addEventListener("click", function(event){
    if (isWaiting == 0){
        result.innerText = element7.value; 
        isWaiting = 1;
    }
    else{
        result.innerText = result.innerText + element7.value ;   
    }
    event.preventDefault();
});
element8.addEventListener("click", function(event){
   if (isWaiting == 0){
        result.innerText = element8.value; 
        isWaiting = 1;
    }
    else{
        result.innerText = result.innerText + element8.value ;   
    }
    event.preventDefault();
});
element9.addEventListener("click", function(event){
    if (isWaiting == 0){
        result.innerText = element9.value; 
        isWaiting = 1;
    }
    else{
        result.innerText = result.innerText + element9.value ;   
    }
    event.preventDefault();
});



elementPlus.addEventListener("click", function(event){
    operation = "+";
    number.push(result.innerText );
    isWaiting = 0;
    event.preventDefault();
    
});
elementMinus.addEventListener("click", function(event){
    operation = "-";
    number.push(result.innerText );
    isWaiting = 0;
    event.preventDefault();
    
});
elementMul.addEventListener("click", function(event){
    operation = "*";
    number.push(result.innerText );
    isWaiting = 0;
    event.preventDefault();
    
});
elementDiv.addEventListener("click", function(event){
    operation = "/";
    number.push(result.innerText );
    isWaiting = 0;
    event.preventDefault();
    
});

elementC.addEventListener("click", function(event){
    result.innerText = "";
    number=[];
    event.preventDefault();
    
});
elementPoint.addEventListener("click", function(event){
    result.innerText = result.innerText + ".";
    event.preventDefault();
    
});



elementEqual.addEventListener("click", function(event){
    if (operation == "+"){
        number.push(result.innerText );
        console.log(number);
        result.innerText = parseFloat(number[number.length-2]) + parseFloat(number[number.length-1]); 
        number.push(result.innerText);
    }
    if (operation == "-"){
        number.push(result.innerText );
        console.log(number);
        result.innerText = parseFloat(number[number.length-2]) - parseFloat(number[number.length-1]);  
        number.push(result.innerText);
    }
    if (operation == "*"){
        number.push(result.innerText );
        result.innerText = parseFloat(number[number.length-2]) * parseFloat(number[number.length-1]); 
        number.push(result.innerText);
        console.log(number);
    }
    if (operation == "/"){
        number.push(result.innerText );
        result.innerText = parseFloat(number[number.length-2]) / parseFloat(number[number.length-1]); 
        number.push(result.innerText);
    }
    
    event.preventDefault();
});




