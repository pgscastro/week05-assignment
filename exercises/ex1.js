/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function(data) {
    let max1 = data[0];
    let max2 = data[1];
   
    
     
        for(let i = 2; i < data.length; i++){
            if (data[i] > max1){
                if(max1 > max2){
                    max2 = max1;
                }
                max1 = data[i];
                
                
                
            }else if(data[i] > max2){
                max2 = data[i];   
                         
            }
            
        }
        return (max1 + max2);

     
    

};
  
console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126

