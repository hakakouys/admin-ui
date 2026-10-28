import { useEffect, useState } from 'react'
import PostCard from './PostCard.jsx'
import { getPosts } from './services.jsx'

function Exercise() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("[Component] Gagal menampilkan posts:", error.message);
        setError("Gagal mengambil posts. Silakan coba refresh halaman.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Post Cards Fariz 
      </h1>
      {isLoading && <p className="text-center">Memuat posts...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {!isLoading && !error && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Exercise