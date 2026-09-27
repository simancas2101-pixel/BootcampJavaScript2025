

// Formula para calcular el numero de paneles solares para suplir el consumo en un hogar de la costa caribe *//

function calcularPaneles() {
    
    let cosumoHogar=parseFloat(prompt("por favor ingrese su consumo promedio mensual"))
    let consumoDiario=(cosumoHogar/30)
    const constantePanelkw=0.3
    let diasDesol=8
    
     return ((consumoDiario/diasDesol)/constantePanelkw);

    

}


console.log(" la cantidad de paneles son el numero entero mas cercano   " +calcularPaneles())


