package com.arie.financial.advisory.entities;

import javax.persistence.*;

@Entity
@Table(name="LOANS_INFO")
public class LoanVo {

    @Id
    @GeneratedValue
    @Column(name="LOAN_ID")
    private Integer loanId;
    @Column(name="LOAN_NAME")
    private String loanName;
    @Column(name="LOAN_DESCRIPTION")
    private String loanDescription;
    @Column(name = "LOAN_PICTURE")
    private String loanPicture;

    public Integer getLoanId() {
        return loanId;
    }

    public void setLoanId(Integer id) {
        this.loanId = id;
    }

    public String getLoanName() {
        return loanName;
    }

    public void setLoanName(String loanName) {
        this.loanName = loanName;
    }

    public String getLoanDescription() {
        return loanDescription;
    }

    public void setLoanDescription(String loanDescription) {
        this.loanDescription = loanDescription;
    }

    public String getLoanPicture() {
        return loanPicture;
    }

    public void setLoanPicture(String loanPicture) {
        this.loanPicture = loanPicture;
    }

    @Override
    public String toString() {
        return "LoanVo{" +
                "id=" + loanId +
                ", loanName='" + loanName + '\'' +
                ", loanDescription='" + loanDescription + '\'' +
                ", loanPicture='" + loanPicture + '\'' +
                '}';
    }

    public LoanVo() {
    }
}
