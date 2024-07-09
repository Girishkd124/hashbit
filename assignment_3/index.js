// ## assignment_3.1
// let states = [
//     "Andhra Pradesh",
//     "Arunachal Pradesh",
//     "Assam",
//     "Bihar",
//     "Chhattisgarh",
//     "Goa",
//     "Gujarat",
//     "Haryana",
//     "Himachal Pradesh",
//     "Jharkhand",
//     "Karnataka",
//     "Kerala",
//     "Madhya Pradesh",
//     "Maharashtra",
//     "Manipur",
//     "Meghalaya",
//     "Mizoram",
//     "Nagaland",
//     "Odisha",
//     "Punjab",
//     "Rajasthan",
//     "Sikkim",
//     "Tamil Nadu",
//     "Telangana",
//     "Tripura",
//     "Uttar Pradesh",
//     "Uttarakhand",
//     "West Bengal"
// ];
  
// let countBefore = states.length;

// let statesWithoutVowels = states.filter(state => {
// let firstLetter = state.trim().charAt(0).toLowerCase();
// return !['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
// });

// let countAfter = statesWithoutVowels.length;

// console.log("Number of states before filtering:", countBefore);
// console.log("Number of states after filtering:", countAfter);
// console.log("States after filtering:", statesWithoutVowels);
// assignment 3.2
// let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

// let str='I love my India'
// console.log(str.split(" ").reverse().join(" "))

// assingment 3.3
// let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice
// let string="INDIA"
// let arr1=string.split("")
// arr1.splice(3,0,"O","N","E","S")
// console.log(arr1)

// assingnment 3.4

// let str1="ASMJHOEGTSMKLDOUMNSJ";
// let countOfConsonants=0;
// let countOfVowels=0;
// for(let i=0;i<20;i++)
// {
//       if(str1[i]=="A" || str1[i]=="E" || str1[i]=="I" || str1[i]=="O" ||str1[i]=="U")
//       {
//            countOfVowels++;
//       }
// }
// countOfConsonants=20-countOfVowels;
// console.log("count of vowels :"+countOfVowels)
// console.log("count of consonants :"+countOfConsonants)

// assingment 3.5
// function correctfn(string, wrong, correct){
//       string=string.replace(wrong,correct);
//       return string;
// }
// console.log(correctfn("my name is raju","raju","shyam"))

// assignment 3.6

// let inputArr = [1,2,3,9,10,7,5,4,3]
// let outputArr=inputArr.filter((i)=>{
//     return i>5;
// })
// console.log(outputArr)

// assignment 3.7
// const students = [
//     { name: "Ram", scores: [80, 70, 60] },
//     { name: "Mohan", scores: [80, 70, 90] },
//     { name: "Sai", scores: [60, 70, 80] },
//     { name: "Hemang", scores: [90, 90, 80, 80] },
//     ];
//     let sum=0;
//     students.map((i)=>{
//             let r=i.scores.reduce((acc,el)=>{
//                  return acc+el
//             })/i.scores.length;
//             i.average=r;
//             delete i.scores;
//     })
//     console.log(students)

// assignment 3.8
// Write a function to find repeated sum of digits until
//  there is only a single digit in the number.
// Example - 456 => 4+5+6 => 15 => 1+5 = 6.
// let sum=0;
// function SumOfDigit(number)
// {
//     while(number>9)
//     {
//         while(number>0){
//             let digit=number % 10;
//             sum+=digit;
//             number=Math.floor(number/10)
//             // console.log(number)
//         }
//         number=sum;
//         sum=0;
//   }
//   return number;
// }
// console.log(SumOfDigit(456))

// assingment 3.9
// Write a function to count the number of words in a paragraph.
// function Count(para){
//     let word=para.split(" ");
//     return word.length;
// }

// console.log(Count("my name is girish"));

// assignment 3.10
// Write a function to reverse a string.
// Input - Hello
// Outpur - olleH
// function Reverse(string){
//     let str=string.split("");
//     str.reverse();
//     string=str.join("")
//     return string;
// }
// console.log(Reverse("Hello"))

// assignment 3.11
// let marks={
//     student1 : {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// };
// // let newmarks=marks.map((i)=>{console.log(i)})
// Object.keys(marks).map((i)=>{
//     let totalMark= Object.values(marks[i]).reduce((a,b)=>(a+b))
//     let average=totalMark / Object.values(marks[i]).length;
//     marks[i]={average:average}
// })

// console.log(marks)