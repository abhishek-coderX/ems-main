import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = ({ handleDeleteTask, handleEditTask }) => {
  const [userData, setUserData] = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTasks = userData.flatMap((employee) =>
    employee.tasks
      .map((task, taskIdx) => ({ ...task, employeeId: employee.id, employeeFirstName: employee.firstName, originalTaskIndex: taskIdx }))
      .filter((task) => {
        const taskTitle = task.taskTitle || '';
        const employeeFirstName = task.employeeFirstName || '';
        const category = task.category || '';
        return (
          taskTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          employeeFirstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          category.toLowerCase().includes(searchQuery.toLowerCase())
        );
      })
  );

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
      <h2 className='text-lg font-medium mb-4'>All Tasks</h2>
      <div className='mb-4'>
        <input
          type='text'
          placeholder='Search name category and task title...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full bg-gray-800 border border-gray-700 rounded px-3 py-2'
        />
      </div>
      <div className='bg-gray-800 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>Task Title</h3>
        <h5 className='text-lg font-medium w-1/5'>Category</h5>
        <h5 className='text-lg font-medium w-1/5'>Due Date</h5>
        <h5 className='text-lg font-medium w-1/5'>Actions</h5>
      </div>
      <div className='h-[400px] overflow-y-auto custom-scrollbar'>
        {filteredTasks.filter(task => task !== null && task !== undefined).map((task, idx) => (
          <div key={`${task.employeeId}-${idx}`} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between items-center rounded'>
            <h2 className='text-lg font-medium w-1/5'>{task.employeeFirstName}</h2>
            <h3 className='text-lg font-medium w-1/5'>{task.taskTitle}</h3>
            <h5 className='text-lg font-medium w-1/5'>{task.category}</h5>
            <h5 className='text-lg font-medium w-1/5'>{task.taskDate}</h5>
            <div className='w-1/5 flex gap-2'>
              <button onClick={() => handleEditTask(task.employeeId, task.originalTaskIndex)} className='bg-yellow-500 text-white px-3 py-1 rounded'>Edit</button>
              <button onClick={() => handleDeleteTask(task.employeeId, task.originalTaskIndex)} className='bg-red-500 text-white px-3 py-1 rounded'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;