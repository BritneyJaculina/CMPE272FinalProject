package com.startercanavas.canvas.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import com.startercanavas.canvas.model.User;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, ObjectId> {
    @Query("{'role' : ?0, 'courses.courseName' : ?1}")
    List<User> findByCourseName(String role, String courseName);

}
