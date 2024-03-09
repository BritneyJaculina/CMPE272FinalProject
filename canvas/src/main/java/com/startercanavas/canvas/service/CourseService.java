package com.startercanavas.canvas.service;

import com.startercanavas.canvas.model.Course;
import com.startercanavas.canvas.repository.CourseRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;


@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    public Optional<Course> getCourse(ObjectId id) {

        return courseRepository.findById(id);
    }
    public Optional<Course> updateCourse(ObjectId id) {

        return courseRepository.findById(id);
    }


}
