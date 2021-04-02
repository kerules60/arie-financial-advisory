package com.arie.financial.advisory.api;

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

    @GetMapping(value = "/getLoanTypes")
    public Response getLoanTypes (){
        System.out.println("It Made it Here, Hurrayyyy!!");
        Response response = new Response();
        try {
            response.setData(loansRepository.findAll());
            response.setStatus(true);
        }catch (ArieException ex){
            arieAdminExceptionResponse(response, ex);
        }
        System.out.println(response.getData());
        return response;

    }



    //Exception Method
    public static void arieAdminExceptionResponse(Response response, ArieException ex){
        response.setStatus(false);
        response.setErrorMsg(ex.getMessage());
        LOGGER.log(Level.SEVERE, ex.getMessage());
    }
}
