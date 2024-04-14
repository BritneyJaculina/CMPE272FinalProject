package com.startercanavas.canvas.service;

import com.startercanavas.canvas.model.Course;
import com.startercanavas.canvas.repository.CourseRepository;
import com.startercanavas.canvas.model.UserEntity;
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
    @Autowired
    private CourseRepository courseRepository;

    public Optional<UserEntity> getUser(ObjectId id) {
        return userRepository.findById(id);
    }

    public List<UserEntity> getUserByClass(ObjectId id){
        Optional<Course> course = courseRepository.findById(id);
        String courseName = course.get().getCourseName();
        return userRepository.findByCourseName("Student", courseName);
    }

    public List<UserEntity> getUsersByRole(String role) {
        return userRepository.findByRole(role);
    }
}
