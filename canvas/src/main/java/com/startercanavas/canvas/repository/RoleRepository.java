package com.startercanavas.canvas.repository;

import com.startercanavas.canvas.model.Role;
import com.startercanavas.canvas.model.UserEntity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, ObjectId> {
    Optional<Role> findByName(String name);

}
