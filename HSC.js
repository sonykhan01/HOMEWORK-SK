function mohnpur(Bordsc)
{

    let HSC


    switch(true){
        case (Bordsc >=80 && Bordsc <=100 ):
            HSC= 'A+'
            break;
        case (Bordsc >=70 && Bordsc <=79 ):
            HSC= 'A'
            break;
        case (Bordsc >=60 && Bordsc <=69 ):
             HSC= 'A-'
             break;
        case (Bordsc >=50 && Bordsc <=59 ):
             HSC= 'B'
             break;    
        case (Bordsc >=40 && Bordsc <=49 ):
             HSC= 'B-'
             break;
        case (Bordsc >=30 && Bordsc <=39 ):
            HSC= 'C'
            break; 
       
       default: 
       return 'fail'

    }
  
    return HSC
}
 console.log(mohnpur(32));
 




