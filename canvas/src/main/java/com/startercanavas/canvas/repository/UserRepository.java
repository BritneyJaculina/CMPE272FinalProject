package com.startercanavas.canvas.repository;

import org.bson.types.ObjectId;
import org.springframework.data.domain.Example;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import com.startercanavas.canvas.model.UserEntity;
import java.util.List;
import javax.swing.text.html.Option;
import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<UserEntity, ObjectId> {
    Optional<UserEntity> findByUsername(String username);
    Boolean existsByUsername(String username);
  
    @Query("{'role' : ?0, 'courses.courseName' : ?1}")
    List<User> findByCourseName(String role, String courseName);

    List<UserEntity> findByRole(String role);
}
