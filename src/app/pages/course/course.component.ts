import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { course } from 'src/app/model/course';
// import { SafePipe } from 'src/app/safe.pipe';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  id = this.router.url.split('/')[2];
  course: any;
  constructor(private router: Router,private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      this.course = data.find((course: any) => course.id == this.id);
    })
    
  }
}
