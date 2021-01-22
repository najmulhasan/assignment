//kilometerToMeter
var kilometer = 10;
function kilometerToMeter(kilometer){
    var meter = (kilometer*1000);
    return meter;
    
}

 var convertingResult = kilometerToMeter(10);
console.log(convertingResult);

//megaFriend
var friendsName = ["Nazmul", "Hasan", "Robi", "Chobi","Mohammad"];
function megaFriend(friendsName){
    var countWord = "";
    for(var i = 0; i< friendsName.length; i++){
        if(friendsName[i].length > countWord.length){
            countWord = friendsName[i];
        }
    }
    return countWord;
} 
var friendsName = ["Nazmul", "Hasan", "Robi", "Chobi","Mohammad"];
var output = megaFriend(friendsName);   

//hotelCost
function hotelCost (stayHotel){
    var totalCost = 0;
    if(stayHotel <= 10){
        totalCost = stayHotel * 100;

    }else if (stayHotel <= 20){
        var firstCost = 10 * 100;
        var remaining = stayHotel - 10;
        var secondCost = remaining * 80; 
        totalCost = firstCost + secondCost;

    }else{
        var firstCost = 10 * 100;
        var secondCost = 10 * 80;
        var remaining = stayHotel -20;
        var thirdCost = remaining * 50;
        totalCost = firstCost + secondCost + thirdCost;
    }
    return totalCost;
 
}
var count = hotelCost(25);

    

