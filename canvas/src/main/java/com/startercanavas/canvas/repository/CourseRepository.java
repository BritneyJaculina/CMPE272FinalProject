package com.startercanavas.canvas.repository;


import com.startercanavas.canvas.model.UserEntity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.startercanavas.canvas.model.Course;

import java.util.List;

@Repository
public interface CourseRepository extends MongoRepository<Course, ObjectId> {
    List<Course> findByProfessorName(String professorName);
}

