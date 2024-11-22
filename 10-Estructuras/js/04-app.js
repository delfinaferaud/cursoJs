const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;

if(dinero >= totalAPagar){
    console.log("si podemos pagar")
}else if(tarjeta){
    console.log("puedo pagar tengo la tarjeta")
}else{
    console.log("fondos insuficientes")
}
