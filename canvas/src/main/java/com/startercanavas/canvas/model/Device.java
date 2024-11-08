package com.startercanavas.canvas.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "devices")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Device {
    @Id
    private ObjectId id;

    private String deviceId;
    private String type;
    private String operatingSystem;

    private boolean isActive;

    // Optional: Link device to user
    private UserEntity user;

}
