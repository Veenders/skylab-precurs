//Ejercicio A
var name='Carles';
console.log(name);

//Ejercicio B
var age=40;
console.log(age);

//Ejercicio C
var info=[name,'Vila',age];
console.log(info);

//Ejercicio D
var data={name: name,
        secondname: 'Vila', 
        age: age};
console.log(data);

//Ejercicio E
for(var i=0;i<info.length;i++){
    console.log(info[i]);
}

//Ejercicio F
var a=25;
var b=12;
if(a<b){
    console.log(b);
}else{
    console.log(a);
}

//Ejercicio F1
var c=25;
var d=12;
if(c<d){
    console.log(d);
}else if(c==d){
    console.log('The numbers are equal');
}else{
    console.log(c);
}

//Ejercicio G
var loop = [10,15,20,25,30];
var middle = 0;
if(loop.length%2==0){
    middle = loop.length/2-1;
}else{
    middle = Math.trunc(loop.length/2);
}
for(var i=0;i<loop.length;i++){
    console.log(loop[i]);
    if(i==middle){
        console.log("We are in the middle of loop");
    }
}

//Ejercicio G1
var name2 = "Pepe";
var age2 = 40;
if(name2==name && age2==age){
    console.log('Hi!! Glad to see you again');
}else{
    console.log('This is not you!!');
}

//Ejercicio H
var myDni = "53127890Y";
var user = "Joan";
var id = "12345678A";
if(user == name || id==myDni){
    console.log("Permission granted");
}else{
    console.log("Try again");
}

//Ejercicio I
var array = ['Pepe','Luis','Juan','Carles',25,35,40,43];
for(var i=0;i<array.length;i++){
    if(array[i]==name || array[i]==age){
        console.log('We find your data! '+array[i]);
    }
}

//Ejercicio J
for(var i=0;i<array.length;i++){
    for(var j=0;j<array[i].length;j++){
        console.log(array[i][j]);
    }
}

/* Feedback:
    Corregir:
     - No fer us de == usar en lloc d'aquest === ja que el doble igual no te en compte el format, és a dir, si
     comparem un number amb una string ex (3 == '3') això ens donarà true, intentar fer servir sempre el triple igual
     ja que estarem comparant el mateix tipus de valor primitiu.
     - D'altre banda a mode de fer més llegible el codi separar les asignacions, exemple:
     for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].length; j++){
            console.log(array[i][j]);
        }
      }
      Això fa molt mes llegible el codi.
      En general bona feina!! 😁
*/
