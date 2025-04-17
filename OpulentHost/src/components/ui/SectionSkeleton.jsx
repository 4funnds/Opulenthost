const SectionSkeleton = () => {
    return (
        <div className="animate-pulse space-y-8 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="h-8 w-1/3 bg-gray-200 rounded mx-auto mb-4"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="bg-gray-100 p-8 rounded-xl h-64"></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionSkeleton;