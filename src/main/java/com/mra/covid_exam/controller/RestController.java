package com.mra.covid_exam.controller;


import com.mra.covid_exam.model.Kommune;
import com.mra.covid_exam.model.Sogn;
import com.mra.covid_exam.repository.KommuneRepository;
import com.mra.covid_exam.repository.SognRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.mra.covid_exam.*;

import java.util.List;
import java.util.Optional;


@org.springframework.web.bind.annotation.RestController
@CrossOrigin(allowedHeaders = "Access-Control-Allow-Origin")
public class RestController {

    SognRepository sognRepository;
    KommuneRepository kommuneRepository;

    public RestController(SognRepository sognRepository, KommuneRepository kommuneRepository) {
        this.sognRepository = sognRepository;
        this.kommuneRepository = kommuneRepository;
    }

    @GetMapping("/sogne")
    public List<Sogn> findAllSogne(){
        return sognRepository.findAll();
    }

    @GetMapping("/sogne/{sognId}")
    public ResponseEntity<Sogn> findSogn(@PathVariable Long sognId){
        Optional<Sogn> sogn = sognRepository.findById(sognId);
        if (sogn.isPresent()){
            Sogn sogn1 = sogn.get();
            return new ResponseEntity<>(sogn1, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(value = "/postsogn", consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public Sogn newSogn(@RequestBody Sogn sogn) {
        return sognRepository.save(sogn);
    }

    @DeleteMapping("/sogne/{sognId}")
    public void deleteSogn(@PathVariable Long sognId) {
        sognRepository.deleteById(sognId);
    }

    @PatchMapping("/sogne/{sognId}")
    public ResponseEntity<Sogn> sognPatch(
            @PathVariable(value = "sognId") Long sognId,
            @RequestBody Sogn sognChanges) {

        Optional<Sogn> sognOptional = sognRepository.findById(sognId);
        if (sognOptional.isEmpty())
            return ResponseEntity.notFound().build();
        sognChanges.setSognId(sognId);
        sognRepository.save(sognChanges);
        return ResponseEntity.noContent().build();

    }



    @GetMapping("/kommuner")
    public List<Kommune> findAllKommuner(){
        return kommuneRepository.findAll();
    }

}
