import React from "react";

import "./Info.css"

const makeSituationEn = () => {
  return (
    <div className="situation">
      <h3>What is the current situation?</h3>

      <ul>
        <li>
          <a href="https://toyokeizai.net/sp/visual/tko/covid19/en.html"
             target="_blank" rel="noopener noreferrer">Current status using
          data by the Ministry of Health, Labor and Welfare in Japan</a>
        </li>
        <li>
          <a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html"
             target="_blank" rel="noopener noreferrer">COVID-19 Global Cases
            by the Center for Systems Science and Engineering (CSSE) at Johns
            Hopkins University</a>
        </li>
      </ul>
    </div>
  )
}

const makeNewsEn = () => {
  return (
    <div className="news">
      <h3>How can we get news in Japan?</h3>

      <ul>
        <li>
          <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/newpage_00032.html"
             target="_blank" rel="noopener noreferrer">News from the Ministry
            of Health, Labor and Welfare, Japan</a>
        </li>
        <li>
          <a href="https://www3.nhk.or.jp/nhkworld/en/news/tags/82/"
             target="_blank" rel="noopener noreferrer">Coronavirus outbreak
            updates from NHK WORLD-JAPAN, the international service of Japan's
            public broadcaster NHK</a>
        </li>
        <li>
          <a href="https://www.japantimes.co.jp/liveblogs/news/coronavirus-outbreak-updates/"
             target="_blank" rel="noopener noreferrer">
            COVID-19 NEWS UPDATES by Japan Times</a>
        </li>
        <li>
          <a href="https://reddit.com/r/japanlife/comments/g2vxf9/japanlife_coronavirus_megathread_viii_nationwide/"
             target="_blank" rel="noopener noreferrer">
            Reddit /r/japanlife Coronavirus Megathread</a>
        </li>
      </ul>
    </div>
  )
}

const makePreventionEn = () => {
  return (
    <div className="prevention">
      <h3>How we can prevent infection?</h3>

      <ul>
        <li>
          Educational materials by the Ministry of Health, Labor and Welfare, Japan
          <ul>
            <li>
              <a href="https://www.mhlw.go.jp/content/10900000/000615287.pdf"
                 target="_blank" rel="noopener noreferrer">
                Avoid the "Three Cs!"</a>
            </li>
            <li>
              <a href="https://www.mhlw.go.jp/content/10200000/000603614.pdf"
                 target="_blank" rel="noopener noreferrer">
                Please Cooperate in measures against infectious diseases.</a>
            </li>
            <li>
              <a href="https://www.mhlw.go.jp/content/10900000/000607599.pdf"
                 target="_blank" rel="noopener noreferrer">
                Prevention Measures against Coronavirus Disease 2019
                (COVID-19)</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=AKNNZRRo74o"
             target="_blank" rel="noopener noreferrer">
            A movie how to wash cloth mask (Ministry of Economy, Trade
            and Industry, Japan, in Japanese)</a>
        </li>
      </ul>
    </div>
  )
}

const makeOtherEn = () => {
  return (
    <div className="other">
      <h3>Other information</h3>

      <ul>
        <li>
          <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
             target="_blank" rel="noopener noreferrer">
            Information from WHO</a>
        </li>
        <li>
          <a href="http://www.clair.or.jp/tabunka/portal/info/contents/114517.php"
             target="_blank" rel="noopener noreferrer">
            Information about COVID-19 in many languages </a>
        </li>
        <li>
          <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00014.html"
             target="_blank" rel="noopener noreferrer">
            Q and A by the Ministry of Health, Labor and Welfare, Japan</a>
        </li>
        <li>
          <a href="https://www.yubisashi.com/PDF/yubisashi_covid19.pdf"
             target="_blank" rel="noopener noreferrer">
            Handy point-and-speak guides for dealing with Coronavirus-related
            scenarios</a>
        </li>
      </ul>
    </div>
  )
}

const makeInfoEn = () => {
  return (
    <div className="info">
      {makeSituationEn()}
      {makeNewsEn()}
      {makePreventionEn()}
      {makeOtherEn()}
    </div>
  )
}

