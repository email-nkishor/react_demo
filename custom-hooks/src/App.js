import './App.css';
import useFetchData from './use-fetch-data/useFetchData'

function App() {
  const apiUrl = 'https://dummy.restapiexample.com/api/v1/employees';
  const initialData = []; // Initial data can be an empty array or any default value

  const { data, loading, error } = useFetchData(apiUrl, initialData);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Render your component using the fetched data
  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.employee_name}</p>
      ))}
    </div>
  );
}

export default App;
