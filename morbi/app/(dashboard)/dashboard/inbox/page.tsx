'use client';
import React, { useState } from 'react';
import { Search, Reply, Star, Trash2, Plus } from 'lucide-react';

interface EmailItem {
  id: string;
  sender: string;
  preview: string;
  isStarred: boolean;
}

const EmailInbox: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [emails, setEmails] = useState<EmailItem[]>([
    {
      id: '1',
      sender: 'John Doe',
      preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
      isStarred: false
    },
    {
      id: '2',
      sender: 'John Doe',
      preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
      isStarred: false
    },
    {
      id: '3',
      sender: 'John Doe',
      preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
      isStarred: false
    }
  ]);

  const toggleStar = (emailId: string) => {
    setEmails(emails.map(email => 
      email.id === emailId ? { ...email, isStarred: !email.isStarred } : email
    ));
  };

  const deleteEmail = (emailId: string) => {
    setEmails(emails.filter(email => email.id !== emailId));
  };

  const filteredEmails = emails.filter(email =>
    email.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
    email.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white px-6 py-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <h1 className="text-lg font-medium text-black">Inbox</h1>
          
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
            
            {/* Compose Button */}
            <button className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 rounded-md">
              <Plus className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Email List */}
      <div className="max-w-4xl mx-auto">
        {filteredEmails.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No emails found</p>
          </div>
        ) : (
          <div className="space-y-4 px-6 py-4">
            {filteredEmails.map((email, index) => (
              <div
                key={email.id}
                className={`bg-white px-6 py-5 rounded-lg shadow-sm ${
                  index < filteredEmails.length - 1 ? 'mb-4' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base font-medium text-black">
                        {email.sender}
                      </h3>
                      <div className="flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-gray-800">
                          <Reply className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => toggleStar(email.id)}
                          className={`${
                            email.isStarred 
                              ? 'text-yellow-500 hover:text-yellow-600' 
                              : 'text-gray-600 hover:text-yellow-500'
                          }`}
                        >
                          <Star className={`h-4 w-4 ${email.isStarred ? 'fill-current' : ''}`} />
                        </button>
                        <button
                          onClick={() => deleteEmail(email.id)}
                          className="text-gray-600 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {email.preview}
                    </p>
                  </div>
                </div>
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
        }
        
        @media (max-width: 640px) {
          .w-80 {
            width: 200px;
          }
          
          .space-x-4 > * + * {
            margin-left: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default EmailInbox;