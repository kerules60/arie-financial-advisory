package com.arie.financial.advisory.modal;

public class LoanVo {
    private String loanName;
    private String loanDescription;

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

    @Override
    public String toString() {
        return "LoanVo{" +
                "loanName='" + loanName + '\'' +
                ", loanDescription='" + loanDescription + '\'' +
                '}';
    }
}
