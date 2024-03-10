package com.startercanavas.canvas.service;

import com.startercanavas.canvas.model.User;
import com.startercanavas.canvas.repository.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Optional<User> getUser(ObjectId id) {
        return userRepository.findById(id);
    }
    public List<User> getUsersByRole(String role) {
        return userRepository.findByRole(role);
    }
}
