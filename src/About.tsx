import React from "react";

import "./About.css"

interface IProps {
}

interface IState {
  lang: string;
}

const makeOurGoalsEn = () => {
  return (
    <div className="our-goal">
      <h4>Our Goal</h4>

      <p>
        Because of the pandemic of Coronavirus disease 2019 (COVID-19),
        people all over the world have had tough days. In this situation,
        a lot of information is spread and complicated. We heard from
        public people that it is difficult to grasp really important
        information, and also heard from foreign residents in Japan that
        they are having anxiety because they lack multilingual
        information.
      </p>

      <p>
        Given this situation, we decided to launch this project in order
        to:
      </p>

      <ul>
        <li>Gather and share all the available information about
          COVID-19 hotlines in Japan in both Japanese and English
        </li>
        <li>Share reliable information related to COVID-19 with the
          general public</li>
      </ul>

      <p>
        We sincerely hope that we can contribute to everybody in Japan.
      </p>
    </div>
  )
}

const makeOurGoalsJa = () => {
  return (
    <div className="our-goal">
      <h4>Our Goal</h4>

      <p>
        新型コロナウイルス感染症 (COVID-19) の拡大に伴い、世界各地の人々が、
        不安な日々を送る状況に陥っています。
        このような状況の中多くの情報が錯綜しており、
        一般の方々から本当に重要な情報が把握しにくいといった声や、
        外国人の方々から多言語の情報が不足しており不安と共に
        過ごしているという声を聞きました。
      </p>

      <p>
        このような状況を鑑みて、 少しでも貢献できることがないか議論した結果、
        以下のプロジェクトを立ち上げることにしました。
      </p>

      <ul>
        <li>一般の方々向けに、COVID-19関連の信頼できる情報を集約し、
          日本語と英語の２言語で共有すること。
        </li>
        <li>窓口となっている全国全ての帰国者・接触者相談センターを調べ、
          地図に情報を落とし込むこと。
        </li>
      </ul>

      <p>
        もしも、近くに、いざとなった時の行動がわからなくて困っている方、
        情報が得られず困っている外国人の方がいたら、
        ぜひこちらのウェブサイトを教えて頂けたら嬉しいです。
      </p>

      <p>
        このような私たちの活動が、 少しでも日本にいる全ての方へ
        社会貢献できることを切に願っております。
      </p>
    </div>
  )
}

const makeAboutUsEn = () => {
  return (
    <div className="about-us">
      <h4>About Us</h4>
      <div className="chihiro-tsuchiya">
        <h5>Chihiro Tsuchiya</h5>
        <ul>
          <li>Affiliation: PhD Candidate of Graduate School of Asian
            African Area Studies, Kyoto University</li>
          <li>Qualification: Registerd Nurse, Pablic Health Nurse, and
            Master of Health Science</li>
          <li>Specialty: Global Health, Area Study in Oceania</li>
          <li>HP: <a href="https://researchmap.jp/peacechyhi?lang=en"
                     target="_blank" rel="noopener noreferrer">
                    researchmap
                  </a>
          </li>
          <li>Contact: <a href="javascript:location='mailto:\u0063\u0068\u0069\u0068\u0069\u0072\u006f\u002e\u0074\u0073\u0075\u0063\u0068\u0069\u0079\u0061\u0032\u0032\u0037\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">Send email</a></li>
        </ul>
      </div>

      <div className="eric-nichols">
        <h5>Eric Nichols</h5>
        <ul>
          <li>Affiliation: Dr.Eng. of Graduate School of Information
            Science, Nara Institute of Science and Technology</li>
          <li>Specialty: Artificial intelligence, natural language
            processing, machine learning</li>
          <li>Homepage: <a href="https://scholar.google.co.jp/citations?user=I3_MfAMAAAAJ&hl=en"
                           target="_blank" rel="noopener noreferrer">
                          Google Scholar
                        </a>
          </li>
          <li>Contact: <a href="javascript:location='mailto:\u0075\u006e\u0064\u0065\u0072\u0073\u0070\u0065\u0063\u0069\u0066\u0069\u0065\u0064\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">Send email</a></li>
        </ul>
      </div>
    </div>
  )
}

const makeAboutUsJa = () => {
  return (
    <div className="about-us">
      <h4>About Us</h4>
      <div className="chihiro-tsuchiya">
        <h5>土谷 ちひろ</h5>
        <ul>
          <li>在籍: 京都大学 アジアアフリカ研究研究科 博士課程</li>
          <li>資格: 看護師, 保健師, 保健学修士</li>
          <li>専門分野: 国際保健, オセアニア地域研究</li>
          <li>ホームページ: <a href="https://researchmap.jp/peacechyhi?lang=en"
                     target="_blank" rel="noopener noreferrer">
                    researchmap
                  </a>
          </li>
          <li>コンタクト: <a href="javascript:location='mailto:\u0063\u0068\u0069\u0068\u0069\u0072\u006f\u002e\u0074\u0073\u0075\u0063\u0068\u0069\u0079\u0061\u0032\u0032\u0037\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">メールを送る</a></li>
        </ul>
      </div>

      <div className="eric-nichols">
        <h5>エリック・ニコルズ</h5>
        <ul>
          <li>学歴: 奈良先端科学大学院大学 情報科学研究科 博士(工)</li>
          <li>専門分野: 人工知能, 自然言語処理, 機械学習</li>
          <li>ホームページ: <a href="https://scholar.google.co.jp/citations?user=I3_MfAMAAAAJ&hl=en"
                           target="_blank" rel="noopener noreferrer">
                          Google Scholar
                        </a>
          </li>
          <li>ホームページ: <a href="javascript:location='mailto:\u0075\u006e\u0064\u0065\u0072\u0073\u0070\u0065\u0063\u0069\u0066\u0069\u0065\u0064\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">メールを送る</a></li>
        </ul>
      </div>
    </div>
  )
}

const makeAboutEn = () => {
  return (
    <div className="about">
      {makeOurGoalsEn()}
      {makeAboutUsEn()}
    </div>
  )
}

const makeAboutJa = () => {
  return (
    <div className="about">
      {makeOurGoalsJa()}
      {makeAboutUsJa()}
    </div>
  )
}

const makeAbout = (lang: string) =>
  lang === 'en' ? makeAboutEn() : makeAboutJa()

class About extends React.Component<{ lang: string }, IState> {
  constructor(props: { lang: string }) {
    super(props)
    this.state = {
      lang: 'en',
    }
  }

  render() {
    return (
      makeAbout("ja")
    )
  }
}

export default About
