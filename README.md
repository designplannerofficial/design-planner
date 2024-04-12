<p align="center">
  <img src="https://raw.githubusercontent.com/safeerep/design-planner/feat/basics/assets/dp-removebg-preview.png" width="320" alt="Nest Logo" />
</p>

# Design Planner

Design Planner is a web application built to assist designers in planning and organizing their projects effectively. It provides a platform for creating and managing design projects, collaborating with team members, and keeping track of project progress.

## Features

- **User Authentication**: Secure user authentication system using JWT tokens.
- **Project Creation**: Users can create new design projects and set project details such as name, description, and deadlines.
- **Task Management**: Organize project tasks into lists, assign tasks to team members, and set due dates.
- **Collaboration**: Invite team members to collaborate on projects, assign tasks, and communicate through comments.
- **File Uploads**: Upload and attach files to projects and tasks for reference and collaboration.
- **Dashboard**: Overview of all active projects, tasks, deadlines, and notifications.
- **Search and Filter**: Easily find projects, tasks, and team members using search and filter options.
- **Responsive Design**: Compatible with various devices and screen sizes.

## Tech Stack

- **Frontend**: Built with React.js for a dynamic and interactive user interface.
- **Backend**: Developed using Node.js and Express.js for handling server-side logic and API endpoints.
- **Database**: MongoDB used as the database for storing project, task, user, and authentication data.
- **Authentication**: JWT tokens for secure user authentication and authorization.
- **File Storage**: Integration with a cloud storage service (e.g., AWS S3) for storing uploaded files.
- **Deployment**: Deployed on a cloud platform (e.g., Heroku) for accessibility from anywhere.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed locally or access to a MongoDB instance (can also use a cloud-based MongoDB service).

### Installation

1. Clone the repository:

   - git clone <repository-url>

2. Navigate to the project directory:

   - cd design-planner

3. Install dependencies:

   - npm install

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Define environment variables such as `PORT`, `MONGODB_URI`, and `JWT_SECRET`.

5. Start the development server:

   - npm start

6. Open your browser and navigate to `http://localhost:5173` to access the application.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/safeerep/design-planner/blob/main/LICENSE.md) file for details.

## Acknowledgements

- This project was inspired by the need for a comprehensive tool for designers to plan and manage their projects effectively.
- Special thanks to the MERN stack community for their invaluable resources and support.
