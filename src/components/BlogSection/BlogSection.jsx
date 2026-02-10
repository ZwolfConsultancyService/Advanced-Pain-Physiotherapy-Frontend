// import React, { useState, useEffect } from "react";
// import { ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function BlogSection() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Dummy data - Replace this with API call
//   // const dummyBlogs = [
//   //   {
//   //     id: 1,
//   //     image:
//   //       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
//   //     title: "7 Signs Your Body Needs Physiotherapy Soon",
//   //     excerpt:
//   //       "Home Single Post Single Post 7 Signs Your Body Needs Physiotherapy Soon 10 July 2025 Lorem ipsum dolor sit amet consectetur a",
//   //     date: "10 July 2025",
//   //   },
//   //   {
//   //     id: 2,
//   //     image:
//   //       "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
//   //     title: "What is Physiotherapy? A Complete Guide for Beginners",
//   //     excerpt:
//   //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   //     date: "08 July 2025",
//   //   },
//   //   {
//   //     id: 3,
//   //     image:
//   //       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
//   //     title: "How to Reduce Back Pain Without Medication",
//   //     excerpt:
//   //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   //     date: "05 July 2025",
//   //   },
//   // ];


  

//   // Fetch blogs from API
//   const fetchBlogs = async () => {
//     setLoading(true);
//     try {
//       // TODO: Replace with your actual API endpoint
//       // const response = await fetch('https://your-api.com/api/blogs');
//       // const data = await response.json();
//       // setBlogs(data);

//       // For now, using dummy data
//       setTimeout(() => {
//         setBlogs(dummyBlogs);
//         setLoading(false);
//       }, 500);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//       setLoading(false);
//       // Fallback to dummy data if API fails
//       setBlogs(dummyBlogs);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const handleSeeMore = () => {
//     navigate("/blog");
//   };

//   const handleBlogClick = (slug) => {
//     navigate(`/blog/${slug}`);
//   };

//   return (
//     <div className="py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
//           <div
//             className="flex-1"
//             style={{
//               fontFamily: "'Zalando Sans Expanded', sans-serif",
//               fontWeight: 200,
//             }}
//           >
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-8 h-8 bg-[#eff7e0] rounded-lg flex items-center justify-center">
//                 <span className="text-[#8ab72e] text-xl">✚</span>
//               </div>
//               <span className="text-[#8ab72e]">Blog</span>
//             </div>
//             <h2 className="text-3xl lg:text-4xl  text-gray-800">
//               Helpful Tips and Insights for Your
//               <br />
//               Journey to Better Health
//             </h2>
//           </div>
//           <div
//             className="flex flex-col items-end gap-4"
//             style={{
//               fontFamily: "'Gantari', sans-serif",
//               fontWeight: 400,
//             }}
//           >
//             <p className="text-gray-600 max-w-md text-right">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna.
//             </p>
//             <button
//               onClick={handleSeeMore}
//               className="flex items-center gap-2 px-6 py-3 border-2 border-[#8ab72e] rounded-full hover:bg-[#8ab72e] hover:text-white transition-all duration-300"
//             >
//               SEE MORE
//               <ArrowRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Loading State */}
//         {loading ? (
//           <div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             style={{
//               fontFamily: "'Gantari', sans-serif",
//               fontWeight: 400,
//             }}
//           >
//             {[1, 2, 3].map((i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-3xl overflow-hidden shadow-lg animate-pulse"
//               >
//                 <div className="aspect-[4/3] bg-gray-200"></div>
//                 <div className="p-6">
//                   <div className="h-6 bg-gray-200 rounded mb-3"></div>
//                   <div className="h-4 bg-gray-200 rounded mb-2"></div>
//                   <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           /* Blog Cards */
//           <div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             style={{
//               fontFamily: "'Gantari', sans-serif",
//               fontWeight: 400,
//             }}
//           >
//             {blogs.map((blog) => (
//               <div
//                 key={blog.id}
//                onClick={() => handleBlogClick(blog.slug)}

//                 className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-2"
//               >
//                 <div className="aspect-[4/3] overflow-hidden">
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl  text-gray-900 mb-3 line-clamp-2">
//                     {blog.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
//                     {blog.excerpt}
//                   </p>
//                   {blog.date && (
//                     <p className="text-[#8ab72e] text-sm  mt-3">{blog.date}</p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && blogs.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">
//               No blogs available at the moment.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
  


import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "https://advanced-pain-physiotherapy-centre.onrender.com/api";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      console.log('🔄 Fetching blogs from:', `${API_BASE_URL}/blog`);
      
      const response = await fetch(`${API_BASE_URL}/blog?limit=3`);
      
      console.log('📡 Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('✅ Full API Response:', result);
      
      // Extract blogs from response
      const blogsData = result.data || result.blogs || result || [];
      console.log('📚 Blogs data:', blogsData);
      
      // Transform API data to match component format
      const transformedBlogs = blogsData.slice(0, 3).map(blog => ({
        id: blog._id,
        slug: blog._id,
        title: blog.title,
        excerpt: blog.content 
          ? blog.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...' 
          : 'Read more to discover valuable insights...',
        image: blog.images && blog.images.length > 0 
          ? blog.images[0].url 
          : "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
        date: blog.createdAt 
          ? new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            })
          : new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            }),
        author: blog.author || "Admin",
        category: blog.tags && blog.tags.length > 0 ? blog.tags[0] : "Health & Wellness",
      }));

      console.log('🎯 Transformed blogs:', transformedBlogs);
      setBlogs(transformedBlogs);
      
    } catch (error) {
      console.error("❌ Error fetching blogs:", error.message);
      console.log('⚠️ Using empty state - check if backend is running');
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSeeMore = () => {
    navigate("/blogs");
  };

  const handleBlogClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div
            className="flex-1"
            style={{
              fontFamily: "'Zalando Sans Expanded', sans-serif",
              fontWeight: 200,
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#eff7e0] rounded-lg flex items-center justify-center">
                <span className="text-[#8ab72e] text-xl">✚</span>
              </div>
              <span className="text-[#8ab72e]">Blog</span>
            </div>
            <h2 className="text-3xl lg:text-4xl text-gray-800">
              Helpful Tips and Insights for Your
              <br />
              Journey to Better Health
            </h2>
          </div>

          <div
            className="flex flex-col items-end gap-4"
            style={{
              fontFamily: "'Gantari', sans-serif",
              fontWeight: 400,
            }}
          >
            <p className="text-gray-600 max-w-md text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button
              onClick={handleSeeMore}
              className="flex items-center gap-2 px-6 py-3 border-2 border-[#8ab72e] rounded-full hover:bg-[#6f9724] hover:text-white transition-all duration-300"
            >
              SEE MORE
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8ab72e]"></div>
          </div>
        )}

        {/* No Blogs State */}
        {!loading && blogs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-500 text-lg">No blogs available yet.</p>
            <p className="text-gray-400 text-sm mt-2">Check back soon for updates!</p>
          </div>
        )}

        {/* Blog Cards */}
        {!loading && blogs.length > 0 && (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{
              fontFamily: "'Gantari', sans-serif",
              fontWeight: 400,
            }}
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => handleBlogClick(blog.slug)}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-gray-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <p className="text-[#8ab72e] text-sm mt-3">{blog.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}