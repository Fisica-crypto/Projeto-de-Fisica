const g = 9.8; //Aqui define a gravidade fixa.

export function grausParaRad(angulo){
    return angulo * (Math.PI/180); //o JS não usa o Graus(angulos) normais, então tem que usar o radiano
}

export function calcularAlcance(v0, angulo ){
    const angRad = grausParaRad(angulo);  //usa o radiano calculado.

    return (2 * v0 * Math.cos(angRad)) / g;
}

export function calcularAltura(velocidade, angulo){
        const v0 = parseFloat(velocidade);
        const ang = grausParaRad(angulo);


        if (isNaN(v0) || isNaN(ang)) {
            alert("digite valores validos!")
            return;
        }
        
       
        if (ang <= 0 || ang >= 90) {
            alert("Ângulo deve estar entre 0° e 90° (não inclusivo)");
            return;
        }

        if ( v0 > 30 ) {
            alert("A velocidade inicial tem que ser menor que 31 m/s")
            return;
        }

       return( (v0 ** 2 * Math.sin(ang) ** 2) / (2 * g)
        )
       };

export function calcularTempo(velocidade, angulo){

    const rad = angulo * (Math.PI / 180);

    const tempo = (2 * velocidade * Math.sin(rad)) / g;

    return tempo;
}