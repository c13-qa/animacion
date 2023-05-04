import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import styles from "@/styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl=gsap.timeline({
      scrollTrigger: {
        end: "+=500",
        markers: true,
        scrub:1,
        start: "top center",
        trigger: ".c",
      }
    })
    gsap.to(".c", {
      animation:tl,
      duration: 3,
      ease:"none",
      rotation: 360,
      x: 400,
    });
    gsap.to(".a", {
      scrollTrigger: {
        end: "+=500",
        markers: true,
        scrub:1,
        start: "top center",
        trigger: ".a",
      },
      duration: 3,
      ease:"none",
      rotation: 360,
      x: 400,
    });
  }, []);
  return (
    <div className="container">
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <div className="a">a</div>
      <div className="b">b</div>
      <div className="c">c</div>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
      <p>
        Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris
        tempor eiusmod consequat voluptate. Laborum anim cillum do laborum.
        Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu
        nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit
        culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut
        eiusmod ut laborum esse est esse.
      </p>
    </div>
  );
}
