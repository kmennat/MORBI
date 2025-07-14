'use client';
import React, { useState } from 'react';
import { Search, Play, Plus } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

const VideosPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState<Video[]>([
    {
      id: '1',
      title: 'Lorem ipsum dolorem',
      thumbnail: 'placeholder'
    },
    {
      id: '2',
      title: 'Lorem ipsum dolorem',
      thumbnail: 'placeholder'
    },
    {
      id: '3',
      title: 'Lorem ipsum dolorem',
      thumbnail: 'placeholder'
    },
    {
      id: '4',
      title: 'Lorem ipsum dolorem',
      thumbnail: 'placeholder'
    },
    {
      id: '5',
      title: 'Lorem ipsum dolorem',
      thumbnail: 'placeholder'
    },
    {
      id: '6',
      title: 'Lorem ipsum dolorem',
      thumbnail: 'placeholder'
    }
  ]);

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-lg font-medium text-black">My videos</h1>
          
          <div className="flex items-center space-x-3">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-80 px-4 py-2 text-sm border border-gray-300 rounded-md bg-white placeholder-gray-500 focus:outline-none focus:border-gray-400"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            
            {/* Add Video Button */}
            <button className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 rounded-md">
              <Plus className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {filteredVideos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No videos found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-16 gap-y-12">
            {filteredVideos.map((video) => (
              <div key={video.id} className="flex flex-col items-center">
                {/* Video Thumbnail */}
                <div className="relative w-48 h-36 bg-gray-300 rounded-lg mb-4 flex items-center justify-center group cursor-pointer hover:bg-gray-400 transition-colors duration-200">
                  <div className="w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-200">
                    <Play className="h-6 w-6 text-gray-700 ml-0.5" fill="currentColor" />
                  </div>
                </div>
                
                {/* Video Title */}
                <h3 className="text-sm font-medium text-black text-center">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          .w-80 {
            width: 240px;
          }
          
          .gap-x-16 {
            gap: 2rem;
          }
        }
        
        @media (max-width: 640px) {
          .w-80 {
            width: 200px;
          }
          
          .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
          
          .gap-x-16 {
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default VideosPage;