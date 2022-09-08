import { useState } from 'react';
import './App.css';
import DoubleText from './DoubleText'
// import Slick00 from './Slick00';
// import MainVisual from './Slick00';
// import GitUser from './GitUser';
// import MainSlider from './MainSlider';
import MainSlider from "./component/MainSlider";
const DB = [
  {
    id: 1,
    content: "menu01",
    link: "/s1",
    submenu: [
      { content: "smenu011", link: "/1" },
      { content: "smenu012", link: "/2" },
      { content: "smenu013", link: "/3" },

    ]
  },
  {
    id: 2,
    content: "menu02",
    link: "/s1",
    submenu: [
      { content: "smenu021", link: "/1" },
      { content: "smenu022", link: "/2" },
      { content: "smenu023", link: "/3" },

    ]
  },
  {
    id: 3,
    content: "menu03",
    link: "/s1",
    submenu: [
      { content: "smenu031", link: "/1" },
      { content: "smenu032", link: "/2" },
      { content: "smenu033", link: "/3" },

    ]
  }
]

function App() {
  const [CB, setCB] = useState("");
  const [TG, setTG] = useState(false);
  // const [TEXT, setTEXT] = useState(false);
  return (
    <div className='Wrap'>
      <header>
        <h1 className={CB} onClick={() => setCB('on')}>LOGO</h1>
        <h2 className={`ggg ${TG ? 'on' : ''}`}>toggle class</h2>
        <button onClick={() => setTG(!TG)}>class 토글</button>
        {/* <button onClick={() => setTEXT(!TEXT)}>글자겹치는 거 나오는 버튼</button> */}
        <nav className='GNB'>
          <ul>
            {
              DB.map((it, idx) => <li key={idx}>
                <a href={it.link}>{it.content}</a>
                <ul className='smenu'>
                  {
                    it.submenu.map((smenu, idx) => <li key={idx}>
                      <a href={smenu.link}>{smenu.content}</a>
                    </li>)
                  }
                </ul>
              </li>)
            }
          </ul>
        </nav>
        {/* {
        TEXT && <DoubleText />
      } */}

      </header>
      <main>
        {/* <GitUser />
        <Slick00 /> */}
        <MainSlider />
      </main>
    </div>

  );
}

export default App;
