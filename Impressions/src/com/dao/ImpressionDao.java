package com.dao;

import java.util.List;

/*import com.domain.Employee;*/
import com.domain.Impression;
import com.domain.ImpressionCount;

public interface ImpressionDao {
	
	List<ImpressionCount> getImpressionCount();
	void save(Impression impression);
	/*List<Impression> getImpressionByEmpId(int eid, String from_time , String to_time);*/
	//void saveEmployee(Employee employee);
	List<Impression> getImpressionByEmpId(int eid);
}
