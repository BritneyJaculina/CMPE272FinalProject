package com.startercanavas.canvas.service;

import com.startercanavas.canvas.model.Accounts;
import com.startercanavas.canvas.repository.AccountsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class AccountService {
    @Autowired
    private AccountsRepository courseRepository;

    public Optional<Accounts> getCourse(String courseId) {
        return courseRepository.findByCourseID(courseId);
    }

    public List<Accounts> getAllCourses() {
        return courseRepository.findAll();
    }

    public List<Accounts> getAllCoursesByProfessor(String profName) {
        return courseRepository.findByProfessorName(profName);
    }

    public void addCourse(Accounts newCourse){
        courseRepository.save(newCourse);
    }

    public Optional<Accounts> findByCourseName(String courseName){
        return courseRepository.findByCourseName(courseName);
    }
}
