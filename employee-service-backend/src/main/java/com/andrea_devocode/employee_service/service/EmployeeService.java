package com.andrea_devocode.employee_service.service;

import com.andrea_devocode.employee_service.entity.Employee;
import java.util.List;

public interface EmployeeService {

    List<Employee> fetchAllEmployees();

    Employee findById(Integer id);

    Employee createEmployee(Employee employee);

    List<Employee> createEmployees(List<Employee> employees);

    Employee updateEmployee(Employee employee);

    String deleteEmployee(Integer id);
}
