import "./Gallery.css";
import { useEffect, useState } from "react";
import { useRef } from "react";

function Gallery() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const [delay, setDelay] = useState(3000);
  require.context("./pictures", false, /\.(png|jpe?g|svg)$/);
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("./pictures", false, /\.(png|jpe?g|svg)$/)
  );
  const imagesSources = Object.values(images);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imagesSources.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, delay]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
        }}
      >
        {imagesSources.map((image, index, arr) => {
          return (
            <img
              onMouseEnter={() => setDelay(2000000)}
              onMouseLeave={() => setDelay(3000)}
              className="slide"
              key={index}
              src={image}
              alt="construction img"
            />
          );
        })}
      </div>
      <div className="slideshowDots">
        {imagesSources.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
