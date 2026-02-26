package com.example.torrentbackendjava.service;

import com.example.torrentbackendjava.model.TorrentItem;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import tools.jackson.databind.JsonNode;

import java.util.ArrayList;
import java.util.List;

@Service
public class JackettService {
    private final RestTemplate restTemplate;
    private final String jackettUrl = "http://localhost:9117";
    private final String jackettApiKey = "9qvua6rjuw9wao16d3ific0je2afh6a6";

    public JackettService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<TorrentItem> search(String query) {
        String url = jackettUrl + "/api/v2.0/indexers/all/results";

        String finalUrl = UriComponentsBuilder.fromUriString(url)
                .queryParam("apikey", jackettApiKey)
                .queryParam("Query", query)
                .toUriString();

        try {
            JsonNode response = restTemplate.getForObject(finalUrl, JsonNode.class);
            System.out.println(response);
            assert response != null;
            JsonNode results = response.get("Results");
            List<TorrentItem> torrents = new ArrayList<>();

            if (results != null && results.isArray()) {
                for (JsonNode item : results) {
                    torrents.add(TorrentItem.builder()
                            .title(item.get("Title").asString())
                            .size(item.get("Size").asLong())
                            .seeds(item.get("Seeders").asInt())
                            .peers(item.get("Peers").asInt())
                            .magnet(item.has("MagnetUri") && !item.get("MagnetUri").isNull()
                                    ? item.get("MagnetUri").asString() : item.get("Link").asString())
                            .provider(item.get("Tracker").asString())
                            .publishDate(item.get("PublishDate").asString())
                            .categoryName(transformCategory(item.get("Category")))
                            .build());
                }
            }
            return torrents;
        } catch (Exception e) {
            System.err.println("Jackett hiba: " + e.getMessage());
            return new ArrayList<>();
        }


    }

    private String transformCategory(JsonNode category) {
        int id = category.isArray() ? category.get(0).asInt() : category.asInt();

        if (id >= 2000 && id < 3000) return "Movie";
        if (id >= 5000 && id < 6000) return "TV Show";
        if (id >= 1000 && id < 2000 || id == 8000) return "Game";
        if (id >= 3000 && id < 4000) return "Music";
        if (id >= 4000 && id < 5000) return "Book";
        return "Other";
    }
}
