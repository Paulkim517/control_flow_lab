
var bots= prompt("how many verses do you want?")


for(i=parseInt(bots);i>0;i--){
    if(i>1){
        console.log( i+" bottles of beer on the wall "+ i +" bottles of beer!"+" Take one down and pass it around, "+(i-1)+" bottles of beer on the wall!")
    }else if(i<=1){
        console.log(i+" bottle of beer on the wall "+ i +" bottle of beer!"+" Take one down and pass it around, no more bottle of beer on the wall!")
    }
}
 