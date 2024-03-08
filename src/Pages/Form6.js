import React from "react";
import NavBlock from "../Components/NavBlock";
import { toggleBoxOpacity } from "../Components/hints";
import FormNavButton from "../Components/FormNavButton";
import ReminderContainer from "../Components/ReminderContainer";

function Form6() {
  return (
    <div className="form-page-container" style={{ color: "white" }}>
      <NavBlock />
      <div className="form-container">
        <div className="form-container1">
          <div className="infobubble-container">
            <div className="outerbubble" onClick={toggleBoxOpacity}>
              <div
                id="hiddedbox"
                className="infobubble"
                style={{ marginBottom: "95px" }}
              >
                <div className="title-container">
                  <p>Vinkki</p>
                </div>
                <p>Lisää tietoa työturvallisuuslaista.</p>
                <a
                  href="https://www.tyoturvallisuus.eu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Työturvallisuus
                </a>
              </div>
              <svg
                className="l-icon"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                style={{ marginBottom: "95px" }}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
              </svg>
            </div>
            <div className="outerbubble" onClick={toggleBoxOpacity}>
              <div id="hiddedbox" className="infobubble">
                <div className="title-container">
                  <p>Vinkki</p>
                </div>
                <p>
                  Perehdytyskansio on infopaketti yrityksesi uudelle
                  työntekijälle
                </p>
                <p>Perehdytyskansion pohjan löydät täältä:</p>
              </div>
              <svg
                className="l-icon"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
              </svg>
            </div>
          </div>
          <div className="form-container2">
            <div className="form-inner-container">
              <form>
                <p>
                  Perehdytys on sinulle erittäin hyödyllinen. Hyvä perehdytys
                  varmistaa sujuvan työnaloituksen ja säästää aikaasi ja
                  rahaasi.
                </p>
              </form>
              <div className="form-normal3-grp-text">
                <p>Perehdytykseen tulee kuulua ainakin:</p>
                <p>
                  - Työvälineisiin, työympäristöön ja sen toimintatapoihin
                  tutustuminen
                </p>
                <p>- Pelastusopastus</p>
                <p>- Työterveyshuolto</p>
                <p>- Työturvallisuus</p>
              </div>
              <p>
                Säästät vaivaa tulevaisuudessa, tekemällä perehdytyskansion jo
                ensimmäisen rekrytoinnin kohdalla.
              </p>
              <FormNavButton lastPageUrl="/Form5" nextPageUrl="/LastPage"/>
              <ReminderContainer />
            </div>
          </div>
          <div className="infobubble-container">
            <div className="outerbubble" onClick={toggleBoxOpacity}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                style={{ marginBottom: "20px"}}
                className="r-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
              </svg>
              <div
                className="infobubble"
                id="hiddedbox"
                style={{ marginBottom: "20px"}}
              >
                <div className="title-container">
                  <p>Ohje</p>
                </div>
                <p>Kehitä kysymyksiä, jotka luovat keskustelua.</p>
                <p>Vältä kyllä tai ei vastauksia</p>
              </div>
            </div>
            <div className="outerbubble" onClick={toggleBoxOpacity}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="r-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
              </svg>
              <div
                className="infobubble"
                id="hiddedbox"
              >
                <div className="title-container">
                  <p>Ohje</p>
                </div>
                <p>Kehitä kysymyksiä, jotka luovat keskustelua.</p>
                <p>Vältä kyllä tai ei vastauksia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form6;
