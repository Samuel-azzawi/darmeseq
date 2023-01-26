import "./Gallery.css";

function Gallery() {
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
  
  
  const column1 = [];
  const column2 = [];
  const column3 = [];
  const column4 = [];
  const column5 = [];
  imagesSources.map((image) => {
    if (column1.length > column2.length) column2.push(image);
    else if (column2.length > column3.length) column3.push(image);
    else if (column3.length > column4.length) column4.push(image);
    else if (column4.length > column5.length) column5.push(image);
    else column1.push(image);
  });

  return (
    <div className="homeImagesContainer">
      <div className="mapContainer">
        {column1.map((image, index, arr) => {
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          return (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              className="homeImages"
              key={image + index}
              src={image}
              alt="construction image"
            />
          );
        })}
      </div>
      <div className="mapContainer">
        {column2.map((image, index, arr) => {
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          return (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              className="homeImages"
              key={image + index}
              src={image}
              alt="construction image"
            />
          );
        })}
      </div>
      <div className="mapContainer">
        {column3.map((image, index, arr) => {
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          return (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              className="homeImages"
              key={image + index}
              src={image}
              alt="construction image"
            />
          );
        })}
      </div>
      <div className="mapContainer">
        {column4.map((image, index, arr) => {
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          return (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              className="homeImages"
              key={image + index}
              src={image}
              alt="construction image"
            />
          );
        })}
      </div>
      <div className="mapContainer">
        {column5.map((image, index, arr) => {
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          return (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              className="homeImages"
              key={image + index}
              src={image}
              alt="construction image"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
