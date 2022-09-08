import { useEffect, useState } from 'react';
import './DoubleText.css';

const DoubleText = () => {
    const [db, setDb] = useState(false);
    const [scY, setScy] = useState(0);
    const scrollHandler = () => {
        let sct = window.scrollY;
        setScy(sct);
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [scY])
    return (
        <>
            {console.log(scY)}
            <div className="box">
                <h3 className={scY > 0 || db ? 'on' : ''}>나는 바보다.</h3>
                <div className="left"></div>
                <div className="right"></div>
            </div>
            <button onClick={() => setDb(!db)}>CL</button>
        </>
    )
}

export default DoubleText;