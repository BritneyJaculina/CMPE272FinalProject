package com.startercanavas.canvas;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChaseController {

    @RequestMapping
    public String index() {
        //default path
        return "welcome to canvas, the greatest website on earth";
    }

    @RequestMapping("/show")
    public String show() {
        //path for http://localhost:8080/show
        return "Your classes are...";
    }

    @RequestMapping("/adminHomepage")
    public String adminHomepage() {
        //path for http://localhost:8080/adminHomepage
        return "This is the admin homepage";
    }
}
