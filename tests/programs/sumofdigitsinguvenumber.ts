let o=1234567894


let sum=0;

while(o>0)
{
    sum=sum+o%10;
    o=Math.floor(o/10);

}

console.log(sum)

