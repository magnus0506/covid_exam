package com.mra.covid_exam.controller;

import org.springframework.web.bind.annotation.GetMapping;

@org.springframework.stereotype.Controller
public class Controller {

    @GetMapping("/newsogn")
    public String newSogn(){
        return "newsogn";
    }

    @GetMapping("/{id}")
    public String editSogn(){
        return "editsogn";
    }

    @GetMapping("/kommuneliste")
    public String kommuneListe(){
        return "kommuneliste";
    }

}
