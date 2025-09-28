import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import AddEmployeeModal from './AddEmployeeModal';
import EditEmployeeModal from './EditEmployeeModal';
import EmployeeTaskSummary from './EmployeeTaskSummary';
import { toast } from 'react-toastify';

const ManageEmployees = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [selectedEmployeeForSummary, setSelectedEmployeeForSummary] = useState(null);

  const handleAddEmployee = (newEmployee) => {
    const newEmployeeData = {
      id: userData.length + 1,
      ...newEmployee,
      taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 },
      tasks: [],
    };
    const updatedUserData = [...userData, newEmployeeData];
    setUserData(updatedUserData);
    localStorage.setItem('employees', JSON.stringify(updatedUserData));
    toast.success('Employee added successfully!');
  };

  const handleDeleteEmployee = (employeeId) => {
    const updatedUserData = userData.filter(employee => employee.id !== employeeId);
    setUserData(updatedUserData);
    localStorage.setItem('employees', JSON.stringify(updatedUserData));
    toast.success('Employee deleted successfully!');
  };

  const handleEditEmployee = (updatedEmployee) => {
    const updatedUserData = userData.map(employee =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    setUserData(updatedUserData);
    localStorage.setItem('employees', JSON.stringify(updatedUserData));
    toast.success('Employee updated successfully!');
  };

  const openEditModal = (employee) => {
    setEditingEmployee(employee);
    setIsEditModalOpen(true);
  };

  const openSummaryModal = (employee) => {
    console.log('Opening summary modal for:', employee);
    setSelectedEmployeeForSummary(employee);
    setIsSummaryModalOpen(true);
  };

  const closeSummaryModal = () => {
    console.log('Closing summary modal');
    setIsSummaryModalOpen(false);
    setSelectedEmployeeForSummary(null);
  };

  const filteredEmployees = userData.filter(employee =>
    employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-medium'>Manage Employees</h2>
        <button onClick={() => setIsAddModalOpen(true)} className='bg-blue-500 text-white px-4 py-2 rounded'>Add Employee</button>
      </div>
      <div className='mb-4'>
        <input
          type='text'
          placeholder='Search by employee name or email...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full bg-gray-800 border border-gray-700 rounded px-3 py-2'
        />
      </div>
      <div className='bg-gray-800 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/3'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/3'>Email</h3>
        <h5 className='text-lg font-medium w-1/3'>Actions</h5>
      </div>
      <div className='h-[400px] overflow-y-auto custom-scrollbar'>
        {filteredEmployees.map((employee, idx) => (
          <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between items-center rounded'>
            <h2 className='text-lg font-medium w-1/3'>{employee.firstName}</h2>
            <h3 className='text-lg font-medium w-1/3'>{employee.email}</h3>
            <div className='w-1/3 flex gap-2'>
              <button onClick={() => openEditModal(employee)} className='bg-yellow-500 text-white px-3 py-1 rounded'>Edit</button>
              <button onClick={() => handleDeleteEmployee(employee.id)} className='bg-red-500 text-white px-3 py-1 rounded'>Delete</button>
              <button onClick={() => openSummaryModal(employee)} className='bg-blue-500 text-white px-3 py-1 rounded'>Summary</button>
            </div>
          </div>
        ))}
      </div>
      <AddEmployeeModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddEmployee={handleAddEmployee}
      />
      <EditEmployeeModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onEditEmployee={handleEditEmployee}
        employeeData={editingEmployee}
      />
      <EmployeeTaskSummary
        isOpen={isSummaryModalOpen}
        onClose={closeSummaryModal}
        employee={selectedEmployeeForSummary}
      />
    </div>
  );
};

export default ManageEmployees;
