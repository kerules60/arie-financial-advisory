package com.arie.financial.advisory.service.impl;

import com.arie.financial.advisory.dao.LoansDao;
import com.arie.financial.advisory.dao.impl.LoansDaoImpl;
import com.arie.financial.advisory.exception.ArieException;
import com.arie.financial.advisory.modal.LoanVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service("LoansMapperService")
public class LoansMapperServiceImpl {

    private static final Logger LOGGER = Logger.getLogger(LoansMapperServiceImpl.class.getName());

    @Autowired
    private LoansDao loansDao;

    public List<LoanVo> getLoans() {

        try {
            List<LoanVo> loans = loansDao.getLoans();
            return loans;
        } catch (ArieException ex) {

            LOGGER.log(Level.SEVERE, ex.getMessage());
        }
        return Collections.emptyList();
    }
}
