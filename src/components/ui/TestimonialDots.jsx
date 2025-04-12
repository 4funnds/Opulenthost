const TestimonialDots = ({ count, activeIndex, setActiveIndex }) => {
    return (
        <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: count }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                    aria-label={`View testimonial ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default TestimonialDots;