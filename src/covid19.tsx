import React from "react";
import { Link } from "react-router-dom";

import "./Covid19.css"

const makeWhatEn = () => {
  return (
    <div className="what">
      <h3>What is COVID-19?</h3>

      <p>
        According to the <a
           href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses"
           target="_blank" rel="noopener noreferrer">WHO</a>, COVID-19 is an
        infectious disease caused by a recently-discovered coronavirus
        (SARS-CoV-2) that has caused an outbreak beginning in Wuhan, China,
        in December 2019. It causes a highly-infectious respiratory
        illness that can become life-threatening.
     </p>

    </div>
  )
}

const makeSymptomsEn = () => {
  return (
    <div className="symptoms">
      <h3>What Are Its Symptoms?</h3>

      <p>
        COVID-19 exhibits the following symptoms:
      </p>

      <ul>
        <li>
          Cold-like symptoms, a fever of 37.5℃ or above that has continued
          for 4 or more days.
        </li>
        <li>
          Extreme fatigue (physical weariness) and  difficulty breathing
          (labored breath).
        </li>
      </ul>
    </div>
  )
}
const makeSickEn = () => {
  return (
    <div className="sick">
      <h3>What Should We Do If We Get Sick?</h3>

      <p>
        If you suspect infection or exhibit these symptoms, do not
        go directly to a medical facility. Instead please call the dedicated
        COVID-19 hotline in your prefecture first.
      </p>

      <p>
        ※Elderly people or those with previously underlying conditions should
        consult when they have had these symptoms for 2 or more days.
      </p>

      <p>
        <Link to="/en/hotlines">
          <h5>Find a hotline near you by clicking here.</h5>
        </Link>
      </p>
    </div>
  )
}

// eslint-disable-next-line
const makeWhatJp = () => {
  return (
    <div className="what">
      <h3>What is COVID-19?</h3>

      <p>Coming soon...</p>
    </div>

  )
}

const makeSymptomsJa = () => {
  return (
    <div className="symptoms">
      <h3>体調が悪くなったらどうする？</h3>

      <p>
        【帰国者・接触者相談センター】<br />
        新型コロナウイルス感染症の感染が疑われる方、または次の症状がある方は、
        直接医療機関へ受診せず、事前に帰国者・接触者相談センターまでご相談ください。
      </p>

      <ul>
        <li>
          風邪の症状や37.5℃以上の発熱が4日以上続いている。
        </li>
        <li>
          強いだるさ（倦怠感）や息苦しさ（呼吸困難）がある。
        </li>
        <li>
          ※高齢者や基礎疾患等のある場合は、上の状態が2日程度続く場合。
        </li>
      </ul>

      <p>
        <Link to="/jp/hotlines">
          <h5>
            このリンクをクリックすると、各都道府県のセンターの情報が 見られます。
          </h5>
        </Link>
      </p>
    </div>
  )
}

const makeCovid19En = () => {
  return (
    <div className="covid19">
      {makeWhatEn()}
      {makeSymptomsEn()}
      {makeSickEn()}
    </div>
  )
}

const makeCovid19Ja = () => {
  return (
    <div className="covid19">
      {makeSymptomsJa()}
    </div>
  )
}

const makeCovid19 = (lang: string) =>
  lang === 'en' ? makeCovid19En() : makeCovid19Ja()

const Covid19 = (props: {lang: string}): JSX.Element => {
  return (
    makeCovid19(props.lang)
  )
}

export default Covid19
