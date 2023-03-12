//Function to Check a number is Armstrong or not 
function armstrong(data) {
    let arms = data.toString().split('');
    let ans = 0;

    //using for loop
    for(let i in arms){
        let temp=0;
        temp=temp+Math.pow(arms[i],arms.length);
        ans=ans+temp;
    }

//check     
if(ans==data){
    return " Number is armstrong " + " : " + data;
}else if(ans!=data)
  return " Number is not armstrong "+ " : " + data;
}

//export function
module.exports=armstrong
