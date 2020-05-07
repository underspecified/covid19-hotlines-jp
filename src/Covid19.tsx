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
        an infectious disease caused by the recently-discovered novel
        coronavirus (SARS-CoV-2) that has caused an outbreak beginning in
        Wuhan, China, in December 2019. It is a highly-infectious
        respiratory illness that can become life-threatening.
     </p>

    </div>
  )
}

const makeSymptomsEn = () => {
  return (
    <div className="symptoms">
      <h3>What are its symptoms?</h3>

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
      <h3>What should we do if we get sick?</h3>

      <p>
        <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00014.html"
           target="_blank" rel="noopener noreferrer">The Ministry of Health,
          Labor, and Welfare</a> currently requests that if you suspect
        infection, do not go directly to a medical facility. Instead please
        first call the dedicated COVID-19 hotline in your prefecture.<br />
      </p>
    </div>
  )
}

const makeWhyEn = () => {
  return (
    <div className="why">
      <h3>Why call a hotline instead of going to the hospital?</h3>

      <p>
        Many common cold-like symptoms are caused by diseases other than
        COVID-19, and going to medical facilities without prior consultation
        with an expert increases the risk of spreading COVID-19 while placing
        unnecessary strain on the healthcare system. (From <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00014.html#Q15"
           target="_blank" rel="noopener noreferrer">
        the Ministry of Health, Labor, and Welfare</a>.)
      </p>

      <Link to="/en/hotlines">
        <h5>Find a hotline near you</h5>
      </Link>

      <h3>What should I do if I have a non-medical problem?</h3>

      <p>
        If you need help with any non-medical problems, we recommend calling
        one of the foreigner support centers, where you can talk to a
        knowledgeable volunteer in your native language.
      </p>

        <h5>
          <Link to="/en/support">Find a support center near you</Link>
        </h5>
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
        よると、新型コロナウイルス感染症はコロナウイルス（SARS-CoV2）によって引き起こされる感染症です。2019年12月、中華人民共和国湖北省武漢市で「原因不明のウイルス性肺炎」として最初の症例が確認されました。主に肺炎のような呼吸器系の症状を引き起こしますが、全身に重篤な症状が表れることもあります。
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
        新型コロナウイルス感染症の感染が疑われる方は、直接医療機関へ受診せず、事前に帰国者・接触者相談センターまでご相談ください。(<a
        href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00001.html#Q5-1"
        target="_blank" rel="noopener noreferrer">厚生労働省HP</a>より)<br/>
      </p>
    </div>
  )
}

const makeWhyJp = () => {
  return (
    <div className="why">
      <h3>なぜ直に医療機関を受診してはいけないの？</h3>

      <p>
        風邪の症状があっても、新型コロナウイルス感染症以外の病気の方が圧倒的に多い状況です。また、適切な相談をせずに医療機関を受診することは、新型コロナウイルス感染症でなかった場合に、かえって感染するリスクを招くことになります。        (<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00001.html#Q2-1"
           target="_blank" rel="noopener noreferrer"
      >厚生労働省HP</a>より)
      </p>

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
      {makeWhyEn()}
    </div>
  )
}

const makeCovid19Ja = () => {
  return (
    <div className="covid19">
      {makeWhatJp()}
      {makeSymptomsJa()}
      {makeSickJa()}
      {makeWhyJp()}
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
