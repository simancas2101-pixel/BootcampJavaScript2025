let longitud1=prompt("digita longitud1")
    let longitud2=prompt("digita longitud2")
    let longitud3=prompt("digita longitud3")

    if(longitud1==longitud2&&longitud2==longitud3){
        alert("equilatero") 
    }
    else if (longitud1==longitud2 || longitud1==longitud3 || longitud2==longitud3)
    {        alert("isoceles") 
    }
    else { alert("escaleno")} 