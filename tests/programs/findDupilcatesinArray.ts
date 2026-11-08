let p=[1,2,3,1,4,2]

let count3=0;
let flag=false
let q=[]

for(let a=0;a<p.length;a++)
{

for(let j=a+1;j<p.length;j++)
{
    if(p[a]===p[j])
    {
        count3++;
        console.log(p[a]+" :" +`is duplicate number`);
        q.push(p[a])
    }
}

}
if(count3>0)
{
 console.log(`Array has dupilcate numbers, Total dupilcate numbers are ${count3}`)
 console.log(q)
 
}