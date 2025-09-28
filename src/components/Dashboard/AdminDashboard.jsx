import React, { useContext } from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';
import ManageEmployees from '../other/ManageEmployees';
import { AuthContext } from '../../context/AuthProvider';
import EditTaskModal from '../other/EditTaskModal';
import toast from 'react-hot-toast';

const AdminDashboard = (props) => {
  const [userData, setUserData] = useContext(AuthContext);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [editingTask, setEditingTask] = React.useState(null);

  const handleEditTask = (employeeId, originalTaskIndex) => {
    const employee = userData.find((emp) => emp.id === employeeId);
    const task = employee.tasks[originalTaskIndex];
    setEditingTask({ ...task, employeeId, originalTaskIndex });
    setIsEditModalOpen(true);
  };

  const handleUpdateTask = (updatedTask) => {
    const updatedUserData = [...userData];
    const employeeIndex = updatedUserData.findIndex((emp) => emp.id === updatedTask.employeeId);

    if (employeeIndex === -1) {
      toast.error('Employee not found for task update!');
      return;
    }

    // Ensure originalTaskIndex is valid
    if (updatedTask.originalTaskIndex === undefined || updatedTask.originalTaskIndex < 0 || updatedTask.originalTaskIndex >= updatedUserData[employeeIndex].tasks.length) {
      toast.error('Invalid task index for update!');
      return;
    }

    updatedUserData[employeeIndex].tasks[updatedTask.originalTaskIndex] = updatedTask;
    setUserData(updatedUserData);
    localStorage.setItem('employees', JSON.stringify(updatedUserData));
    setIsEditModalOpen(false);
    toast.success('Task updated successfully!');
  };

  const handleDeleteTask = (employeeId, originalTaskIndex) => {
    const updatedUserData = [...userData];
    const employeeIndex = updatedUserData.findIndex((emp) => emp.id === employeeId);

    if (employeeIndex === -1) {
      toast.error('Employee not found!');
      return;
    }

    if (originalTaskIndex === undefined || originalTaskIndex < 0 || originalTaskIndex >= updatedUserData[employeeIndex].tasks.length) {
      toast.error('Invalid task index for deletion!');
      return;
    }

    updatedUserData[employeeIndex].tasks.splice(originalTaskIndex, 1);

    // Recalculate task counts after deletion
    const newCounts = {
      newTask: 0,
      active: 0,
      completed: 0,
      failed: 0,
    };

    updatedUserData[employeeIndex].tasks.forEach((t) => {
      if (t) {
        if (t.newTask) newCounts.newTask++;
        if (t.active) newCounts.active++;
        if (t.completed) newCounts.completed++;
        if (t.failed) newCounts.failed++;
      }
    });

    updatedUserData[employeeIndex].taskCounts = newCounts;

    setUserData(updatedUserData);
    localStorage.setItem('employees', JSON.stringify(updatedUserData));
    toast.success('Task deleted successfully!');
  };

  return (
    <div className='h-screen w-full p-7'>
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask} />
      <ManageEmployees />
      <EditTaskModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onEditTask={handleUpdateTask}
        taskData={editingTask}
      />
    </div>
  );
};

export default AdminDashboard;