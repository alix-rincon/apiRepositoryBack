package com.usa.ciclo3.reto3.service;

import java.util.List;
import java.util.Optional;
import com.usa.ciclo3.reto3.model.Score;
import com.usa.ciclo3.reto3.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    public List<Score> getAll() {
        return scoreRepository.getAll();
    }

    public Optional<Score> getScoreId(int id) {
        return scoreRepository.getScoreId(id);
    }

    public Score saveScore(Score score) {
        if (score.getId() == null) {
            return scoreRepository.save(score);
        } else {
            Optional<Score> consulta = scoreRepository.getScoreId(score.getId());
            if (consulta.isEmpty()) {
                return scoreRepository.save(score);
            } else {
                return score;
            }
        }
    }

    public Score updateScore(Score score) {
        if (score.getId() != null) {
            Optional<Score> e = scoreRepository.getScoreId(score.getId());
            if (!e.isEmpty()) {               
                scoreRepository.save(e.get());
                return e.get();
            } else {
                return score;
            }
        } else {
            return score;
        }
    }

    public boolean deleteScoreId(int scoreId) {
        Boolean aBoolean = getScoreId(scoreId).map(score -> {
            scoreRepository.delete(score);
            return true;
        }).orElse(false);
        return aBoolean;
    }

}
