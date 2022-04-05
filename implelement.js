// // array ==> object
// // [{}]

// // array destruction
// // 1000=""
// const studentDetail=[
//     {
//         name:'Prashant',
//         age:2,
//         year:2020
//     },
//     {
//         name:"Ramesh Bankar",
//         age:25,
//         year :2020
//     },
//     {
//         name:"Rashi Paatle",
//         age:20,
//         year:2020
//     },
//     {
//         name:"Salman Khan",
//         age:50,
//         year:2020
//     }
// ]





// let newStudent1={
//     name:"Rahul Gupta",
//     age:100,
//     year:2050
// }
// let newStudent3={
//     name:"Rahul kumar",
//     age:100,
//     year:2050
// }

// // studentDetail.shift();

// // console.log(studentDetail)
// // delete studentDetail[0]
// // console.log(studentDetail)
// // let thirdArr=studentDetail.concat(studentDetail2)
// // console.log(thirdArr)
// // console.log(studentDetail)

// // studentDetail.splice(2,2,newStudent1,newStudent3)

// // studentDetail.splice(0,1);

// // studentDetail.toString()
// // arr=['sd','sdfds','sdfds']
// // let val=arr.join("-")
// // console.log(arr.reverse())
// let arr=[1,2,100,800,500]
// // arr.sort((felem,secElem)=>{
// //     console.log(felem)
// // })
// // console.log(arr)

// // studentDetail.sort((flem,slem)=>{
// //     return flem.age-slem.age
// // })

// // console.log(studentDetail)


// // const maxVal=(studentDetail)=>{
// //     return Math.max.apply(null,studentDetail);
// // }

// // const lowVal=(studentDetail)=>{
// //     return Math.min.apply(null,studentDetail);
// // }

// // console.log(lowVal(arr))





// // studentDetail.sort((a,b)=>{
// //     let x=a.name.toLowerCase();
// //     let y=b.name.toLowerCase();
// //     if(x < y) return -1;
// //     if(x > y) return 1;
// //     return 0;
// // })

// // console.log(studentDetail)

// // let arr1=[2,3,4,5];

// //     let sum=arr1.reduce((total,value)=>{
// //         return total+value;
// //     })

// // console.log(sum)


const studentDetail2=[]

studentDetail2.push(  {
    name:'Yash',
    age:2,
    year:2020
},
{
    name:"Rahul",
    age:5,
    year :2020
},
{
    name:"Rashi Paatle",
    age:10,
    year:2020
},
{
    name:"Salman Khan",
    age:10,
    year:2020
},
{
    name:"Salman2 Khan",
    age:10,
    year:2020
},
{
    name:"Salman3 Khan",
    age:10,
    year:2020
})


console.log(studentDetail2)


studentDetail2.find((element)=>{
    if(element.age==10){
        console.log(element)
    }
})

let index=studentDetail2.findIndex((iterate,index,staticCopy)=>{
    if(iterate.name=='Yash'){
        return iterate.name;
    }
})


studentDetail2[index].name="Sarim"

console.log(studentDetail2)

let updateValue=studentDetail2.filter((iterate,index,staticCopy)=>{
    if(iterate.age!=10){
        return iterate;
    }
})

console.log(updateValue)




// switch(operation){
//     case 'create':
//         // create operation
//         break;
//     case 'select':
//         // select,
//         break;
//     case 'update':
//         // update
//         break;
//     case 'delete':
//         // delete
// }