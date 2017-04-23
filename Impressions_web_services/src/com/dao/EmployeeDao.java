package com.dao;

import java.util.List;

import com.domain.Employee;

public interface EmployeeDao {

	void insert(Employee employee);

	void update(Employee employee);
	
	void insertOrUpdate(Employee employee);
	
	void delete(int eid);

	Employee getEmployeeById(int eid);
	
	List<Employee> getEmployeeByName(String ename);

	List<Employee> getAllEmployees();
}
