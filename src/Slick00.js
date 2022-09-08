import { useEffect, useRef, useState } from 'react';
import MainSlider from 'react-slick'
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, content: "conttent01", des: "description01", link: "/1" },
    { id: 2, content: "conttent02", des: "description02", link: "/2" },
    { id: 3, content: "conttent03", des: "description03", link: "/3" },
];

const TAB = [
    { id: 1, content: "01 나는 슬라이드가 1번 일 때 나오는 내용입니다." },
    { id: 2, content: "02 나는 슬라이드가 2번 일 때 나오는 내용입니다." },
    { id: 3, content: "03 나는 슬라이드가 3번 일 때 나오는 내용입니다." },
]
const Slick00 = () => {
    const [slideIdx, setSlideIdx] = useState()
    const set = {
        //dots: true,
        arrows: false,
        afterChange: idx => {
            setSlideIdx(idx)
        }
    }
    const MS = useRef(null);
    useEffect(() => {
        setSlideIdx(0)
    }, []);
    console.log({ ...set })
    return (
        <>
            <MainSlider {...set} className='MainSlider' ref={MS}>
                {
                    SLIDE.map((slide, idx) => (<figure className={`item0${slide.id} ${idx === slideIdx ? 'on' : ''}`} key={slide.id}>
                        <h2>{slide.content}</h2>
                        <p>{slide.des}</p>
                        <a href={slide.link}>more</a>
                    </figure>))
                }
            </MainSlider>
            <ul className='content'>
                {/* ?. 문법 이해하기... */}
                <li>{TAB[slideIdx]?.content}</li>
            </ul>
            <ul>
                {
                    SLIDE.map((dots, idx) => <li onClick={() => MS.current.slickGoTo(idx)} key={dots.id}>{dots.id}</li>)
                }
            </ul>
            <div className='num'>0{slideIdx + 1} / 0{SLIDE.length}</div>
            <button onClick={() => MS.current.slickPrev()}>prev</button>
            <button onClick={() => MS.current.slickNext()}>next</button>
            {console.log(MS)}
        </>
    )
}

export default Slick00;