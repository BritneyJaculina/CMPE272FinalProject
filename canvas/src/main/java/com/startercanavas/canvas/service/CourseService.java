package com.startercanavas.canvas.service;

import com.startercanavas.canvas.model.Course;
import com.startercanavas.canvas.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    public Optional<Course> getCourse(String courseId) {
        return courseRepository.findByCourseID(courseId);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }


    public Optional<Course> updateCourse(Optional<Course> newCourseData, Optional<Course> oldCourseData) {

        if (oldCourseData.isPresent() && newCourseData.isPresent()) {
            Course oldCourse = oldCourseData.get();
            Course newCourse = newCourseData.get();

            oldCourse.setCourseName(newCourse.getCourseName());
            oldCourse.setPublished(newCourse.getPublished());
            oldCourse.setAnnouncements(newCourse.getAnnouncements());
            oldCourse.setAssignments(newCourse.getAssignments());
            oldCourse.setQuizzes(newCourse.getQuizzes());
            oldCourse.setSyllabus(newCourse.getSyllabus());

            Course updatedCourse = courseRepository.save(oldCourse);

            return Optional.of(updatedCourse);
        }
        else
        {
            return Optional.empty();
        }

    }

    public List<Course> getAllCoursesByProfessor(String profName) {
        return courseRepository.findByProfessorName(profName);
    }


}
