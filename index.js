// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - 42);
}

distanceFromHqInBlocks(34)


function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264
}


function calculatesFarePrice(start, destination) {
    let numberFeet = distanceTravelledInFeet(start, destination)
    let result

    if (numberFeet <= 400) {
        result = 0
    } else if (2500 <= numberFeet) {
        result = 'cannot travel that far'
    } else if (400 < numberFeet && numberFeet <= 2000) {
        result = (((numberFeet - 400) * 2) / 100)
    } else if (2000 < numberFeet && numberFeet < 2500) {
        result =  25
    }

    return result
}

