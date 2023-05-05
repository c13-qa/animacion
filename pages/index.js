import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import styles from "@/styles/Home.module.css";
import Title from "@/components/Title";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        pin: true,
        start: "top top",
        end: "bottom +=300px",
        scrub: 1,
        ease: "none",
        trigger: ".panels",
        markers: true,
        // endTrigger: ".containerTitle",
        pinSpacing:false
      },
    });
    tl.to(".accordion .text", {
      height: 0,
      paddingBottom: 0,
      opacity: 0,
      stagger: 0.5,
    });
    tl.to(
      ".accordion",
      {
        marginBottom: 1,

        stagger: 0.5,
      },
      "<"
    );
  }, []);
  return (
    <div className="container">
      <Title />
      <div className="panels">
        <div className="accordion a">
          <div className="title">Pretty everywhere.</div>
          <p className="text">
            Laborum ea occaecat anim velit ullamco laboris labore. Esse anim
            anim ut mollit ea consectetur sint ipsum labore officia nostrud enim
            tempor consequat. Eiusmod cillum in culpa esse nostrud excepteur
            mollit ea excepteur sunt dolor occaecat quis.
          </p>
          <p className="text">
            Laborum ea occaecat anim velit ullamco laboris labore. Esse anim
            anim ut mollit ea consectetur sint ipsum labore officia nostrud enim
            tempor consequat. Eiusmod cillum in culpa esse nostrud excepteur
            mollit ea excepteur sunt dolor occaecat quis.
          </p>
        </div>
        <div className="accordion b">
            <div className="title">Pretty everywhere.</div>
          <p className="text">
            Laborum ea occaecat anim velit ullamco laboris labore. Esse anim
            anim ut mollit ea consectetur sint ipsum labore officia nostrud enim
            tempor consequat. Eiusmod cillum in culpa esse nostrud excepteur
            mollit ea excepteur sunt dolor occaecat quis.
          </p>
          <p className="text">
            Laborum ea occaecat anim velit ullamco laboris labore. Esse anim
            anim ut mollit ea consectetur sint ipsum labore officia nostrud enim
            tempor consequat. Eiusmod cillum in culpa esse nostrud excepteur
            mollit ea excepteur sunt dolor occaecat quis.
          </p>
        </div>
        <div className="accordion c">
          <div className="title">Pretty everywhere.</div>
          <p className="text">
            Laborum ea occaecat anim velit ullamco laboris labore. Esse anim
            anim ut mollit ea consectetur sint ipsum labore officia nostrud enim
            tempor consequat. Eiusmod cillum in culpa esse nostrud excepteur
            mollit ea excepteur sunt dolor occaecat quis.
          </p>
          <p className="text">
            Laborum ea occaecat anim velit ullamco laboris labore. Esse anim
            anim ut mollit ea consectetur sint ipsum labore officia nostrud enim
            tempor consequat. Eiusmod cillum in culpa esse nostrud excepteur
            mollit ea excepteur sunt dolor occaecat quis.
          </p>
        </div>
      </div>
      <Title />
    </div>
  );
}
