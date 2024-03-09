package com.startercanavas.canvas.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    private ObjectId id;
    private String firstName;
    private String lastName;
    private String email;
    private String role;
    private String userName;
    private String password;
    private String dateOfBirth;
    private List<Course> courses;
}
