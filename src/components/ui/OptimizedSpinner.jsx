import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({
    src,
    alt,
    width,
    height,
    className = '',
    placeholderSrc,
    ...props
}) => {
    return (
        <LazyLoadImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            effect="blur"
            placeholderSrc={placeholderSrc || `${src}?w=50&q=10`}
            className={`transition-opacity duration-300 ${className}`}
            {...props}
        />
    );
};

export default OptimizedImage;