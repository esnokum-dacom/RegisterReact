import { useState } from "react";
import "./App.css";
import Img from "./assets/SnowD.jpg";

function App() {
  const [LineG, setLine] = useState("LineG");
  const [TNM, setTNM] = useState("user");
  const [CPs, setCPs] = useState("NoPass");
  const [CPc, setCPc] = useState(null);

  function Reig() {
    if (setLine) {
      setLine("LineQ");
      setTNM("Mail");
      setCPs("Pass");
      setCPc("Confirm Password");
    }
  }

  function Ini() {
    if (setLine) {
      setLine("LineG");
      setTNM("User");
      setCPs("NoPass");
      setCPc(null);
    }
  }

  return (
    <>
      <div className="Container">
        <div className="SesIni">
          <p className="Testx">
            En el horizonte, bajo un crepúsculo teñido de ámbar, un peregrino
            avanzaba lentamente, acompañado por el susurro del viento. Cada paso
            parecía una elipsis en el tiempo, mientras los fragmentos de su
            pasado se desvanecían como destellos en su memoria. El paisaje era
            un fractal infinito de colores y formas, un escenario onírico que
            desafiaba la lógica. A lo lejos, una nebulosa luminosa se alzaba
            sobre las montañas, proyectando una luz mística que parecía guiarlo.
            En su mano, un antiguo relicario brillaba tenuemente, como si
            compartiera un secreto que solo él podría descifrar. La alquimia del
            destino lo había llevado hasta allí, buscando respuestas en medio de
            la tempestad que rugía dentro y fuera de su ser. El camino era
            incierto, bordeado por sombras lúgubres que intentaban sembrar
            vértigo en su espíritu. Pero el peregrino, decidido, enfrentaba la
            ruptura de sus miedos, avanzando hacia lo desconocido. Sabía que al
            final del viaje, más allá de la niebla, lo aguardaba un destino
            escrito en las estrellas. En ese instante, comprendió que la vida
            era un ensueño constante, donde cada paso, cada susurro, y cada
            destello formaban parte de un gran misterio que solo podía ser
            resuelto viviendo.
          </p>
          <div className="Objs_Ini">
            <div className="BUtp">
              <button className="BIn" onClick={Ini}>
                Sign In
              </button>
              <span></span>
              <button className="BIn" onClick={Reig}>
                Sign Up
              </button>
              <div className={LineG}></div>
            </div>
            <span></span>
            <label for="Us_Mail">{TNM}</label>
            <input required className="Us_Mail" type="text" name="User/Mail" />
            <span></span>
            <label for="Pass">Password</label>
            <input required className="Pass" type="password" name="Passw" />
            <span></span>
            <label for="PasswC">{CPc}</label>
            <input required className={CPs} type="password" name="PasswC" />
            <span></span>
            <button className="BSub" type="submit">
              Sing In
            </button>
            <span></span>
            <div className="Ini_Bi">
              <i className="bx bxl-google"></i>
            </div>
          </div>
          <img className="ImSR" src={Img} />
        </div>
      </div>
    </>
  );
}

export default App;
