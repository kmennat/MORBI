'use client';
import React, { useState } from 'react';
import { User, Briefcase, MapPin, Calendar, Star, Edit3 } from 'lucide-react';

interface Qualification {
  id: string;
  title: string;
}

interface HistoryItem {
  id: string;
  title: string;
  period: string;
}

const SettingsPage: React.FC = () => {
  const [qualifications, setQualifications] = useState<Qualification[]>([
    { id: '1', title: 'Qualification #1' },
    { id: '2', title: 'Qualification #2' },
    { id: '3', title: 'Qualification #3' },
    { id: '4', title: 'Qualification #4' }
  ]);

  const [history, setHistory] = useState<HistoryItem[]>([
    { id: '1', title: 'Current status', period: '2017-2021' },
    { id: '2', title: 'Previous status', period: '2015-2017' },
    { id: '3', title: 'Previous status', period: '2013-2015' }
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Profile Picture */}
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-12 h-12 text-white" />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-xl font-medium text-black mb-4">John Doe</h1>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase className="w-4 h-4 mr-3" />
                  <span>Current status</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>Location</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-3" />
                  <span>Age</span>
                </div>
              </div>
            </div>

            {/* Edit Profile Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              edit profile
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Qualifications Section */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-black">Qualifications</h2>
              <button className="text-gray-600 hover:text-gray-800">
                <Edit3 className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-3">
              {qualifications.map((qualification) => (
                <div key={qualification.id} className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 mr-3 text-gray-400" />
                  <span>{qualification.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* History Section */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-black">History</h2>
              <button className="text-gray-600 hover:text-gray-800">
                <Edit3 className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-3">
              {history.map((item) => (
                <div key={item.id} className="flex items-center text-sm text-gray-600">
                  <Briefcase className="w-4 h-4 mr-3 text-gray-400" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                    <span>{item.title}</span>
                    <span className="text-gray-500 text-xs sm:text-sm sm:ml-4">{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .grid-cols-1 {
            grid-template-columns: 1fr;
          }
          
          .lg\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 640px) {
          .md\\:flex-row {
            flex-direction: column;
          }
          
          .md\\:items-center {
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default SettingsPage;