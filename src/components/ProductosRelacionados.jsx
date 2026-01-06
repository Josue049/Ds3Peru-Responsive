import "./ProductosRelacionados.css";
import React, { useState, useEffect, useRef } from "react";

const products = [
  {
    id: 1,
    title: "C9200L-24T-4G-E",
    description:
      "Switch Cisco Catalyst 9200L Essentials C9200L-24T, capa L3 con 24 puertos Gigabit, 04 puertos para fibra SFP, Stacking hasta 08 equipos, Rackeable, CISCO C9200L-24T-4G-E",
    image:
      "https://web.netperu100.com/cisco/catalyst/images/C9200L-24T-4G-E_front.jpg",
    link: "https://web.netperu100.com/cisco/catalyst/C9200L-24T-4G-E.html",
  },
  {
    id: 2,
    title: "C9200L-24P-4G-E",
    description:
      "Switch Cisco Catalyst 9200L Essentials C9200L-24P, capa L3 con 24 puertos PoE+(370W) Gigabit, 04 puertos para fibra SFP, Stacking hasta 08 equipos, Rackeable, CISCO C9200L-24P-4G-E",
    image:
      "https://web.netperu100.com/cisco/catalyst/images/C9200L-24P-4G-E_front.jpg",
    link: "https://web.netperu100.com/cisco/catalyst/C9200L-24P-4G-E.html",
  },
  {
    id: 3,
    title: "C9200L-24T-4X-E",
    description:
      "Switch Cisco Catalyst 9200L Essentials C9200L-24T, capa L3 con 24 puertos Gigabit, 04 puertos 10G para fibra SFP+, Stacking hasta 08 equipos, Rackeable, CISCO C9200L-24T-4X-E",
    image:
      "https://web.netperu100.com/cisco/catalyst/images/C9200L-24T-4X-E_front.jpg",
    link: "https://web.netperu100.com/cisco/catalyst/C9200L-24P-4G-E.html",
  },
  {
    id: 4,
    title: "C9200L-48T-4G-E",
    description:
      "Switch Cisco Catalyst 9200L Essentials C9200L-48T, capa L3 con 48 puertos Gigabit, 04 puertos para fibra SFP, Stacking hasta 08 equipos, Rackeable, CISCO C9200L-48T-4G-E",
    image:
      "https://web.netperu100.com/cisco/catalyst/images/C9200L-48T-4G-E_front.jpg",
    link: "https://web.netperu100.com/cisco/catalyst/C9200L-48T-4G-E.html",
  },
  // {
  //   id: 5,
  //   title: "C9200L-48P-4G-E",
  //   description:
  //     "Switch Cisco Catalyst 9200L Essentials C9200L-48P, capa L3 con 48 puertos PoE+(740W) Gigabit, 04 puertos para fibra SFP, Stacking hasta 08 equipos, Rackeable, CISCO C9200L-48P-4G-E",
  //   image:
  //     "https://web.netperu100.com/cisco/catalyst/images/C9200L-48P-4G-E_front.jpg",
  //   link: "https://web.netperu100.com/cisco/catalyst/C9200L-48T-4G-E.html",
  // },
];

export default function RelatedProducts() {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      moveNext();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const moveNext = () => {
    const el = carouselRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;

    if (el.scrollLeft >= maxScroll - 5) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
    }
  };

  const movePrev = () => {
    const el = carouselRef.current;
    if (!el) return;

    if (el.scrollLeft <= 0) {
      el.scrollTo({
        left: el.scrollWidth - el.clientWidth,
        behavior: "smooth",
      });
    } else {
      el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="related-section">
      <h2>PRODUCTOS RELACIONADOS</h2>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={movePrev}>
          ‹
        </button>

        <div className="related-grid carousel" ref={carouselRef}>
          {products.map((p) => (
            <div
              className="product-card"
              key={p.id}
              onClick={() => (window.location.href = p.link)}
            >
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={moveNext}>
          ›
        </button>
      </div>
    </section>
  );
}
