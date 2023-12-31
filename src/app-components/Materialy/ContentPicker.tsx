import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { WindowWidth } from "../../App.tsx";
import tematy from "./tematy.ts";
function ContentPicker(props: any) {
  const [showContentPicker, setShowContentPicker] = useState<boolean>(false);

  const [width] = useAtom(WindowWidth);

  const toggleShowContentPicker = () => {
    const trueOrFalse = showContentPicker === true ? false : true;
    setShowContentPicker(trueOrFalse);
  };
  useEffect(() => {
    setShowContentPicker(false);
  }, [props.temat]);

  return (
    <div
      className={`content-picker ${
        width > 767 ? "wide-content-picker" : "thin-content-picker"
      } ${showContentPicker ? "show-content-picker" : ""}`}
    >
      {width <= 767 ? (
        <button
          className={`show-content-picker-button ${
            showContentPicker ? "show" : "dont-show"
          }`}
          onClick={toggleShowContentPicker}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      ) : null}
      <select
        value={props.klasa}
        className="content-picker-select"
        onChange={(event) => {
          props.setKlasa(event.target.value);
        }}
      >
        <option value="" disabled>
          Klasa
        </option>
        <option value="1">Klasa 1</option>
        <option value="2">Klasa 2</option>
        <option value="3">Klasa 3</option>
        <option value="4">Klasa 4</option>
      </select>
      <select
        value={props.zakres}
        className="content-picker-select"
        onChange={(event) => {
          props.setZakres(event.target.value);
        }}
      >
        <option value="" disabled>
          Zakres
        </option>
        <option value="podstawa">Podstawa</option>
        <option value="rozszerzenie">Rozszerzenie</option>
      </select>

      <select
        value={props.dzial}
        className="content-picker-select"
        onChange={(event) => {
          props.setDzial(event.target.value);
        }}
        disabled={props.klasa === "" || props.zakres === "" ? true : false}
      >
        <option value="" disabled>
          Dział
        </option>
        <option value="wszystkie" className="wszystkie">
          Wszystkie działy
        </option>
        {props.klasa === "1" && props.zakres === "podstawa" ? (
          <>
            <option value="1">Zbiory liczbowe. Liczby rzeczywiste</option>
            <option value="2">Wyrażenia algebraiczne</option>
            <option value="3">Funkcja i jej własności</option>
            <option value="4">Funkcja linowa</option>
            <option value="5">
              Układy równań liniowych z dwiema niewiadomymi
            </option>
            <option value="6">Podstawowe własności wybranych funkcji</option>
            <option value="7">
              Geometria płaska - pojęcia wstępne. Trójkąty
            </option>
            <option value="8">Trygonometria kąta ostrego</option>
          </>
        ) : props.klasa === "1" && props.zakres === "rozszerzenie" ? (
          <>
            <option value="1">Zbiory liczbowe. Liczby rzeczywiste</option>
            <option value="2">Wyrażenia algebraiczne</option>
            <option value="3">Funkcja i jej własności</option>
            <option value="4">Funkcja linowa</option>
            <option value="5">
              Układy równań liniowych z dwiema niewiadomymi
            </option>
            <option value="6">Podstawowe własności wybranych funkcji</option>
            <option value="7">
              Geometria płaska - pojęcia wstępne. Trójkąty
            </option>
            <option value="8">Trygonometria kąta ostrego</option>
          </>
        ) : props.klasa === "2" && props.zakres === "podstawa" ? (
          <>
            <option value="1">Przekształcenia wykresów funkcji</option>
            <option value="2">
              Równania i nierówności z wartością bezwzględną
            </option>
            <option value="3">Funkcja kwadratowa</option>
            <option value="4">Geometria płaska - okręgi i koła</option>
            <option value="5">Trygonometria</option>
            <option value="6">Geometria analityczna</option>
            <option value="7">
              Geometria płaska - rozwiązywanie trójkątów
            </option>
            <option value="8">Wielomiany</option>
          </>
        ) : props.klasa === "2" && props.zakres === "rozszerzenie" ? (
          <>
            <option value="1">Przekształcenia wykresów funkcji</option>
            <option value="2">
              Równania i nierówności z wartością bezwzględną
            </option>
            <option value="3">Funkcja kwadratowa</option>
            <option value="4">Geometria płaska - okręgi i koła</option>
            <option value="5">Trygonometria</option>
            <option value="6">Geometria analityczna</option>
            <option value="7">
              Geometria płaska - rozwiązywanie trójkątów
            </option>
            <option value="8">Wielomiany</option>
          </>
        ) : props.klasa === "3" && props.zakres === "podstawa" ? (
          <>
            <option value="1">Ułamki algebraiczne. Równania wymierne</option>
            <option value="2">Ciągi</option>
            <option value="3">Kombinatoryka</option>
            <option value="4">Czworokąty</option>
            <option value="5">Geometria płaska - pole czworokąta</option>
            <option value="6">Geometria analityczna</option>
          </>
        ) : props.klasa === "3" && props.zakres === "rozszerzenie" ? (
          <>
            <option value="1">Ułamki algebraiczne. Równania wymierne</option>
            <option value="2">Ciągi</option>
            <option value="3">Kombinatoryka</option>
            <option value="4">Geometria płaska - czworokąty</option>
            <option value="5">Geometria płaska - pole czworokąta</option>
            <option value="6">Elementaż analizy matematycznej</option>
            <option value="7">Trygonometria</option>
            <option value="8">Geometria analityczna</option>
          </>
        ) : props.klasa === "4" && props.zakres === "podstawa" ? (
          <>
            <option value="1">Funkcja wykładnicza</option>
            <option value="2">Funkcja logarytmiczna</option>
            <option value="3">Elementy statystyki</option>
            <option value="4">Rachunek prawdopodobieństwa</option>
            <option value="5">Geometria przestrzenna. Wielościany</option>
            <option value="6">Geometria przestrzenna. Bryły obrotowe</option>
          </>
        ) : props.klasa === "4" && props.zakres === "rozszerzenie" ? (
          <>
            <option value="1">Funkcja wykładnicza</option>
            <option value="2">Funkcja logarytmiczna</option>
            <option value="3">Elementy statystyki</option>
            <option value="4">Rachunek prawdopodobieństwa</option>
            <option value="5">Geometria przestrzenna. Wielościany</option>
            <option value="6">Geometria przestrzenna. Bryły obrotowe</option>
          </>
        ) : null}
      </select>
      <select
        value={props.temat}
        className="content-picker-select"
        onChange={(event) => {
          props.setTemat(event.target.value);
        }}
        disabled={
          props.dzial === "" || props.dzial === "wszystkie" ? true : false
        }
      >
        <option value="" disabled>
          Temat
        </option>
        <option value="wszystkie" className="wszystkie">
          Wszystkie tematy
        </option>
        {props.dzial !== "wszystkie" && props.dzial !== "" ? (
          <>
            {Object.values(tematy[props.klasa][props.zakres][props.dzial]).map(
              (x: unknown, index: number) => (
                <option key={(x as string) + index} value={x as string}>
                  {x as string}
                </option>
              )
            )}
          </>
        ) : null}
      </select>
    </div>
  );
}
export default ContentPicker;
