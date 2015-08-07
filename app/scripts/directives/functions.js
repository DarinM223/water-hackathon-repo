function energyPerHour(MW, hour){
    return MW/hour;
}

function monthlyEnergy(GW){
    return GW;
}

function ranking(yourRank, totalPeople){
    var yourRankString = yourRank.toString();
    var totalPeopleString = totalPeople.toString();
    var message = yourRankString + "/" + totalPeopleString; 

    return message;
}