package com.startercanavas.canvas.controller;

import com.startercanavas.canvas.model.Course;
import com.startercanavas.canvas.service.CourseService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.Update;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
@RestController
@RequestMapping("/api/v1/courses")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Course>> getCourse(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<Course>> (courseService.getCourse(id), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Course>> updateCourse(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<Course>> (courseService.updateCourse(id), HttpStatus.OK);
    }
}
