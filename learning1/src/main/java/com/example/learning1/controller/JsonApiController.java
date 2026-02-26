package com.example.learning1.controller;

import com.example.learning1.model.JsonApiModel;
import com.example.learning1.service.JsonApiService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class JsonApiController {
    private final JsonApiService jsonApiService;

    public JsonApiController(JsonApiService jsonPlaceholderApiService) {
        this.jsonApiService = jsonPlaceholderApiService;
    }

    @GetMapping("/")
    public String sendHello() {
        return "HELLO BELLO";
    }

    @GetMapping("/getAll")
    public JsonApiModel[] sendData() {
        return this.jsonApiService.getData();
    }

    @GetMapping("/get/{id}")
    public JsonApiModel getDataById(@PathVariable Long id) {
        return this.jsonApiService.getSingleData(id);
    }

    @PostMapping("/create-mimic")
    public ResponseEntity<JsonApiModel> createPost(@RequestBody JsonApiModel newPost) {
        System.out.println("Új poszt: " + newPost.getTitle());

        return new ResponseEntity<>(newPost, HttpStatus.CREATED);
    }
}
