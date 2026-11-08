let m=50

let count2=0; 

if(m>1)
{
    for(let r=1;r<=m;r++)
    {
        if(m%r===0)
        {
            count2++
        }
    }


}
if(count2===2)
{
    console.log("number is primenumber")
}
else{

    console.log("number is not primenumber")

}

