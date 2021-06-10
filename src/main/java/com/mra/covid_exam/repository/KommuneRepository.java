package com.mra.covid_exam.repository;

import com.mra.covid_exam.model.Kommune;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KommuneRepository extends JpaRepository<Kommune, Long> {
}
