/*const obj=
{
    firstname:"akshaya",
    mark:99,

}
class person{
    constructor(firstname,mark)
    {
        this.firstname=firstname;
        this.mark=mark;
    }
}
let obj2=new person("akshu",100)
let obj3=new person("akshu",100)
console.log(obj2.firstname)*/

const arr=[2,4,6,8,9]
arr.forEach((x)=>{console.log(x)})

let filteredArr=arr.filter((x)=>x%2==0)
console.log(filteredArr)

let sum=arr.reduce((acc,val)=>(acc+val))
console.log(sum)
let copyArr=arr.slice(2,6)
console.log(copyArr)
arr.splice(2,4)
console.log(arr)