import React from "react";

import "./Covid19.css"

interface IProps {
}

interface IState {
  lang: string;
}

const makeSymptomsEn = () => {
  return (
    <div className="symptoms">
      <h4>What Should We Do If We Get Sick?</h4>

      <p>
        【Hotline Center】 To those who suspect infection or exhibit the
        following symptoms, do not go directly to a medical facility and
        instead please contact the dedicated consultation service in each
        prefecture first. When you click the map, you can see the information
        about the center in your prefecture.
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
    </div>
  )
}

const makeSymptomsJa = () => {
  return (
    <div className="symptoms">
      <h4>体調が悪くなったらどうする？</h4>

      <p>
        【帰国者・接触者相談センター】
        新型コロナウイルス感染症の感染が疑われる方、または次の症状がある方は、
        直接医療機関へ受診せず、事前に帰国者・接触者相談センターまでご相談ください。
        マップをクリックすると、各都道府県のセンターの情報が見られます。
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
    </div>
  )
}

const makeDisclaimerEn = () => {
  return (
    <div className="disclaimer">
      <h4>Disclaimer</h4>
        <h5>Accuracy of information on this site</h5>
        <ul>
          <li>
            We try to post information that is as accurate as possible
            in the content and information on this site. However,
            information may become outdated.
          </li>
          <li>
            We don’t guarantee accuracy, nor legality or safety.
          </li>
        </ul>

        <h5>Liability</h5>
        <ul>
          <li>
            We are not responsible for any damages caused by the contents
            posted on this site.
          </li>
          <li>
            In addition, if you move from this site to another site by links
            we posted, we will not take any responsibility for the
            information and services on those sites.
          </li>
          <li>
            You use the information on this site at your own risk.
          </li>
        </ul>

      <h5>Reproduction prohibited</h5>
        <ul>
        <li>
          It is prohibited to reprint the information of copyrighted works
          such as texts existing on this site for commercial purposes
          without permission.
        </li>
        <li>
           This site is link-free, but if you link, please contact us
          with the URL of the link source.
        </li>
      </ul>
    </div>
  )
}

const makeDisclaimerJa = () => {
  return (
    <div className="disclaimer">
      <h4>免責事項</h4>
        <h5>当サイトの情報の正確性について</h5>
        <ul>
          <li>
            当サイトのコンテンツや情報において, 可能な限り正確な情報を掲載するよう努めて
            いますが 誤情報が入り込んだり, 情報が古くなったりすることもあります。
          </li>
          <li>
            必ずしも正確性を保証するものではありません. また合法性や安全性なども保証
            しません。
          </li>
        </ul>

        <h5>損害等の責任について</h5>
        <ul>
          <li>
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますので,
            ご了承ください。
          </li>
          <li>
            また当サイトからリンクやバナーなどによって他のサイトに移動された場合,
            移動先サイトで提供される情報, サービス等について一切の責任も負いません。
          </li>
          <li>
            当サイトを利用する場合は, 自己責任で行う必要があります。
          </li>
        </ul>

      <h5>無断転載の禁止について</h5>
        <ul>
        <li>
          当サイトに存在する, 文章や画像, 動画等の著作物の情報を商用目的で無断転載する
          ことは禁止します。
        </li>
        <li>
          当サイトはリンクフリーですが、リンクを行った場合は、問い合わせ先までリンク
          元のURLをご連絡ください。
        </li>
      </ul>
    </div>
  )
}

const makeCovid19En = () => {
  return (
    <div className="covid19">
      {makeSymptomsEn()}
      {makeDisclaimerEn()}
    </div>
  )
}

const makeCovid19Ja = () => {
  return (
    <div className="covid19">
      {makeSymptomsJa()}
      {makeDisclaimerJa()}
    </div>
  )
}

const makeCovid19 = (lang: string) =>
  lang === 'en' ? makeCovid19En() : makeCovid19Ja()

class Covid19 extends React.Component<{ lang: string }, IState> {
  constructor(props: { lang: string }) {
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
