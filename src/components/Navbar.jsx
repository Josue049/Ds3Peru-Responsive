import React from "react";
import "./Navbar.css";

import AirLive from "../assets/logos/Airlive.png";
import aJhua from "../assets/logos/aJhua.png";
import Alfa from "../assets/logos/Alfa.png";
import AMP from "../assets/logos/AMP.png";
import Amphenol from "../assets/logos/Amphenol.png";
import Andrew from "../assets/logos/Andrew.png";
import Belden from "../assets/logos/Belden.png";
import Cisco from "../assets/logos/Cisco.png";
import Dixon from "../assets/logos/Dixon.png";
import DLink from "../assets/logos/DLink.png";
import FibreFab from "../assets/logos/FibreFab.png";
import LANPRO from "../assets/logos/LANPRO.png";
import Lcom from "../assets/logos/Lcom.png";
import MikroTik from "../assets/logos/MikroTik.png";
import Panduit from "../assets/logos/Panduit.png";
import Satra from "../assets/logos/Satra.png";
import Siemon from "../assets/logos/Siemon.png";
import TPLink from "../assets/logos/TP-Link.png";
import TrendNet from "../assets/logos/TrendNet.png";
import Ubiquit from "../assets/logos/Ubiquiti.png";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openBrands, setOpenBrands] = useState(false);
  const [openPrices, setOpenPrices] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openPriceMobil, setOpenPriceMobil] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="header-container">
        <button
          className="hamburger"
          onClick={() => setOpenMenu(!openMenu)}
          aria-label="Menú"
        >
          ☰
        </button>

        <a href="/" className="logo-container">
          <img
            src="https://www.ds3comunicaciones.com/mikrotik/images/Logo1.jpg"
            alt="DS3 Comunicaciones Logo"
          />
        </a>

        <div className="mobile-gif">
          <img
            src="https://www.ds3comunicaciones.com/cisco/images/cisco-gif.gif"
            alt="Cisco"
          />
        </div>

        <ul className={`menu ${openMenu ? "open" : ""}`}>
          <div className="mobileMenu">
            <li className="close-sidebar" onClick={() => setOpenMenu(false)}>
              <i className="fas fa-times"></i>
            </li>
            <li className="search-button" onClick={() => setOpenSearch(true)}>
              <i className="fas fa-search"></i>
            </li>
            <li
              className="sidebar-item m1"
              onClick={() => setOpenProducts(!openProducts)}
            >
              <span>
                <i className="fas fa-bars ICODS3"></i>MARCAS
              </span>
              <i
                className={`fas fa-chevron-${openProducts ? "up" : "down"}`}
              ></i>
            </li>

            {openProducts && (
              <ul className="sidebar-submenu">
                <ul className="dropdown-list">
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/alfa/index.html")
                    }
                  >
                    <img src={Alfa} alt="Alfa" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/airlive/index.html")
                    }
                  >
                    <img src={AirLive} alt="AirLive" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/andrew/index.html")
                    }
                  >
                    <img src={Andrew} alt="Andrew" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/AMP/index.html")
                    }
                  >
                    <img src={AMP} alt="AMP" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/amphenol/index.html")
                    }
                  >
                    <img src={Amphenol} alt="Amphenol" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/belden/index.html")
                    }
                  >
                    <img src={Belden} alt="Belden" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/cisco/index.html")
                    }
                  >
                    <img src={Cisco} alt="Cisco" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/dahua/index.html")
                    }
                  >
                    <img src={aJhua} alt="@Jhua" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/dlink/index.html")
                    }
                  >
                    <img src={DLink} alt="DLink" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/dixon/index.html")
                    }
                  >
                    <img src={Dixon} alt="Dixon" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/FibreFab/index.html")
                    }
                  >
                    <img src={FibreFab} alt="FibreFab" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/lanpro/index.html")
                    }
                  >
                    <img src={LANPRO} alt="LANPRO" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/lcom/index.html")
                    }
                  >
                    <img src={Lcom} alt="Lcom" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/mikrotik/index.html")
                    }
                  >
                    <img src={MikroTik} alt="MikroTik" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/panduit/index.html")
                    }
                  >
                    <img src={Panduit} alt="Panduit" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/satra/index.html")
                    }
                  >
                    <img src={Satra} alt="Satra" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/siemon/index.html")
                    }
                  >
                    <img src={Siemon} alt="Siemon" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/tplink/index.html")
                    }
                  >
                    <img src={TPLink} alt="TP-Link" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/trendnet/index.html")
                    }
                  >
                    <img src={TrendNet} alt="TrendNet" />
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/ubiquiti/index.html")
                    }
                  >
                    <img src={Ubiquit} alt="Ubiquiti" />
                  </li>
                </ul>
              </ul>
            )}

            <li
              className="sidebar-item m2"
              onClick={() => setOpenPriceMobil(!openPriceMobil)}
            >
              <span>
                <i className="fas fa-bars ICODS3"></i>PRECIOS
              </span>
              <i
                className={`fas fa-chevron-${openPriceMobil ? "up" : "down"}`}
              ></i>
            </li>

            {openPriceMobil && (
              <ul className="sidebar-submenu price-mobil prices-menu">
                <ul>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/AMP/precios_amp.html")
                    }
                  >
                    <span>AMP</span>
                  </li>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/amphenol/precios_amphenol.html")
                    }
                  >
                    <span>Amphenol</span>
                  </li>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/andrew/precios_andrew.html")
                    }
                  >
                    <span>Andrew</span>
                  </li>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/apc/precios_apc.html")
                    }
                  >
                    <span>APC</span>
                  </li>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/cisco/precios_cisco.html")
                    }
                  >
                    <span>CISCO</span>
                  </li>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/dlink/precios_dlink.html")
                    }
                  >
                    <span>D-Link</span>
                  </li>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/dixon/precios_dixon.html")
                    }
                  >
                    <span>Dixon</span>
                  </li>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/Energit/precios_energit.html")
                    }
                  >
                    <span>Energit</span>
                  </li>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/FibreFab/precios_fibrefab.html")
                    }
                  >
                    <span>Fibra</span>
                  </li>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/hp/precios_hp.html")
                    }
                  >
                    <span>HP</span>
                  </li>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/mikrotik/precios_mikrotik.html")
                    }
                  >
                    <span>Mikrotik</span>
                  </li>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/nexxt_solutions/precios_nexxt_solutions.html")
                    }
                  >
                    <span>Nexxt Solutions</span>
                  </li>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/panduit/precios_panduit.html")
                    }
                  >
                    <span>Panduit</span>
                  </li>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/siemon/precios_siemon.html")
                    }
                  >
                    <span>Siemon</span>
                  </li>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/Teldor/precios_teldor.html")
                    }
                  >
                    <span>Teldor</span>
                  </li>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/trendnet/precios_trendnet.html")
                    }
                  >
                    <span>TRENDnet</span>
                  </li>
                  <li
                    className="Item-nav"
                    onClick={() =>
                      (window.location.href =
                        "https://www.ds3comunicaciones.com/ubiquiti/precios_ubiquiti.html")
                    }
                  >
                    <span>Ubiquiti</span>
                  </li>
                </ul>
              </ul>
            )}
            <li className="sidebar-it">
              <span>SWITCH CATALYST</span>
            </li>
            <li className="sidebar-it">
              <span>CISCO BUSINESS</span>
            </li>
            <li className="sidebar-it">
              <span>SWITCH INDUSTRIAL</span>
            </li>
            <li className="sidebar-it">
              <span>AIRONET</span>
            </li>
            <li className="sidebar-it">
              <span>TELEFONO</span>
            </li>
            <li className="sidebar-it">
              <span>MERAKI</span>
            </li>
            <li className="sidebar-it">
              <span>TRANSCEIVER</span>
            </li>
          </div>
          <li>
            <i className="fas fa-phone-alt"></i>{" "}
            <a
              href="https://wa.me/994428965?text=Hola nesecito ayuda"
              target="_blank"
              rel="noopener noreferrer"
            >
              533-4339 <br /> 994-428-965
            </a>
          </li>
          <li>
            <i className="fas fa-phone-alt"></i>{" "}
            <a
              href="https://wa.me/996533223?text=Hola nesecito ayuda"
              target="_blank"
              rel="noopener noreferrer"
            >
              99653-3223 <br /> 937-514-867
            </a>
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            <a href="mailto:netperu100@hotmail.com">netperu100@hotmail.com</a>
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <a
              href="https://www.google.com/maps/dir/-12.0249809,-77.1026329/-12.0058063,-77.0688057/@-12.0157331,-77.1075622,14z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lima, PERÚ
            </a>
          </li>
          <li>
            <img className="cisco-gif-desktop"
              src="https://www.ds3comunicaciones.com/cisco/images/cisco-gif.gif"
              alt="Cisco"
            />
          </li>
          <li
            className="lupa-desktop search-button"
            onClick={() => setOpenSearch(true)}
          >
            <i className="fas fa-search"></i>
          </li>
        </ul>
      </header>

      {/* NAVBAR */}
      <nav className="navbar">
        {/* MARCAS */}
        <div
          className="nav-wrapper"
          onMouseEnter={() => {
            setOpenBrands(true);
            setOpenPrices(false);
          }}
          onMouseLeave={() => setOpenBrands(false)}
        >
          <div className="nav-categories nav-brands">
            <i className="fas fa-bars"></i>
            <span>MARCAS</span>
            <i className="fas fa-chevron-down"></i>
          </div>

          {openBrands && (
            <div className="dropdown-menu">
              <ul className="dropdown-list">
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/alfa/index.html")
                  }
                >
                  <img src={Alfa} alt="Alfa" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/airlive/index.html")
                  }
                >
                  <img src={AirLive} alt="AirLive" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/andrew/index.html")
                  }
                >
                  <img src={Andrew} alt="Andrew" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/AMP/index.html")
                  }
                >
                  <img src={AMP} alt="AMP" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/amphenol/index.html")
                  }
                >
                  <img src={Amphenol} alt="Amphenol" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/belden/index.html")
                  }
                >
                  <img src={Belden} alt="Belden" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/cisco/index.html")
                  }
                >
                  <img src={Cisco} alt="Cisco" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/dahua/index.html")
                  }
                >
                  <img src={aJhua} alt="@Jhua" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/dlink/index.html")
                  }
                >
                  <img src={DLink} alt="DLink" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/dixon/index.html")
                  }
                >
                  <img src={Dixon} alt="Dixon" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/FibreFab/index.html")
                  }
                >
                  <img src={FibreFab} alt="FibreFab" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/lanpro/index.html")
                  }
                >
                  <img src={LANPRO} alt="LANPRO" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/lcom/index.html")
                  }
                >
                  <img src={Lcom} alt="Lcom" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/mikrotik/index.html")
                  }
                >
                  <img src={MikroTik} alt="MikroTik" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/panduit/index.html")
                  }
                >
                  <img src={Panduit} alt="Panduit" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/satra/index.html")
                  }
                >
                  <img src={Satra} alt="Satra" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/siemon/index.html")
                  }
                >
                  <img src={Siemon} alt="Siemon" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/tplink/index.html")
                  }
                >
                  <img src={TPLink} alt="TP-Link" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/trendnet/index.html")
                  }
                >
                  <img src={TrendNet} alt="TrendNet" />
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/ubiquiti/index.html")
                  }
                >
                  <img src={Ubiquit} alt="Ubiquiti" />
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* PRECIOS */}
        <div
          className="nav-wrapper"
          onMouseEnter={() => {
            setOpenPrices(true);
            setOpenBrands(false);
          }}
          onMouseLeave={() => setOpenPrices(false)}
        >
          <div className="nav-categories nav-prices">
            <i className="fas fa-bars"></i>
            <span>PRECIOS</span>
            <i className="fas fa-chevron-down"></i>
          </div>

          {openPrices && (
            <div className="dropdown-menu prices-menu">
              <ul>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/AMP/precios_amp.html")
                  }
                >
                  AMP
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/amphenol/precios_amphenol.html")
                  }
                >
                  Amphenol
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/andrew/precios_andrew.html")
                  }
                >
                  Andrew
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/apc/precios_apc.html")
                  }
                >
                  APC
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/cisco/precios_cisco.html")
                  }
                >
                  CISCO
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/dlink/precios_dlink.html")
                  }
                >
                  D-Link
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/dixon/precios_dixon.html")
                  }
                >
                  Dixon
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/Energit/precios_energit.html")
                  }
                >
                  Energit
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/FibreFab/precios_fibrefab.html")
                  }
                >
                  Fibra
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/hp/precios_hp.html")
                  }
                >
                  HP
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/mikrotik/precios_mikrotik.html")
                  }
                >
                  Mikrotik
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/nexxt_solutions/precios_nexxt_solutions.html")
                  }
                >
                  Nexxt Solutions
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/panduit/precios_panduit.html")
                  }
                >
                  Panduit
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/siemon/precios_siemon.html")
                  }
                >
                  Siemon
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/Teldor/precios_teldor.html")
                  }
                >
                  Teldor
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/trendnet/precios_trendnet.html")
                  }
                >
                  TRENDnet
                </li>
                <li
                  onClick={() =>
                    (window.location.href =
                      "https://www.ds3comunicaciones.com/ubiquiti/precios_ubiquiti.html")
                  }
                >
                  Ubiquiti
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* LINKS FIJOS */}
        <ul className="nav-links">
          <li
            onClick={() =>
              (window.location.href =
                "https://www.ds3comunicaciones.com/cisco/catalys_9200l.html")
            }
          >
            SWITCH CATALYST
          </li>

          <li
            onClick={() =>
              (window.location.href =
                "https://www.ds3comunicaciones.com/cisco/bussines_sg350.html")
            }
          >
            CISCO BUSINESS
          </li>

          <li
            onClick={() =>
              (window.location.href =
                "https://www.ds3comunicaciones.com/cisco/precios_cisco_switch_industrial_b.html")
            }
          >
            SWITCH INDUSTRIAL
          </li>

          <li
            onClick={() =>
              (window.location.href =
                "https://www.ds3comunicaciones.com/cisco/precios_cisco_access_point_b.html")
            }
          >
            AIRONET
          </li>

          <li
            onClick={() =>
              (window.location.href =
                "https://www.ds3comunicaciones.com/cisco/precios_cisco_telefonos_b.html")
            }
          >
            TELEFONO
          </li>

          <li
            onClick={() =>
              (window.location.href =
                "https://ds3comunicaciones.com/cisco/precios_cisco_meraki_b.html")
            }
          >
            MERAKI
          </li>

          <li onClick={() => (window.location.href = "#")}>TRANSCEIVER</li>
        </ul>
      </nav>

      {openSearch && (
        <div
          className="search-top-overlay"
          onClick={() => setOpenSearch(false)}
        >
          <form
            className="search-top-bar"
            onClick={(e) => e.stopPropagation()}
            method="get"
            action="https://www.ds3comunicaciones.com/find.html"
          >
            <i className="fas fa-search search-icon"></i>

            <input
              type="text"
              name="q"
              placeholder="Buscar productos, marcas, modelos..."
              autoFocus
              required
            />

            {/* Campos ocultos necesarios */}
            <input
              type="hidden"
              name="cx"
              value="partner-pub-9265252540298851:f2549i3fi60"
            />
            <input type="hidden" name="cof" value="FORID:10" />
            <input type="hidden" name="ie" value="ISO-8859-1" />

            <button type="submit" className="search-btn">
              Buscar
            </button>

            <button
              type="button"
              className="close-btn"
              onClick={() => setOpenSearch(false)}
              aria-label="Cerrar"
            >
              ✕
            </button>
          </form>
        </div>
      )}
    </>
  );
}
