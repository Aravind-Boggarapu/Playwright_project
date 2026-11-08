let r="Aravind is good"

let reverse='';
for(let i=r.length-1;i>=0;i--)
{
    reverse=reverse+r.charAt(i)

}

console.log(reverse)


function reverse1()
{
 
    let f='playwright is  test'
    let g=f.split('').reverse().join('')
    console.log(g)


}
reverse1()