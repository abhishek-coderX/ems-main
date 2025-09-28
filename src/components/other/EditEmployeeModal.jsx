import React, { useState, useEffect } from 'react';

const EditEmployeeModal = ({ isOpen, onClose, onEditEmployee, employeeData }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (employeeData) {
      setFirstName(employeeData.firstName);
      setEmail(employeeData.email);
    }
  }, [employeeData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditEmployee({ ...employeeData, firstName, email });
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-[#1c1c1c] p-8 rounded-lg'>
        <h2 className='text-lg font-medium mb-4'>Edit Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>First Name</label>
            <input
              type='text'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='w-full bg-gray-800 border border-gray-700 rounded px-3 py-2'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full bg-gray-800 border border-gray-700 rounded px-3 py-2'
              required
            />
          </div>
          <div className='flex justify-end gap-4'>
            <button type='button' onClick={onClose} className='bg-red-500 text-white px-4 py-2 rounded'>
              Cancel
            </button>
            <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
