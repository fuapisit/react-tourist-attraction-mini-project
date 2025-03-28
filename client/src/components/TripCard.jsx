const TripCard = ({ trip = {} }) => {
    // ตั้งค่า Default ให้ trip เพื่อป้องกัน undefined
    const {
      title = "ไม่ทราบชื่อทริป",
      description = "ไม่มีข้อมูล",
      url = "#",
      photos = [],
    } = trip;
  
    return (
      <div className="trip-card">
        <img
          src={photos.length > 0 ? photos[0] : "https://via.placeholder.com/150"}
          alt={title}
          className="trip-image"
        />
        <div className="trip-content">
          <h3>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>
          <p>{description.length > 100 ? description.slice(0, 100) + "..." : description}</p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="read-more">
            อ่านต่อ
          </a>
        </div>
      </div>
    );
  };
  
  export default TripCard;
  