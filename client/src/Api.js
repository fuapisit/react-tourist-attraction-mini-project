const API_URL = "http://localhost:4001/trips?keywords=";

export const fetchTrips = async (query = "") => {
  try {
    const response = await fetch(`${API_URL}${query}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching trips:", error);
    return [];
  }
};
