import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [MatDialogModule, MatDialogTitle, MatDialogContent, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, CommonModule, FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {
  readonly dialogRef = inject(MatDialogRef<EmployeeForm>);
  data: Employee = inject(MAT_DIALOG_DATA);

  constructor(private employeeService: EmployeeService) {}

  addOrEditEmployee(employee: Employee) {
    if (employee.id !== 0) {
      // UPDATE
      this.employeeService.updateEmployees(employee).subscribe({
        next: (updated) => {
          console.log("Employee Updated Successfully");
          this.dialogRef.close(true); 
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      // CREATE
      const newEmployee = {
  firstName: employee.firstName,
  lastName: employee.lastName,
  email: employee.email,
  number: employee.number,
  salary: employee.salary
};

this.employeeService.createEmployees(newEmployee as Employee).subscribe(
  {
        next: (created) => {
          console.log("Employee Created Successfully");
          this.dialogRef.close(true); 
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
