var word = 0;
var y;
    var RAMHacks = function(x){
        if ((x/15) % 1 === 0){
            word = "RAMHacks";
            return word;
        } //println(word);}
        else if ((x/5) % 1 === 0){
            word = "Hacks";
            return word;
        } //println(word);}
        else if ((x/3) % 1 === 0){
            word = "RAM"; 
            return word;
        }//println(word);}
        else
        {return"";}
    };
var numberType = function(){
    for (var i = 1; i<=50; i++){
        y = RAMHacks(i);
        if (y!==""){
        println(y);}
        else
        {println(i);}
        
    }
};
numberType();








