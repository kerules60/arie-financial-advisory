package com.arie.financial.advisory.api;

import com.arie.financial.advisory.exception.ArieException;
import com.arie.financial.advisory.modal.LoanVo;
import com.arie.financial.advisory.response.Response;
import com.arie.financial.advisory.service.LoansMapperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@RequestMapping("/api")
@RestController
public class ArieController {
    private static final Logger LOGGER= Logger.getLogger(ArieController.class.getName());

    @Autowired
    LoansMapperService loansMapperService;

    @RequestMapping(value = "/getLoanTypes", method = RequestMethod.GET, produces = "application/json")
    @CrossOrigin(origins = "*")
    public Response getLoanTypes (){
        System.out.println("It Made it Here, Hurrayyyy!!");
        Response response = new Response();
//        try {
//            response.setData(loansMapperService.getLoans());
//            response.setStatus(true);
//        }catch (ArieException ex){
//            arieAdminExceptionResponse(response, ex);
//        }
//        System.out.println(response.getData());
        return response;

    }



    //Exception Method
    public static void arieAdminExceptionResponse(Response response, ArieException ex){
        response.setStatus(false);
        response.setErrorMsg(ex.getMessage());
        LOGGER.log(Level.SEVERE, ex.getMessage());
    }
}
