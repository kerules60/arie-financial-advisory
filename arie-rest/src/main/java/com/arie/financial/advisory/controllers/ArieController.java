package com.arie.financial.advisory.controllers;

import com.arie.financial.advisory.exception.ArieException;
import com.arie.financial.advisory.repositories.LoansRepository;
import com.arie.financial.advisory.repositories.ServicesRepository;
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

    @Autowired
    ServicesRepository servicesRepository;

    @RequestMapping(value = "/getLoanTypes", method = RequestMethod.GET, produces = "application/json")
    public Response getLoanTypes (){
        Response response = new Response();
        try {
            response.setData(loansRepository.findAll());
            response.setStatus(true);
        }catch (ArieException ex){
            arieAdminExceptionResponse(response, ex);
        }
        return response;

    }

    @RequestMapping(value = "/getServices", method = RequestMethod.GET, produces = "application/json")
    public Response getServices (){
        Response response = new Response();
        try {
            response.setData(servicesRepository.findAll());
            response.setStatus(true);
        }catch (ArieException ex){
            arieAdminExceptionResponse(response, ex);
        }
        return response;

    }


    //Exception Method
    public static void arieAdminExceptionResponse(Response response, ArieException ex){
        response.setStatus(false);
        response.setErrorMsg(ex.getMessage());
        LOGGER.log(Level.SEVERE, ex.getMessage());
    }
}
