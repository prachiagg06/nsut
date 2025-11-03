import React from 'react';
import { User, Phone, Mail, MapPin, Calendar, FileText, QrCode } from 'lucide-react';

export default function MedicalQRcode() {
  const userData = {
    name: 'John Doe',
    phone: '+91 98765 43210',
    email: 'john.doe@email.com',
    location: 'Mumbai, Maharashtra',
    bloodGroup: 'O+',
    dob: 'January 15, 1990',
    qrCode: 'MEDIQR123456789'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
            <QrCode className="w-16 h-16 text-white mx-auto mb-3" />
            <h1 className="text-3xl font-bold text-white mb-1">Medical QR Code</h1>
            <p className="text-blue-100">Digital Health Record Access</p>
          </div>

          {/* User Details Section */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <User className="w-6 h-6 mr-2 text-blue-600" />
              Patient Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Name */}
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <User className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-500 font-medium">Full Name</p>
                  <p className="text-gray-800 font-semibold">{userData.name}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Phone className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone Number</p>
                  <p className="text-gray-800 font-semibold">{userData.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Mail className="w-5 h-5 text-purple-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Address</p>
                  <p className="text-gray-800 font-semibold">{userData.email}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-gray-800 font-semibold">{userData.location}</p>
                </div>
              </div>

              {/* Date of Birth */}
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-orange-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-500 font-medium">Date of Birth</p>
                  <p className="text-gray-800 font-semibold">{userData.dob}</p>
                </div>
              </div>

              {/* Blood Group */}
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <FileText className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <p className="text-sm text-gray-500 font-medium">Blood Group</p>
                  <p className="text-gray-800 font-semibold">{userData.bloodGroup}</p>
                </div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Your Medical QR Code
              </h2>

              {/* QR Code Display */}
              <div className="flex justify-center mb-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-4 border-blue-600">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <QrCode className="w-32 h-32 text-blue-600 mx-auto mb-4" />
                      <p className="text-sm font-mono text-gray-600">{userData.qrCode}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Text */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <FileText className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">What's in this QR Code?</h3>
                    <p className="text-gray-700 leading-relaxed">
                      This QR code contains your complete medical history including past symptoms, 
                      diagnosed conditions, prescribed medications, treatment plans, allergies, 
                      vaccination records, and doctor consultations. Healthcare providers can scan 
                      this code to instantly access your medical records in emergency situations or 
                      during consultations, ensuring better and faster care.
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="mt-6 text-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg">
                  Download QR Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}