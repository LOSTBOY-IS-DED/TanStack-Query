import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { FaSpinner } from "react-icons/fa"

interface PostType {
    id: number;
    title: string;
    content: string;
}

const Tanstack = () => {

    // posts --> ["posts"]
    // posts/2  --> ["posts", 2]
    // posts/2/comments --> ["posts", 2, "comments"]

    // use can store the data give by the useQuery in a variable
    // it has the data , isLoading, isError, error

   const {data , isLoading , isError , error} = useQuery({
    queryKey: ['posts'],
    queryFn : async () => {
        return axios.get("http://localhost:4000/posts")
    }
   }) 



     if (isLoading) {
       return <div className="text-white container mx-auto max-w-5xl py-24 mt-24 flex justify-center text-center">
           <FaSpinner className="animate-spin text-white text-4xl" />
       </div>;
     }

     if (error) {
       return <div className="text-white">Error: {error.message}</div>;
     }

     if(isError){
        return <div className="text-white">Some Error Occured</div>
     }

    //  console.log(data);

  return (
     <section className="max-w-5xl mx-auto py-24 text-white">
        <h1 className="text-2xl font-bold mb-6">Fetched Posts (Old Way)</h1>
        <div className="space-y-4">
          {data?.data.map((post : PostType) => (
            <div key={post.id} className="bg-gray-800 p-4 rounded-2xl">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Tanstack
