let number =prompt("enter number to test for odd ,even")
checknumber(number);
function checknumber()
{
    if(number%2==0)
    {
        document.write(number,    " is even")
    }
    else if(number%2!==0)
    {
        document.write(number," is odd")
    }
}