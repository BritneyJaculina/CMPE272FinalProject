package com.startercanavas.canvas.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;


@Document(collection = "courses")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Course {
    @Id
    private ObjectId id;
    private String courseName;
    private Boolean published;
    private List<String> announcements;
    private List<String> assignments;
    private List<String> quizzes;
    private String professorName;
    private String semester;

}
