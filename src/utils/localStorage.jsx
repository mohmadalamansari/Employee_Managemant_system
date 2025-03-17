const employees = [
  {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "task_title": "Prepare Monthly Report",
              "task_description": "Compile and submit the monthly sales report.",
              "task_date": "2025-03-20",
              "task_category": "Reporting"
          },
          {
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false,
              "task_title": "Review Client Feedback",
              "task_description": "Analyze feedback from clients and suggest improvements.",
              "task_date": "2025-03-10",
              "task_category": "Client Relations"
          }
      ]
  },
  {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "task_title": "Fix Dashboard Bugs",
              "task_description": "Resolve UI and performance issues in the admin dashboard.",
              "task_date": "2025-03-18",
              "task_category": "Development"
          },
          {
              "active": false,
              "new_task": false,
              "completed": false,
              "failed": true,
              "task_title": "Backup Database",
              "task_description": "Create a full backup of the company's database.",
              "task_date": "2025-03-15",
              "task_category": "IT Support"
          }
      ]
  },
  {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "new_task": false,
              "completed": true,
              "failed": false,
              "task_title": "Employee Training",
              "task_description": "Conduct onboarding sessions for new employees.",
              "task_date": "2025-03-12",
              "task_category": "HR"
          },
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "task_title": "Payroll Processing",
              "task_description": "Ensure salaries are processed on time.",
              "task_date": "2025-03-25",
              "task_category": "Finance"
          }
      ]
  },
  {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "task_title": "Quality Assurance Testing",
              "task_description": "Test the new software release for bugs.",
              "task_date": "2025-03-22",
              "task_category": "QA"
          },
          {
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false,
              "task_title": "Stock Inventory Update",
              "task_description": "Update inventory records for the warehouse.",
              "task_date": "2025-03-11",
              "task_category": "Operations"
          }
      ]
  },
  {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
          {
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false,
              "task_title": "Website Redesign",
              "task_description": "Update website layout and improve navigation.",
              "task_date": "2025-03-08",
              "task_category": "Marketing"
          },
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "task_title": "Launch Social Media Campaign",
              "task_description": "Start an advertising campaign for the new product line.",
              "task_date": "2025-03-19",
              "task_category": "Social Media"
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

export const setLocalStorage =() =>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage =() =>{
   const employees =  JSON.parse(localStorage.getItem('employees'))
   const admin =  JSON.parse(localStorage.getItem('admin'))

    console.log(employees);
    console.log(admin)
}