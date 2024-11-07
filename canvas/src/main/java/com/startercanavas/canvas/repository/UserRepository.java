package com.startercanavas.canvas.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import com.startercanavas.canvas.model.UserEntity;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<UserEntity, ObjectId> {
    Optional<UserEntity> findByUsername(String username);
    Boolean existsByUsername(String username);
  
    @Query("{'role' : ?0, 'courses.courseName' : ?1}")
    List<UserEntity> findByCourseName(String role, String courseName);

    List<UserEntity> findByRole_Name(String roleName);

    @Query(value = "{'courses.courseName' : ?0}")
    List<UserEntity> findByCourse(String courseName);
  
    Optional<UserEntity> findByuserid(String userid);

}
