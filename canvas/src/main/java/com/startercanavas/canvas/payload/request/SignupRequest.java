package com.startercanavas.canvas.payload.request;

import com.startercanavas.canvas.model.Role;
import lombok.Data;

@Data
public class SignupRequest {

    private String username;

    private String email;

    private Role roles;

    private String password;
}
