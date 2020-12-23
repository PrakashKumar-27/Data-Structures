function recFoo ( n ){
    if(n == -2){
        return 2;
    }else{
        console.log(n)
        return n + recFoo( n-1 );
    }
}

recFoo(3);