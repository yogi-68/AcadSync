import Link from 'next/link';

export default function CreateClass() {
  return (
    <div className="bg-gray-100 min-h-screen pb-12">
      {/* Page header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-semibold text-gray-900">Create New Class</h1>
              <p className="mt-1 text-sm text-gray-500">
                Add a new class to your teaching portfolio
              </p>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <Link href="/teacher/dashboard" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <form className="space-y-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Basic Information</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Provide the general information about your class
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="class-name" className="block text-sm font-medium text-gray-700">
                      Class Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="class-name"
                        id="class-name"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="e.g. Mathematics - Grade 10"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <div className="mt-1">
                      <select
                        id="subject"
                        name="subject"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      >
                        <option>Mathematics</option>
                        <option>Science</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>Biology</option>
                        <option>Computer Science</option>
                        <option>English</option>
                        <option>History</option>
                        <option>Geography</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="grade-level" className="block text-sm font-medium text-gray-700">
                      Grade Level
                    </label>
                    <div className="mt-1">
                      <select
                        id="grade-level"
                        name="grade-level"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      >
                        <option>Grade 6</option>
                        <option>Grade 7</option>
                        <option>Grade 8</option>
                        <option>Grade 9</option>
                        <option>Grade 10</option>
                        <option>Grade 11</option>
                        <option>Grade 12</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="academic-year" className="block text-sm font-medium text-gray-700">
                      Academic Year
                    </label>
                    <div className="mt-1">
                      <select
                        id="academic-year"
                        name="academic-year"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      >
                        <option>2024-2025</option>
                        <option>2023-2024</option>
                        <option>2022-2023</option>
                      </select>
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
                        placeholder="Brief description of the class curriculum and goals"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Brief description of what students will learn in this class.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Schedule Information</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Set up when and where the class will meet
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="class-days" className="block text-sm font-medium text-gray-700">
                      Class Days
                    </label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <input
                          id="monday"
                          name="days"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="monday" className="ml-3 text-sm text-gray-700">
                          Monday
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="tuesday"
                          name="days"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="tuesday" className="ml-3 text-sm text-gray-700">
                          Tuesday
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="wednesday"
                          name="days"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="wednesday" className="ml-3 text-sm text-gray-700">
                          Wednesday
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="thursday"
                          name="days"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="thursday" className="ml-3 text-sm text-gray-700">
                          Thursday
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="friday"
                          name="days"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="friday" className="ml-3 text-sm text-gray-700">
                          Friday
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="start-time" className="block text-sm font-medium text-gray-700">
                          Start Time
                        </label>
                        <div className="mt-1">
                          <input
                            type="time"
                            name="start-time"
                            id="start-time"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="end-time" className="block text-sm font-medium text-gray-700">
                          End Time
                        </label>
                        <div className="mt-1">
                          <input
                            type="time"
                            name="end-time"
                            id="end-time"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label htmlFor="classroom" className="block text-sm font-medium text-gray-700">
                        Classroom
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="classroom"
                          id="classroom"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="e.g. Room 101"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Grading Structure</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Define how students will be evaluated in this class
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <div className="mt-1 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-1/3">
                          <input
                            type="text"
                            name="category-1"
                            placeholder="Assignments"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="w-1/4">
                          <div className="relative rounded-md shadow-sm">
                            <input
                              type="number"
                              name="weight-1"
                              placeholder="30"
                              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="w-1/3">
                          <input
                            type="text"
                            name="category-2"
                            placeholder="Quizzes"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="w-1/4">
                          <div className="relative rounded-md shadow-sm">
                            <input
                              type="number"
                              name="weight-2"
                              placeholder="20"
                              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="w-1/3">
                          <input
                            type="text"
                            name="category-3"
                            placeholder="Tests"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="w-1/4">
                          <div className="relative rounded-md shadow-sm">
                            <input
                              type="number"
                              name="weight-3"
                              placeholder="30"
                              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="w-1/3">
                          <input
                            type="text"
                            name="category-4"
                            placeholder="Participation"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="w-1/4">
                          <div className="relative rounded-md shadow-sm">
                            <input
                              type="number"
                              name="weight-4"
                              placeholder="20"
                              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <svg className="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          Add Category
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-gray-200">
                <div className="flex justify-end">
                  <Link
                    href="/teacher/dashboard"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancel
                  </Link>
                  <Link
                    href="/teacher/classes/1"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create Class
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 