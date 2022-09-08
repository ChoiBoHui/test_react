import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { slideid: 1, content: "슬라이드 제목", des: "01 슬라이드 내용 입니다.", link: "/1" },
    { slideid: 2, content: "슬라이드 제목", des: "02 슬라이드 내용 입니다.", link: "/2" },
    { slideid: 3, content: "슬라이드 제목", des: "03 슬라이드 내용 입니다.", link: "/3" }
]

const MainSlider = () => {
    const [num, setNum] = useState();
    const slideRef = useRef();
    useEffect(() => {
        setNum(0)
    }, [])
    // 의존성 배열 이라고, 마운트 됐을때 실행하고 어쩌고인데 찾아봐야 할듯..?
    // 첫번째 {} 부분은 콜백함수 두번째는 [배열] << 이것도 제대로 못들어서 확인 필요할듯..?
    // 리액트 훅은 직접 하나하나 검색해서 찾아봐야할듯?
    const slideSet = {
        dots: true,
        afterChange: index => setNum(index),
    }
    return (
        <>
            <Slider {...slideSet} ref={slideRef}>
                {
                    SLIDE.map(
                        (slide, idx) =>
                            <figure className={`item0${slide.slideid}${idx === num ? 'on' : ''}`} key={slide.slideid}>
                                {/* `` 문자열 안에서는 ""이 필요가 없죠? */}
                                <div className="slide-box">
                                    <h2>{slide.content}</h2>
                                    <p>{slide.des}</p>
                                    <a href={slide.link}>more</a>
                                </div>
                            </figure>
                    )
                    // map 함수를 써서 위에 3개의 배열을 전부 ()요 안에 사용하겠단 소리
                }
            </Slider>
            {/* 슬라이드 페이지 수 표시!! */}
            {console.log(slideRef.current)}
            <div>0{num + 1} / <span>0{SLIDE.length}</span></div>
            {/* 슬라이드 화살표 제작!! */}
            <div className="arrows">
                <button onClick={() => slideRef.current.slickPrev()}>prev</button>
                <button onClick={() => slideRef.current.slickNext()}>next</button>
            </div>
            {/* 슬라이드 페이저 제작!! */}
            <ul className="dots">
                {
                    SLIDE.map((dots, idx) => <li className={idx === num ? 'on' : ''}
                        onClick={() => slideRef.current.slickGoTo(idx)}
                        key={dots.slideid}>{dots.slideid}</li>)
                }
            </ul>
            <div className="content">
                <div>
                    {/* ?. 문법 이해하기... Null 병합 연산자(??), 옵셔널 체이닝(?.) */}
                    {SLIDE[num]?.des}
                </div>
            </div>
        </>
    )
}
export default MainSlider;