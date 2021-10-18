package com.usa.ciclo3.reto3.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.List;
import javax.persistence.*;

/**
 * @author: Alix Rincón
 */
@Entity
@Table(name = "computer")
public class Computer implements Serializable {

    /**
     * Integer id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    /**
     * String name
     */
    private String name;
    /**
     * String brand
     */
    private String brand;
    /**
     * Integer year
     */
    private Integer year;
    /**
     * String description
     */
    private String description;

    /**
     * Category category
     */
    @ManyToOne
    @JoinColumn(name = "categoryId")
    @JsonIgnoreProperties("computers")
    private Category category;

    /**
     * List Message
     */
    @OneToMany(cascade = { CascadeType.PERSIST }, mappedBy = "computer")
    @JsonIgnoreProperties({ "computer","client"})
    private List<Message> messages;

    /**
     * List Reservation
     */
    @OneToMany(cascade = { CascadeType.PERSIST }, mappedBy = "computer")
    @JsonIgnoreProperties({ "computer","client"})
    private List<Reservation> reservations;

    /**
     * 
     * @return id
     */
    public Integer getId() {
        return id;
    }

    /**
     * 
     * @param id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     * 
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 
     * @return brand
     */
    public String getBrand() {
        return brand;
    }

    /**
     * 
     * @param brand
     */
    public void setBrand(String brand) {
        this.brand = brand;
    }

    /**
     * 
     * @return year
     */
    public Integer getYear() {
        return year;
    }
    
    /**
     * 
     * @param year
     */
    public void setYear(Integer year) {
        this.year = year;
    }

    /**
     * 
     * @return description
     */
    public String getDescription() {
        return description;
    }

    /**
     * 
     * @param description
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * 
     * @return category
     */
    public Category getCategory() {
        return category;
    }

    /**
     * 
     * @param category
     */
    public void setCategory(Category category) {
        this.category = category;
    }

    /**
     * 
     * @return messages
     */
    public List<Message> getMessages() {
        return messages;
    }

    /**
     * 
     * @param messages
     */
    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }

    /**
     * 
     * @return reservations
     */
    public List<Reservation> getReservations() {
        return reservations;
    }

    /**
     * 
     * @param reservations
     */
    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

}