import React, { useState, useEffect } from 'react';

const EditTaskModal = ({ isOpen, onClose, onEditTask, taskData }) => {
  const [updatedTask, setUpdatedTask] = useState(taskData);

  useEffect(() => {
    setUpdatedTask(taskData);
  }, [taskData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditTask({ ...updatedTask, employeeId: taskData.employeeId, originalTaskIndex: taskData.originalTaskIndex });
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-[#1c1c1c] p-8 rounded-lg'>
        <h2 className='text-lg font-medium mb-4'>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>Task Title</label>
            <input
              type='text'
              name='taskTitle'
              value={updatedTask?.taskTitle || ''}
              onChange={handleChange}
              className='w-full bg-gray-800 border border-gray-700 rounded px-3 py-2'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>Description</label>
            <textarea
              name='taskDescription'
              value={updatedTask?.taskDescription || ''}
              onChange={handleChange}
              className='w-full bg-gray-800 border border-gray-700 rounded px-3 py-2'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>Due Date</label>
            <input
              type='date'
              name='taskDate'
              value={updatedTask?.taskDate || ''}
              onChange={handleChange}
              className='w-full bg-gray-800 border border-gray-700 rounded px-3 py-2'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>Category</label>
            <input
              type='text'
              name='category'
              value={updatedTask?.category || ''}
              onChange={handleChange}
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

export default EditTaskModal;
