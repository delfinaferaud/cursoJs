const auto = {
    modelo: "camaro",
    año: 1969,
    motor:"1.0"
}

for(let propiedad in auto){
    console.log(`${auto[propiedad]}`)
}

for(let [llave, valor] of Object.entries(auto)){
    console.log(llave)
}