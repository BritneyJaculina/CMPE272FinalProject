package com.startercanavas.canvas.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Set;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {

    @Id

    private ObjectId id;
    private String user_id;
    private String username;
    private String password;
    private String first_name;
    private String last_name;
    private String role;

    private Set<String> authenticationMethods; //password, 2FA
    private boolean active;
}
