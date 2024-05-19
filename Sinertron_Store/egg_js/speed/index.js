
function Cal_Velocity(distance,tiempo) {
    let velocity = distance / tiempo;
    //alert ("La velocidad es: " + velocity);
    return velocity;
}


const Velocity1 = Cal_Velocity (20,5);
const Velocity2 = Cal_Velocity (100,4);
const Velocity3 = Cal_Velocity (120,15);

alert ("La velocidad uno es: "+ Velocity1);
alert ("La velocidad uno es: "+ Velocity2);
alert ("La velocidad uno es: "+ Velocity3);