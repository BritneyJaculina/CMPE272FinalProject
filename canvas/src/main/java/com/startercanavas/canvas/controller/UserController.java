package com.startercanavas.canvas.controller;

import com.startercanavas.canvas.model.Course;
import com.startercanavas.canvas.model.UserEntity;
import com.startercanavas.canvas.service.UserService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin(origins= "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;



    @GetMapping("/user")
    public ResponseEntity<Optional<UserEntity>> getUserById(@RequestParam("id") String id)  {
        return new ResponseEntity<Optional<UserEntity>> (userService.getUser(id), HttpStatus.OK);
    }


    @PatchMapping("/{id}")
    public ResponseEntity<Optional<UserEntity>> updateUser(@Validated @RequestBody Optional<UserEntity> newUserData, @PathVariable String id) {
        Optional<UserEntity> oldUserData = userService.getUser(id);
        return new ResponseEntity<Optional<UserEntity>> (userService.updateUser(newUserData, oldUserData),HttpStatus.OK);
    }

    @GetMapping("/role")
    public ResponseEntity<?> getUsersByRole(@RequestParam("name") String role) {
        if (role != null){
            List<UserEntity> users = userService.getUsersByRole(role);
            return new ResponseEntity<>(users, HttpStatus.OK);
        }
        else {
            return ResponseEntity.badRequest().body("Please provide a role");
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Optional<UserEntity>> updateUser(@Validated @RequestBody Optional<UserEntity> newUserData, @PathVariable ObjectId id) {
        Optional<UserEntity> oldUserData = userService.getUser(id);
        return new ResponseEntity<Optional<UserEntity>> (userService.updateUser(newUserData, oldUserData),HttpStatus.OK);
    }

    @GetMapping("/courseName")
    public ResponseEntity<?> getUsersByCourseName(@RequestParam("courseName") String courseName) {
        List<UserEntity> users = userService.getUsersByCourseName(courseName);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}


