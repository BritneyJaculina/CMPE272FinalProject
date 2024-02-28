package com.startercanavas.canvas;

import static com.mongodb.client.model.Filters.eq;

import org.bson.Document;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class MongoDB {
    public static void main( String[] args ) {

        // path to MongoDB client; probably move this later
        String uri = "mongodb+srv://tommydao:JFSIrjp1AYzJwiKC@cmpe202.nhyxsca.mongodb.net/?retryWrites=true&w=majority";



        //Test database connection using sample data
        try (MongoClient mongoClient = MongoClients.create(uri)) {
            MongoDatabase database = mongoClient.getDatabase("sample_mflix");
            MongoCollection<Document> collection = database.getCollection("comments");

            Document doc = collection.find(eq("name", "Mercedes Tyler")).first();
            if (doc != null) {
                System.out.println(doc.toJson());
            } else {
                System.out.println("No matching documents found.");
            }
        }
    }
}