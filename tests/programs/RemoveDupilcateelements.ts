let a:number[]=[1,2,3,4,2,1,5,4,6,1,1,1,6,6]

let b:number[]=[];
let dupilcates:number[]=[]



// let str='sddssdds'

for(let num of a)
{
    if(!b.includes(num))
    {
          b.push(num)
    }
    else{
        if(!dupilcates.includes(num))
        {
            dupilcates.push(num);
        }
    }
}

console.log(b,dupilcates)