package com.domain;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/*import org.hibernate.annotations.NamedQueries;
import org.hibernate.annotations.NamedQuery;*/




@XmlRootElement(name = "employee")
@XmlAccessorType(XmlAccessType.NONE)
public class Employee {

	@XmlAttribute(name = "id")
	private int eid;

	@XmlElement(name = "first-name")
	private String firstName;
	
	/*@XmlElement(name = "salary")
	private float salary;
*/
	public Employee() {
	}

	public Employee(int eid, String firstName, String lastName, float salary) {
		super();
		this.eid = eid;
		this.firstName = firstName;
//		this.lastName = lastName;
		//this.salary = salary;
	}

	public int getEid() {
		return eid;
	}

	public void setEid(int eid) {
		this.eid = eid;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

//	public String getLastName() {
//		return lastName;
//	}
//
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}

	/*public float getSalary() {
		return salary;
	}

	public void setSalary(float salary) {
		this.salary = salary;
	}*/

	@Override
	public String toString() {
		return firstName 
				;
	}

}
