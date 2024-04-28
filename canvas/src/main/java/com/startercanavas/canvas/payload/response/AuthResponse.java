package com.startercanavas.canvas.payload.response;

import lombok.Data;

@Data
public class AuthResponse {
    private String accessToken;
    private String tokenType = "Bearer ";
    private String uid;
    private String role;
    public AuthResponse(String uid, String role, String accessToken) {
        this.accessToken = accessToken;
        this.role = role;
        this.uid = uid;
    }
}
