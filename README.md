# Employee Management System

Full-stack web application for managing employee records with CRUD operations, built with Angular 20 and Spring Boot 3.

## 🚀 Tech Stack

### Frontend
- **Angular 20** with Standalone Components
- **Angular Material** for UI components
- **TypeScript**
- **RxJS** for reactive programming

### Backend
- **Spring Boot 3**
- **Spring Data JPA**
- **Hibernate**
- **MySQL**
- **Maven**

---

## ✨ Features

- ✅ **CRUD Operations**: Create, Read, Update, Delete employees
- ✅ **Real-time Search**: Filter employees by name, email, phone, or salary
- ✅ **Sorting**: Sort table columns (ascending/descending)
- ✅ **Pagination**: Navigate through large datasets
- ✅ **Material Design**: Clean and modern UI with Angular Material
- ✅ **RESTful API**: Backend provides REST endpoints

---

## 🛠️ Setup & Installation

### Prerequisites

- **Node.js** 18+ and npm
- **Java** 17+
- **Maven** 3+
- **MySQL** 8+
- **Angular CLI** (`npm install -g @angular/cli`)

---

### Backend Setup

1. **Configure MySQL database**

   Create a database in MySQL:
CREATE DATABASE employee_db;

2. **Configure application.properties**

In `backend/src/main/resources/application.properties`, set your MySQL credentials:
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db  
spring.datasource.username=YOUR_USERNAME  
spring.datasource.password=YOUR_PASSWORD  
spring.jpa.hibernate.ddl-auto=update  

3. **Run the backend**
Backend will run on: `http://localhost:8085`

---

### Frontend Setup

1. **Install dependencies**
2. **Run the frontend**

ng serve

Frontend will run on: `http://localhost:4200`

---

## 🔌 API Endpoints

Base URL: `http://localhost:8085/api/v1/employees`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/`      | Get all employees |
| POST   | `/`      | Create new employee |
| PUT    | `/{id}`  | Update employee by ID |
| DELETE | `/{id}`  | Delete employee by ID |

---

## 📸 Screenshots
### Employee list
<img width="1125" height="579" alt="image" src="https://github.com/user-attachments/assets/9264cd90-669e-4ae0-b4bb-a9b28103aff7" />

### Add employee

<img width="801" height="862" alt="image" src="https://github.com/user-attachments/assets/3fe752a3-047d-4b21-813d-129919eba507" />

### Edit employee

<img width="779" height="849" alt="image" src="https://github.com/user-attachments/assets/d2748afc-1f08-41eb-a36f-b8f69a0fab75" />

### Delete employee

<img width="549" height="563" alt="image" src="https://github.com/user-attachments/assets/bd86bde7-9686-406d-93cc-c7c2596d6fa7" />
<img width="782" height="103" alt="image" src="https://github.com/user-attachments/assets/b75005d9-742d-40ef-93cd-527a8d107fc2" />


---

## 🗂️ Database Schema

**Employee Table**

| Column     | Type         | Description          |
|------------|--------------|----------------------|
| id         | BIGINT       | Primary key (auto)   |
| firstName  | VARCHAR(255) | Employee first name  |
| lastName   | VARCHAR(255) | Employee last name   |
| email      | VARCHAR(255) | Employee email       |
| number     | BIGINT       | Phone number         |
| salary     | DOUBLE       | Employee salary      |

---

## 👨‍💻 Author

**Andrea**  
- GitHub: [@Eiphilim-dev](https://github.com/Eiphilim-dev)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
