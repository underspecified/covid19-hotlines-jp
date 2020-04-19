import React from "react";

import "./Covid19.css"
import {Link} from "react-router-dom";

const makeSymptomsEn = () => {
  return (
    <div className="symptoms">
      <h4>What Should We Do If We Get Sick?</h4>

      <p>
        If you suspect infection or exhibit the symptoms listed below, do not
        go directly to a medical facility. Instead please call the dedicated
        COVID-19 hotline in your prefecture first.
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
        <li>
          ※Elderly people or those with previously underlying conditions
          should consult when they have had the above symptoms for 2 or more
          days.
        </li>
      </ul>

      <p>
        <Link to="/hotlines">
          <h5>Find a hotline near you by clicking here.</h5>
        </Link>
      </p>
    </div>
  )
}

const makeSymptomsJa = () => {
  return (
    <div className="symptoms">
      <h4>体調が悪くなったらどうする？</h4>

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
        <Link to="/hotlines">
          <h5>このリンクをクリックすると、各都道府県のセンターの情報が 見られます。</h5>
        </Link>
      </p>
    </div>
  )
}

const makeCovid19En = () => {
  return (
    <div className="covid19">
      {makeSymptomsEn()}
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

class Covid19 extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props)
    this.state = {
      lang: 'en',
    }
  }

  render() {
    return (
      makeCovid19("en")
    )
  }
}

export default Covid19
