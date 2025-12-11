package com.andrea_devocode.employee_service.repository;

import com.andrea_devocode.employee_service.entity.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Integer> {

}
