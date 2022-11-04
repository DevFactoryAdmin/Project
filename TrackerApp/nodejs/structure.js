Trip module
-----------

getDateWiseData(){}

getTravelModes(){}

getDays(){}

getDateWiseTripLatLongs(){}

SummaryUpdation(){}

MainDashDataFetch(){
    return getDateWiseData() + getTravelModes() + getDays()
}

DashDrillDataFetch(){
    return getDateWiseData() + getDateWiseTripLatLongs()
}

LowCarbTrips(){
    return data;
}

TripData1(){
    return getDateWiseTripLatLongs()
}

UpdateTravelMode(){

}

TripDrillDown(){
    return getDateWiseTripLatLongs();
}

TripInsert(){ 
    SummaryUpdation();
}