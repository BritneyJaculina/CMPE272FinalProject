package com.startercanavas.canvas.controller;

import com.startercanavas.canvas.model.Course;
import com.startercanavas.canvas.model.UserEntity;
import com.startercanavas.canvas.repository.CourseRepository;
import com.startercanavas.canvas.service.CourseService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/api/v1/courses")
@CrossOrigin(origins="http://localhost:3000")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Course>> getCourse(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<Course>> (courseService.getCourse(id), HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<Course>> getAllCourses() {
        return new ResponseEntity<List<Course>> (courseService.getAllCourses(), HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Optional<Course>> updateCourse(@Validated @RequestBody Optional<Course> newCourseData, @PathVariable ObjectId id) {
        Optional<Course> oldCourseData = courseService.getCourse(id);
        return new ResponseEntity<Optional<Course>> (courseService.updateCourse(newCourseData, oldCourseData),HttpStatus.OK);
    }

    @GetMapping("/professor")
    public ResponseEntity<List<Course>> getCoursesByProfessor(@RequestParam("professorName") String profName)  {
        return new ResponseEntity<List<Course>> (courseService.getAllCoursesByProfessor(profName), HttpStatus.OK);
    }


}
