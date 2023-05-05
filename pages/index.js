import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import styles from "@/styles/Home.module.css";
import Title from "@/components/Title";

function generarLetra(){
	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}
	
function colorHEX(){
	var coolor = "";
	for(var i=0;i<6;i++){
		coolor = coolor + generarLetra() ;
	}
	return "#" + coolor;
}
export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ease: "linear", duration: 2})
    // let tl=gsap.timeline()
    gsap.utils.toArray(".seccion").forEach((panel,i)=>{
      // let color=colorHEX()
      // console.log(color)
      // tl.to(panel,{duration:3, backgroundColor:color })
      ScrollTrigger.create({
        // animation:tl,
        trigger:panel,
        start:"top top",
        pin:true,
        pinSpacing:false,
        scrub:1,
        toggleActions:"play pause resume reset "
      })
    })
  }, []);
  return (
    <div>
      <header className="inicio">
        <h1>Encabezado 1</h1>
      </header>
      <header className="inicio">
        <h1>Encabezado 2</h1>
      </header>
      <header className="inicio">
        <h1>Encabezado 3</h1>
      </header>
      <header className="inicio">
        <h1>Encabezado 4</h1>
      </header>

      <main className="contenedor_animacion">
        <section className="seccion seccion_1">
          <div className="momento">
            <h4>PRIMER MOMENTO</h4>
            <h2>Selección y asignación de beca</h2>
            <p>
              Convocatoria abierta Proceso de entrevistas y reto de
              participantes a becar Requisitos: 01//_ Mayor a 17 años
              02//_Voluntad manifiesta de acceso laboral 03//_Dedicación de 30
              horas semanales para estudio Duración de la etapa: XXX.XXX HORAS
            </p>
          </div>
        </section>

        <section className="seccion seccion_2">
          <div className="momento">
            <h4>SEGUNDO MOMENTO</h4>
            <h2>Formación Técnica</h2>
            <div className="segundomomento">
              <h6>CICLO BÁSICO</h6>
              <ul>
                <li>Fundamentos básicos de algoritmia l y ll</li>
                <li>Bases de datos</li>
                <li>1er reto empresarial</li>
              </ul>
            </div>
            <div>
              <h6>CICLO MEDIO</h6>
              <ul>
                <li>Fundamentos de arquitectura de software</li>
                <li>Cloud Computing</li>
                <li>Programación web básica</li>
                <li>Fundamentos de pruebas de software</li>
              </ul>
            </div>
            <div>
              <h6>CICLO AVANZADO</h6>
              <ul>
                <li>Blockchain</li>
                <li>Programación web avanzada</li>
                <li>DevOps</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="seccion seccion_3">
          <div className="momento">
            <ul className="acodeBox">
              <li className="acode">• Acompañamiento Psicosocial</li>
              <li className="acode">• Desarrollo de Softskills</li>
            </ul>
          </div>
        </section>

        <section className="seccion seccion_4">
          <div className="momento">
            <h4>TERCER MOMENTO</h4>
            <h2>Certificación</h2>
            <ul>
              <li>Certificación</li>
              <li>Acceso laboral</li>
              <li>Acompañamiento primeros 90 días</li>
              <li>Continúa formación BÁSICO</li>
            </ul>
          </div>
        </section>

        <section className="seccion seccion_5">
          <div className="momento">
            <h4>ÚLTIMO MOMENTO</h4>
            <h2>Experiencia</h2>
            <p>Desarrolladores con al menos 1 año de experiencia laboral</p>
          </div>
        </section>
      </main>
      <footer className="final">
        <h2>Pie de página</h2>
    </footer>

    </div>
  );
}
