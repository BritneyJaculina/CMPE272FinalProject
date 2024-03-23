package com.startercanavas.canvas.repository;


import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.startercanavas.canvas.model.Course;

@Repository
public interface CourseRepository extends MongoRepository<Course, ObjectId> {

}

