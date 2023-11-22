import React from "react";
import "../component-styles/Studia.scss";
function Studia(props) {
  return (
    <div id="studia">
      <div className="studia-segment">
        <div id="welcome-studia">
          <div id="welcome-studia-start">
            Studia po <span>matematyce rozszerzonej</span>
          </div>
          <div id="welcome-studia-content">
            Obecnie zdając matematykę rozszerzoną masz szeroki wybór kierunków
            studiów i uczelni w całej Polsce. Nauki, na które możesz się
            zdecydować, to między innymi:
            <ul>
              {[
                "Matematyka",
                "Ekonomia",
                "Informatyka",
                "Finanse",
                "Medycyna",
                "Administracja",
                "Energetyka",
                "Architektura",
                "Geologia",
              ].map((x, index) => (
                <li id={x + "-list"} key={index}>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="uczelnia-segment szkola-glowna-handlowa"
          onClick={() => {
            window.open("https://www.sgh.waw.pl/", "_blank");
          }}
        >
          <div className="uczelnia-segment-text szkola-glowna-handlowa-text">
            <div className="uczelnia-segment-start szkola-glowna-handlowa-start">
              <span>Szkoła główna handlowa w Warszawie</span>
            </div>
            <div className="uczelnia-segment-content szkola-glowna-handlowa-content">
              Rekrutacja na sgh nie jest prosta, oprócz zdania matur uczestnicy
              muszą podejsć do egzaminu wstępnego pod nazwą "test z wiedzy o
              przedsiębiorczosci", który liczy się tak samo jak matura z
              matematyki!
              <br /> Próg punktowy na rok 2023- 306 pkt
              <br /> Sgh w warszawie to najstarsza i najbardziej prestiżowa
              uczelnia ekonomiczna w polsce, a także jeden z najlepszych
              uniwersytetów o tym profilu w europie, dlatego warto wziąć go pod
              uwage.
              <br /> Myśląc o tej uczelni celuj w bardzo wysokie wyniki na
              maturze.
            </div>
          </div>
          <div className="uczelnia-segment-img szkola-glowna-handlowa-img">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/SzkolaGlownaHandlowaWWarszawie.png"
              }
              alt="Szkola Glowna Handlowa W Warszawie"
            />
          </div>
        </div>
        <div
          className="uczelnia-segment akademia-leona-kozminskiego"
          onClick={() => {
            window.open("https://www.kozminski.edu.pl/", "_blank");
          }}
        >
          <div className="uczelnia-segment-text akademia-leona-kozminskiego-text">
            <div className="uczelnia-segment-start akademia-leona-kozminskiego-start">
              <span>Akademia Leona Koźmińskiego w Warszawie</span>
            </div>
            <div className="uczelnia-segment-content akademia-leona-kozminskiego-content">
              Akademia Leona Koźmińskiego uznawana jest za najlepszą szkołę
              biznesu w Europię centralnej. Specjalizuje się głównie w
              dziedzinie nauk społecznych, oferując zróżnicowany wybór programów
              z zakresu ekonomii, zarządzania, prawa, administracji oraz nauk
              społecznych. Uczelnia ma reputację zaangażowania w badania
              naukowe, a także silną współpracę z międzynarodowymi instytucjami.
              <br /> Na studia w języku polskim zostają przyjęci kandydaci,
              którzy osiągneli conajmniej 300 punktów w rekrutacji (1% na
              maturze podstawowej - 1,5pkt 1% na maturze rozszerzonej - 2pkt 1%
              na maturze rozszerzonej z matematyki 3pkt!)
              <br /> Dla finalistów i laureatów olimpiady "Zwolnieni z Teorii"
              przypada również dodatkowe 30pkt.
            </div>
          </div>
          <div className="uczelnia-segment-img akademia-leona-kozminskiego-img">
            <img
              src={
                process.env.PUBLIC_URL + "/images/AkademiaLeonaKozminskiego.png"
              }
              alt="Akademia Leona Koźmińskiego"
            />
          </div>
        </div>
        <div
          className="uczelnia-segment akademia-gorniczo-hutnicza"
          onClick={() => {
            window.open("https://www.agh.edu.pl/", "_blank");
          }}
        >
          <div className="uczelnia-segment-text akademia-gorniczo-hutnicza-text">
            <div className="uczelnia-segment-start akademia-gorniczo-hutnicza-start">
              <span>Akademia Górniczo Hutnicza w Krakowie</span>
            </div>
            <div className="uczelnia-segment-content akademia-gorniczo-hutnicza-content">
              Agh jest jedną z topowych polskich publicznych uczelni
              technicznych. Prowadzi się tam nauczanie w kierunkach ścisłych,
              technicznych, biznesowych i wiele więcej. Uczelnia ma bogatą
              historię zaczynającą się od 1919 roku. Samo otoczenie agh jest
              dodatkowo zachęcające dla chcących tam studiować. Maksymalna
              wartość wskaźnika rekrutacji tej uczelni wynosi 1000 pkt.
              Kandydaci na pierwszy rok studiów stacjonarnych muszą uzyskać
              wynik co najmniej 300 pkt.
            </div>
          </div>
          <div className="uczelnia-segment-img akademia-gorniczo-hutnicza-img">
            <img
              src={
                process.env.PUBLIC_URL + "/images/AkademiaGorniczoHutnicza.png"
              }
              alt="Szkola Glowna Handlowa W Warszawie"
            />
          </div>
        </div>
        <div
          className="uczelnia-segment politechnika-warszawska"
          onClick={() => {
            window.open("https://www.pw.edu.pl/", "_blank");
          }}
        >
          <div className="uczelnia-segment-text politechnika-warszawska-text">
            <div className="uczelnia-segment-start politechnika-warszawska-start">
              <span>Politechnika Warszawska</span>
            </div>
            <div className="uczelnia-segment-content politechnika-warszawska-content">
              Politechnika warszawska to ceniona publiczna uczelnia techniczna w
              Polsce. Oferuje doskonałą edukację w inżynierii, naukach ścisłych
              i społecznych. Studenci chwalą profesjonalizm kadry i bogate
              zaplecze badawcze. Jednak dostanie się jest wymagające, z wysoką
              konkurencją i egzaminami wiedzy. Reputacja uczelni przyciąga, ale
              proces rekrutacyjny stanowi wyzwanie. Podczas rekrutacji pod uwagę
              jest brany wynik z matury z matematyki, języka i obcego i innego
              przedmiotu wybranego w zależności od kierunku. Wyniki z matury
              ustnej nie są brane pod uwagę.
            </div>
          </div>
          <div className="uczelnia-segment-img politechnika-warszawska-img">
            <img
              src={
                process.env.PUBLIC_URL + "/images/PolitechnikaWarszawska.png"
              }
              alt="Szkola Glowna Handlowa W Warszawie"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Studia;