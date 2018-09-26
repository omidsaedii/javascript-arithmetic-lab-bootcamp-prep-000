number=10 ;

function add5 ()
{
  number+=5;  
}

function divideBy3 ()
{
  number/=3 ;
}

divideBy3 ();
console.log(" number :" ,number);

add5 ();
console.log(" number =" ,number);

number=10 ;

add5();
console.log(" number =" ,number);

divideBy3();
console.log(" number =" ,number);

console.log(parseInt('2',10));
console.log(parseInt('2.2222',10));

console.log(parseFloat('80.123999'));

