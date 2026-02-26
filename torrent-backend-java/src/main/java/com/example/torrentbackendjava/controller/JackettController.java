package com.example.torrentbackendjava.controller;

import com.example.torrentbackendjava.model.TorrentItem;
import com.example.torrentbackendjava.service.JackettService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JackettController {

    private final JackettService jackettService;

    public JackettController(JackettService jackettService) {
        this.jackettService = jackettService;
    }

    @GetMapping("/search")
    public List<TorrentItem> searchTorrents(@RequestParam String q) {
        return jackettService.search(q);
    }
}