const makeSituationJp = () => {
  return (
    <div className="situation">
      <h3>現在の状況は？</h3>

      <ul>
        <li>
          <a href="https://toyokeizai.net/sp/visual/tko/covid19/"
             target="_blank" rel="noopener noreferrer"
          >厚生労働省データを使用した日本国内感染の状況</a>
        </li>
        <li>
          <a href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html"
             target="_blank" rel="noopener noreferrer"
          >ジョンズ・ホプキンス大学が公開した世界の新型コロナウィルス感染状況 (英語)</a>
        </li>
      </ul>
    </div>
  )
}

const makeNewsJp = () => {
  return (
    <div className="news">
      <h3>最新のニュースは？</h3>

      <ul>
        <li>
          <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000164708_00001.html"
             target="_blank" rel="noopener noreferrer"
          >厚生労働省による最新情報</a>
        </li>
        <li>
          <a href="https://www3.nhk.or.jp/news/special/coronavirus/"
             target="_blank" rel="noopener noreferrer"
          >NHKによるCOVID-19特集</a>
        </li>
      </ul>
    </div>
  )
}

const makePreventionJp = () => {
  return (
    <div className="prevention">
      <h3>感染を予防する方法は？</h3>

      <ul>
        <li>厚生労働省が作成した、感染症対策のための啓発資料<ul>
            <li>
              <a href="https://www.kantei.go.jp/jp/content/000061234.pdf"
                 target="_blank" rel="noopener noreferrer"
              >3つの密を避けましょう！</a>
            </li>
            <li>
              <a href="https://www.mhlw.go.jp/content/10900000/000593493.pdf"
                 target="_blank" rel="noopener noreferrer"
              >感染症対策へのご協力をお願いします</a>
            </li>
            <li>
              <a href="https://www.pref.gunma.jp/contents/100150470.pdf"
                 target="_blank" rel="noopener noreferrer"
              >こ家族に新型コロナウイルス感染か疑われる場合 家庭内てこ注意いたたきたいこと 〜8つのホイント〜</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=AKNNZRRo74o"
             target="_blank" rel="noopener noreferrer"
          >経済産業省による布マスクの洗い方動画</a>
        </li>
      </ul>
    </div>
  )
}

const makeOtherJp = () => {
  return (
    <div className="other">
      <h3>その他の情報</h3>

      <ul>
        <li>
          <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
             target="_blank" rel="noopener noreferrer"
          >WHOによる特設サイト (英語)</a>
        </li>
        <li>
          <a href="http://www.clair.or.jp/tabunka/portal/info/contents/114517.php"
             target="_blank" rel="noopener noreferrer"
          >一般財団法人自治体国際化協会が運営するウェブサイト (多言語)</a>
        </li>
        <li>
          <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00001.html"
             target="_blank" rel="noopener noreferrer"
          >一般の方向けの厚生労働省Q＆A</a>
        </li>
        <li>
          <a href="https://www.yubisashi.com/PDF/yubisashi_covid19.pdf"
             target="_blank" rel="noopener noreferrer"
          >株式会社情報センター出版局による新型コロナウィルス対応 指さし会話(13か国語対応）</a>
        </li>
        <li>
          <a href="https://covid19-jpn.com/forcitizen/"
             target="_blank" rel="noopener noreferrer"
          >日本の有志医療者による医療情報のまとめ</a>
        </li>
        <li>
          <a href="http://minato.sip21c.org/2019-nCoV-im3r.html"
             target="_blank" rel="noopener noreferrer"
          >公衆衛生学と疫学を専門とする神戸大学中澤港教授によるリンク集</a>
        </li>
      </ul>
    </div>
  )
}

const makeInfoJp = () => {
  return (
    <div className="info">
      {makeSituationJp()}
      {makeNewsJp()}
      {makePreventionJp()}
      {makeOtherJp()}
    </div>
  )
}

const makeInfo = (lang: string) =>
  lang === 'en' ? makeInfoEn() : makeInfoJp()

const Info = (props: {lang: string}): JSX.Element => {
  return (
    makeInfo(props.lang)
  )
}

export default Info
