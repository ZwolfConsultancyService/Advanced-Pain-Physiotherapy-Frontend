// import React, { useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Calendar, Clock, ArrowLeft } from "lucide-react";
// import blogData from "../../../data/blogData.js";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function BlogDetailPage() {
//   const { slug } = useParams();

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   const blog = blogData.find((b) => b.slug === slug);

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p>Blog not found</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Hero */}
//       <div className="bg-[#8ab72e]/10 py-16" data-aos="fade-down">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <p className="text-[#8ab72e] text-sm mb-3">{blog.category}</p>

//           <h1 className="text-3xl md:text-4xl text-gray-800 mb-4">
//             {blog.title}
//           </h1>

//           <div className="flex justify-center gap-6 text-sm text-gray-500">
//             <span className="flex items-center gap-1">
//               <Calendar size={14} /> {blog.date}
//             </span>
//             <span className="flex items-center gap-1">
//               <Clock size={14} /> {blog.readTime}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-4xl mx-auto px-4 py-12">
//         <img
//           src={blog.image}
//           alt={blog.title}
//           className="rounded-2xl mb-8 shadow-lg"
//           data-aos="zoom-in"
//         />

//         <div
//           className="prose max-w-none text-gray-700 leading-relaxed"
//           data-aos="fade-up"
//         >
//           {blog.content.split("\n").map((line, i) => (
//             <p key={i}>{line}</p>
//           ))}
//         </div>

//         {/* Tags */}
//         <div
//           className="flex flex-wrap gap-2 mt-8"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           {blog.tags.map((tag, i) => (
//             <span
//               key={i}
//               className="bg-[#e5f2cc] text-[#8ab72e] px-3 py-1 rounded-full text-xs"
//             >
//               #{tag}
//             </span>
//           ))}
//         </div>

//         {/* Author */}
//         <div
//           className="mt-10 p-6 border rounded-xl flex items-center gap-4"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           <div className="w-12 h-12 bg-[#8ab72e] text-white rounded-full flex items-center justify-center ">
//             {blog.author.charAt(0)}
//           </div>
//           <div>
//             <p className="text-gray-800 ">{blog.author}</p>
//             <p className="text-sm text-gray-500">Physiotherapy Expert</p>
//           </div>
//         </div>

//         {/* Back */}
//         <Link
//           to="/blogs"
//           data-aos="fade-right"
//           className="inline-flex items-center gap-2 mt-10 text-[#8ab72e] hover:underline"
//         >
//           <ArrowLeft size={18} /> Back to Blogs
//         </Link>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import toast from "react-hot-toast";

// API Base URL
const API_BASE_URL =
  "https://advanced-pain-physiotherapy-centre.onrender.com/api";

export default function BlogDetailPage() {
  const { slug } = useParams(); // This is actually the blog ID
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      setIsLoading(true);
      try {
        console.log("🔄 Fetching blog:", slug);

        const response = await axios.get(`${API_BASE_URL}/blog/${slug}`);
        const blogData = response.data.data;

        console.log("✅ Blog fetched:", blogData);

        // Transform API data
        const transformedBlog = {
          id: blogData._id,
          slug: blogData._id,
          title: blogData.title,
          content: blogData.content || "",
          image:
            blogData.images && blogData.images.length > 0
              ? blogData.images[0].url
              : "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
          author: blogData.author,
          date: blogData.createdAt
            ? new Date(blogData.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            : new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              }),
          category:
            blogData.tags && blogData.tags.length > 0
              ? blogData.tags[0]
              : "General",
          readTime: `${Math.ceil((blogData.content?.length || 0) / 1000) || 5} min read`,
          tags: blogData.tags || [],
          allImages: blogData.images || [],
        };

        setBlog(transformedBlog);
      } catch (error) {
        console.error("❌ Error fetching blog:", error);
        toast.error("Failed to load blog post");
        navigate("/blog");
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#8ab72e]"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Blog not found</p>
          <Link
            to="/blog"
            className="text-[#8ab72e] hover:underline flex items-center gap-2 justify-center"
          >
            <ArrowLeft size={18} /> Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-[#8ab72e]/10 py-16" data-aos="fade-down">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h6 className="text-[#8ab72e] text-sm mb-3">{blog.category}</h6>

          <h1 className="text-3xl md:text-4xl text-gray-800 mb-4">
            {blog.title}
          </h1>

          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {blog.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {blog.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Main Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-2xl mb-8 shadow-lg"
          data-aos="zoom-in"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop";
          }}
        />

        {/* Additional Images Gallery */}
        {blog.allImages && blog.allImages.length > 1 && (
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
            data-aos="fade-up"
          >
            {blog.allImages.slice(1).map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`${blog.title} - ${index + 2}`}
                className="w-full h-48 object-cover rounded-lg shadow-md"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop";
                }}
              />
            ))}
          </div>
        )}

        {/* Content - HTML rendered */}
        <div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          data-aos="fade-up"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div
            className="flex flex-wrap gap-2 mt-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {blog.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-[#e5f2cc] text-[#8ab72e] px-3 py-1 rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author */}
        <div
          className="mt-10 p-6 border rounded-xl flex items-center gap-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="w-12 h-12 bg-[#8ab72e] text-white rounded-full flex items-center justify-center  text-lg">
            {blog.author.charAt(0)}
          </div>
          <div>
            <p className="text-gray-800 ">{blog.author}</p>
            <p className="text-sm text-gray-500">Physiotherapy Expert</p>
          </div>
        </div>

        {/* Back Button */}
        <Link
          to="/blogs"
          data-aos="fade-right"
          className="inline-flex items-center gap-2 mt-10 text-[#8ab72e] hover:underline"
        >
          <ArrowLeft size={18} /> Back to Blogs
        </Link>
      </div>
    </div>
  );
}
