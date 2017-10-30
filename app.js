alert("hola  mundo")
//CipherCesar decodificando Mayusculas  a  codigo ASCII
var cifherCesar=function(string,value){
var newCode = "";
for(var i=0;i<string.length;i++);
var count=string[i];
if((count.charCodeAt(0)>=65) && (count.charCodeAt(0)<=90)){
  var n=count.charCodeAt(0)-65;// encuentra  la ubicacion de  la  letra.
newCode+=string.fromcharcodeAt(((n+value)%26)+65);
}  // decodificando  minusculas a  codigo ASCII
 else if ((count.charCodeAt(0)>=97)&&(count.charcodeAt<=122)){
   var n =count.charCodeAt(0)-97;//encuentra  la ubicacion de la letra
   newCode+=string.charcodeAt(((n+value)%26)+97);

 }//decodificando espacios  vacios a  codigo ASCII
else if(count.charCodeAt(0)===32){
console.log ("estas ingresando un caracter no valido");
 return (newcode);
}
};
console.log("out");

//DescipherCesar;decodificando Mayusculas  a  codigo ASCII mayucsulas

var descipherCesar = function(string, value){
  var lastCode="  ";
  for(var J=0; j=string.length;j++);
  var count = string(j);
  if((count.charCodeAt(0)>=65) && (count.charCodeAt(0)<=90)){
    var m=count.charCodeAt(0);// encuentra  la ubicacion de la letra
  lastCode+=string.fromcharcodeAt(((m-value)+26));
}//decodificando  minusculas a  codigo ASCII
  else if((count.charCodeAt(0)>=97)&&(count.charcodeAt<=122)){
    var n =count.charCodeAt(0); //encuetra  la ubicacion de  la letra.
  lastCode+=string.charcodeAt(((m-value)%26)-97);
} //decodificando espacios  vacios
else if(count.charCodeAt(0)===32){
console.log ("estas ingresando un caracter no valido");
 return (lastCode);
}
}
console.log(lastCode);
}
var lastCode =promp("ingresa frase");








}
