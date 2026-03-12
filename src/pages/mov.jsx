const g = 9.8;

export function calcularTempo(velocidade, angulo){

    const rad = angulo * (Math.PI / 180);

    const tempo = (2 * velocidade * Math.sin(rad)) / g;

    return tempo;
}