
    const employees = [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "task_title": "Design Homepage Layout",
            "task_description": "Create a wireframe for the new homepage design.",
            "task_date": "2024-12-08",
            "category": "Design",
            "active": true,
            "new_task": true,
            "completed": false
          },
          {
            "task_title": "Prepare Presentation",
            "task_description": "Prepare slides for the client meeting.",
            "task_date": "2024-12-09",
            "category": "Presentation",
            "active": false,
            "new_task": false,
            "completed": true
          },
          {
            "task_title": "Team Meeting",
            "task_description": "Discuss project milestones and deliverables.",
            "task_date": "2024-12-10",
            "category": "Meetings",
            "active": true,
            "new_task": false,
            "completed": false
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "task_title": "Set Up CI/CD Pipeline",
            "task_description": "Implement a CI/CD pipeline for the development environment.",
            "task_date": "2024-12-08",
            "category": "DevOps",
            "active": true,
            "new_task": false,
            "completed": false
          },
          {
            "task_title": "Create Database Schema",
            "task_description": "Design the schema for the new database.",
            "task_date": "2024-12-09",
            "category": "Development",
            "active": true,
            "new_task": true,
            "completed": false
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "task_title": "Optimize Server Performance",
            "task_description": "Analyze and improve server response times.",
            "task_date": "2024-12-08",
            "category": "DevOps",
            "active": false,
            "new_task": true,
            "completed": true
          },
          {
            "task_title": "Develop API Endpoints",
            "task_description": "Create RESTful API endpoints for user management.",
            "task_date": "2024-12-09",
            "category": "Development",
            "active": true,
            "new_task": false,
            "completed": false
          },
          {
            "task_title": "Weekly Standup Meeting",
            "task_description": "Provide updates on project progress.",
            "task_date": "2024-12-10",
            "category": "Meetings",
            "active": false,
            "new_task": true,
            "completed": false
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "task_title": "Review UX Design",
            "task_description": "Provide feedback on the latest UX mockups.",
            "task_date": "2024-12-08",
            "category": "Design",
            "active": true,
            "new_task": false,
            "completed": false
          },
          {
            "task_title": "DevOps Tools Evaluation",
            "task_description": "Assess the tools for improving CI/CD processes.",
            "task_date": "2024-12-09",
            "category": "DevOps",
            "active": false,
            "new_task": true,
            "completed": true
          },
          {
            "task_title": "Project Planning Meeting",
            "task_description": "Discuss the next sprint goals.",
            "task_date": "2024-12-10",
            "category": "Meetings",
            "active": true,
            "new_task": true,
            "completed": false
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "task_title": "Logo Redesign",
            "task_description": "Create a modern logo design for the brand.",
            "task_date": "2024-12-08",
            "category": "Design",
            "active": false,
            "new_task": true,
            "completed": false
          },
          {
            "task_title": "Present Findings",
            "task_description": "Summarize key research findings for the team.",
            "task_date": "2024-12-09",
            "category": "Presentation",
            "active": true,
            "new_task": false,
            "completed": true
          }
        ]
      }
    ];
    const admin = [{
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }]


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
  