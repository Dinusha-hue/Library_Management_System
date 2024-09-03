# Library_Management_System

## Features

- **Add Books**: Add new books to the library by providing a title, author, and description.
- **View Books**: View a list of all books currently in the library.
- **Edit Books**: Update the details of an existing book.
- **Delete Books**: Remove books that are no longer needed.

- ## Technologies Used

- **Backend**: 
  - C# with ASP.NET Core Web API
  - Entity Framework Core (with SQLite)
- **Frontend**:
  - React
  - TypeScript
- **Database**: SQLite

- ## Installation and Setup

### Prerequisites

- .NET SDK (version 6.0 or later)
- Node.js (version 14.x or later)
- SQLite

- 1. Clone the repository:
   ```bash
   git clone https://github.com/Dinusha-hue/Library_Management_System.git
   cd LibraryManagementSystem/backend
   
### Backend

- 2. Restore NuGet packages:

     dotnet restore
     
- 3. Apply database migrations:
 
     dotnet ef database update

- 4. Run the backend server:

     dotnet run

### Frontend

  cd ../frontend

  - 1. Install npm dependencies:

       npm install

  - 2. Start the React development server:
   
       npm start
