import "./index.scss";

const Component = ({ photos, galleryRef}) => {
  const getPhotos = (photoss) => {
    let content = [];
    for (const item in photoss) {
      content.push(
        <div className="overlay-image">
            <div className={`image ${item}`}></div>
            <div className="hover">
              <div className="title">Title</div>
              <div className="text">Text</div>
            </div>
        </div>
      );
    }
    return content;
  };

  return <div className="image-wrapper" ref={galleryRef}>{getPhotos(photos)}</div>;
};

export default Component;
