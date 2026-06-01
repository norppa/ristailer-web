import { useState } from "react"
import "./App.css"

export default function () {
  const [page, _setPage] = useState("main")

  return (
    <div className="App">
      <div id="top" />
      <header>
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
          Etiam luctus, nunc eget vulputate porttitor, ipsum tortor elementum metus, vitae feugiat massa turpis eu leo. Ut mattis felis sit amet mauris congue suscipit. Quisque ligula dolor, mollis quis nisi vitae, faucibus suscipit mauris. Aenean venenatis turpis vel tortor ultricies hendrerit. Nam ut leo leo. Sed dapibus ex ut felis rutrum porta. In euismod libero in velit rutrum porttitor. Ut ac cursus neque.
        </p>
        <p>
          Nullam tristique laoreet consectetur. Nunc vitae tempus lorem. Duis auctor, neque sit amet vestibulum tristique, dolor magna efficitur tellus, ut fermentum augue eros quis tellus. Morbi massa odio, congue at risus ac, sagittis placerat enim. Mauris ac erat et diam sagittis sollicitudin. Sed arcu purus, dapibus at lobortis vitae, sodales quis leo. Nunc arcu diam, malesuada sed eros non, molestie tincidunt sapien. Fusce lobortis felis a auctor consequat. Sed eu leo ac est sollicitudin pretium. Aenean tincidunt id dolor quis rhoncus. Pellentesque scelerisque nec mi sed pellentesque. Aenean sit amet nulla ut nulla dignissim vulputate vitae id turpis. Sed varius commodo magna, lobortis vulputate magna porttitor nec. Suspendisse vehicula ac turpis sed consectetur. Phasellus convallis, orci condimentum cursus sodales, metus augue rutrum mi, consectetur imperdiet nisl mauris sit amet nibh. Aenean luctus felis quis lorem vehicula euismod.
        </p>
        <p>
          Morbi mauris neque, facilisis vitae nisi vitae, accumsan varius dolor. Praesent commodo metus quis porta molestie. In tempor, libero sit amet sollicitudin molestie, elit lacus mattis lacus, a ullamcorper nisl neque at tellus. Nulla et libero sodales, faucibus velit non, interdum ipsum. Cras dignissim orci et nibh venenatis, id placerat lacus suscipit. Nunc ac leo vitae nibh congue cursus. Proin eu diam volutpat, rhoncus diam a, vestibulum ante. Nunc mi ex, mollis porta vulputate in, lobortis sed enim. Pellentesque ut porta mauris. Etiam faucibus pulvinar mollis.
        </p>
      </section>

      <img className="spacer" src="/img/spacer-1.webp" />

      <section id="treeni">


        <h1>Treenit</h1>

        <p>
          Etiam luctus, nunc eget vulputate porttitor, ipsum tortor elementum metus, vitae feugiat massa turpis eu leo. Ut mattis felis sit amet mauris congue suscipit. Quisque ligula dolor, mollis quis nisi vitae, faucibus suscipit mauris. Aenean venenatis turpis vel tortor ultricies hendrerit. Nam ut leo leo. Sed dapibus ex ut felis rutrum porta. In euismod libero in velit rutrum porttitor. Ut ac cursus neque.
        </p>
        <p>
          Nullam tristique laoreet consectetur. Nunc vitae tempus lorem. Duis auctor, neque sit amet vestibulum tristique, dolor magna efficitur tellus, ut fermentum augue eros quis tellus. Morbi massa odio, congue at risus ac, sagittis placerat enim. Mauris ac erat et diam sagittis sollicitudin. Sed arcu purus, dapibus at lobortis vitae, sodales quis leo. Nunc arcu diam, malesuada sed eros non, molestie tincidunt sapien. Fusce lobortis felis a auctor consequat. Sed eu leo ac est sollicitudin pretium. Aenean tincidunt id dolor quis rhoncus. Pellentesque scelerisque nec mi sed pellentesque. Aenean sit amet nulla ut nulla dignissim vulputate vitae id turpis. Sed varius commodo magna, lobortis vulputate magna porttitor nec. Suspendisse vehicula ac turpis sed consectetur. Phasellus convallis, orci condimentum cursus sodales, metus augue rutrum mi, consectetur imperdiet nisl mauris sit amet nibh. Aenean luctus felis quis lorem vehicula euismod.
        </p>
        <p>
          Morbi mauris neque, facilisis vitae nisi vitae, accumsan varius dolor. Praesent commodo metus quis porta molestie. In tempor, libero sit amet sollicitudin molestie, elit lacus mattis lacus, a ullamcorper nisl neque at tellus. Nulla et libero sodales, faucibus velit non, interdum ipsum. Cras dignissim orci et nibh venenatis, id placerat lacus suscipit. Nunc ac leo vitae nibh congue cursus. Proin eu diam volutpat, rhoncus diam a, vestibulum ante. Nunc mi ex, mollis porta vulputate in, lobortis sed enim. Pellentesque ut porta mauris. Etiam faucibus pulvinar mollis.
        </p>
      </section>



      <img className="spacer" src="/img/spacer-2.webp" />


      <section id="seura">


        <h1>Helsingin Nuorisoseura</h1>

        <p>
          Etiam luctus, nunc eget vulputate porttitor, ipsum tortor elementum metus, vitae feugiat massa turpis eu leo. Ut mattis felis sit amet mauris congue suscipit. Quisque ligula dolor, mollis quis nisi vitae, faucibus suscipit mauris. Aenean venenatis turpis vel tortor ultricies hendrerit. Nam ut leo leo. Sed dapibus ex ut felis rutrum porta. In euismod libero in velit rutrum porttitor. Ut ac cursus neque.
        </p>
        <p>
          Nullam tristique laoreet consectetur. Nunc vitae tempus lorem. Duis auctor, neque sit amet vestibulum tristique, dolor magna efficitur tellus, ut fermentum augue eros quis tellus. Morbi massa odio, congue at risus ac, sagittis placerat enim. Mauris ac erat et diam sagittis sollicitudin. Sed arcu purus, dapibus at lobortis vitae, sodales quis leo. Nunc arcu diam, malesuada sed eros non, molestie tincidunt sapien. Fusce lobortis felis a auctor consequat. Sed eu leo ac est sollicitudin pretium. Aenean tincidunt id dolor quis rhoncus. Pellentesque scelerisque nec mi sed pellentesque. Aenean sit amet nulla ut nulla dignissim vulputate vitae id turpis. Sed varius commodo magna, lobortis vulputate magna porttitor nec. Suspendisse vehicula ac turpis sed consectetur. Phasellus convallis, orci condimentum cursus sodales, metus augue rutrum mi, consectetur imperdiet nisl mauris sit amet nibh. Aenean luctus felis quis lorem vehicula euismod.
        </p>
        <p>
          Morbi mauris neque, facilisis vitae nisi vitae, accumsan varius dolor. Praesent commodo metus quis porta molestie. In tempor, libero sit amet sollicitudin molestie, elit lacus mattis lacus, a ullamcorper nisl neque at tellus. Nulla et libero sodales, faucibus velit non, interdum ipsum. Cras dignissim orci et nibh venenatis, id placerat lacus suscipit. Nunc ac leo vitae nibh congue cursus. Proin eu diam volutpat, rhoncus diam a, vestibulum ante. Nunc mi ex, mollis porta vulputate in, lobortis sed enim. Pellentesque ut porta mauris. Etiam faucibus pulvinar mollis.
        </p>
      </section>


      <img className="last-image" src="/img/ristailer-3.webp" />

    </div >
  )
}