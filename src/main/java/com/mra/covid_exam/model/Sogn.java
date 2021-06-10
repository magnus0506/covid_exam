package com.mra.covid_exam.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "sogne")
public class Sogn {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sogn_id")
    private Long sognId;

    @Column(name = "sogn_kode")
    private int sognKode;

    @Column(name = "sogn_navn")
    private String sognNavn;

    @ManyToOne
    @JoinColumn(name = "kommune_id")
    private Kommune sognKommune;

    @Column(name = "sogn_incidens")
    private int sognIncidens;

    @Temporal(TemporalType.DATE)
    @Column(name = "sogn_startdato")
    private Date sognStartdato;

    @Column(name = "sogn_nedlukket")
    private Boolean sognNedlukket;

    public Sogn() {
    }

    public Boolean getSognNedlukket() {
        return sognNedlukket;
    }

    public void setSognNedlukket(Boolean sognNedlukket) {
        this.sognNedlukket = sognNedlukket;
    }

    public Long getSognId() {
        return sognId;
    }

    public void setSognId(Long sognId) {
        this.sognId = sognId;
    }

    public int getSognKode() {
        return sognKode;
    }

    public void setSognKode(int sognKode) {
        this.sognKode = sognKode;
    }

    public String getSognNavn() {
        return sognNavn;
    }

    public void setSognNavn(String sognNavn) {
        this.sognNavn = sognNavn;
    }

    public Kommune getSognKommune() {
        return sognKommune;
    }

    public void setSognKommune(Kommune sognKommune) {
        this.sognKommune = sognKommune;
    }

    public int getSognIncidens() {
        return sognIncidens;
    }

    public void setSognIncidens(int sognSmittetryk) {
        this.sognIncidens = sognSmittetryk;
    }

    public Date getSognStartdato() {
        return sognStartdato;
    }

    public void setSognStartdato(Date sognStartdato) {
        this.sognStartdato = sognStartdato;
    }
}
