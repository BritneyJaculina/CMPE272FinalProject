package com.startercanavas.canvas.controller;

import com.startercanavas.canvas.model.UserEntity;
import com.startercanavas.canvas.service.UserService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin(origins="*")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<Optional<UserEntity>> getUser(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<UserEntity>> (userService.getUser(id), HttpStatus.OK);
    }

    @GetMapping("/{role}/{id}")
    public ResponseEntity<List<UserEntity>> getStudentsByCourse(@PathVariable ObjectId id){
        return new ResponseEntity<List<UserEntity>> (userService.getUserByClass(id), HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<?> getUsersByRole(@RequestParam(required = false) String role) {
        if (role != null){
            List<UserEntity> users = userService.getUsersByRole(role);
            return new ResponseEntity<>(users, HttpStatus.OK);
        }
        else {
            return ResponseEntity.badRequest().body("Please provide a role");
        }
    }
}
