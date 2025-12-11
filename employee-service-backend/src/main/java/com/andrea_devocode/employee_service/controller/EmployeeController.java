package com.andrea_devocode.employee_service.controller;

import com.andrea_devocode.employee_service.entity.Employee;
import com.andrea_devocode.employee_service.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(maxAge = 3360)
@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/api/v1/employees")
    public ResponseEntity<List<Employee>> fetchAllEmployees() {
        return ResponseEntity.ok(employeeService.fetchAllEmployees());
    }

    @PostMapping("/api/v1/employees")
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
        return ResponseEntity.ok(employeeService.createEmployee(employee));
    }

    @PostMapping("/api/v1/employeesbulk")
    public ResponseEntity<List<Employee>> createEmployees(@RequestBody List<Employee> employees) {
        List<Employee> savedEmployees= employeeService.createEmployees(employees);
        return ResponseEntity.ok(savedEmployees);
    }

    @PutMapping("/api/v1/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") Integer id, @RequestBody Employee employee) {
        return ResponseEntity.ok(employeeService.updateEmployee(employee));
    }

    @DeleteMapping("/api/v1/employees/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(employeeService.deleteEmployee(id));
    }
}
