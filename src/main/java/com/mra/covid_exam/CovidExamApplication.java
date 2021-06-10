package com.mra.covid_exam;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class CovidExamApplication {

    public static void main(String[] args) {
        SpringApplication.run(CovidExamApplication.class, args);
    }


}
