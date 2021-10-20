package com.usa.ciclo3.reto3.web;

import java.util.List;
import java.util.Optional;
import com.usa.ciclo3.reto3.model.Score;
import com.usa.ciclo3.reto3.service.ScoreService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/Score")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class ScoreController {
    
    @Autowired
    private ScoreService scoreService;

    @GetMapping("/all")
    public List<Score> getReservations(){
        return scoreService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Score> getScoreId(@PathVariable("id") int reservationId) {
        return scoreService.getScoreId(reservationId);
    }
    
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Score save(@RequestBody Score reservation) {
        return scoreService.saveScore(reservation);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Score update(@RequestBody Score reservation) {
        return scoreService.updateScore(reservation);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int reservationId) {
        return scoreService.deleteScoreId(reservationId);
    }
}
