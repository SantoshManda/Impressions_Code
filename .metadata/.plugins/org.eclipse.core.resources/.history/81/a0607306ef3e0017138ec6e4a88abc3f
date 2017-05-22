package com.dao;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/*import com.domain.Employee;*/
import com.domain.Impression;

@Repository("impressionDao")
@Transactional(propagation = Propagation.REQUIRED)
public class ImpressionDaoImpl implements ImpressionDao{

	@Autowired
	private HibernateTemplate hibernateTemplate;
	
	@Override
	public void save(Impression impression) {
		hibernateTemplate.save(impression);
	}

//	@Override
//	public void saveEmployee(Employee employee) {
//		hibernateTemplate.saveOrUpdate(employee);
//		
//	}

}
