package com.startercanavas.canvas.payload.response;

import lombok.Data;

@Data
public class AuthResponse {
    private String accessToken;
    private String tokenType = "Bearer ";
    private String uid;
    public AuthResponse(String uid, String accessToken) {
        this.accessToken = accessToken;
        this.uid = uid;
    }
}
