import React, { useEffect, useRef } from "react";
import p5 from "p5";

export default function ProjectileAnimation({ velocidade, angulo, gravidade, tempo, restart, onFinish }) {
  const sketchRef = useRef(null);
  const p5Instance = useRef(null);

  useEffect(() => {

    if(!restart) return;

    const v0 = Number(velocidade);
    const ang = Number(angulo);
    const g = Number(gravidade);

    if (!v0 || !ang || isNaN(v0) || isNaN(ang)) return;

    if (p5Instance.current) {
        p5Instance.current.remove();
    }

    const sketch = (p) => {

        let stopped = false;
        let t = 0;
        let pontos = [];

        let angleRad = (ang * Math.PI) / 180;
        let scale = 20;

        p.setup = () => {
            const width = sketchRef.current?.offsetWidth || 600;
            const height = sketchRef.current?.offsetHeight || 400;

            pontos = [];

            p.createCanvas(width, height).parent(sketchRef.current);
            p.frameRate(60);
        };

        p.draw = () => {

            p.background(220);

            let posX = v0 * Math.cos(angleRad) * t;
            let posY = v0 * Math.sin(angleRad) * t - 0.5 * g * t * t;

            if (isNaN(posX) || isNaN(posY)) return;

            p.stroke(0);
            p.line(0, p.height - 30, 5000, p.height - 30);

            let drawX = posX * scale;
            let drawY = p.height - 30 - posY * scale;

            pontos.push({ x: drawX, y: drawY });

            p.noFill();
            p.beginShape();
            for (let pt of pontos) {
                p.vertex(pt.x, pt.y);
            }
            p.endShape();

            p.fill(255,0,0);
            p.noStroke();
            p.circle(drawX, drawY, 12);

            if(!stopped){
                t += 0.05;
            }

            if (posY <= 0 && t > 0.05 && !stopped) {

                stopped = true;

                if(onFinish){
                    onFinish();
                }

                p.noLoop();
            }
        };
    };

    p5Instance.current = new p5(sketch);

    return () => {
        if (p5Instance.current) {
            p5Instance.current.remove();
        }
    };

}, [restart]);

  return (
    <div
      ref={sketchRef}
      style={{
        backgroundColor: '#E4E4E4',
        width: "100%",
        height: "500px",
      }}
    />
  );
}