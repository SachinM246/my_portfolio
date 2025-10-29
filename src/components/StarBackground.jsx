import { useEffect, useState } from "react";



export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
    }, []);

    // id, size, speed, delay, x, y, opacity, animation duration

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            const size = Math.random() * 3 + 1;
            const speed = Math.random() * 2 + 0.5;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const opacity = Math.random() * 0.5 + 0.5;
            const animationDuration = Math.random() * 5 + 2;

            newStars.push({
                id: i,
                size,
                speed,
                x,
                y,
                opacity,
                animationDuration
            });
        }
        setStars(newStars);
    };

    // id, size, speed, delay, x, y, opacity, animation duration

    const generateMeteors = () => {
        const numberOfMeteors = 10;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            const size = Math.random() * 2 + 1;
            const speed = Math.random() * 2 + 0.5;
            const delay = Math.random() * 15;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const animationDuration = Math.random() * 3 + 3;

            newMeteors.push({
                id: i,
                size,
                speed,
                delay,
                x,
                y,
                animationDuration
            });
        }
        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        top: `${star.y}%`,
                        left: `${star.x}%`,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: `${meteor.size * 1}px`,
                        height: `${meteor.size * 3}px`,
                        top: `${meteor.y}%`,
                        left: `${meteor.x}%`,
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    )
};