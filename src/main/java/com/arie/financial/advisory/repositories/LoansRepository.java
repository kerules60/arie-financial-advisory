package com.arie.financial.advisory.repositories;

import com.arie.financial.advisory.entities.LoanVo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoansRepository extends JpaRepository<LoanVo, Integer> {
}
