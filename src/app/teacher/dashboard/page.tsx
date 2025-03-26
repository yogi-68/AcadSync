import Link from 'next/link';

const classes = [
  {
    id: 1,
    name: 'Mathematics - Grade 10',
    students: 28,
    schedule: 'Mon, Wed, Fri - 9:00 AM',
    room: 'Room 101'
  },
  {
    id: 2,
    name: 'Physics - Grade 11',
    students: 24,
    schedule: 'Tue, Thu - 11:00 AM',
    room: 'Room 203'
  },
  {
    id: 3,
    name: 'Chemistry - Grade 10',
    students: 26,
    schedule: 'Mon, Wed - 1:00 PM',
    room: 'Room 105'
  },
  {
    id: 4,
    name: 'Computer Science - Grade 12',
    students: 22,
    schedule: 'Tue, Thu - 2:00 PM',
    room: 'Lab 3'
  }
];

const notifications = [
  "Homework submission deadline for Physics class today at 11:59 PM",
  "Parent-teacher meeting scheduled for next Tuesday",
  "Science quiz results ready for review",
  "New student added to Mathematics class"
];

export default function TeacherDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen pb-12">
      {/* Dashboard header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">Teacher Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">Welcome back, Professor Johnson</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - Classes */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg mb-8">
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Your Classes</h2>
                <Link href="/teacher/classes/create" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  Create Class
                </Link>
              </div>
              <ul role="list" className="divide-y divide-gray-200">
                {classes.map((classItem) => (
                  <li key={classItem.id} className="px-6 py-5 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <Link href={`/teacher/classes/${classItem.id}`} className="text-lg font-medium text-indigo-600 hover:text-indigo-800">
                          {classItem.name}
                        </Link>
                        <p className="mt-1 text-sm text-gray-500">{classItem.schedule} | {classItem.room}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {classItem.students} students
                        </span>
                        <div className="flex -space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-200" />
                          ))}
                          {classItem.students > 3 && (
                            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white bg-gray-100 text-xs text-gray-500">
                              +{classItem.students - 3}
                            </div>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <Link href={`/teacher/classes/${classItem.id}/grades`} className="inline-flex items-center p-1.5 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </Link>
                          <Link href={`/teacher/classes/${classItem.id}`} className="inline-flex items-center p-1.5 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="px-6 py-4 border-t border-gray-200">
                <Link href="/teacher/classes" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all classes <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
              </div>
              <div className="px-6 py-5">
                <div className="flow-root">
                  <ul role="list" className="-mb-8">
                    {[1, 2, 3].map((activity, i) => (
                      <li key={i}>
                        <div className="relative pb-8">
                          {i !== 2 && (
                            <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                          )}
                          <div className="relative flex items-start space-x-3">
                            <div className="relative">
                              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center ring-8 ring-white">
                                <svg className="h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              </div>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {i === 0 && "Updated grades for Physics class"}
                                  {i === 1 && "Added new assignment for Mathematics"}
                                  {i === 2 && "Created new quiz for Chemistry"}
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">
                                  {i === 0 && "1 hour ago"}
                                  {i === 1 && "Yesterday"}
                                  {i === 2 && "2 days ago"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Stats cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                      <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Total Students</dt>
                        <dd className="text-3xl font-semibold text-gray-900">100</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                      <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Classes This Week</dt>
                        <dd className="text-3xl font-semibold text-gray-900">12</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                      <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Pending Assignments</dt>
                        <dd className="text-3xl font-semibold text-gray-900">8</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Notifications</h2>
              </div>
              <ul role="list" className="divide-y divide-gray-200">
                {notifications.map((notification, index) => (
                  <li key={index} className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-800">{notification}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {index === 0 ? '5 minutes ago' : index === 1 ? '2 hours ago' : index === 2 ? 'Yesterday' : '2 days ago'}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="px-6 py-4 border-t border-gray-200">
                <Link href="/teacher/notifications" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all notifications <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Quick Links</h2>
              </div>
              <div className="px-6 py-4">
                <nav className="space-y-2">
                  <Link href="/teacher/classes/create" className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50">
                    <svg className="text-indigo-500 group-hover:text-indigo-600 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Create New Class
                  </Link>
                  <Link href="/teacher/assignments/create" className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50">
                    <svg className="text-indigo-500 group-hover:text-indigo-600 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Add Assignment
                  </Link>
                  <Link href="/teacher/grades" className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50">
                    <svg className="text-indigo-500 group-hover:text-indigo-600 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Update Grades
                  </Link>
                  <Link href="/teacher/calendar" className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50">
                    <svg className="text-indigo-500 group-hover:text-indigo-600 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule Classes
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 