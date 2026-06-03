import { useState } from "react"
import "./App.css"

export default function () {
  const [page, _setPage] = useState("main")

  return (
    <div className="App">
      <div id="top" />
      <header className="desktop-nav">
        <div className="content">
          <div className="logo">Ristailer</div>

          <nav>
            <a href="#top">
              <button className={page === "main" ? "selected" : ""}>Etusivu</button>
            </a>

            <a href="#ristailer">
              <button className={page === "group" ? "selected" : ""}>Ryhmä</button>
            </a>

            <a href="#treeni">
              <button className={page === "train" ? "selected" : ""}>Treenit</button>
            </a>

            <a href="#seura">
              <button className={page === "org" ? "selected" : ""}>Seura</button>
            </a>

          </nav>


        </div>
      </header>

      <section className="hero">
        <img className="hero-img" src="/img/hero3.webp" />
      </section>

      <section className="splash">
        <img className="splash-img" src="/img/mobile.webp" />
        <div className="logo">Ristailer</div>
      </section>

      <section className="highlight">
        <h2>Uusi kausi starttaa syyskuussa!</h2>
        <i>Ristailer ottaa uusia jäseniä iloiseen porukkaan</i>

        <button><span>Liity mukaan</span></button>
      </section>

      <section className="links">

        <div>
          <h3>Mikä on Ristailer?</h3>
          <i>Ketä täällä tanssii ja kuka voi liittyä mukaan?</i>
          <img src="/img/ristailer-ryhma.webp" />
        </div>

        <div>
          <h3>Treenit</h3>
          <i>Miten, missä ja milloin treenataan?</i>
          <img src="/img/ristailer-treeni.webp" />
        </div>

        <div>
          <h3>Helsingin Nuorisoseura</h3>
          <i>Ristailer toimii HNS:n alaisuudessa</i>
          <img src="/img/ristailer-seura.webp" />
        </div>
      </section>

      <section id="ristailer">

        <h1>Ristailer</h1>

        <p>
          Ristailer on vuonna 2025 perustettu helsinkiläinen aikuisten tanssiryhmä, joka treenaa tanssinopettaja ja koreografi Jari Haaviston johdolla esittävää suomalaista kansantanssia. Harjoittelemme kansantanssin tekniikkaa, pari- ja ryhmäkontaktia sekä Jarin Ristailerille luomia koreografioita. Meitä yhdistää tanssin ilo ja tavoitteenamme on esitettävä taso.
        </p>
        <p>
          Olemme kiinnostuneita esiintymismahdollisuuksista ja voimme tehdä jonkin verran myös pro bono -keikkoja, jos tilaisuutesi edistää tanssikulttuuria tai on muuten hyvään tarkoitukseen. Ole rohkeasti yhteydessä meihin.
        </p>
      </section>

      <img className="spacer" src="/img/spacer-1.webp" />

      <section id="treeni">


        <h1>Treenit</h1>

        <p>
          Ristailerilla on vakiotreenit maanantaisin klo 19.30–21.00 Karviaisten koululla (Karviaistentie 1, noin 10 minuutin kävelymatka Malmin rautatieasemalta). Syksyn treenikausi on dd.mm.-dd.mm. ja syksyn kausimaksu on noin x € ja Helsingin Nuorisoseuran jäsenmaksu y € (kausimaksujen suuruutta säädetään osallistujien lukumäärän mukaan).
        </p>
        <p>
          Ristailer ottaa syksyn alussa uusia jäseniä! Voit tulla kokeilemaan parille ensimmäiselle kerralle ilman sitoutumista. Sinulla tulisi olla 1-2 vuotta kokemusta kansantanssin säännöllisestä treenaamisesta joko muusta koreoryhmästä tai paritanssitunneilta (vähintään vahvat perusteet sotiisista, polskasta ja valssista).
        </p>
      </section>



      <img className="spacer" src="/img/spacer-2.webp" />


      <section id="seura">


        <h1>Helsingin Nuorisoseura</h1>

        <p>
          Helsingin Nuorisoseura ry on vuonna 1954 perustettu aatteellinen yhdistys. Yhdistyksen tarkoituksena on xxxxxxxxxxxxxxxxxxxxxxxxxx.
        </p>
        <p>
          Vuosien mittaan Helsingin Nuorisoseuralla on ollut erilaisia painotuksia, mutta tällä hetkellä se on pääasiassa kotiseura kahdelle helsinkiläiselle tanssiryhmälle: Ristailer ja Susirekka.
        </p>
      </section>


      <img className="last-image" src="/img/ristailer-3.webp" />

    </div >
  )
}