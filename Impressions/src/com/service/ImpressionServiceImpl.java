package com.service;


//import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.dao.EmployeeDao;
import com.dao.ImpressionDao;
//import com.domain.Employee;
import com.domain.Impression;

@Service("impressionService")
public class ImpressionServiceImpl implements ImpressionService{

	@Autowired
	private ImpressionDao impression_dao;
	
//	@Autowired
//	private EmployeeService employeeService;
	
	/*@Autowired
	private EmployeeDao employee_dao;*/
	
	@Override
	public void insert(Impression impression) {	
		//String fname=impression.getEmployee_name()==null ? "" : impression.getEmployee_name();
		impression_dao.save(impression);
		/*List<Employee> list=employee_dao.getEmployeeByName(fname);
		//if (list.isEmpty())
		//
		
		if (list.size() == 0)
		{
			Employee emp1=new Employee();
			emp1.setFirstName(fname);
			employee_dao.insert(emp1);
		}*/
		}
}
