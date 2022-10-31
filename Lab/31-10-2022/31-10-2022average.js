let a=[100,50,70,85,90,45,78];
let average =0;
for(let i=0;i<a.length;i++)average +=a[i];
average = average/a.length;
const avg= document.getElementById('average');
avg.innerHTML=average;

//count frequency
const b =[1,2,'btech', 'fs',1,1,1,'btech','btech','fs','fs'];
let count1 =0 , count2=0, countbtech=0,countfs=0;
for(let i=0;i<b.length;i++){
    if(b[i]===1)count1++;
    if(b[i]===2)count2++;
    if(b[i]==='btech')countbtech++;
    if(b[i]==='fs')countfs++;
}
console.log("Count for 1 is: "+count1+'\n');
console.log("Count for 2 : "+count2+'\n');
console.log("Count for 'btech ' :" +countbtech+'\n');
console.log("Count for 'fs' :" +countfs+'\n');

//Move array element at given position
let x = 2; // position to move at
let y=5;//element to be moved
console.log(a);
for(let i=0;i<a.length;i++){
    if(i===y){
        let temp = a[x];
        a[x]=a[y];
        a[y]=temp;
    }
} 
console.log(a);

//Highest Sum value pair abd lowest sebtract value pair [20,1,3,9]
const c = [20,1,3,9,3,4,-1000,78,10000];
let highest = 0 , highest2=1;
let lowest = 0 , lowest2=1;
let sum=c[0]+c[1],difference=c[0]+c[1];
for(let i=0;i<c.length;i++){
    for(let j=0;j<c.length;j++){
        if(c[i]+c[j]> sum && i!=j){
            highest = i;
            highest2 = j;
        }
        if(c[i]-c[j]< difference && i!=j){
            lowest = i;
            lowest2 = j;
        }
    }
   
}
 console.log("Highest pair : ",c[highest]+" "+ c[highest2]);
 console.log("Lowest pair : ",c[lowest]+" "+ c[lowest2]);

 //Adding $ sign in between two odd numbers
 let d =[1,2,3,4,5,6,7];
 

function insertDash(str) {

   let arr = str.split("");

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0) {

            let x = arr.splice(i + 1, 0, '-');

        }

    }

    return arr;

}

console.log(insertDash("99999"));
function move(arr){
    arr.sort();
}
 

   
let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
move(arr);
arr.reverse();
for (let e of arr)
    document.write(e , " ");