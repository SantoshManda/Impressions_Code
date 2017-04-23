package com.service;

import java.util.List;

import com.domain.Employee;

public interface EmployeeService {

	void insert(Employee employee);

	void update(Employee employee);

	void insertOrUpdate(Employee employee);
	
	void delete(int eid);

	Employee getEmployeeById(int eid);

	List<Employee> getAllEmployees();
}
