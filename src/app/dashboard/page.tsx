"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [userName] = useState('John Doe');
  const [userEmail] = useState('john.doe@gmail.com');
  
  // Mock data for classes
  const [classes] = useState([
    { id: 1, name: 'Mathematics - Grade 10', students: 24, avgScore: 78 },
    { id: 2, name: 'Science - Grade 9', students: 20, avgScore: 82 },
    { id: 3, name: 'English Literature - Grade 11', students: 18, avgScore: 75 },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <button 
            onClick={() => router.push('/login')}
            className="text-sm text-gray-600 hover:text-indigo-600"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left content - Classes */}
          <div className="lg:col-span-3 space-y-6">
            {/* Actions bar */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Your Classes</h2>
              <Link 
                href="/classes/create" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Create New Class
              </Link>
            </div>

            {/* Classes grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {classes.map((cls) => (
                <div key={cls.id} className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">{cls.name}</h3>
                    <div className="mt-4 flex justify-between text-sm text-gray-600">
                      <div>
                        <p>Students: {cls.students}</p>
                        <p>Average Score: {cls.avgScore}%</p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Link 
                          href={`/classes/${cls.id}`}
                          className="text-indigo-600 hover:text-indigo-700"
                        >
                          View Details
                        </Link>
                        <Link 
                          href={`/classes/${cls.id}/grades`}
                          className="text-indigo-600 hover:text-indigo-700"
                        >
                          Manage Grades
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-6 py-4">
                    <div className="text-sm">
                      <Link
                        href={`/classes/${cls.id}/analytics`}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        View Analytics
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent activity section */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    { date: 'Today', text: 'Updated grades for Mathematics - Grade 10' },
                    { date: '2 days ago', text: 'Added 2 new students to Science - Grade 9' },
                    { date: '5 days ago', text: 'Created English Literature - Grade 11 class' },
                  ].map((activity, idx) => (
                    <li key={idx} className="flex space-x-3">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-500"></div>
                      <div>
                        <p className="text-sm text-gray-600">{activity.text}</p>
                        <p className="text-xs text-gray-500">{activity.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right sidebar - Profile */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile card */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-2xl font-medium text-indigo-600">
                      {userName.split(' ').map(name => name[0]).join('')}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{userName}</h3>
                  <p className="text-sm text-gray-500">{userEmail}</p>
                </div>
                <div className="mt-6">
                  <Link 
                    href="/profile" 
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Edit Profile
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-sm font-medium text-gray-900">Quick Stats</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Total Classes</span>
                  <span className="text-sm font-medium text-gray-900">{classes.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Total Students</span>
                  <span className="text-sm font-medium text-gray-900">
                    {classes.reduce((sum, cls) => sum + cls.students, 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Avg. Performance</span>
                  <span className="text-sm font-medium text-gray-900">
                    {Math.round(
                      classes.reduce((sum, cls) => sum + cls.avgScore, 0) / 
                      (classes.length || 1)
                    )}%
                  </span>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-sm font-medium text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-6 space-y-3">
                <Link 
                  href="/classes/create" 
                  className="flex items-center text-sm text-indigo-600 hover:text-indigo-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Create New Class
                </Link>
                <Link 
                  href="/import" 
                  className="flex items-center text-sm text-indigo-600 hover:text-indigo-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Import Student Data
                </Link>
                <Link 
                  href="/export" 
                  className="flex items-center text-sm text-indigo-600 hover:text-indigo-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM13.707 7.707a1 1 0 10-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3z" clipRule="evenodd" />
                  </svg>
                  Export Reports
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 