package com.startercanavas.canvas.controller;

import com.startercanavas.canvas.model.UserEntity;
import com.startercanavas.canvas.service.UserService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<Optional<UserEntity>> getUser(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<UserEntity>> (userService.getUser(id), HttpStatus.OK);
    }
}
