
// localStorage.clear()
const employees = [
  {
    "id": 1,
    "email": "e@e.com",
    "password": "123",
    "firstName": "Arjun",
    "taskCount": { "active": 2, "new_task": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "taskTitle": "Design Homepage Layout",
        "taskDescription": "Create a wireframe for the new homepage design.",
        "taskDate": "2024-12-08",
        "category": "Design",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Prepare slides for the client meeting.",
        "taskDate": "2024-12-09",
        "category": "Presentation",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Team Meeting",
        "taskDescription": "Discuss project milestones and deliverables.",
        "taskDate": "2024-12-10",
        "category": "Meetings",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstName": "Rajesh",
    "taskCount": { "active": 2, "new_task": 1, "completed": 0, "failed": 0 },
    "tasks": [
      {
        "taskTitle": "Set Up CI/CD Pipeline",
        "taskDescription": "Implement a CI/CD pipeline for the development environment.",
        "taskDate": "2024-12-08",
        "category": "DevOps",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Create Database Schema",
        "taskDescription": "Design the schema for the new database.",
        "taskDate": "2024-12-09",
        "category": "Development",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstName": "Sita",
    "taskCount": { "active": 1, "new_task": 2, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "taskTitle": "Optimize Server Performance",
        "taskDescription": "Analyze and improve server response times.",
        "taskDate": "2024-12-08",
        "category": "DevOps",
        "active": false,
        "new_task": true,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Develop API Endpoints",
        "taskDescription": "Create RESTful API endpoints for user management.",
        "taskDate": "2024-12-09",
        "category": "Development",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Weekly Standup Meeting",
        "taskDescription": "Provide updates on project progress.",
        "taskDate": "2024-12-10",
        "category": "Meetings",
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstName": "Priya",
    "taskCount": { "active": 2, "new_task": 2, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "taskTitle": "Review UX Design",
        "taskDescription": "Provide feedback on the latest UX mockups.",
        "taskDate": "2024-12-08",
        "category": "Design",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "DevOps Tools Evaluation",
        "taskDescription": "Assess the tools for improving CI/CD processes.",
        "taskDate": "2024-12-09",
        "category": "DevOps",
        "active": false,
        "new_task": true,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Project Planning Meeting",
        "taskDescription": "Discuss the next sprint goals.",
        "taskDate": "2024-12-10",
        "category": "Meetings",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstName": "Vikram",
    "taskCount": { "active": 1, "new_task": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "taskTitle": "Logo Redesign",
        "taskDescription": "Create a modern logo design for the brand.",
        "taskDate": "2024-12-08",
        "category": "Design",
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Present Findings",
        "taskDescription": "Summarize key research findings for the team.",
        "taskDate": "2024-12-09",
        "category": "Presentation",
        "active": true,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];




export  const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}


export  const getLocalStorage = ()=>{
  
//json.parse ->to print data in normal array form(as it is) rather than string
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  
  return {employees,admin}
}
  