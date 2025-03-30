const TripCard = ({ trip = {} }) => {
  // ตั้งค่า Default ให้ trip เพื่อป้องกัน undefined
  const {
    title = "ไม่ทราบชื่อทริป",
    description = "ไม่มีข้อมูล",
    url = "#",
    photos = [],
  } = trip;

  return (
    <div className="trip-card flex flex-col sm:flex-row gap-4 p-4 border-b border-gray-200">
      <img
        src={photos.length > 0 ? photos[0] : "https://via.placeholder.com/150"}
        alt={title}
        className="trip-image w-full sm:w-36 h-24 rounded-lg object-cover"
      />
      <div className="trip-content flex flex-col gap-2 mt-2 sm:mt-0">
        <h3 className="text-xl font-bold">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p>
          {description.length > 100 ? description.slice(0, 100) + "..." : description}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="read-more text-blue-500">
          อ่านต่อ
        </a>
      </div>
    </div>
  );
};

export default TripCard;
