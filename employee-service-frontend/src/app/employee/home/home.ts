import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeForm } from '../employee-form/employee-form';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  
  displayedColumns = ['id', 'firstName', 'lastName', 'email', 'number', 'salary', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Employee>();
  
  constructor(private employeeService: EmployeeService) {}

  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  
  @ViewChild(MatSort) sort: any;
  @ViewChild(MatPaginator) paginator: any;
  
  readonly dialog = inject(MatDialog);

  ngAfterViewInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.fetchAllEmployees().subscribe((data) => {
      this.employees = data;
      this.dataSource = new MatTableDataSource<Employee>(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  searchEmployee(input: any) {
    this.filteredEmployees = this.employees.filter(item =>
      item.firstName.toLowerCase().includes(input.toLowerCase())
      || item.lastName.toLowerCase().includes(input.toLowerCase())
      || item.email.toLowerCase().includes(input.toLowerCase())
      || item.number.toString().includes(input)
      || item.salary.toString().includes(input)
    );
    this.dataSource = new MatTableDataSource<Employee>(this.filteredEmployees);
  }

  deleteEmployee(id: Number) {
    const isConfirmed = window.confirm("Are you sure you want to Delete?");
    if (isConfirmed) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          console.log('Employee deleted successfully');
          this.loadEmployees();
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  openDialog(employee?: Employee): void {
    const employeeData: Employee =
      employee && employee.id !== 0
        ? employee
        : {
            id: 0,
            firstName: '',
            lastName: '',
            email: '',  
            number: 0,
            salary: 0,
          };

    const dialogRef = this.dialog.open(EmployeeForm, {
      data: employeeData,
      width: '480px',
      height: 'auto',
      maxHeight: '90vh',
      maxWidth: '98vw',
      position: { top: '100px' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.loadEmployees();
      }
    });
  }
}