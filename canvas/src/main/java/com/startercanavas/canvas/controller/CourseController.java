package com.startercanavas.canvas.controller;

import com.startercanavas.canvas.model.Accounts;
import com.startercanavas.canvas.service.AccountService;
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
    private AccountService courseService;

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Accounts>> getCourse(@PathVariable String id) {
        return new ResponseEntity<Optional<Accounts>> (courseService.getCourse(id), HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<Accounts>> getAllCourses() {
        return new ResponseEntity<List<Accounts>> (courseService.getAllCourses(), HttpStatus.OK);
    }

/*    @PatchMapping("/{id}")
    public ResponseEntity<Optional<Accounts>> updateCourse(@Validated @RequestBody Optional<Accounts> newCourseData, @PathVariable String id) {
        Optional<Accounts> oldCourseData = courseService.getCourse(id);
        return new ResponseEntity<Optional<Accounts>> (courseService.updateCourse(newCourseData, oldCourseData),HttpStatus.OK);
    }*/

    @GetMapping("/professor")
    public ResponseEntity<List<Accounts>> getCoursesByProfessor(@RequestParam("professorName") String profName)  {
        return new ResponseEntity<List<Accounts>> (courseService.getAllCoursesByProfessor(profName), HttpStatus.OK);
    }

    @PostMapping("/newCourse")
    public ResponseEntity<String> addDocument(@RequestBody Accounts newCourse){
        courseService.addCourse(newCourse);
        return new ResponseEntity<>("Document successfully added", HttpStatus.CREATED);
    }

    @GetMapping("/name")
    public ResponseEntity<Optional<Accounts>> getCourseByName(@RequestParam("courseName") String courseName){
        return new ResponseEntity<Optional<Accounts>>(courseService.findByCourseName(courseName), HttpStatus.OK);
    }
}
