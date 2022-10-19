# Road Map

_March 23, 2020 by [Ruben Serra](/)_

This is the main roadmap 

## Initial Sprints

| Goal                                                                      | Progress | 
| --------------------------------------------------------------------------| -------- |
| Create main frontend skeleton (logins and main layouts) | Done |
| Create main backend, databases, user API and tokens API | Done |
| Create landing page | Done |
| Integrate login, register, recover pass and logout with backend | In Progress |
| Create form components for persons | Done |

&nbsp; 

## Company and private routes

All users (for login puposes) are stored in MongoDB. That DataBase will only have users, companies, tokens, and such.

When a user registers, must indicate a "company".

If the company exists, cannot register as "admin", must be "theacher".

Only the admin can create other admins.
==Each "company" has a unique database in MongoDB.==, that will be created at user registration

| Goal                                                                      | Progress | 
| --------------------------------------------------------------------------| -------- |
| Create company form and registration form   | in progress |
| Create User and company linking in backend | To Do |
| Create system for private routes | To Do |

&nbsp; 

## The school core

At every company database, the core thing is "session". This is a lesson, practice or even a meeting. It will have times (starting, ending), classroom assigned, teacher(s), assistants (students), equimpent required, etc.

The main idea is that the program (as soon as teachers, classrooms, subjects and equipment are completed) will be able to create a consistent AGENDA with all the sessions for the Semesters, Trimester, etc.

The user will be able to modify, create, delete, etc. But he will not have to do the timetable by hand.

This will simplifcate the task of doing impossible timetables, and it is one of the main School-Erp features.

| Goal                                                                      | Progress | 
| --------------------------------------------------------------------------| -------- |
| Create frontend "Add Lead"| in Progress |
| Create frontend "Add Staff" | To Do |
| Create frontend "Add subjects"    | To DO |
| Create frontend "Add bundle subjects "    | To DO |
| Create frontend "Add equipment"    | To DO |
| Create frontend "Add classroom"    | To DO |
| Create frontend "Add session"    | To DO |
| Backend: subjects API | To DO |
| Backend: grades API | To DO |
| Backend: bundle subjects API | To DO |
| Backend: equipment API | To DO |
| Backend: classroom API | To DO |
| Backend: leads API | To DO |
| Backend: students API | To DO |
| Backend: payments API | To DO |
| Backend: staff API | To DO |
| Backend: grades API | To DO |
| Backend: sessions API | To DO |
| Backend: tasks API | To Do |
| Backend: leadToStudent (enrol) - see notes [^1] | To Do |
| Lead to student (enroll) Backend API | To Do |
&nbsp; 

[^1] When creating an student (enrolling a lead), payments will be created. And the student will be enrrolled to the correspong sessions. ALL THE PERSONS go to the same table, a fieldd will indicate if they are Leads, Interested, Students, ex-students, teachers, admins (system) or officeAdmins (secretaries)

&nbsp; 

## Visualization

| Goal                                                                      | Progress | 
| --------------------------------------------------------------------------| -------- |
| Create frontend "See Leads", with "enroll" | To Do|
| Create frontend "See Students", with tables and options | To Do|
| Create frontend "See Student Grades", with tables and options | To Do|
| Create frontend "See Staff", with tables and options | To Do|
| Create frontend "See Staff Grades", with tables and options | To Do|
| Create frontend "See Classrooms", with tables and options | To Do|
| Create frontend "See Equipment", with tables and options | To Do|
| Create frontend "See Subjects", with tables and options | To Do|
| Create frontend "See Sessions", with tables and options | To Do|
| Create the automatic agenda creator | To DO |






