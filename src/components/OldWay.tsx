import axios from "axios";
import { useEffect, useState } from "react";
import { FaSpinner } from 'react-icons/fa';
import dotenv from 'dotenv';
dotenv.config();


interface OldWayData {
  id: number;
  title: string;
  content: string;
}

const OldWay = () => {
  const [data, setData] = useState<OldWayData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {

    // await new Promise((resolve) => setTimeout(resolve, 1000));
        
      const response = await axios.get("http://localhost:4000/posts");
      setData(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.log(error);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-white container mx-auto max-w-5xl py-24 mt-24 flex justify-center text-center">
        <FaSpinner className="animate-spin text-white text-4xl" />
    </div>;
  }

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div className="text-white">No data found</div>;
  }

  return (
    <>

      <section className="max-w-5xl mx-auto py-24 text-white">
        <h1 className="text-2xl font-bold mb-6">Fetched Posts (Old Way)</h1>
        <div className="space-y-4">
          {data.map((post) => (
            <div key={post.id} className="bg-gray-800 p-4 rounded-2xl">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OldWay;
