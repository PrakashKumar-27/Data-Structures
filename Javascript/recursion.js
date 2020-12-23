function factorial(n)
{
    result = n;
    while(n>1)
    {
        n--;
        result= result * n; 
    }
    console.log(result);
}

factorial(4);

function recursiveFactorial(n)
{
    if(n<=1)
    {
      return 1;
    }
    else{
        return n * recursiveFactorial(n-1);
    }
}

console.log(recursiveFactorial(4));