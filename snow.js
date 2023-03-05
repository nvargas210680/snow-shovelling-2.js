function isShovelingSnowTime(hasNoShovel){
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

function startShoveling(){
    console.log("start shovelling");
}

function getinsideHaveCoffee(){
    console.log("go inside, have coffee");
}

function shovelingTime(hasNoShovel, shovelIsBroken){
    console.log("start");
    isShovelingSnowTime(hasNoShovel);
    getReady();
    checkShovelNoBroken(shovelIsBroken);
    putOnGloves()
    putOnCoat()
    putOnSnowPants()
    goOutSide()
    startShoveling()
    getinsideHaveCoffee()   
    console.log("end")
}
console.log("\n")
console.log("starting process with shovel");
shovelingTime(true, false);
console.log("\n");
console.log("starting the process with broken shovel");
shovelingTime(false, true);
console.log("\n")
console.log("starting the process with shovel but broken");
shovelingTime(false, false);
console.log("\n");
console.log("starting process with no shovel");
shovelingTime(true, true);


