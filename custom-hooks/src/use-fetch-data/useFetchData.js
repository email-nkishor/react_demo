import { useState, useEffect } from 'react';
import axios from "axios";


// Custom hook with parameters
export default function useFetchData(apiUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const options1 = {
    method: 'GET',
    url: apiUrl,
    headers: {
      'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com',
      'X-RapidAPI-Key': 'MyAPIKey'
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        const result = await response.data.json();
        // setData(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]); // Dependency on apiUrl

  return { data, loading, error };
}

// // Example usage of the custom hook
// function MyComponent() {
//   const apiUrl = 'https://api.example.com/data';
//   const initialData = []; // Initial data can be an empty array or any default value

//   const { data, loading, error } = useFetchData(apiUrl, initialData);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   // Render your component using the fetched data
//   return (
//     <div>
//       {data.map(item => (
//         <p key={item.id}>{item.name}</p>
//       ))}
//     </div>
//   );
// }
