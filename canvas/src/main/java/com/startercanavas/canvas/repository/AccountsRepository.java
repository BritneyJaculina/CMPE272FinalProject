package com.startercanavas.canvas.repository;


import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.startercanavas.canvas.model.Accounts;

import java.util.List;
import java.util.Optional;

@Repository
public interface AccountsRepository extends MongoRepository<Accounts, ObjectId> {
    List<Accounts> findByProfessorName(String professorName);
  
    Optional<Accounts> findByCourseID(String courseID);
  
    Optional<Accounts> findByCourseName(String courseName);

}

