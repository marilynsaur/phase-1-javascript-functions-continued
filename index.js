// code your solution here

function saturdayFun(target = "roller-skate") {
    return `This Saturday, I want to ${target}!`;
}
saturdayFun(undefined);
saturdayFun("bathe my dog");


function mondayWork(plans = "go to the office") {
    return `This Monday, I will ${plans}.`;
}
mondayWork(undefined);
mondayWork("work from home.");

function wrapAdjective(greeting,msg = "You are" ) {
    return function (name,cutie ="!") {
        return `${msg} ${greeting}${name}${greeting}${cutie}`;
};

}
wrapAdjective ("*")("a hard worker");
wrapAdjective ("||")("a dedicated programmer");
