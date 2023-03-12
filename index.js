function armstrong(data) {
    let arms = data.toString().split('');
    let ans = 0
    for(let i in arms){
        let temp=0;
        temp=temp+Math.pow(arms[i],arms.length);
        ans=ans+temp;
    }
if(ans==data){
    return "Number is armstrong"+":"+data;
}else if(ans!=data)
  return "Number is not armstrong"+":"+data;
}





module.exports=armstrong
// function helloNpm() {
//     return "hello NPM"
//   }
  
//   module.exports = helloNpm