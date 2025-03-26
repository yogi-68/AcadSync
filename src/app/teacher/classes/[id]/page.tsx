import Link from 'next/link';

// Sample data for the class
const classData = {
  id: 1,
  name: 'Mathematics - Grade 10',
  description: 'This course covers algebraic expressions, systems of equations, quadratic functions, exponents, and geometry concepts aligned with national mathematics standards.',
  subject: 'Mathematics',
  gradeLevel: 'Grade 10',
  schedule: 'Monday, Wednesday, Friday - 9:00 AM - 10:00 AM',
  room: 'Room 101',
  academicYear: '2024-2025',
  teacher: 'Dr. Sarah Johnson',
  students: [
    { id: 1, name: 'John Smith', email: 'john.smith@school.edu', grade: 'A' },
    { id: 2, name: 'Emma Johnson', email: 'emma.johnson@school.edu', grade: 'A+' },
    { id: 3, name: 'Michael Brown', email: 'michael.brown@school.edu', grade: 'B' },
    { id: 4, name: 'Sophia Davis', email: 'sophia.davis@school.edu', grade: 'B+' },
    { id: 5, name: 'James Wilson', email: 'james.wilson@school.edu', grade: 'C+' },
    { id: 6, name: 'Olivia Martinez', email: 'olivia.martinez@school.edu', grade: 'A-' },
    { id: 7, name: 'William Taylor', email: 'william.taylor@school.edu', grade: 'B-' },
    { id: 8, name: 'Ava Anderson', email: 'ava.anderson@school.edu', grade: 'A' },
  ],
  recentActivity: [
    { id: 1, type: 'assignment', title: 'Quadratic Equations Homework', date: '2024-03-20' },
    { id: 2, type: 'quiz', title: 'Weekly Quiz: Algebraic Expressions', date: '2024-03-18' },
    { id: 3, type: 'note', title: 'Reminder: Bring calculators for next week', date: '2024-03-17' },
  ],
  upcomingAssignments: [
    { id: 1, title: 'Geometry Concepts Assignment', dueDate: '2024-04-02' },
    { id: 2, title: 'Chapter 8 Test: Exponents', dueDate: '2024-04-08' },
    { id: 3, title: 'Group Project: Real-world Math Applications', dueDate: '2024-04-15' },
  ],
  materials: [
    { id: 1, title: 'Textbook Chapter 7-9 PDF', type: 'pdf' },
    { id: 2, title: 'Algebra Review Slides', type: 'presentation' },
    { id: 3, title: 'Geometry Formulas Cheat Sheet', type: 'document' },
    { id: 4, title: 'Video: Understanding Quadratic Functions', type: 'video' },
  ]
};

export default function ClassDetails({ params }) {
  const classId = params.id;
  
  return (
    <div className="bg-gray-100 min-h-screen pb-12">
      {/* Page header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center">
                <div className="ml-0">
                  <div className="flex items-center">
                    <h1 className="text-2xl font-semibold text-gray-900">
                      {classData.name}
                    </h1>
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {classData.schedule} | {classData.room}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4 space-x-2">
              <Link 
                href={`/teacher/classes/${classId}/grades`}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Manage Grades
              </Link>
              <Link
                href={`/teacher/classes/${classId}/edit`}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <svg className="-ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit Class
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Class Information */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Class Information</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">Details about this class</p>
                </div>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Subject</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{classData.subject}</dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Grade Level</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{classData.gradeLevel}</dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Academic Year</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{classData.academicYear}</dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Schedule</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{classData.schedule}</dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Room</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{classData.room}</dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Teacher</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{classData.teacher}</dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Description</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{classData.description}</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Student List */}
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Students</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">{classData.students.length} students enrolled</p>
                </div>
                <div className="flex space-x-2">
                  <Link 
                    href={`/teacher/classes/${classId}/students/add`} 
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <svg className="-ml-0.5 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Student
                  </Link>
                  <button 
                    type="button" 
                    className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <svg className="-ml-0.5 mr-1 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Export
                  </button>
                </div>
              </div>
              <div className="border-t border-gray-200">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Student
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Current Grade
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {classData.students.map((student) => (
                        <tr key={student.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold">
                                  {student.name.split(' ').map(n => n[0]).join('')}
                                </div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                <div className="text-sm text-gray-500">ID: {student.id}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{student.email}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              student.grade.startsWith('A') ? 'bg-green-100 text-green-800' : 
                              student.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' : 
                              student.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' : 
                              student.grade.startsWith('D') ? 'bg-orange-100 text-orange-800' : 
                              'bg-red-100 text-red-800'
                            }`}>
                              {student.grade}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <Link href={`/teacher/students/${student.id}`} className="text-indigo-600 hover:text-indigo-900">
                                View
                              </Link>
                              <Link href={`/teacher/classes/${classId}/grades?student=${student.id}`} className="text-indigo-600 hover:text-indigo-900">
                                Grades
                              </Link>
                              <button type="button" className="text-red-600 hover:text-red-900">
                                Remove
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                    <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Students</dt>
                      <dd className="text-3xl font-semibold text-gray-900">{classData.students.length}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Assignments */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Upcoming Assignments</h3>
              </div>
              <ul role="list" className="divide-y divide-gray-200">
                {classData.upcomingAssignments.map((assignment) => (
                  <li key={assignment.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-indigo-600 truncate">
                        {assignment.title}
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Due: {assignment.dueDate}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
                <Link href={`/teacher/classes/${classId}/assignments`} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all assignments <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Class Materials */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Class Materials</h3>
                <Link href={`/teacher/classes/${classId}/materials/add`} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Add New
                </Link>
              </div>
              <ul role="list" className="divide-y divide-gray-200">
                {classData.materials.map((material) => (
                  <li key={material.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {material.type === 'pdf' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          )}
                          {material.type === 'presentation' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                          )}
                          {material.type === 'document' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          )}
                          {material.type === 'video' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          )}
                        </svg>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm text-gray-900">{material.title}</div>
                        <div className="text-xs text-gray-500 capitalize">{material.type}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
                <Link href={`/teacher/classes/${classId}/materials`} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all materials <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link 
                    href={`/teacher/classes/${classId}/assignments/create`} 
                    className="block w-full text-left px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Add Assignment
                  </Link>
                  <Link 
                    href={`/teacher/classes/${classId}/announcements/create`}
                    className="block w-full text-left px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Create Announcement
                  </Link>
                  <Link 
                    href={`/teacher/classes/${classId}/email`}
                    className="block w-full text-left px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Email Students
                  </Link>
                  <Link 
                    href={`/teacher/classes/${classId}/attendance`}
                    className="block w-full text-left px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Take Attendance
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 