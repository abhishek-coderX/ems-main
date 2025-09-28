import React, { useContext } from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';

const EmployeeDashboard = (props) => {
  const [userData, setUserData] = useContext(AuthContext);

  const updateTaskStatus = (taskTitle, newStatus) => {
    const updatedUserData = [...userData];
    const employeeIndex = updatedUserData.findIndex((emp) => emp.id === props.data.id);
    const taskIndex = updatedUserData[employeeIndex].tasks.findIndex(
      (task) => task.taskTitle === taskTitle
    );

    const task = updatedUserData[employeeIndex].tasks[taskIndex];

    // Reset all statuses
    task.newTask = false;
    task.active = false;
    task.completed = false;
    task.failed = false;

    // Set the new status
    task[newStatus] = true;

    // Update task counts
    const counts = {
      newTask: 0,
      active: 0,
      completed: 0,
      failed: 0,
    };

    updatedUserData[employeeIndex].tasks.forEach((t) => {
      if (t.newTask) counts.newTask++;
      if (t.active) counts.active++;
      if (t.completed) counts.completed++;
      if (t.failed) counts.failed++;
    });

    updatedUserData[employeeIndex].taskCounts = counts;

    setUserData(updatedUserData);
    localStorage.setItem('employees', JSON.stringify(updatedUserData));
    toast.success(`Task status updated to ${newStatus}!`);
  };

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={userData.find(emp => emp.id === props.data.id)} />
      <TaskList data={userData.find(emp => emp.id === props.data.id)} updateTaskStatus={updateTaskStatus} />
    </div>
  );
};

export default EmployeeDashboard;