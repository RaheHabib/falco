import React from 'react';
import { Eye } from 'lucide-react';

const BlogCard = ({ title, author, views, borderColor = "border-red-200" }) => {
  return (
    <div className={`bg-white rounded-3xl p-6 border-2 ${borderColor} hover:shadow-lg transition-shadow duration-300`}>
      {/* Main Content - Horizontal Layout */}
      <div className="flex items-start justify-between mb-6">
        {/* Left Side - Title */}
        <div className="flex-1 pr-4">
          <h3 className="text-lg font-semibold text-gray-800 leading-tight">
            {title}
          </h3>
        </div>
        
        {/* Right Side - Chart Illustration */}
        <div className="flex-shrink-0 w-32 h-24">
          <div className="bg-blue-100 rounded-2xl p-3 h-full flex items-end justify-center relative overflow-hidden">
            {/* Person icon */}
            <div className="absolute top-2 right-2 w-6 h-6 bg-red-400 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            {/* Chart bars */}
            <div className="flex items-end space-x-1">
              <div className="w-2 h-4 bg-blue-400 rounded-t"></div>
              <div className="w-2 h-6 bg-blue-500 rounded-t"></div>
              <div className="w-2 h-8 bg-blue-600 rounded-t"></div>
              <div className="w-2 h-5 bg-blue-400 rounded-t"></div>
              <div className="w-2 h-7 bg-blue-500 rounded-t"></div>
              <div className="w-2 h-3 bg-blue-400 rounded-t"></div>
            </div>
            
            {/* Chart trend line */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="80" height="40" className="absolute">
                <path 
                  d="M 10 25 Q 25 15 40 20 Q 55 10 70 15" 
                  stroke="#ef4444" 
                  strokeWidth="2" 
                  fill="none"
                />
                <circle cx="70" cy="15" r="2" fill="#ef4444" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Divider Line */}
      <div className="border-t border-gray-200 mb-4"></div>
      
      {/* Author and Views */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div>
          <span className="text-gray-400">Published by</span>
          <br />
          <span className="font-medium text-gray-700">{author}</span>
        </div>
        <div className="flex items-center">
          <Eye className="w-4 h-4 mr-1" />
          <span>{views}</span>
        </div>
      </div>
    </div>
  );
};

const BlogCardsComponent = () => {
  const blogs = [
    {
      id: 1,
      title: "Delegate with Confidence: How PixelEdge Built a Carbon Accounting Tool",
      author: "Ahmad Khan",
      views: "204",
      borderColor: "border-red-200"
    },
    {
      id: 2,
      title: "Delegate with Confidence: How PixelEdge Built a Carbon Accounting Tool",
      author: "Ahmad Khan",
      views: "204",
      borderColor: "border-orange-200"
    },
    {
      id: 3,
      title: "Delegate with Confidence: How PixelEdge Built a Carbon Accounting Tool",
      author: "Ahmad Khan",
      views: "204",
      borderColor: "border-red-200"
    }
  ];

  return (
    <div className="relative py-16 px-8 sm:px-10 lg:px-14">
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-80 h-80 bg-gradient-to-bl from-orange-400/30 via-orange-500/20 to-yellow-400/30 rounded-full blur-3xl opacity-50 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 mb-8">
            Our Blogs
          </h1>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              author={blog.author}
              views={blog.views}
              borderColor={blog.borderColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCardsComponent;