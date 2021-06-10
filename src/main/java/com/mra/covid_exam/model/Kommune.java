package com.mra.covid_exam.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "kommuner")
public class Kommune {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "kommune_id")
    private Long kommuneId;

    @Column(name = "kommune_navn")
    private String kommuneNavn;

    @Column(name = "kommune_kode")
    private int kommuneKode;

    @OneToMany
    @JoinColumn(name = "kommune_id")
    @JsonIgnore
    private Set<Sogn> sognSet = new HashSet<>();

    public Kommune() {
    }

    public Long getKommuneId() {
        return kommuneId;
    }

    public void setKommuneId(Long kommuneId) {
        this.kommuneId = kommuneId;
    }

    public String getKommuneNavn() {
        return kommuneNavn;
    }

    public void setKommuneNavn(String kommuneNavn) {
        this.kommuneNavn = kommuneNavn;
    }

    public int getKommuneKode() {
        return kommuneKode;
    }

    public void setKommuneKode(int kommuneKode) {
        this.kommuneKode = kommuneKode;
    }

    public Set<Sogn> getSognSet() {
        return sognSet;
    }

    public void setSognSet(Set<Sogn> sognSet) {
        this.sognSet = sognSet;
    }
}
