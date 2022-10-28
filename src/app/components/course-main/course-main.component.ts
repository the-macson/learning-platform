import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { course } from 'src/app/model/course';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course-main',
  templateUrl: './course-main.component.html',
  styleUrls: ['./course-main.component.css']
})
export class CourseMainComponent implements OnInit {
  courses: course[] = [];
  constructor(private courseService : CourseService, private router : Router) { }
  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    }
  )}
  handleCourse(id : number){
    this.router.navigate(['/course', id]);
  }
}
