package com.startercanavas.canvas.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.catalina.User;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {

    @Id
/*    private ObjectId id;
    private String userid;
    private String firstName;
    private String lastName;
    private String email;
    private Role role;
    private String username;
    private String password;
    private Date dateOfBirth;
    private List<Course> courses;
    private List<String> gradesList;*/

    private ObjectId id;
    private String user_id;
    private String username;
    private String password;
    private String first_name;
    private String last_name;
    private Timestamp created_at;
    private Timestamp updated_at;
}
