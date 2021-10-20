package com.usa.ciclo3.reto3.repository;

import com.usa.ciclo3.reto3.repository.crud.ScoreCrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import com.usa.ciclo3.reto3.model.Score;
import java.util.List;
import java.util.Optional;

@Repository
public class ScoreRepository {

    @Autowired
    private ScoreCrudRepository scoreCrudRepository;

    public List<Score> getAll() {
        return (List<Score>) scoreCrudRepository.findAll();
    }

    public Optional<Score> getScoreId(int id) {
        return scoreCrudRepository.findById(id);
    }

    public Score save(Score reservation) {
        return scoreCrudRepository.save(reservation);
    }

    public void delete(Score reservation) {
        scoreCrudRepository.delete(reservation);
    }
}
