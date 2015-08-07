//Returns the water usage (in gallons) per time unit
function waterUsagePerTimeUnit(gallons, timeUnit){
    return gallons/timeUnit;
}

//Returns your ranking among the total people in your location
function ranking(yourRank, totalPeople){
    var yourRankString = yourRank.toString();
    var totalPeopleString = totalPeople.toString();
    var message = yourRankString + "/" + totalPeopleString; 

    return message;
}