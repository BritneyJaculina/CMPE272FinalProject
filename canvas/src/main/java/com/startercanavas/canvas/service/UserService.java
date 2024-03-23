package com.startercanavas.canvas.service;


import com.startercanavas.canvas.model.UserEntity;

import com.startercanavas.canvas.repository.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Optional<UserEntity> getUser(ObjectId id) {
        return userRepository.findById(id);
    }
    public List<UserEntity> getUsersByRole(String role) {
        return userRepository.findByRole(role);
    }
}
