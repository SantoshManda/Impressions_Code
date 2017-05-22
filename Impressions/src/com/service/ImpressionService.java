package com.service;

import java.util.List;

import com.domain.Impression;
import com.domain.ImpressionCount;
public interface ImpressionService {
	
	List<ImpressionCount> getImpressionsCount();
	void insert(Impression impression);
	
}
