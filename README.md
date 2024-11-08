## Your Team Name: Team Spartan

## The names of each team member:
- Britney Jaculina
- Justin Pau
- Pranav Garg
- Tommy Dao

## This project contains the following software components: 
### For all Faculty:
- View Homepage with list of courses taught by the Faculty member in current and previous semesters
- Current courses will include Published and Unpublished courses
- Add content to Syllabus section
- View student list for each course
- View grades for each student for each course
- Assign grades
- Add Assignments and Quizzes
- Post announcements
### For Students:
- View list of enrolled courses in current and previous semesters (course enrollment is outside the scope of this application)
- For each course view content if the course is published
- View published quizzes and published assignments
- View my own grades in each enrolled course
- Set profile information including notifications
### For Admins :
- View courses by Faculty by semester
- Assign a course to a Faculty for a new semester
- View student list for each course (no grades visible)
- APIs and UI functionality will be available based on Roles specified above

## A summary of areas of contributions:

- Britney Jaculina: I worked on creating the react app and connecting it to Spring boot. I also worked on creating endpoints to get professors by semester and students by course. I also created react pages for the admin and student functionality. I collaborated with other teammates to get functionality completed for student and admin roles. I helped deploy the project to AWS and create the deployment and component diagrams.

- Justin Pau: I worked on setting up our spring boot application which served as our backend. I made models for users and courses. I also made controllers for api endpoints. Then I set up spring security and that involved refactoring roles from a string to it's own model. Users would be able to login as a certain role and be able to access certain api endpoints based on their role. I created a register and log in endpoint. When users register their password is encrypted and saved to the database. When a user logs in they get back a jwt token and the user's role. Next I worked on the react page for user log in. I made a call to the backend api and saved the token in local storage. Upon succesful log in they get redirected to a page based on their role. Finally, I did the css for each react page.

- Pranav Garg: I worked on building the backend apis like getting/updating user and course data while also building the functionality for the faculty home page. Once the project was completed I worked on deploying the java springboot app to an ec2 aws instance.  

- Tommy Dao: I worked on building multiple backend apis for users and courses such as viewing users in a course and courses taught by faculty members. Worked on the student and admin pages by building the logic to sort by semester, using endpoints to get or post data and displaying it onto the page.  I also helped deploy the project to AWS.

<br/>

## XP Core Values:
- Communication: 
We utilized communication throughout the project by consistently giving updates to the team and coming forward any issues occurred. We valued the idea of communication as it helped us find each other's strengths and weaknesses so we can assign tasks accordingly and help anyone else if needed. By giving updates to each other throughout the week, we easily found bugs and solved them in a timely manner.
- Simplicity: 
Our group utilized simplicity through our code and our team meetings. In our code, we tried keeping the code as simple as possible so that anyone that needs to look at the code or use it as reference with minimal confusion. In our team meetings, we kept our details simple to limit the amount of unnecessary comments to further improve the team's understanding of each other's work. 

## Links: 
- [GitHub Repo](https://github.com/gopinathsjsu/team-project-team-spartan/tree/main)  <br/>
- [Project Journal](https://docs.google.com/document/d/1rD8joMzc2PhJd-zIsKkEakwL9KRyt79spwHzkjfMYQw/edit?usp=sharing)<br/> 
- [JIRA](https://teamspartans.atlassian.net/jira/software/projects/SCRUM/list) <br/>
- [Wireframes and Diagrams](https://lucid.app/lucidchart/fdc3d3c1-93bb-448d-ac9e-e2991c2cc9e9/edit?viewport_loc=-1109%2C1363%2C6824%2C2836%2CmAxee0YOkF_o&invitationId=inv_7fcd7910-eeb2-4642-bc7d-9c5b07158c10)
- Burndown Chart:

![Burndown](https://github.com/gopinathsjsu/team-project-team-spartan/assets/79171004/1cfdf350-1edf-45a9-b639-4f37eadf6eb6)
All of our sprints were similar in completion
