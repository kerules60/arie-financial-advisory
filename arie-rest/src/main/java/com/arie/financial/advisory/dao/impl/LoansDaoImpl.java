package com.arie.financial.advisory.dao.impl;

import com.arie.financial.advisory.api.ArieController;
import com.arie.financial.advisory.exception.ArieException;
import com.arie.financial.advisory.modal.LoanVo;
import com.arie.financial.advisory.mybatis.mappers.LoansMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@Repository
public class LoansDaoImpl {

    private static final Logger LOGGER= Logger.getLogger(LoansDaoImpl.class.getName());

    @Autowired
    private LoansMapper loansMapper;


    public List<LoanVo> getLoans(){

        try {
            return loansMapper.getLoans();
        }catch (ArieException ex){
            LOGGER.log(Level.SEVERE, ex.getMessage());
        }
        return Collections.emptyList();
    }
}
