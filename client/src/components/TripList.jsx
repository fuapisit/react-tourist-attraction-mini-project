import TripCard from "./TripCard";

const TripList = ({ trips }) => {
  if (!trips || trips.length === 0) {
    return <p>⏳ กำลังโหลดข้อมูล หรือไม่มีข้อมูลทริป...</p>;
  }

  return (
    <div className="trip-list p-4">
      {trips.map((trip) => (
        <TripCard key={trip.eid} trip={trip} />
      ))}
    </div>
  );
};

export default TripList;
