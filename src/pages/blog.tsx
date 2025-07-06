import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Cybersecurity Trends 2023',
      excerpt: 'Learn about the latest trends in cybersecurity',
      date: 'June 15, 2023'
    },
    // Add more posts as needed
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.id}`}
                className="text-[#00FF94] hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;