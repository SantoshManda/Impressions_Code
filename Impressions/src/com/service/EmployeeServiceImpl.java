package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.EmployeeDao;
import com.domain.Employee;

@Service("employeeService")
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeDao employeeDao;

	@Override
	public void insert(Employee employee) {

		employeeDao.insert(employee);
	}

	@Override
	public void update(Employee employee) {
		
		employeeDao.update(employee);
	}

	@Override
	public void delete(int eid) {

		employeeDao.delete(eid);
	}

	@Override
	public Employee getEmployeeById(int eid) {
		return employeeDao.getEmployeeById(eid);
	}

	@Override
	public List<Employee> getAllEmployees() {
		return employeeDao.getAllEmployees();
	}

	@Override
	public void insertOrUpdate(Employee employee) {
		employeeDao.insertOrUpdate(employee);
	}
}



