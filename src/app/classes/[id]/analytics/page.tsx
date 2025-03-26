"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

// Mock data for students
const generateMockStudentData = () => {
  const students = [];
  const subjects = ['Mathematics', 'Science', 'History', 'English', 'Physics'];
  
  for (let i = 1; i <= 20; i++) {
    const grades = {};
    subjects.forEach(subject => {
      grades[subject] = Math.floor(Math.random() * 30) + 70; // 70-100
    });

    students.push({
      id: i,
      name: `Student ${i}`,
      grades: grades,
      attendance: Math.floor(Math.random() * 20) + 80, // 80-100
      averageGrade: Object.values(grades).reduce((sum: any, grade: any) => sum + grade, 0) / subjects.length
    });
  }
  
  return students;
};

export default function ClassAnalytics() {
  const params = useParams();
  const router = useRouter();
  const classId = params.id;
  const [students, setStudents] = useState<any[]>([]);
  const [classInfo, setClassInfo] = useState({
    name: 'Mathematics - Grade 10',
    teacher: 'John Doe',
    academicYear: '2023-2024',
    totalStudents: 20,
  });
  const [activeView, setActiveView] = useState('overview');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');

  useEffect(() => {
    // In a real app, fetch data from API based on classId
    setStudents(generateMockStudentData());
  }, [classId]);

  // Calculate metrics for visualization
  const averageClassGrade = students.length 
    ? students.reduce((sum, student) => sum + student.averageGrade, 0) / students.length
    : 0;
    
  const gradeDistribution = [0, 0, 0, 0, 0]; // F, D, C, B, A
  students.forEach(student => {
    const avg = student.averageGrade;
    if (avg < 60) gradeDistribution[0]++;
    else if (avg < 70) gradeDistribution[1]++;
    else if (avg < 80) gradeDistribution[2]++;
    else if (avg < 90) gradeDistribution[3]++;
    else gradeDistribution[4]++;
  });

  const subjectAverages = {};
  if (students.length) {
    const subjects = Object.keys(students[0].grades);
    subjects.forEach(subject => {
      subjectAverages[subject] = students.reduce((sum, student) => sum + student.grades[subject], 0) / students.length;
    });
  }

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    // In a real app, you'd generate and download a PDF here
    alert('In a real application, this would generate and download a PDF of student data');
    
    // Mock the PDF generation for demonstration
    console.log('Generating PDF for Class ID:', classId);
    console.log('Student Data:', students);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              {classInfo.name} - Analytics
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Teacher: {classInfo.teacher} | Academic Year: {classInfo.academicYear} | Students: {classInfo.totalStudents}
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4 space-x-3">
            <Link
              href={`/classes/${classId}`}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Back to Class
            </Link>
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM13.707 7.707a1 1 0 10-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3z" clipRule="evenodd" />
              </svg>
              Download PDF Report
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'performance', 'attendance', 'individual'].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeView === view
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview View */}
        {activeView === 'overview' && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Class Average Card */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Class Performance Overview
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-indigo-600">{Math.round(averageClassGrade)}%</div>
                  <div className="mt-1 text-sm text-gray-500">Class Average</div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-base font-medium text-gray-900 mb-2">Grade Distribution</h4>
                  <div className="flex mt-2">
                    {['F', 'D', 'C', 'B', 'A'].map((grade, index) => (
                      <div key={grade} className="flex-1">
                        <div className="text-center">
                          <div 
                            className="mx-auto h-24 w-4 rounded-t-sm bg-gradient-to-b from-red-500 to-green-500" 
                            style={{ 
                              height: `${Math.max(5, gradeDistribution[index] / students.length * 100)}px`,
                              backgroundColor: index === 0 ? 'red' : index === 4 ? 'green' : '#f59e0b'
                            }}
                          />
                          <div className="mt-1 text-xs font-medium">{grade}</div>
                          <div className="text-xs text-gray-500">{gradeDistribution[index]}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Subject Performance */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Subject Performance
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <ul className="space-y-4">
                  {Object.entries(subjectAverages).map(([subject, average]) => (
                    <li key={subject} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">{subject}</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-40 h-3 bg-gray-200 rounded-full mr-3">
                          <div 
                            className="h-3 bg-indigo-600 rounded-full" 
                            style={{ width: `${Number(average)}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{Math.round(Number(average))}%</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Performance Trends */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg lg:col-span-2">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Top and Bottom Performers
                </h3>
              </div>
              <div className="border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  <div className="px-4 py-5 sm:p-6">
                    <h4 className="text-base font-medium text-gray-900 mb-4">Top 5 Students</h4>
                    <ul className="space-y-3">
                      {students
                        .sort((a, b) => b.averageGrade - a.averageGrade)
                        .slice(0, 5)
                        .map(student => (
                          <li key={student.id} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                                <span className="text-xs font-medium text-indigo-600">{student.id}</span>
                              </div>
                              <span className="text-sm font-medium text-gray-900">{student.name}</span>
                            </div>
                            <span className="font-medium text-green-600">{Math.round(student.averageGrade)}%</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className="px-4 py-5 sm:p-6">
                    <h4 className="text-base font-medium text-gray-900 mb-4">Students Needing Support</h4>
                    <ul className="space-y-3">
                      {students
                        .sort((a, b) => a.averageGrade - b.averageGrade)
                        .slice(0, 5)
                        .map(student => (
                          <li key={student.id} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                                <span className="text-xs font-medium text-red-600">{student.id}</span>
                              </div>
                              <span className="text-sm font-medium text-gray-900">{student.name}</span>
                            </div>
                            <span className="font-medium text-red-600">{Math.round(student.averageGrade)}%</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Performance View */}
        {activeView === 'performance' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Subject Performance Analysis
              </h3>
              <div>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  {Object.keys(subjectAverages).map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Grade
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Performance
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students
                    .sort((a, b) => b.grades[selectedSubject] - a.grades[selectedSubject])
                    .map(student => (
                      <tr key={student.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                              <span className="text-xs font-medium text-gray-600">{student.id}</span>
                            </div>
                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{student.grades[selectedSubject]}%</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div 
                              className={`h-2 rounded-full ${
                                student.grades[selectedSubject] >= 90 ? 'bg-green-500' :
                                student.grades[selectedSubject] >= 80 ? 'bg-green-400' :
                                student.grades[selectedSubject] >= 70 ? 'bg-yellow-500' :
                                student.grades[selectedSubject] >= 60 ? 'bg-orange-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${student.grades[selectedSubject]}%` }}
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            student.grades[selectedSubject] >= 90 ? 'bg-green-100 text-green-800' :
                            student.grades[selectedSubject] >= 80 ? 'bg-green-100 text-green-800' :
                            student.grades[selectedSubject] >= 70 ? 'bg-yellow-100 text-yellow-800' :
                            student.grades[selectedSubject] >= 60 ? 'bg-orange-100 text-orange-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {
                              student.grades[selectedSubject] >= 90 ? 'Excellent' :
                              student.grades[selectedSubject] >= 80 ? 'Good' :
                              student.grades[selectedSubject] >= 70 ? 'Average' :
                              student.grades[selectedSubject] >= 60 ? 'Needs Improvement' : 'At Risk'
                            }
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Attendance View */}
        {activeView === 'attendance' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Attendance Overview
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Attendance Rate
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students
                    .sort((a, b) => b.attendance - a.attendance)
                    .map(student => (
                      <tr key={student.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                              <span className="text-xs font-medium text-gray-600">{student.id}</span>
                            </div>
                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-48 h-2 bg-gray-200 rounded-full mr-3">
                              <div 
                                className={`h-2 rounded-full ${
                                  student.attendance >= 90 ? 'bg-green-500' :
                                  student.attendance >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                                style={{ width: `${student.attendance}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-900">{student.attendance}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            student.attendance >= 90 ? 'bg-green-100 text-green-800' :
                            student.attendance >= 80 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {
                              student.attendance >= 90 ? 'Excellent' :
                              student.attendance >= 80 ? 'Acceptable' : 'Concerning'
                            }
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Individual Student View */}
        {activeView === 'individual' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Individual Student Analysis
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Click on a student to view detailed performance metrics.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {students.map(student => (
                  <li 
                    key={student.id} 
                    className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer"
                    onClick={() => router.push(`/classes/${classId}/students/${student.id}`)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                          <span className="text-xs font-medium text-indigo-600">{student.id}</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-indigo-600">{student.name}</div>
                          <div className="text-sm text-gray-500">
                            Average Grade: {Math.round(student.averageGrade)}% | Attendance: {student.attendance}%
                          </div>
                        </div>
                      </div>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="mt-2 grid grid-cols-5 gap-2">
                      {Object.entries(student.grades).map(([subject, grade]) => (
                        <div key={subject} className="text-xs">
                          <div className="font-medium text-gray-500">{subject}</div>
                          <div className={`font-medium ${
                            Number(grade) >= 90 ? 'text-green-600' :
                            Number(grade) >= 80 ? 'text-green-500' :
                            Number(grade) >= 70 ? 'text-yellow-500' :
                            Number(grade) >= 60 ? 'text-orange-500' : 'text-red-500'
                          }`}>
                            {grade}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 