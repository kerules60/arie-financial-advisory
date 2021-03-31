package com.arie.financial.advisory.ariefinancialadvisory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.arie.financial.advisory.mybatis.mappers","com.arie.financial.advisory"})
public class ArieFinancialAdvisoryApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArieFinancialAdvisoryApplication.class, args);
	}

}
