import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import styles from "@/styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".c", {
      scrollTrigger:{
        start:"20px 80%",
        endTrigger:".a",
        end:"+=300",
        markers:true,
        trigger:".b",
        toggleActions:"restart pause reverse pause"
      },
      
      x: 400,
      rotation: 360,
      duration: 3,
    });
  }, []);
  return (
    <div className="container">
      <p>Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris tempor eiusmod consequat voluptate. Laborum anim cillum do laborum. Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut eiusmod ut laborum esse est esse.</p>
      <p>Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris tempor eiusmod consequat voluptate. Laborum anim cillum do laborum. Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut eiusmod ut laborum esse est esse.</p>
      <p>Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris tempor eiusmod consequat voluptate. Laborum anim cillum do laborum. Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut eiusmod ut laborum esse est esse.</p>
      <p>Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris tempor eiusmod consequat voluptate. Laborum anim cillum do laborum. Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut eiusmod ut laborum esse est esse.</p>
      <p>Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris tempor eiusmod consequat voluptate. Laborum anim cillum do laborum. Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut eiusmod ut laborum esse est esse.</p>
      <p>Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris tempor eiusmod consequat voluptate. Laborum anim cillum do laborum. Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut eiusmod ut laborum esse est esse.</p>
      <p>Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris tempor eiusmod consequat voluptate. Laborum anim cillum do laborum. Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut eiusmod ut laborum esse est esse.</p>
      <p>Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris tempor eiusmod consequat voluptate. Laborum anim cillum do laborum. Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut eiusmod ut laborum esse est esse.</p>
      <p>Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris tempor eiusmod consequat voluptate. Laborum anim cillum do laborum. Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut eiusmod ut laborum esse est esse.</p>
      <p>Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris tempor eiusmod consequat voluptate. Laborum anim cillum do laborum. Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut eiusmod ut laborum esse est esse.</p>
      <div className="a">a</div>
      <div className="b">b</div>
      <div className="c">c</div>
      <p>Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris tempor eiusmod consequat voluptate. Laborum anim cillum do laborum. Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut eiusmod ut laborum esse est esse.</p>
      <p>Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris tempor eiusmod consequat voluptate. Laborum anim cillum do laborum. Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut eiusmod ut laborum esse est esse.</p>
      <p>Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris tempor eiusmod consequat voluptate. Laborum anim cillum do laborum. Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut eiusmod ut laborum esse est esse.</p>
      <p>Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris tempor eiusmod consequat voluptate. Laborum anim cillum do laborum. Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut eiusmod ut laborum esse est esse.</p>
      <p>Dolore eiusmod nisi ipsum mollit elit pariatur pariatur laborum laboris tempor eiusmod consequat voluptate. Laborum anim cillum do laborum. Consequat aute labore proident eu Lorem elit aliqua amet voluptate eu nulla pariatur incididunt minim. Eiusmod labore nostrud ad elit elit culpa ad excepteur tempor proident aliquip est eu cillum. Eu ad ut eiusmod ut laborum esse est esse.</p>
    </div>
  );
}
