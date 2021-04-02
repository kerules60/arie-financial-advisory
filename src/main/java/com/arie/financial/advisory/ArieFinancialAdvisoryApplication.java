package com.arie.financial.advisory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages={"com.arie.financial.advisory.repositories"})
@EntityScan("com.arie.financial.advisory.entities")
@SpringBootApplication
public class ArieFinancialAdvisoryApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArieFinancialAdvisoryApplication.class, args);
	}

}
