
/* 
    Selection Sort 
    ==============
*/

function selectionSort(aInput){
    
    for(i=0; i<aInput.length;i++)
    {
        var smallestPos=i;
        for(j=i; j<aInput.length;j++)
        {
            if(aInput[smallestPos] > aInput[j])
            {
                smallestPos=j;
            }
        }        
        var temp = aInput[i];
        aInput[i] = aInput[smallestPos];
        aInput[smallestPos] = temp;
    }
    console.log(aInput);
}

var aInput = [10,15,23,2,9,28,1,16]
console.log(aInput);
selectionSort(aInput);


/* 
    Bubble Sort      
    ==============
*/

function bubbleSort(aInput){
    
    for(i=0; i<aInput.length-1 ;i++)
    {
        for(j=0; j<aInput.length-i-1;j++)
        {
            if(aInput[j] > aInput[j+1])
            {
                var temp = aInput[j];
                aInput[j] = aInput[j+1];
                aInput[j+1] = temp;
            }
        }        
        
    }
    console.log(aInput);
}

var aInput = [99,18,8,1,22,12,9,4,100]
console.log(aInput);
bubbleSort(aInput);



/* 
    Bubble Sort Optimized      
    ==============
*/


function bubbleSortOptimized(aInput){
    
    for(i=0; i<aInput.length-1 ;i++)
    {
        var swapHappened = false;
        for(j=0; j<aInput.length-i-1;j++)
        {
            if(aInput[j] > aInput[j+1])
            {
                swapHappened= true;
                var temp = aInput[j];
                aInput[j] = aInput[j+1];
                aInput[j+1] = temp;
            }
        }        
        if(!swapHappened)
        {
            return;
        }
    }
    console.log(aInput);
}

var aInput = [99,18,8,1,22,12,9,4,100]
console.log(aInput);
bubbleSortOptimized(aInput);


