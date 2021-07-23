package com.arie.financial.advisory.repositories;

import com.arie.financial.advisory.entities.ServiceVo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicesRepository extends JpaRepository<ServiceVo, Integer> {
}
