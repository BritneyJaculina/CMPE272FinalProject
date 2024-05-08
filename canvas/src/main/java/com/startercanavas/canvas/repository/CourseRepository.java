package com.startercanavas.canvas.repository;


import com.startercanavas.canvas.model.UserEntity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import com.startercanavas.canvas.model.Course;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseRepository extends MongoRepository<Course, ObjectId> {
    List<Course> findByProfessorName(String professorName);

    Optional<Course> findByCourseName(String courseName);
}

