var myName="Carles";
var myCompleteName="Carles Vila";

//Strings - Ejercicio A
console.log("My name length is "+ myName.length);

//Strings - Ejercicio B
var position = myCompleteName.indexOf(' ')+1;
console.log("My lastname starts on position: "+position);

//Strings - Ejercicio C
console.log("My name is "+myCompleteName.slice(0,myCompleteName.indexOf(' ')));

//Strings - Ejercicio D
console.log("My lastname is "+myCompleteName.slice(myCompleteName.indexOf(' ')+1));

//Strings - Ejercicio D1
var lastName = myCompleteName.slice(myCompleteName.indexOf(' ')+1)
console.log("My name is "+lastName+", "+myCompleteName);

//Strings - Ejercicio E
var mrName = myCompleteName.replace(myName,"Mr.")
console.log("Dear "+mrName+";");

//Strings - Ejercicio F
console.log("My lastname is "+lastName.toUpperCase());

//Strings - Ejercicio G
console.log(myName.concat(" ",lastName)+" are awesome!!");

//Strings - Ejercicio H
var initials = myCompleteName.charAt(0);
for(var i=0;i<myCompleteName.length;i++){
    if(myCompleteName[i]==" "){
        initials += "."+myCompleteName[i+1];
    }
}
console.log("My initials are "+initials.toUpperCase());

//Arrays - Ejercicio A
var myCompleteNameArray = [];
for(var i=0;i<myCompleteName.length;i++){
    myCompleteNameArray.push(myCompleteName[i]);
}
console.log(myCompleteNameArray.join('/'));

//Arrays - Ejercicio B
var myLastNameArray = myCompleteNameArray.slice(myCompleteNameArray.indexOf(' ')+1);
console.log(myLastNameArray.join('|'));

//Arrays - Ejercicio C
var positionName='';
var myNameArray=myCompleteNameArray.slice(0,myCompleteNameArray.indexOf(' '));
for(var i=0;i<myNameArray.length;i++){
    positionName += (i+1)+'º '+myNameArray[i]+', ';
}
console.log(positionName);

//Arrays - Ejercicio D
var positionLastName='';
for(var i=0;i<myLastNameArray.length;i++){
    positionLastName += (i+1+myNameArray.length)+'º '+myLastNameArray[i]+', ';
}
console.log(positionLastName);

//Arrays - Ejercicio E
var initialsArray = [myCompleteNameArray[0]];
for(var i=0;i<myCompleteNameArray.length;i++){
    if(myCompleteNameArray[i]==" "){
        initialsArray.push(myCompleteNameArray[i+1]);
    }
}
console.log("My initials are "+initialsArray.join("."));

//Arrays - Ejercicio F
var myAge=40;
var myPersonalData = [myName,lastName,myAge];
console.log("My name is "+myPersonalData[0]+' and I\'m '+myPersonalData[2]+' old.');

//Arrays - Ejercicio G
function CityAdd(city){
    myPersonalData.push(city);
}
CityAdd('Granollers');
console.log('City added to array! => '+myPersonalData);

//Array - Ejercicio H
function CityRemove(city){
    var index = myPersonalData.indexOf(city);
    delete myPersonalData.splice(index,1);
}
CityRemove('Granollers');
console.log('City removed from array! => '+myPersonalData);

//Array - Ejercicio J
CityRemove(myName);
console.log('Name removed from array! => '+myPersonalData);

//Array - Ejercicio K
myPersonalData.unshift(myName);
console.log('Name added to array! => '+myPersonalData);

//Array - Ejercicio L
var numbers=[0,1,2,3,4,5,6,7,8,9,10];
function multiple(num){
    return num*this;
}
console.log(numbers.map(multiple,2));

//Array - Ejercicio L1
console.log(numbers.map(multiple,3));

//Array - Ejercicio M
console.log(numbers.sort(function(a,b){return b-a}));

//Array - Ejercicio N
function ContarLetras(array,letra){
    var index=0;
    for(var i=0;i<array.length;i++){
        if(array[i]==letra){
            index++;
        }
    }
    return index;
}
var resultContar=[];
for(var i=0;i<myCompleteNameArray.length;i++){
    var contador=ContarLetras(myCompleteNameArray,myCompleteNameArray[i]);
    if(contador>1){
        resultContar[myCompleteNameArray[i]]=contador;
    }  
    
}
console.log(resultContar);

//Array - Ejercicio N1
var resultName=[]
for(var i=0;i<myCompleteNameArray.length;i++){
    var contador=ContarLetras(myCompleteNameArray,myCompleteNameArray[i]);
    if(contador==1){
        resultName.push(myCompleteNameArray[i]);
    }  
}
console.log(myCompleteNameArray.join('')+", the Letters => "+resultName+" are not repeated, the name is "+resultName.join(''));

//Numbers - Ejercicio A
var date = new Date();
console.log(date);