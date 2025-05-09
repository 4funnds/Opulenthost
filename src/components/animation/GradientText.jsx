import { motion } from 'framer-motion';

export default function GradientText({
    children,
    className = "",
    colors = ["#f4c947", "#efb900", "#050b18", "#d7bb70", "#ebddb9"],
    animationSpeed = 8,
    showBorder = false,
    as = 'div',
    href = ''
}) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        animationDuration: `${animationSpeed}s`,
    };

    const Component = as === 'button' ? motion.button : motion.a;

    return (
        <Component
            className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
            whileHover={as === 'button' ? { scale: 1.05 } : {}}
            whileTap={as === 'button' ? { scale: 0.98 } : {}}
            href={as === 'a' ? href: undefined}
        >
            {showBorder && (
                <div
                    className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
                    style={{
                        ...gradientStyle,
                        backgroundSize: "300% 100%",
                    }}
                >
                    <div
                        className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
                        style={{
                            width: "calc(100% - 2px)",
                            height: "calc(100% - 2px)",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    ></div>
                </div>
            )}
            <div
                className="inline-block relative z-2 text-transparent bg-cover animate-gradient"
                style={{
                    ...gradientStyle,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    backgroundSize: "300% 100%",
                }}
            >
                {children}
            </div>
        </Component>
    );
}