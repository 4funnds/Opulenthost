import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const CountUp = ({ start = 0, end, duration = 2, delay = 0 }) => {
    const [count, setCount] = useState(start);
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    useEffect(() => {
        if (!inView) return;

        const increment = end / (duration * 60); // 60fps

        let currentCount = start;
        const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= end) {
                currentCount = end;
                clearInterval(timer);
            }
            setCount(Math.floor(currentCount));
        }, 1000 / 60);

        return () => clearInterval(timer);
    }, [end, inView, start, duration, delay]);

    return <span ref={ref}>{count}</span>;
};

export default CountUp;