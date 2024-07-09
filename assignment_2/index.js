// ## assingnment 2.1
// for(let i=1;i<=100;i++){
//       if(i%2==0){

//             console.log(`Even Number : ${i}`);
//       }

// ## assingnment 2.2n

// function cal(num1,num2,op){
   
//       switch (op) {
//             case 'add':
//                   console.log(num1+num2);
//                   break;
//             case 'sub':
//                   console.log(num1-num2);
//                   break;
//             case 'mul':
//                   console.log(num1*num2);
//                   break;      
//             case 'div':
//                   console.log(num1/num2);
//                   break;
//             default:
//                   console.log("Use proper operator");
//                   break;
//       }
//       }
// cal(2,3,'add');

// ## assingnment 2.3
// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.

// function findTax(salary){
//   let tax;
//   switch(true){
//       case (500000>=salary && salary>0):
//             tax=0;
//             break;
//       case (1000000 >= salary && salary>500000):
//             tax=salary*0.1;
//             break;
//       case (1500000>=salary && salary>1000000):
//             tax=salary*0.2;
//             break;
//       case (salary > 1500000):
//             tax=salary*0.3;
//             break;
//       default:
//             return "somthing went wrong";
//   }
//   return tax;
// }
// console.log(findTax(1000000))

// ## assingnment 2.4
// function sumOfCorrespondace(num1,num2)
// {
//   let digit1=num1.toString();
//   let digit2=num2.toString();
//   let max=Math.max(digit1.length,digit2.length);
//   console.log(max)
//   let sum=0;
//   for(let i=0;i<max;i++)
//   {
//       let Num1=isNaN(parseInt(digit1[i])) ? 0:parseInt(digit1[i]);
//       console.log(Num1)
//       let Num2=i<digit2.length ? parseInt(digit2[digit2.length-1-i]):0;
//       console.log(Num2)
//       sum +=(Num1*Num2);
//   }
//   return sum;
// }
// console.log(sumOfCorrespondace(6,34))
