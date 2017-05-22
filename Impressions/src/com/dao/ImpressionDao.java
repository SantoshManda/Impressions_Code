package com.dao;

import java.util.List;

/*import com.domain.Employee;*/
import com.domain.Impression;
import com.domain.ImpressionCount;

public interface ImpressionDao {
	
	List<ImpressionCount> getImpressionCount();
	void save(Impression impression);
	//void saveEmployee(Employee employee);
}
