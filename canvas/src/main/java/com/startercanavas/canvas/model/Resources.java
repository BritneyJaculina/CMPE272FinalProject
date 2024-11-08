package com.startercanavas.canvas.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "resources")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Resources {
    @Id
    private Long id;

    private String name;          // e.g., "Customer Data", "Loan Processing App"
    private String type;          // e.g., "application", "database", "network_segment"
    private String sensitivityLevel; // e.g., "high", "medium", "low"

    private AccessPolicy accessPolicy;

    // Any additional security controls related to the resource
    private boolean requiresMFA;  // e.g., does access require MFA?

    private String location; // Physical or network location

    // Getters and Setters
}
