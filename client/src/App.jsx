import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TripList from "./components/TripList";
import { fetchTrips } from "./Api.js";
import "./App.css";

function App() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // โหลดข้อมูลทริปตอนแรก
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchTrips();
        console.log("📌 Data Loaded:", data); // Debugging
        setTrips(data || []); // ป้องกัน undefined
      } catch (err) {
        console.error("❌ Error fetching trips:", err);
        setError("ไม่สามารถโหลดข้อมูลทริปได้");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // ฟังก์ชันค้นหา
  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchTrips(query);
      console.log("🔍 Search Results:", data); // Debugging
      setTrips(data || []);
    } catch (err) {
      console.error("❌ Error searching trips:", err);
      setError("ไม่สามารถค้นหาทริปได้");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <SearchBar onSearch={handleSearch} />

      {loading && <p>⏳ กำลังโหลดข้อมูล...</p>}
      {error && <p style={{ color: "red" }}>❌ {error}</p>}

      <TripList trips={trips} />
    </div>
  );
}

export default App;
