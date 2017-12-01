function myFun() {
    
    amsterdam = [1500, 500, 1800, 700],
    london = [2500, 1500, 1000, 900],

    amsterdamC = amsterdam[0] + amsterdam[1] + amsterdam[2] + amsterdam[3],

    londonC = london[0] + london[1] + london[2] + london[3],

    amsterdamX = amsterdamC / 4,

    londonX = londonC / 4;
        
    document.getElementById("ams").innerHTML = amsterdamX ;
    document.getElementById("lon").innerHTML = londonX ;
    

    if(amsterdamX > londonX) {
        document.getElementById("Pr").innerHTML = amsterdamX - londonX ;
        document.getElementById("Text").innerHTML = "<span>Amsterdam </span>Will be more affordable than <span>London </span>for the New Year's celebration Difference in price" ;
        


    } else {

        document.getElementById("Pr").innerHTML = londonX - amsterdamX ;
        document.getElementById("Text").innerHTML = "<span>London </span>Will be more affordable than <span>Amsterdam </span>for the New Year's celebration Difference in price" ;
    }

};myFun()