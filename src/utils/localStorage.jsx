const employees = [
  {
      "id": 1,
      "firstName": "Aarav",
      "email": "e@e.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Update Documentation",
              "taskDescription": "Review and update the user guide for the latest features.",
              "taskDate": "2024-10-28",
              "category": "Documentation"
          },
          {
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Fix Login Bug",
              "taskDescription": "Resolve the issue with user login persistence.",
              "taskDate": "2024-10-30",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Conduct Meeting",
              "taskDescription": "Lead the weekly team sync-up.",
              "taskDate": "2024-10-25",
              "category": "Management"
          }
      ],
      "taskCount": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 2,
      "firstName": "Vihaan",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Develop Feature X",
              "taskDescription": "Implement and test Feature X as outlined in the project specs.",
              "taskDate": "2024-10-29",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Update Client",
              "taskDescription": "Send a status update email to the client.",
              "taskDate": "2024-10-26",
              "category": "Communication"
          },
          {
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true,
              "taskTitle": "Troubleshoot Server Error",
              "taskDescription": "Identify and fix the root cause of the 500 server errors.",
              "taskDate": "2024-10-27",
              "category": "IT"
          }
      ],
      "taskCount": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 1
      }
  },
  {
      "id": 3,
      "firstName": "Ishaan",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Prepare Report",
              "taskDescription": "Compile the monthly analytics report for the management team.",
              "taskDate": "2024-10-30",
              "category": "Reporting"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Review Budget",
              "taskDescription": "Analyze the Q3 budget for discrepancies.",
              "taskDate": "2024-10-25",
              "category": "Finance"
          }
      ],
      "taskCount": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 4,
      "firstName": "Advait",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
          {
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Client Onboarding",
              "taskDescription": "Assist with the onboarding of new clients.",
              "taskDate": "2024-10-31",
              "category": "Support"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Test New Module",
              "taskDescription": "Conduct end-to-end testing of the new software module.",
              "taskDate": "2024-10-29",
              "category": "Quality Assurance"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "System Audit",
              "taskDescription": "Audit the system logs for any anomalies.",
              "taskDate": "2024-10-26",
              "category": "IT"
          }
      ],
      "taskCount": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 5,
      "firstName": "Anaya",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Design Banner",
              "taskDescription": "Create a promotional banner for the upcoming event.",
              "taskDate": "2024-10-29",
              "category": "Design"
          },
          {
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true,
              "taskTitle": "Data Migration",
              "taskDescription": "Transfer data from the legacy system to the new platform.",
              "taskDate": "2024-10-27",
              "category": "Data Management"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Team Training",
              "taskDescription": "Conduct training sessions for the new hires.",
              "taskDate": "2024-10-25",
              "category": "HR"
          }
      ],
      "taskCount": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 1
      }
  }
];

  
const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"  
}]
  

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));        
}


export const getLocalStorage = () => {
    const employees= JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees,admin}
}
