function isShovellingSnowTime(haveShovel){
    console.log("Do I have a shovel?", haveShovel);
    if(haveShovel){
        console.log("Go to Home Depot");
        console.log("buy a shovel");
    }
}
function putOnCoat(){
    console.log("put on coat");
}

function checkShovel(shovelInCondition){
    console.log("is the shovell broken", shovelInCondition);
    if(shovelInCondition){
        console.log("fix it");
    }
}

function putOnSnowBoots(){
    console.log("put on snow boots")
}

function putOnSnowPants(){
    console.log("put on snow pants");
}

function grabTheShovel(){
    console.log("grab the shovel");
}

function goOutSide(){
    console.log("start shovelling");
}

function pileTheSnowOnTheSide(){
    console.log("pile the snow on the side");
}

function goBackInside(){
    console.log("Go back inside");
}

function snowShovelling(haveShovel, shovelInCondition){
console.log("make sure you have all you need");
isShovellingSnowTime(haveShovel);
putOnCoat();
checkShovel(shovelInCondition);
putOnSnowBoots();
putOnSnowPants();
grabTheShovel();
goOutSide();
pileTheSnowOnTheSide();
goBackInside();
console.log("rest")
}

console.log("\n");
console.log("Time to shovel snow");
snowShovelling(false, true);
console.log("/n");
console.log("We do have a shovel but is broken");
snowShovelling(true, false);





