function myFun() {
    
    london = [2500, 1500, 1000, 900],
    amsterdam = [1500, 500, 1800, 700],
       
    l = 0,
    a = 0,

    londonC = london.length,
    amsterdamC = amsterdam.length,
    
    Nul = 0,
    Nua = 0;
     
    for (; l < londonC; ) { Nul += london[l]; l++;};
    for (; a < amsterdamC; ) { Nua += amsterdam[a]; a++;};
    
    londonX = Nul / london.length;  
    amsterdamX = Nua / amsterdam.length,
        
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