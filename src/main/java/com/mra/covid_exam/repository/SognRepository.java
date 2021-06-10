package com.mra.covid_exam.repository;

import com.mra.covid_exam.model.Sogn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SognRepository extends JpaRepository<Sogn, Long> {
}
