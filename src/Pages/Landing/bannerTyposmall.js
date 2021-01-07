import React, {useState, useEffect} from 'react';
import { useTransition, animated } from 'react-spring';

const BannerSmall = () =>{
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((state) => (state + 1) % items.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const [index, setIndex] = useState(0);
    const [items] = useState([
        {title: 'Between your business objectives and what your customers want.', id: 0},
        {title: 'Not client-vendor or vendor-client, we collaborate for the win.', id: 1},
        {title: 'Design and development for brands and start-ups.', id: 2},
        {title: 'Between your business objectives and what your customers want.', id: 3}
      ]);
    const fadingTextPropsTransition = useTransition(items[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { tension: 220, friction: 120 },
      });


    return(
        <>
       {fadingTextPropsTransition.map(({ item, props, key }) => (
        <animated.div
            key={key}
            style={{ ...props, position: 'absolute' }}
        >
            <p className="textfadFormae">
            {item.title}
            </p>
        </animated.div>
        ))}
        </>
    )
  
}
export default BannerSmall;

