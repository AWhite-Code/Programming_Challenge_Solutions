const EXPECTED_MINUTES_IN_OVEN = 40;
export function remainingMinutesInOven(duration){
    return (EXPECTED_MINUTES_IN_OVEN - duration);
}

export function preperationTimeinMinutes(layers){
    return (layers*2);
}

export function totalTimeInMinutes(numberOfLayers,actualMinutesInOven){
    return (preperationTimeinMinutes(numberOfLayers) + remainingMinutesInOven(actualMinutesInOven));
}

console.log(totalTimeInMinutes(3,20));