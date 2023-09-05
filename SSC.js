const bakshamoil= (bordnumber) => {
    let number;

    if ((bordnumber<=100) && (bordnumber >= 90 )) {
        number= "Golden A+";
    }  else if ((bordnumber<=89) && (bordnumber >= 80 ))  {
        number= "A+"
    }  else if ((bordnumber<=79) && (bordnumber >= 70 ))  {
        number= "A"
    }  else if ((bordnumber<=69) && (bordnumber >= 60 ))  {
        number= "A-"
    }  else if ((bordnumber<=59) && (bordnumber >= 50 ))  {
        number= "B"
    }  else if ((bordnumber<=49) && (bordnumber >= 40 ))  {
        number= "B-"
    }  else if ((bordnumber<=39) && (bordnumber >= 30 ))  {
        number= "C"
    }  else if ((bordnumber<=32) && (bordnumber >= 1 ))  {
        number= "fail"
    } // else if ((bordnumber == null) || (bordnumber=="") ) {
       // number= " Enter Number"
     else {
        number= " Piz enter Number"
    };
    return number;
};
let result = bakshamoil(40);

console.log(result);
