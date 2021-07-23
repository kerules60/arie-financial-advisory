package com.arie.financial.advisory.exception;

import com.arie.financial.advisory.response.Response;

import java.util.logging.Level;
import java.util.logging.Logger;

public class ArieException extends RuntimeException{
    private static final Logger LOGGER= Logger.getLogger(ArieException.class.getName());

    public ArieException(String exceptionMsg){
        super(exceptionMsg);
    }

    public static void ArieExceptionResponse (Response response, ArieException ex){
        response.setStatus(false);
        response.setErrorMsg(ex.getMessage());
        LOGGER.log(Level.SEVERE, ex.getMessage());
    }
}
