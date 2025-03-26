import Link from 'next/link';

// Sample student data
const students = [
  {
    id: 1,
    name: 'John Smith',
    avatar: '',
    grades: {
      assignments: [92, 88, 95],
      quizzes: [85, 90],
      tests: [88],
      participation: [95]
    }
  },
  {
    id: 2,
    name: 'Emma Johnson',
    avatar: '',
    grades: {
      assignments: [98, 96, 97],
      quizzes: [92, 95],
      tests: [94],
      participation: [98]
    }
  },
  {
    id: 3,
    name: 'Michael Brown',
    avatar: '',
    grades: {
      assignments: [78, 82, 80],
      quizzes: [75, 80],
      tests: [82],
      participation: [85]
    }
  },
  {
    id: 4,
    name: 'Sophia Davis',
    avatar: '',
    grades: {
      assignments: [85, 88, 90],
      quizzes: [82, 85],
      tests: [86],
      participation: [90]
    }
  },
  {
    id: 5,
    name: 'James Wilson',
    avatar: '',
    grades: {
      assignments: [75, 70, 72],
      quizzes: [68, 72],
      tests: [70],
      participation: [75]
    }
  }
];

// Grade categories and weights
const gradeCategories = [
  { id: 'assignments', name: 'Assignments', weight: 30, items: 3 },
  { id: 'quizzes', name: 'Quizzes', weight: 20, items: 2 },
  { id: 'tests', name: 'Tests', weight: 30, items: 1 },
  { id: 'participation', name: 'Participation', weight: 20, items: 1 }
];

// Calculate average for a category
const calculateCategoryAverage = (grades) => {
  if (!grades.length) return 0;
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
};

// Calculate final grade based on category weights
const calculateFinalGrade = (studentGrades) => {
  let weightedSum = 0;
  let totalWeight = 0;

  gradeCategories.forEach(category => {
    const grades = studentGrades[category.id] || [];
    if (grades.length > 0) {
      const average = calculateCategoryAverage(grades);
      weightedSum += average * category.weight;
      totalWeight += category.weight;
    }
  });

  return totalWeight ? Math.round(weightedSum / totalWeight) : 0;
};

// Get letter grade based on numerical score
const getLetterGrade = (score) => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
};

export default function ClassGrades({ params }) {
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
                      Mathematics - Grade 10: Grade Book
                    </h1>
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Manage grades for this class
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4 space-x-2">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Export Grades
              </button>
              <Link
                href={`/teacher/classes/${classId}`}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Back to Class
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Grading Overview</h3>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {gradeCategories.map((category) => (
                <div key={category.id} className="bg-indigo-50 overflow-hidden rounded-lg shadow">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                        <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">{category.name}</dt>
                          <dd className="flex items-baseline">
                            <div className="text-xl font-semibold text-gray-900">{category.weight}%</div>
                            <div className="ml-2 text-sm text-gray-600">
                              ({category.items} item{category.items !== 1 ? 's' : ''})
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-100 px-4 py-2">
                    <div className="text-sm flex justify-between">
                      <Link 
                        href={`/teacher/classes/${classId}/grades/add?category=${category.id}`} 
                        className="font-medium text-indigo-700 hover:text-indigo-600"
                      >
                        Add Grade
                      </Link>
                      <Link 
                        href={`/teacher/classes/${classId}/grades/category/${category.id}`} 
                        className="font-medium text-indigo-700 hover:text-indigo-600"
                      >
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Student Grades</h3>
              <p className="mt-1 text-sm text-gray-500">View and update grades for all students</p>
            </div>
            <div className="relative flex items-center">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search students..."
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
              />
              <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <button className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Student
                  </th>
                  {gradeCategories.map(category => (
                    <th
                      key={category.id}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {category.name} ({category.weight}%)
                    </th>
                  ))}
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Final Grade
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {students.map(student => {
                  const finalGrade = calculateFinalGrade(student.grades);
                  const letterGrade = getLetterGrade(finalGrade);
                  
                  return (
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
                      {gradeCategories.map(category => {
                        const grades = student.grades[category.id] || [];
                        const average = calculateCategoryAverage(grades);
                        
                        return (
                          <td key={`${student.id}-${category.id}`} className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{Math.round(average)}%</div>
                            <div className="text-xs text-gray-500">
                              {grades.join(', ') || 'No grades'}
                            </div>
                          </td>
                        );
                      })}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`text-sm font-semibold px-2 py-1 rounded-full ${finalGrade >= 90 ? 'bg-green-100 text-green-800' : finalGrade >= 80 ? 'bg-blue-100 text-blue-800' : finalGrade >= 70 ? 'bg-yellow-100 text-yellow-800' : finalGrade >= 60 ? 'bg-orange-100 text-orange-800' : 'bg-red-100 text-red-800'}`}>
                            {finalGrade}% ({letterGrade})
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="text-indigo-600 hover:text-indigo-900">
                            Edit
                          </button>
                          <Link href={`/teacher/students/${student.id}`} className="text-indigo-600 hover:text-indigo-900">
                            View
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Add New Grade</h3>
            <div className="mt-5 border-t border-gray-200 pt-5">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="grade-category" className="block text-sm font-medium text-gray-700">
                      Grade Category
                    </label>
                    <div className="mt-1">
                      <select
                        id="grade-category"
                        name="grade-category"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      >
                        {gradeCategories.map(category => (
                          <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="grade-title" className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="grade-title"
                        id="grade-title"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="e.g. Quiz 3: Fractions"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="max-points" className="block text-sm font-medium text-gray-700">
                      Maximum Points
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="max-points"
                        id="max-points"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="100"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="date-assigned" className="block text-sm font-medium text-gray-700">
                      Date Assigned
                    </label>
                    <div className="mt-1">
                      <input
                        type="date"
                        name="date-assigned"
                        id="date-assigned"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="due-date" className="block text-sm font-medium text-gray-700">
                      Due Date
                    </label>
                    <div className="mt-1">
                      <input
                        type="date"
                        name="due-date"
                        id="due-date"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Brief description of this assignment or assessment"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create Grade Item
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 