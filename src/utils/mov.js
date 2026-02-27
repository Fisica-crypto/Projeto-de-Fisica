export function grausParaRad(graus){
    return graus * (Math.PI/180); //o JS não usa o Graus(angulos) normais, então tem que usar o radiano
}

export function calcularAlcance(v0, angulo ){
    const g = 9.8; //Aqui define a gravidade fixa.
    const angRad = grausParaRad(angulo);  //usa o radiano calculado.

    return (v0 * v0 * Math.sin(2 * angRad)) / g;
}