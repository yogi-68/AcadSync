"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

// Mock data for students
const generateMockStudentData = () => {
  const students = [];
  
  for (let i = 1; i <= 15; i++) {
    students.push({
      id: i,
      name: `Student ${i}`,
      email: `student${i}@example.com`,
      grades: {
        assignments: [
          { id: 1, name: 'Assignment 1', score: Math.floor(Math.random() * 30) + 70 },
          { id: 2, name: 'Assignment 2', score: Math.floor(Math.random() * 30) + 70 },
          { id: 3, name: 'Assignment 3', score: Math.floor(Math.random() * 30) + 70 },
        ],
        quizzes: [
          { id: 1, name: 'Quiz 1', score: Math.floor(Math.random() * 30) + 70 },
          { id: 2, name: 'Quiz 2', score: Math.floor(Math.random() * 30) + 70 },
        ],
        tests: [
          { id: 1, name: 'Midterm', score: Math.floor(Math.random() * 30) + 70 },
          { id: 2, name: 'Final', score: Math.floor(Math.random() * 30) + 70 },
        ],
        participation: [
          { id: 1, name: 'Class Participation', score: Math.floor(Math.random() * 30) + 70 },
        ]
      }
    });
  }
  
  return students;
};

// Grade categories and weights
const gradeCategories = [
  { name: 'assignments', label: 'Assignments', weight: 30, items: 3 },
  { name: 'quizzes', label: 'Quizzes', weight: 20, items: 2 },
  { name: 'tests', label: 'Tests', weight: 40, items: 2 },
  { name: 'participation', label: 'Participation', weight: 10, items: 1 }
];

