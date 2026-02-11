
import React, { useState, useEffect } from "react";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

// API Base URL
// const API_BASE_URL =
//   "https://advanced-pain-physiotherapy-centre-doxc.onrender.com";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://advanced-pain-physiotherapy-centre-doxc.onrender.com/api";

// ==================== MAIN COMPONENT ====================
export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const blogsPerPage = 6;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/blog`, {
          params: {
            limit: 100, // Get all blogs
            sortBy: "", // Latest first
          },
        });

        console.log("✅ Blogs fetched:", response.data.data);

        const blogsData = response.data.data || [];

        // Transform API data to match component format
        const transformedBlogs = blogsData.map((blog) => ({
          id: blog._id,
          slug: blog._id, // Use _id as slug for now
          title: blog.title,
          excerpt: blog.content
            ? blog.content.replace(/<[^>]*>/g, "").substring(0, 150) + "..."
            : "",
          content: blog.content || "",
          image:
            blog.images && blog.images.length > 0
              ? blog.images[0].url
              : "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
          author: blog.author,
          date: blog.createdAt
            ? new Date(blog.createdAt).toISOString().split("T")[0]
            : new Date().toISOString().split("T")[0],
          category:
            blog.tags && blog.tags.length > 0 ? blog.tags[0] : "General",
          readTime: `${Math.ceil(blog.content?.length / 1000) || 5} min read`,
          tags: blog.tags || [],
        }));

        setBlogs(transformedBlogs);
        setFilteredBlogs(transformedBlogs);
      } catch (error) {
        console.error("❌ Error fetching blogs:", error);
        toast.error("Failed to load blogs");
        setBlogs([]);
        setFilteredBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    let filtered = blogs;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      );
    }

    setFilteredBlogs(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, blogs]);

  // Pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* Hero Section */}
      <div
        className="bg-gradient-to-r from-[#8ab72e] to-[#6d9424] text-white py-16 md:py-20 px-4"
        data-aos="fade-down"
      >
        <div
          className="max-w-7xl mx-auto text-center"
          style={{
            fontFamily: "'Zalando Sans Expanded', sans-serif",
            fontWeight: 200,
          }}
        >
          <div className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm mb-6">
            Health & Wellness Blog
          </div>
          <h1 className="text-2xl md:text-5xl mb-6">
            Expert Insights & <span>Health Tips</span>
          </h1>
          <p className="text-lg md:text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest research, tips, and advice from our
            team of physiotherapy experts.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div
        className="max-w-7xl mx-auto px-4 py-8"
        style={{
          fontFamily: "'Gantari', sans-serif",
          fontWeight: 400,
        }}
      >
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#8ab72e]"></div>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-20" data-aos="fade-up">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-500 text-xl">
              No articles found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-6 bg-[#8ab72e] text-white px-6 py-3 rounded-lg hover:bg-[#6d9424] transition"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {currentBlogs.map((blog, index) => (
                <article
                  key={blog.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop";
                      }}
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-[#8ab72e]">
                      {blog.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(blog.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {blog.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl text-gray-800 mb-3 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#e5f2cc] text-[#8ab72e] px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#8ab72e] rounded-full flex items-center justify-center text-white text-xs ">
                          {blog.author.charAt(0)}
                        </div>
                        <span className="text-sm text-gray-600">
                          {blog.author.split(" ")[1] || blog.author}
                        </span>
                      </div>
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="text-[#8ab72e] hover:text-[#6d9424] text-sm flex items-center gap-1 group"
                      >
                        Read
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div
                className="flex justify-center items-center gap-2 mt-12"
                data-aos="fade-up"
              >
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg transition ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 hover:bg-[#8ab72e] hover:text-white shadow-md"
                  }`}
                >
                  Previous
                </button>

                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => goToPage(pageNumber)}
                        className={`w-10 h-10 rounded-lg transition ${
                          currentPage === pageNumber
                            ? "bg-[#8ab72e] text-white shadow-lg scale-110"
                            : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg transition ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 hover:bg-[#8ab72e] hover:text-white shadow-md"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
