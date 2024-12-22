package com.example.RealFilm.model;

import com.google.gson.annotations.SerializedName;

public class Rate {
    @SerializedName("rating")
    private Integer rating;

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }




}
