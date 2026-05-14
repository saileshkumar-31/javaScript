let year = 20000;

//divisible by 4;
//divisible by 100 => for century year
//divisible by 400 => after century year passes

if(year % 4 == 0  ){
    if( year % 100 == 0){
        if(year % 400 == 0){
            console.log(  year + ": IT IS A LEAP YEAR " )
        }else{
            console.log("NOT A LEAP YEAR")
        }
    }else{
        console.log( year + " : IT IS A LEAP YEAR ")
    }

}else{
    console.log("NOT A LEAP YEAR")
}