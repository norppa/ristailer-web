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

            <a href="#yhteys">
              <button className={page === "org" ? "selected" : ""}>Ota yhteyttä</button>
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

        <button className="join-button"><a href="#mukaan">Liity mukaan</a></button>
      </section>

      <section className="links">

        <a href="#ristailer">
          <h3>Mikä on Ristailer?</h3>
          <i>Ketä täällä tanssii ja mitä tanssitaan?</i>
          <img src="/img/ristailer-ryhma.webp" />
        </a>

        <a href="#treeni">
          <h3>Treenit</h3>
          <i>Miten, missä ja milloin treenataan?</i>
          <img src="/img/ristailer-treeni.webp" />
        </a>

        <a href="#yhteys">
          <h3>Ota yhteyttä</h3>
          <i>Ristailer vastaa kysymyksiin!</i>
          <img src="/img/ristailer-seura.webp" />
        </a>
      </section>

      <section id="ristailer">

        <h1>Ristailer</h1>

        <p>
          Ristailer on vuonna 2025 perustettu helsinkiläinen aikuisten tanssiryhmä, joka treenaa tanssinopettaja ja koreografi Jari Haaviston johdolla esittävää suomalaista kansantanssia. Harjoittelemme kansantanssin tekniikkaa, pari- ja ryhmäkontaktia sekä Jarin Ristailerille luomia koreografioita. Meitä yhdistää tanssin ilo ja tavoitteenamme on esitettävä taso.
        </p>
        <p>
          Olemme kiinnostuneita esiintymismahdollisuuksista ja voimme tehdä jonkin verran myös pro bono -keikkoja, jos tilaisuutesi edistää tanssikulttuuria tai on muuten hyvään tarkoitukseen. <a href="#yhteys">Ole rohkeasti yhteydessä</a> meihin.
        </p>
      </section>

      <img className="spacer" src="/img/spacer-1.webp" />

      <section id="treeni">


        <h1>Treenit</h1>

        <p>
          Ristailerilla on vakiotreenit maanantaisin klo 19.30–21.00 Karviaisten koululla (Karviaistentie 1, noin 10 minuutin kävelymatka Malmin rautatieasemalta). Syksyn treenikausi on 24.8. - 7.12.2026. Treenaamisen kulut katetaan osallistumismaksulla, joka on lukukaudelta noin 150 €.
        </p>
        <p>
          Ristailerissa harjoitellaan kansantanssia niin ryhmä-, pari- kuin yksilölajina. Treeneissä hiotaan henkilökohtaista tekniikkaa, vartalonhallintaa, hyppyjä, pyörintöjä, jalkatyöskentelyä, kehorytmejä ja vaikka mitä. Paritanssipuolella otetaan haltuun esiintymislavalle (ja miksei jamehinkin!) sopivia kuvioita, hiotaan parikontaktia ja harjoitellaan improvisaatiota. Ryhmäkoreografioissa pidetään kasassa kuvioita, vahvistetaan yhdenaikaisuutta ja etsitään ilmaisuvoimaa. Ja välillä ihan vaan höpsötellään, nauretaan ja nautitaan hikoilemisesta ja hyvästä seurasta.
        </p>

        <h2 id="mukaan">Liity mukaan</h2>
        <p>
          <b>Ristailer ottaa syksyn alussa uusia jäseniä!</b> Voit tulla kokeilemaan parille ensimmäiselle kerralle ilman sitoutumista. Reeneihin et tarvitse kummoisia varusteita: ota mukaasi treenivaatteet, juomapullo ja hyvää mieltä. Ristailerin meiningissä pysyy mukana melko pienelläkin kokemuksella. On hyödyllistä osata perusteet yleisimmistä kansanparitansseista, mutta jos on valmis tekemään vähän ekstraa kauden alussa tai omaa kokemusta muista tanssilajeista, niin ilmankin pärjää! Tärkeintä on halu oppia ja nauttia tanssista.
        </p>

        <p>
          Kauden ensimmäiset treenit ovat 24.8.2026 klo 19:30-21:00. Voit saapua paikalle ilman ennakkoilmoittautumista. Jos haluat lisätietoja treeneistä, treenikulttuurista, vaatimustasoista, sisällöstä tai Ristailerin toiminnasta ylipäänsä, <a href="#yhteys">ota yhteyttä</a> meihin!
        </p>
      </section>



      <img className="spacer" src="/img/spacer-2.webp" />

      <section id="yhteys">

        <h1>Ota yhteyttä</h1>

        <form action="https://formspree.io/f/mkolqbzk" method="POST">
          <label>
            Sähköpostiosoitteesi
            <input type="email" name="email" placeholder="erkki.esimerkki@sahkoposti.fi" required />
          </label>
          <label>
            Yhteydenoton aihe
            <select name="topic">
              <option></option>
              <option>Olen kiinnostunut liittymään ryhmään</option>
              <option>Haluan Ristailerin keikalle</option>
              <option>Muu aihe</option>
            </select>
          </label>
          <label>
            Viesti
            <textarea name="message" placeholder="Kirjoita viestisi tähän" required />
          </label>
          <input
            type="text"
            name="_gotcha"
            style={{ display: "none" }}
          />

          <button type="submit">Lähetä</button>
        </form>
      </section>


      {/* <section id="seura">


        <h1>Helsingin Nuorisoseura</h1>

        <p>
          Helsingin Nuorisoseura ry on vuonna 1954 perustettu aatteellinen yhdistys. Yhdistyksen tarkoituksena on xxxxxxxxxxxxxxxxxxxxxxxxxx.
        </p>
        <p>
          Vuosien mittaan Helsingin Nuorisoseuralla on ollut erilaisia painotuksia, mutta tällä hetkellä se on pääasiassa kotiseura kahdelle helsinkiläiselle tanssiryhmälle: Ristailer ja Susirekka.
        </p>
      </section> */}


      <img className="last-image" src="/img/ristailer-3.webp" />

    </div >
  )
}