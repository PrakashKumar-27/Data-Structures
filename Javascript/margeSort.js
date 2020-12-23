function mergeSort(aInput, from, to){
    if(to - from < 1){
        //end
        return;
    }else{
        var middle = parseInt((to + from) / 2);
        mergeSort(aInput, from, middle);
        mergeSort(aInput, middle + 1, to);
        merge(aInput, from, middle, to);
    }
}

function merge(aOutput, from, middle, to){
    var left = aOutput.slice(from, middle + 1);
    var right = aOutput.slice(middle + 1, to + 1);
    var leftPointer = 0;
    var rightPointer = 0;
    for(var i = from; i <= to; i++){
        if(leftPointer === left.length){
            while(rightPointer < right.length){
                aOutput[i] = right[rightPointer];
                rightPointer++;
                i++;
            }
            return;
        }
        if(rightPointer === right.length){
            while(leftPointer < left.length){
                aOutput[i] = left[leftPointer];
                leftPointer++;
                i++;
            }
            return;
        }
        if(left[leftPointer] <= right[rightPointer]){
            aOutput[i] = left[leftPointer];
            leftPointer++;
        }else{
            aOutput[i] = right[rightPointer];
            rightPointer++;
        }
    }
}

var aInput = [10, 18, 4, 16, 9, 1, 8, 3, 68]
console.log(aInput);
mergeSort(aInput, 0, aInput.length - 1);
console.log(aInput);