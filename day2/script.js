/*let arr=[4,2,7,27,6]

for(let x of arr)
{
    console.log(x)
}
for(let x in arr)
{
    console.log(x)
}

arr.forEach((value)=>)
{
    console.log(value)
}
 */
//javascript object
const obj={
    firstname:"akshaya",
    lastname:"ganesh",
    age:18,
    graduated:false,
    joining_date:new Date("31/07/2025"),
    no_of_days:()=>{
        let curr=new Date()
        return curr=obj.joining_date
        
    }
}
console.log(obj)