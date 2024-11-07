package com.startercanavas.canvas.service;

import com.startercanavas.canvas.repository.AccountsRepository;
import com.startercanavas.canvas.model.UserEntity;
import com.startercanavas.canvas.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AccountsRepository courseRepository;

    @Autowired

    public Optional<UserEntity> getUser(String id) {
        return userRepository.findByuserid(id);
    }

    public List<UserEntity> getUsersByRole(String role) {
        return userRepository.findByRole_Name(role);
    }

    public List<UserEntity> getUsersByCourseName(String courseName) {
        return userRepository.findByCourse(courseName);
    }

}
