import React from 'react';
import { FaBriefcase, FaGraduationCap, FaHome, FaEnvelope, FaBirthdayCake } from 'react-icons/fa';

const About = ({info}) => {
  // Sample data - replace with actual data from your backend
  const userInfo = {
    work: [
      { company: 'Tech Corp', position: 'Software Engineer', duration: '2020-Present' },
      { company: 'StartUp Inc', position: 'Junior Developer', duration: '2018-2020' }
    ],
    education: [
      { school: 'State University', degree: 'B.S. Computer Science', year: '2014-2018' }
    ],
    places: [
      { type: 'Current City', name: 'New York, NY' },
      { type: 'Hometown', name: 'Los Angeles, CA' }
    ],
    contact: {
      email: info?.email||'user@example.com',
      phone: '+1 (555) 123-4567'
    },
    basicInfo: {
      birthday: 'January 1, 1990',
      gender: 'Male',
      languages: ['English', 'Spanish']
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl  mx-auto">
        {/* Header */}
        <div className="bg-gray-200 rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Edit Details
          </button>
        </div>

        {/* Work and Education */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-200 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaBriefcase className="mr-2 text-blue-600" /> Work and Education
            </h2>
            {userInfo.work.map((job, index) => (
              <div key={index} className="mb-4">
                <p className="font-medium">{job.company}</p>
                <p className="text-gray-600">{job.position}</p>
                <p className="text-sm text-gray-500">{job.duration}</p>
              </div>
            ))}
            <hr className="my-4" />
            {userInfo.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <p className="font-medium">{edu.school}</p>
                <p className="text-gray-600">{edu.degree}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
              </div>
            ))}
          </div>

          {/* Places Lived */}
          <div className="bg-gray-200 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaHome className="mr-2 text-green-600" /> Places Lived
            </h2>
            {userInfo.places.map((place, index) => (
              <div key={index} className="mb-4">
                <p className="font-medium">{place.type}</p>
                <p className="text-gray-600">{place.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact and Basic Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-200 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaEnvelope className="mr-2 text-purple-600" /> Contact Information
            </h2>
            <div className="space-y-2">
              <p><span className="font-medium">Email:</span> {userInfo.contact.email}</p>
              <p><span className="font-medium">Phone:</span> {userInfo.contact.phone}</p>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaBirthdayCake className="mr-2 text-red-600" /> Basic Information
            </h2>
            <div className="space-y-2">
              <p><span className="font-medium">Birthday:</span> {userInfo.basicInfo.birthday}</p>
              <p><span className="font-medium">Gender:</span> {userInfo.basicInfo.gender}</p>
              <p><span className="font-medium">Languages:</span> {userInfo.basicInfo.languages.join(', ')}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>© 2024 Your Social App · Privacy · Terms · Advertising</p>
        </div>
      </div>
    </div>
  );
};

export default About;