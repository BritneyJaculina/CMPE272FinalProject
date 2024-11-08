package com.startercanavas.canvas.model;

import java.time.LocalDateTime;

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
public class Incident {
    @Id
    private ObjectId id;

    private String type;
    private String description;

    private UserEntity user;

    private Device device;

    private LocalDateTime incidentTime;
    private String resolutionStatus;
}

