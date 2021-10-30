package com.usa.ciclo3.reto3.repository;

import com.usa.ciclo3.reto3.repository.crud.ReservationCrudRepository;
import org.springframework.stereotype.Repository;

import com.usa.ciclo3.reto3.helpers.ContadorClient;
import com.usa.ciclo3.reto3.model.Client;
import com.usa.ciclo3.reto3.model.Reservation;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public class ReservationRepository {

    @Autowired
    private ReservationCrudRepository reservationCrudRepository;

    public List<Reservation> getAll() {
        return (List<Reservation>) reservationCrudRepository.findAll();
    }

    public Optional<Reservation> getReservationId(int id) {
        return reservationCrudRepository.findById(id);
    }

    public Reservation saveReservation(Reservation reservation) {
        return reservationCrudRepository.save(reservation);
    }

    public void delete(Reservation reservation) {
        reservationCrudRepository.delete(reservation);
    }

    public List<Reservation> ReservacionStatusRepositorio(String status) {
        return reservationCrudRepository.findAllByStatus(status);
    }

    public List<Reservation> ReservacionTiempoRepositorio(Date a, Date b) {
        return reservationCrudRepository.findAllByStartDateAfterAndStartDateBefore(a, b);
    }

    public List<ContadorClient> getClientesRepositorio() {
        List<ContadorClient> res = new ArrayList<>();
        List<Object[]> report = reservationCrudRepository.countTotalReservationsByClient();
        for (int i = 0; i < report.size(); i++) {
            res.add(new ContadorClient((Long) report.get(i)[1], (Client) report.get(i)[0]));
        }
        return res;
    }
    

}
