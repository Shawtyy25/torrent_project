package com.example.torrentbackendjava.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TorrentItem {
    private String title;
    private long size;
    private int seeds;
    private int peers;
    private String magnet;
    private String provider;
    private String publishDate;
    private String categoryName;

}
