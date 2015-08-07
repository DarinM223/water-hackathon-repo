function energyPerHour(energy, hour){
    return energy/hour;
}

function monthlyEnergyUsage(monthlyEnergy){
    return monthlyEnergy;
}

function ranking(yourRank, totalPeople, rankType){
    var yourRankString = yourRank.toString();
    var totalPeopleString = totalPeople.toString();
    var message = yourRankString + "/" + totalPeopleString; 

    if(rankType === "Daily")
	return "Your Daily Rank: " + message;
    else if(rankType === "Monthly")
	return "Your Monthly Rank: " + message;
    else
	return "Please enter a valid rank type";
}