package com.arie.financial.advisory.controllers;

import com.arie.financial.advisory.exception.ArieException;
import com.arie.financial.advisory.repositories.LoansRepository;
import com.arie.financial.advisory.response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Level;
import java.util.logging.Logger;

@RequestMapping("/api")
@CrossOrigin(origins = "*")
@RestController
public class ArieController {
    private static final Logger LOGGER= Logger.getLogger(ArieController.class.getName());

    @Autowired
    LoansRepository loansRepository;

    @RequestMapping(value = "/getLoanTypes", method = RequestMethod.GET, produces = "application/json")
    public Response getLoanTypes (){
        System.out.println("It Made it Here, Hurrayyyy!!");
        Response response = new Response();
        try {
            response.setData(loansRepository.findAll());
            response.setStatus(true);
        }catch (ArieException ex){
            arieAdminExceptionResponse(response, ex);
        }
        System.out.println("THIS IS THE RESPONSE WE GIVE TO THE UI:" + response.toString());
        return response;

    }



    //Exception Method
    public static void arieAdminExceptionResponse(Response response, ArieException ex){
        response.setStatus(false);
        response.setErrorMsg(ex.getMessage());
        LOGGER.log(Level.SEVERE, ex.getMessage());
    }
}
