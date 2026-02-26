package com.example.learning1.service;

import com.example.learning1.model.JsonApiModel;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class JsonApiService {

    private final RestTemplate restTemplate;

    public JsonApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public JsonApiModel[] getData() {
        String url = "https://jsonplaceholder.typicode.com/posts";
        return this.restTemplate.getForObject(url, JsonApiModel[].class);
    }

    public JsonApiModel getSingleData(Long id) {
        String url = "https://jsonplaceholder.typicode.com/posts/" + id;
        return this.restTemplate.getForObject(url, JsonApiModel.class);
    }

}
