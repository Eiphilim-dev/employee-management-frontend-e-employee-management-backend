package com.andrea_devocode.employee_service.service;

import com.andrea_devocode.employee_service.entity.Employee;
import com.andrea_devocode.employee_service.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Employee> fetchAllEmployees() {
        return (List<Employee>) employeeRepository.findAll();
    }

    @Override
    public Employee findById(Integer id) {
        return employeeRepository.findById(id).get();
    }

    @Override
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> createEmployees(List<Employee> employees) {
        return (List<Employee>) employeeRepository.saveAll(employees);
    }

    @Override
    public Employee updateEmployee(Employee employee) {
        Employee empObj= employeeRepository.findById(employee.getId()).get();
        if(empObj!= null) {
            empObj.setFirstName(employee.getFirstName());
            empObj.setLastName(employee.getLastName());
            empObj.setEmail(employee.getEmail());
            empObj.setNumber(employee.getNumber());
            empObj.setSalary(employee.getSalary());
        }

        return employeeRepository.save(employee);
    }

    @Override
    public String deleteEmployee(Integer id) {
        Employee empObj= employeeRepository.findById(id).get();
        String deleteMessage= null;
        if(empObj!= null) {
            employeeRepository.delete(empObj);
            deleteMessage= "Employee Deleted Succeffuly for id: " + id;
        }
        return deleteMessage;
    }


}
