package com.startercanavas.canvas.service;

import com.startercanavas.canvas.model.Course;
import com.startercanavas.canvas.repository.CourseRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    public Optional<Course> getCourse(ObjectId id) {

        return courseRepository.findById(id);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }


    // Work in progress, right now will only return whatever payload you send
    public Optional<Course> updateCourse(Course newCourseData, Optional<Course> oldCourseData) {
        System.out.println("Old data:" + oldCourseData);
        System.out.println("New data:" + newCourseData);
        Course courseToEdit = oldCourseData.get();
        this.courseRepository.save(newCourseData);

        return courseRepository.findById(newCourseData.getId());
    }


}
