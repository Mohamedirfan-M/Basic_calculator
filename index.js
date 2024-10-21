function numbers(val) { 
    document.getElementById("result").value += val 
} 
function myFunction(event)
{
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key;
}

var cal = document.getElementById("box"); 
        cal.onkeyup = function (event) { 
            if (event.keyCode === 13) { 
                console.log("Enter"); 
                let ans = document.getElementById("result").value 
                console.log(ans); 
                solve(); 
            } 
        } 
  
        // Function that evaluates the digit and return result 
        function solve() { 
            let x = document.getElementById("result").value
            console.log("Input:", x); 
            let y = math.evaluate(x) 
            console.log("Result:", y);
            document.getElementById("result").value = y 
        } 
  
        // Function that clear the display 
        function clr() { 
            document.getElementById("result").value = "" 
        } 

        function clearLastCharacter() {
            let currentValue = document.getElementById('result').value;
            document.getElementById('result').value = currentValue.slice(0, -1);
        }