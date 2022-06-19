let num1 = parseInt(prompt("Enter First number: "));
let num2 = parseInt(prompt("Enter Second number: "));
let op = prompt("Enter operator(+,-,*,/): ");
switch (op) {
    case "+":
    let result = num1+num2;
    alert("Adding "+num1+" with "+num2+" is "+result);
    break;

    case "-":
    let result2 = num2-num1;
    alert("Subtracting "+num2+" from "+num1+" is "+result2);
    break;

    case "*":
    let result3 = num1*num2;
    alert("Multiplying "+num1+" with "+num2+" is "+result3);
    break;

    case "/":
    let result4 = num1/num2;
    alert("Dividing "+num1+" with "+num2+" is "+result4);
    break;

    default:
    alert("Sorry, there's no " + op + ".");
}

if (confirm(' click OK if you want to use calculator again')) 
{
    location.reload();
    }
else {
    alert("Goodbye");
} 

