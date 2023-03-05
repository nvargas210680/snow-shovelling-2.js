function isShovellingSnowTime(hasNoShovel){
    console.log("I do not have any shovel?", hasNoShovel);
    if(hasNoShovel){
        console.log("Go to home depot, buy one")
        console.log("Go grab it");
       
    }
}  
function getReady(){
    console.log("get ready");
}
function checkShovelNoBroken(shovelIsBroken){
    console.log("is the shovel Broken?", shovelIsBroken);
    if(shovelIsBroken){
        console.log("fix it");
    }
}

function putOnGloves(){
    console.log("put on gloves");
}

function putOnCoat(){
    console.log("put on coat");
}

function putOnSnowPants(){
    console.log("put on snow pants")
}

function goOutSide(){
    console.log("go outside");
}

function startShovelling(){
    console.log("start shovelling");
}

function getinsideHaveCoffee(){
    console.log("go inside, have coffee");
}

function shovellingTime(hasNoShovel, shovelIsBroken){
    console.log("start");
    isShovellingSnowTime(hasNoShovel);
    getReady();
    checkShovelNoBroken(shovelIsBroken);
    putOnGloves()
    putOnCoat()
    putOnSnowPants()
    goOutSide()
    startShovelling()
    getinsideHaveCoffee()   
    console.log("end")
}
console.log("\n")
console.log("starting process with shovel");
shovellingTime(true, false);
console.log("\n");
console.log("starting the process with broken shovel");
shovellingTime(false, true);
console.log("\n")
console.log("starting the process with shovel but broken");
shovellingTime(false, false);
console.log("\n");
console.log("starting process with no shovel");
shovellingTime(true, true);


