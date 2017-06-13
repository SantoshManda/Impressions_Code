package com.rest;

import java.util.List;

/*import javax.websocket.server.PathParam;*/

import org.springframework.beans.factory.annotation.Autowired;
/*import org.springframework.http.HttpHeaders;*/
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
/*import org.springframework.web.bind.annotation.RequestParam;*/
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.domain.Employee;
import com.domain.EmployeeList;
import com.service.EmployeeService;

@Controller
@RequestMapping("/employees")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	@RequestMapping(method = RequestMethod.GET, produces = { "application/json", "application/xml" })
	@ResponseBody
	public EmployeeList getAllEmployees() {
		//response.addHeader("Access-Control-Allow-Headers", "Content-Type, x-http-method-override");
		List<Employee> employees = employeeService.getAllEmployees();

		EmployeeList employeeList = new EmployeeList();
		employeeList.setEmployees(employees);

		return employeeList;
	}

	@RequestMapping(value = "{id}", 
			method = RequestMethod.GET, 
			produces = { "application/json", "application/xml" })
	@ResponseBody
	public Employee getEmployeeById(@PathVariable("id") int eid) {

		return employeeService.getEmployeeById(eid);
	}
	
	@RequestMapping(method = RequestMethod.POST,
			consumes = { "application/json", "application/xml" })
	@ResponseStatus(value = HttpStatus.CREATED)
	public void createEmployee(@RequestBody Employee employee) {
		employeeService.insert(employee);
	}

	@RequestMapping(value = "{id}",
			method = RequestMethod.PUT,
			consumes = { "application/json", "application/xml" })
	@ResponseStatus(value = HttpStatus.OK)
	public void updateEmployee(@PathVariable("id") int eid,
			@RequestBody Employee employee) {
	
		employee.setEid(eid);
		employeeService.update(employee);
	}
	
	@RequestMapping(value = "/delete/{id}",
			method = RequestMethod.DELETE) 
	public void deleteEmployee(@PathVariable("id") int eid) {
		
		employeeService.delete(eid);
	}
	
}










