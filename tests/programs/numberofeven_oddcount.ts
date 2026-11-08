let l=123456789;
let evencount=0,oddcount=0, verifynum;
while(l>0)
{
  verifynum=l%10

  if(verifynum%2===0)
  {
    evencount++;
  }
  else if(verifynum%2!==0)
  {
    oddcount++
  }

  l=Math.floor(l/10);
}
console.log(evencount,oddcount)




