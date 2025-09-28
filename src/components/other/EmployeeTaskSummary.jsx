import React from 'react';

const EmployeeTaskSummary = ({ employee, onClose }) => {
  if (!employee) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-[#1c1c1c] p-8 rounded-lg w-96'>
        <h2 className='text-lg font-medium mb-4'>Task Summary for {employee.firstName}</h2>
        <div className='text-sm mb-4'>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>New Tasks:</strong> {employee.taskCounts.newTask}</p>
          <p><strong>Active Tasks:</strong> {employee.taskCounts.active}</p>
          <p><strong>Completed Tasks:</strong> {employee.taskCounts.completed}</p>
          <p><strong>Failed Tasks:</strong> {employee.taskCounts.failed}</p>
        </div>
        <button onClick={onClose} className='bg-blue-500 text-white px-4 py-2 rounded w-full'>
          Close
        </button>
      </div>
    </div>
  );
};

export default EmployeeTaskSummary;
