package com.startercanavas.canvas.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Document(collection = "accounts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccessPolicy {
    @Id
    private ObjectId id;

    private String policyName;
    private String description;

    private String rules; // e.g., JSON object {"role": "HR Manager", "time": "9-5", ...}

    private List<UserEntity> allowedUsers;

    private List<Device> allowedDevices;

    private List<Resources> resources;

    // Getters and Setters
}
