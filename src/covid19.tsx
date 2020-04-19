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
           target="_blank" rel="noopener noreferrer">WHO</a>, COVID-19 is
        an infectious disease caused by a recently-discovered coronavirus
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
        According to the <a
           href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses"
           target="_blank" rel="noopener noreferrer">WHO</a> and <a
        href="https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(20)30293-0/fulltext"
        target="_blank" rel="noopener noreferrer">the Lancet</a>, COVID-19
        exhibits the following symptoms:
      </p>

      <ul>
        <li>Fever</li>
        <li>Coughing</li>
        <li>Sore throat</li>
        <li>Fatigue</li>
        <li>Loss of smell or taste</li>
        <li>Shortness of breath</li>
      </ul>

    </div>
  )
}
const makeSickEn = () => {
  return (
    <div className="sick">
      <h3>What Should We Do If We Get Sick?</h3>

      <p>
        <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00014.html"
           target="_blank" rel="noopener noreferrer">The Ministry of Health,
          Labor, and Welfare</a> currently requests that if you suspect
        infection or exhibit the following symptoms, do not go directly to a
        medical facility. Instead please first call the dedicated COVID-19
        hotline in your prefecture.<br />
        ※The elderly, the pregnant, and people with previously underlying
        conditions should consult when they have had these symptoms for 2 or
        more days.
      </p>

      <ul>
        <li>
          Cold-like symptoms, a fever of 37.5℃ or above that has continued
          for 4 or more days
        </li>
        <li>
          Extreme fatigue (physical weariness) and  difficulty breathing
          (labored breath)
        </li>
      </ul>

      <p>
        <Link to="/en/hotlines">
          <h5>Find a hotline near you</h5>
        </Link>
      </p>
    </div>
  )
}

// eslint-disable-next-line
const makeWhatJp = () => {
  return (
    <div className="what">
      <h3>新型コロナウィルスとは？</h3>

      <p>
        <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses"
           target="_blank" rel="noopener noreferrer">世界保健機関(WHO)</a>に
        よると、新型コロナウイルス(COVID-19)はコロナウイルスのひとつです。2019年12月、
        中華人民共和国湖北省武漢市で「原因不明のウイルス性肺炎」として最初の症例が確認
        されました。 主に肺炎のような呼吸器系の症状を引き起こしますが、全身に重篤な症状が
        表れることもあり、中国以外の国家と地域に感染が拡大しています。
      </p>
    </div>
  )
}

const makeSymptomsJa = () => {
  return (
    <div className="symptoms">
      <h3>新型コロナウィルスの症状は？</h3>

      <p>
        <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses"
             target="_blank" rel="noopener noreferrer">世界保健機関(WHO)
        </a>と<a href="http://www.jibika.or.jp/citizens/covid19/mikaku.html"
                target="_blank" rel="noopener noreferrer">日本耳鼻咽喉科学会
        </a>によると、新型コロナウイルス(COVID-19)の症状は以下の通りです。
      </p>

      <ul>
        <li>発熱</li>
        <li>咳</li>
        <li>喉の痛み</li>
        <li>強いだるさ</li>
        <li>嗅覚・味覚障害</li>
        <li>息苦しさ</li>
      </ul>
    </div>
  )
}

const makeSickJa = () => {
  return (
    <div className="sick">
      <h3>体調が悪くなったらどうする？</h3>

      <p>
        新型コロナウイルス感染症の感染が疑われる方、または次の症状がある方は、直接医療
        機関へ受診せず、事前に帰国者・接触者相談センターまでご相談ください。(<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00001.html#Q5-1"
           target="_blank" rel="noopener noreferrer">厚生労働省HP</a>より)<br/>
        ※高齢者や基礎疾患等のある方、妊娠している方は、上の状態が2日程度続く場合。

      </p>

      <ul>
        <li>
          風邪の症状や37.5℃以上の発熱が4日以上続いている
        </li>
        <li>
          強いだるさ（倦怠感）や息苦しさ（呼吸困難）がある
        </li>
      </ul>

      <p>
        <Link to="/jp/hotlines">
          <h5>
            各都道府県のセンターを探す
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
      {makeWhatJp()}
      {makeSymptomsJa()}
      {makeSickJa()}
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
