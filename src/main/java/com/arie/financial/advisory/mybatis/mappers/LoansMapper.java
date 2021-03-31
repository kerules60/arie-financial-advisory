package com.arie.financial.advisory.mybatis.mappers;

import com.arie.financial.advisory.modal.LoanVo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface LoansMapper {

    @Results({
            @Result(property = "loanName", column = "LOAN_NAME"),
            @Result(property = "loanDescription", column= "LOAN_DESCRIPTION")
    })
    @Select("Select LOAN_NAME, LOAN_DESCRIPTION FROM ARIE_LOANS.LOANS_INFO ")
    List<LoanVo> getLoans();
}
