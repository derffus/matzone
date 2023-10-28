import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { atom, useAtom } from "jotai";

import "./App.css";
import colors from "./colors";
import NavBar from "./app-components/NavBar";
import RightNav from "./app-components/RightNav";
import HomePage from "./app-components/HomePage";
import VideoPlayer from "./app-components/VideoPlayer";
import Korepetycje from "./app-components/Korepetycje";
import Studia from "./app-components/Studia";
import Arkusze from "./app-components/Arkusze";
import filmyYtLinki from "./filmyYTLinki";

export const motywStrony = atom("light");
function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [klasa, setKlasa] = useState("1");
  const [zakres, setZakres] = useState("podstawa");
  const [dzial, setDzial] = useState("1");
  const [temat, setTemat] = useState("");
  const [zrodlo, setZrodlo] = useState("youtube");
  const [lokalizacjaInput, setLokalizacjaInput] = useState("");
  const [lokalizacjaSubmit, setLokalizacjaSubmit] = useState("");

  const [motyw] = useAtom(motywStrony);
  function updateState(prop, value) {
    switch (prop) {
      case "showNavbar":
        setShowNavbar(value);
        break;
      case "klasa":
        setKlasa(value);
        break;
      case "zakres":
        setZakres(value);
        break;
      case "dzial":
        setDzial(value);
        break;
      case "temat":
        setTemat(value);
        break;
      case "zrodlo":
        setZrodlo(value);
        break;
      case "lokalizacjaInput":
        setLokalizacjaInput(value);
        break;
      case "lokalizacjaSubmit":
        setLokalizacjaSubmit(value);
        break;
      default:
        break;
    }
  }
  function wypiszFilmy(filmy, klasa, zakres, dzial, temat, zrodlo) {
    return filmy
      .filter(
        (x) =>
          x[1].indexOf("film-" + zakres + klasa) !== -1 &&
          x[3] === dzial &&
          x[4] === zrodlo
      )
      .map((x) => (
        <iframe
          key={x}
          className={x[1].join(" ")}
          src={x[0]}
          title={x[2]}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>
      ));
  }
  let filmyYTLinki = filmyYtLinki;
  return (
    <div
      className="website"
      style={{
        "--purple":
          motyw === "light" ? colors.lightMode.purple : colors.darkMode.purple,
        "--purpleHovered":
          motyw === "light"
            ? colors.lightMode.purpleHovered
            : colors.darkMode.purpleHovered,
        "--content":
          motyw === "light"
            ? colors.lightMode.content
            : colors.darkMode.content,
        " --purpleClicked":
          motyw === "light"
            ? colors.lightMode.purpleClicked
            : colors.darkMode.purpleClicked,
        "--blue":
          motyw === "light" ? colors.lightMode.blue : colors.darkMode.blue,
        "--colorFont":
          motyw === "light"
            ? colors.lightMode.colorFont
            : colors.darkMode.colorFont,
      }}
    >
      <NavBar showNavbar={showNavbar} updateState={updateState} />
      {showNavbar ? <RightNav updateState={updateState} /> : ""}
      <div id="content">
        <Routes>
          <Route
            path="matzone"
            element={<HomePage updateState={updateState} />}
          />
          <Route
            path="matzone/materialy"
            element={
              <VideoPlayer
                updateState={updateState}
                klasa={klasa}
                zakres={zakres}
                dzial={dzial}
                temat={temat}
                zrodlo={zrodlo}
                wypiszFilmy={wypiszFilmy}
                filmyYTLinki={filmyYTLinki}
              />
            }
          />
          <Route
            path="matzone/korepetycje"
            element={
              <Korepetycje
                updateState={updateState}
                lokalizacjaInput={lokalizacjaInput}
                lokalizacjaSubmit={lokalizacjaSubmit}
              />
            }
          />
          <Route
            path="matzone/studia"
            element={<Studia updateState={updateState} />}
          />
          <Route
            path="matzone/arkusze"
            element={<Arkusze updateState={updateState} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