export default function GradesManagement() {
  const params = useParams();
  const router = useRouter();
  const classId = params.id;
  const [students, setStudents] = useState<any[]>([]);
  const [classInfo, setClassInfo] = useState({
    name: 'Mathematics - Grade 10',
    teacher: 'John Doe',
    academicYear: '2023-2024',
  });
  const [activeTab, setActiveTab] = useState('all');
  const [newGrade, setNewGrade] = useState({ 
    category: 'assignments',
    name: '',
    maxScore: 100
  });
  const [editMode, setEditMode] = useState({ studentId: null, category: '', itemId: null });

  useEffect(() => {
    // In a real app, fetch data from API based on classId
    setStudents(generateMockStudentData());
  }, [classId]);

  // Calculate category average for a student
  const calculateCategoryAverage = (student: any, category: string) => {
    const grades = student.grades[category];
    if (!grades || grades.length === 0) return 0;
    
    return grades.reduce((sum: number, grade: any) => sum + grade.score, 0) / grades.length;
  };

  // Calculate final grade for a student (weighted average)
  const calculateFinalGrade = (student: any) => {
    let weightedSum = 0;
    let totalWeight = 0;
    
    gradeCategories.forEach(category => {
      const average = calculateCategoryAverage(student, category.name);
      weightedSum += average * category.weight;
      totalWeight += category.weight;
    });
    
    return totalWeight > 0 ? weightedSum / totalWeight : 0;
  };

  // Get letter grade based on percentage
  const getLetterGrade = (score: number) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  // Handle grade update
  const handleGradeUpdate = (studentId: number, category: string, itemId: number, newScore: number) => {
    setStudents(prev => 
      prev.map(student => {
        if (student.id !== studentId) return student;
        
        return {
          ...student,
          grades: {
            ...student.grades,
            [category]: student.grades[category].map((item: any) => 
              item.id !== itemId ? item : { ...item, score: newScore }
            )
          }
        };
      })
    );
    setEditMode({ studentId: null, category: '', itemId: null });
  };

  // Handle adding a new grade item
  const handleAddGradeItem = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newGrade.name) return;
    
    // Create new grade item for each student
    const maxId = Math.max(...students.flatMap(s => 
      s.grades[newGrade.category].map((item: any) => item.id)
    ), 0);
    
    setStudents(prev => 
      prev.map(student => ({
        ...student,
        grades: {
          ...student.grades,
          [newGrade.category]: [
            ...student.grades[newGrade.category],
            { 
              id: maxId + 1, 
              name: newGrade.name, 
              score: Math.floor(Math.random() * 30) + 70 // Random initial score
            }
          ]
        }
      }))
    );
    
    // Update the category item count
    const categoryIndex = gradeCategories.findIndex(c => c.name === newGrade.category);
    if (categoryIndex >= 0) {
      gradeCategories[categoryIndex].items += 1;
    }
    
    // Reset form
    setNewGrade({ 
      category: 'assignments',
      name: '',
      maxScore: 100
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              {classInfo.name} - Grades
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage student grades for this class
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4 space-x-3">
            <Link
              href={`/classes/${classId}`}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Back to Class
            </Link>
            <Link
              href={`/classes/${classId}/analytics`}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View Analytics
            </Link>
          </div>
        </div>

        {/* Grading Info */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Grading Structure
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {gradeCategories.map((category) => (
                <div key={category.name} className="px-4 py-5 sm:p-6">
                  <div className="text-sm font-medium text-gray-500">{category.label}</div>
                  <div className="mt-1 flex justify-between">
                    <div className="text-2xl font-semibold text-gray-900">{category.weight}%</div>
                    <div className="text-sm text-gray-500">{category.items} items</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'all'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              All Grades
            </button>
            {gradeCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveTab(category.name)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === category.name
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Student Grades Table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50">
                    Student
                  </th>

                  {activeTab === 'all' && (
                    <>
                      {gradeCategories.map((category) => (
                        <th key={category.name} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {category.label} Avg
                        </th>
                      ))}
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Final Grade
                      </th>
                    </>
                  )}

                  {activeTab !== 'all' && students.length > 0 && students[0].grades[activeTab] && (
                    students[0].grades[activeTab].map((item: any) => (
                      <th key={item.id} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {item.name}
                      </th>
                    ))
                  )}
                  
                  {activeTab !== 'all' && (
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Average
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {students.map((student) => (
                  <tr key={student.id}>
                    <td className="px-6 py-4 whitespace-nowrap sticky left-0 bg-white">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      </div>
                    </td>

                    {activeTab === 'all' && (
                      <>
                        {gradeCategories.map((category) => {
                          const average = calculateCategoryAverage(student, category.name);
                          return (
                            <td key={category.name} className="px-6 py-4 whitespace-nowrap">
                              <div className={`text-sm font-medium ${
                                average >= 90 ? 'text-green-600' :
                                average >= 80 ? 'text-green-500' :
                                average >= 70 ? 'text-yellow-500' :
                                average >= 60 ? 'text-orange-500' : 'text-red-500'
                              }`}>
                                {Math.round(average)}%
                              </div>
                            </td>
                          );
                        })}
                        <td className="px-6 py-4 whitespace-nowrap">
                          {(() => {
                            const finalGrade = calculateFinalGrade(student);
                            const letterGrade = getLetterGrade(finalGrade);
                            return (
                              <div className="flex items-center">
                                <div className={`text-sm font-medium ${
                                  finalGrade >= 90 ? 'text-green-600' :
                                  finalGrade >= 80 ? 'text-green-500' :
                                  finalGrade >= 70 ? 'text-yellow-500' :
                                  finalGrade >= 60 ? 'text-orange-500' : 'text-red-500'
                                }`}>
                                  {Math.round(finalGrade)}% ({letterGrade})
                                </div>
                              </div>
                            );
                          })()}
                        </td>
                      </>
                    )}

                    {activeTab !== 'all' && student.grades[activeTab] && (
                      student.grades[activeTab].map((item: any) => (
                        <td key={item.id} className="px-6 py-4 whitespace-nowrap">
                          {editMode.studentId === student.id && 
                           editMode.category === activeTab && 
                           editMode.itemId === item.id ? (
                            <input
                              type="number"
                              min="0"
                              max="100"
                              className="w-16 px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                              defaultValue={item.score}
                              onBlur={(e) => {
                                const newScore = Math.min(100, Math.max(0, Number(e.target.value)));
                                handleGradeUpdate(student.id, activeTab, item.id, newScore);
                              }}
                              autoFocus
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  const input = e.target as HTMLInputElement;
                                  const newScore = Math.min(100, Math.max(0, Number(input.value)));
                                  handleGradeUpdate(student.id, activeTab, item.id, newScore);
                                }
                              }}
                            />
                          ) : (
                            <div 
                              className={`text-sm font-medium cursor-pointer ${
                                item.score >= 90 ? 'text-green-600' :
                                item.score >= 80 ? 'text-green-500' :
                                item.score >= 70 ? 'text-yellow-500' :
                                item.score >= 60 ? 'text-orange-500' : 'text-red-500'
                              }`}
                              onClick={() => setEditMode({ 
                                studentId: student.id, 
                                category: activeTab, 
                                itemId: item.id 
                              })}
                            >
                              {item.score}%
                            </div>
                          )}
                        </td>
                      ))
                    )}
                    
                    {activeTab !== 'all' && (
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {Math.round(calculateCategoryAverage(student, activeTab))}%
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add New Grade Item */}
        {activeTab !== 'all' && (
          <div className="bg-white shadow sm:rounded-lg mb-8">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Add New {gradeCategories.find(c => c.name === activeTab)?.label} Item
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>This will add a new grade item for all students in this class.</p>
              </div>
              <form onSubmit={handleAddGradeItem} className="mt-5 sm:flex sm:items-center">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="gradeName" className="sr-only">
                    Grade Name
                  </label>
                  <input
                    type="text"
                    name="gradeName"
                    id="gradeName"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Grade item name"
                    value={newGrade.name}
                    onChange={(e) => setNewGrade({ ...newGrade, name: e.target.value })}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 