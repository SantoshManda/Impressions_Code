package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.domain.Employee;
import com.service.EmployeeService;

@Controller
@RequestMapping("/employees")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	@RequestMapping(method = RequestMethod.GET)
	public ModelAndView getAllEmployees() {
		
		List<Employee> employees = employeeService.getAllEmployees();
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("employeedetails", employees);
		modelAndView.setViewName("showallemployees");
		
		return modelAndView;
	}
	
	@RequestMapping(value = "{id}",method = RequestMethod.GET)
	public String getEmployee(@PathVariable("id") int eid,
			Model model) {
		
		Employee employee = employeeService.getEmployeeById(eid);
		
		model.addAttribute("employeedetail", employee);
		
		return "singleemployee";
	}
	
	@RequestMapping(value = "register",method = RequestMethod.GET) 
	public String gotoRegisterPage(Model model) {
		
		model.addAttribute("employee", new Employee());
		return "register";
	}

	@RequestMapping(value = "createemployee",
			method = RequestMethod.POST)
	public String createEmployee(@ModelAttribute("employee") 
		Employee employee) {
		
		employeeService.insert(employee);
		
		return "redirect:/mvc/employees";
	}
	
	@RequestMapping(value = "/delete/{id}",method = RequestMethod.GET)
	public String getEmployee(@PathVariable("id") int eid) {
		
		employeeService.delete(eid);
		return "redirect:/mvc/employees";
	}
}








