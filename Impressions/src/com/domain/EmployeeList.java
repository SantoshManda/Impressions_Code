package com.domain;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "employees")
@XmlAccessorType(XmlAccessType.NONE)
public class EmployeeList {

	@XmlElement(name = "employee")
	private List<Employee> employees = new ArrayList<>();
	
	public void setEmployees(List<Employee> employees) {
		this.employees = employees;
	}
	
	public List<Employee> getEmployees() {
		return employees;
	}
}
