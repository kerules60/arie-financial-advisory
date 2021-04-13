package com.arie.financial.advisory.response;

public class Response extends Data {
    private boolean status;
    private String errorMsg;
    private String successMsg;
    public Response() {} // constructor
    public Response(boolean status){
        this.status = status;
    }
    public boolean getStatus() {
        return status;
    }

    public void setStatus(boolean status){
        this.status = status;
    }

    public String getErrorMsg(){
        return errorMsg;
    }

    public boolean isStatus() {
        return status;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }

    public String getSuccessMsg() {
        return successMsg;
    }

    public void setSuccessMsg(String successMsg) {
        this.successMsg = successMsg;
    }


    @Override
    public String toString() {
        return "Response{" +
                "status=" + status +
                ", errorMsg='" + errorMsg + '\'' +
                ", successMsg='" + successMsg + '\'' +
                '}';
    }
}
