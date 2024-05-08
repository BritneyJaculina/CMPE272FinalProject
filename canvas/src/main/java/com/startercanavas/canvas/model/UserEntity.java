package com.startercanavas.canvas.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.catalina.User;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {

    @Id
    private ObjectId id;
    private String firstName;
    private String lastName;
    private String email;
    private Role role;
    private String username;
    private String password;
    private Date dateOfBirth;
    private List<Course> courses;
    private List<String> gradesList;
}
