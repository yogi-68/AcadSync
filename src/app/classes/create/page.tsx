"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CreateClass() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    className: '',
    subject: '',
    gradeLevel: '',
    academicYear: '',
    description: '',
    schedule: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
    },
    startTime: '',
    endTime: '',
    room: '',
    gradingCategories: [
      { name: 'Assignments', weight: 30 },
      { name: 'Quizzes', weight: 20 },
      { name: 'Tests', weight: 40 },
      { name: 'Participation', weight: 10 },
    ]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleScheduleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      schedule: {
        ...formData.schedule,
        [name]: checked
      }
    });
  };

  const handleGradingChange = (index: number, field: string, value: string | number) => {
    const updatedCategories = [...formData.gradingCategories];
    updatedCategories[index] = {
      ...updatedCategories[index],
      [field]: field === 'weight' ? Number(value) : value
    };
    
    setFormData({
      ...formData,
      gradingCategories: updatedCategories
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would save the data to your backend
    console.log('Form submitted:', formData);
    
    // Redirect to dashboard
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Create New Class
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Fill out the form below to create a new class for your students.
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </Link>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow overflow-hidden sm:rounded-lg">
          {/* Basic Information */}
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Basic Information
            </h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="className" className="block text-sm font-medium text-gray-700">
                  Class Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="className"
                    id="className"
                    required
                    value={formData.className}
                    onChange={handleInputChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="gradeLevel" className="block text-sm font-medium text-gray-700">
                  Grade Level
                </label>
                <div className="mt-1">
                  <select
                    id="gradeLevel"
                    name="gradeLevel"
                    required
                    value={formData.gradeLevel}
                    onChange={handleInputChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="">Select Grade Level</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((grade) => (
                      <option key={grade} value={grade}>
                        Grade {grade}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="academicYear" className="block text-sm font-medium text-gray-700">
                  Academic Year
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="academicYear"
                    id="academicYear"
                    required
                    value={formData.academicYear}
                    onChange={handleInputChange}
                    placeholder="e.g. 2023-2024"
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
                    value={formData.description}
                    onChange={handleInputChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description of the class objectives and content.
                </p>
              </div>
            </div>
          </div>

          {/* Schedule Information */}
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Schedule Information
            </h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-700">
                    Class Days
                  </legend>
                  <div className="mt-2 space-y-2 sm:space-y-0 sm:flex sm:items-center sm:space-x-6">
                    {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map((day) => (
                      <div key={day} className="flex items-center">
                        <input
                          id={day}
                          name={day}
                          type="checkbox"
                          checked={formData.schedule[day as keyof typeof formData.schedule]}
                          onChange={handleScheduleChange}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <label htmlFor={day} className="ml-2 text-sm text-gray-700 capitalize">
                          {day}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
                  Start Time
                </label>
                <div className="mt-1">
                  <input
                    type="time"
                    name="startTime"
                    id="startTime"
                    value={formData.startTime}
                    onChange={handleInputChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">
                  End Time
                </label>
                <div className="mt-1">
                  <input
                    type="time"
                    name="endTime"
                    id="endTime"
                    value={formData.endTime}
                    onChange={handleInputChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="room" className="block text-sm font-medium text-gray-700">
                  Classroom
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="room"
                    id="room"
                    value={formData.room}
                    onChange={handleInputChange}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Grading Structure */}
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Grading Structure
            </h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="space-y-4">
              {formData.gradingCategories.map((category, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label htmlFor={`category-${index}`} className="block text-sm font-medium text-gray-700">
                      Category Name
                    </label>
                    <input
                      type="text"
                      id={`category-${index}`}
                      value={category.name}
                      onChange={(e) => handleGradingChange(index, 'name', e.target.value)}
                      className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="w-24">
                    <label htmlFor={`weight-${index}`} className="block text-sm font-medium text-gray-700">
                      Weight (%)
                    </label>
                    <input
                      type="number"
                      id={`weight-${index}`}
                      value={category.weight}
                      onChange={(e) => handleGradingChange(index, 'weight', e.target.value)}
                      min="0"
                      max="100"
                      className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              ))}
              
              <div className="pt-2 flex justify-end">
                <p className="text-sm text-gray-500">
                  Total: {formData.gradingCategories.reduce((sum, cat) => sum + cat.weight, 0)}%
                  {formData.gradingCategories.reduce((sum, cat) => sum + cat.weight, 0) !== 100 && (
                    <span className="ml-2 text-red-500">(Should equal 100%)</span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Form actions */}
          <div className="px-4 py-5 bg-gray-50 sm:px-6 flex justify-end space-x-3">
            <Link
              href="/dashboard"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700"
            >
              Create Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 