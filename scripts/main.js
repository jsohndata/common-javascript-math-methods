function clog(label='label', result='log') {
    console.log(label, result) 
}
function setHTML(paramWhere='body', paramWhat='test') {
    return document.querySelector(paramWhere).innerHTML = paramWhat;
}

function getValue(paramWhere='body') {
    return document.querySelector(paramWhere).innerHTML
}

function getRandomNum(paramLimit=1) {
    return Math.random() * paramLimit;
}

function getFloor(paramNum=1) {
    return  Math.floor(paramNum);
}

function getCeil(paramNum=1) {
    return  Math.ceil(paramNum);
}

function getRound(paramNum=1) {
    return  Math.round(paramNum);
}

function getTrunc(paramNum=1) {
    return  Math.trunc(paramNum);
}

function render() {
    const randomNum = getRandomNum();
    const currentInt = getValue('.integer');
    const randomWithInt = randomNum * currentInt;

    setHTML( ".integer", `${currentInt}` );
    setHTML( ".random", `${randomNum}` );
    setHTML( ".randomWithInt", `${randomWithInt}` );
    setHTML( ".floor", `${getFloor(randomWithInt)}` );
    setHTML( ".ceil", `${getCeil(randomWithInt)}` );
    setHTML( ".round", `${getRound(randomWithInt)}` );
    setHTML( ".trunc", `${getTrunc(randomWithInt)}` );
    clog("randomNum", randomNum );
}