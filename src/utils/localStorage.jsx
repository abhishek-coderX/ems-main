
const employees = [
    {
        "id": 1,
        "firstName": "Alice",
        "email": "alice@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Develop new feature",
                "taskDescription": "Implement user authentication module",
                "taskDate": "2024-10-15",
                "category": "Development" 
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Review pull requests",
                "taskDescription": "Code review for team members",
                "taskDate": "2024-10-10",
                "category": "Code Review"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "taskTitle": "Attend daily standup",
                "taskDescription": "Participate in daily team meeting",
                "taskDate": "2024-10-14",
                "category": "Meeting"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Bob",
        "email": "bob@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Design UI mockups",
                "taskDescription": "Create wireframes for new dashboard",
                "taskDate": "2024-10-16",
                "category": "Design" 
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "User research",
                "taskDescription": "Conduct interviews with target users",
                "taskDate": "2024-10-09",
                "category": "Research"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Charlie",
        "email": "charlie@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write API documentation",
                "taskDescription": "Document all API endpoints and usage",
                "taskDate": "2024-10-17",
                "category": "Documentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "taskTitle": "Set up deployment pipeline",
                "taskDescription": "Configure CI/CD for production environment",
                "taskDate": "2024-10-12",
                "category": "DevOps"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Database migration",
                "taskDescription": "Migrate data to new database schema",
                "taskDate": "2024-10-08",
                "category": "Database"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Diana",
        "email": "diana@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "taskTitle": "Prepare marketing campaign",
                "taskDescription": "Plan social media and email campaigns",
                "taskDate": "2024-10-18",
                "category": "Marketing"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "taskTitle": "Analyze market trends",
                "taskDescription": "Research competitor strategies",
                "taskDate": "2024-10-11",
                "category": "Research"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Eve",
        "email": "eve@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "taskTitle": "Customer support tickets",
                "taskDescription": "Respond to user inquiries and issues",
                "taskDate": "2024-10-19",
                "category": "Support"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "taskTitle": "Onboard new users",
                "taskDescription": "Guide new users through product setup",
                "taskDate": "2024-10-09",
                "category": "Onboarding"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "taskTitle": "Feedback collection",
                "taskDescription": "Gather user feedback for product improvements",
                "taskDate": "2024-10-12",
                "category": "Support"
            }
        ]
    },
    {
        "id": 6,
        "firstName": "Frank",
        "email": "frank@example.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": []
    },
    {
        "id": 7,
        "firstName": "Grace",
        "email": "grace@example.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": []
    }
];


const admin = [{
    "id": 1,
    "email": "abhipal2330@gmail.com",
    "password": "123"
}];

export const initializeLocalStorage = ()=>{
    if(!localStorage.getItem('employees')){
        localStorage.setItem('employees',JSON.stringify(employees))
    }
    if(!localStorage.getItem('admin')){
        localStorage.setItem('admin',JSON.stringify(admin))
    }
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}

export const updateEmployeesInLocalStorage = (employees) => {
    localStorage.setItem('employees', JSON.stringify(employees));
};

export const updateAdminInLocalStorage = (admin) => {
    localStorage.setItem('admin', JSON.stringify(admin));
};
