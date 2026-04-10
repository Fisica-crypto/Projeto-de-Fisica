const g = 9.8

export function grausParaRad(angulo){
    return angulo * (Math.PI/180); //o JS não usa o Graus(angulos) normais, então tem que usar o radiano
}

export function calcularAlcance(velocidade, angulo){
    const angRad = grausParaRad(angulo);  //usa o radiano calculado.
    const t = (calcularTempo(velocidade, angulo)) / 2

    return (2 * velocidade * Math.cos(angRad)) * t;
}

export function calcularAltura(velocidade, angulo, gravidade){
        const v0 = parseFloat(velocidade);
        const ang = grausParaRad(angulo);
        const g = parseFloat(gravidade)
        var Erro = ''
        
        
        if (isNaN(v0) || isNaN(ang) || isNaN(g)) {
            Erro("Por favor, preencha todos os campos com valores válidos!");
            return;
        }

        if (ang <= 0 || ang >= 90) {
            Erro("O ângulo deve estar entre 0° e 90° (não inclusivo)");
            return;
        }

        if (isNaN(v0) || isNaN(ang)) {
            alert("digite valores validos!")
            return;
        }
        
       
        if (ang <= 0 || ang >= 90) {
            alert("Ângulo deve estar entre 0° e 90° (não inclusivo)");
            return;
        }

       return( (v0 ** 2 * Math.sin(ang) ** 2) / (2 * g)
        )
       };

export function calcularTempo(velocidade, angulo){

    const rad = grausParaRad(angulo)

    const tempo = (2 * velocidade * Math.sin(rad)) / g;

    return tempo;
}