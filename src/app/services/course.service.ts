import { Injectable } from '@angular/core';
import { course } from '../model/course';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses : course [];

  constructor(){
    this.courses = [
      {
        id: 1,
        name: 'Master React JS by Building Real Projects',
        description: 'Series of real-world projects that you can learn React with. Learn React hooks, React API data fetching, React Hooks, proper React project structure and much more!',
        price: 0,
        duration: 80,
        rating: 4.8,
        imageUrl: 'https://i.ytimg.com/vi/XxXyfkrP298/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCXLVXGzx1fY-WjUheP3jlNVn-QFQ',
        playlist: [
          {
            id: 1,
            name: 'Modern React Web Development Full Course - 12 Hours | 4 Real Industry Web Applications',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/XxXyfkrP298'
          },
          {
            id: 2,
            name: 'Components',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/5wtnKulcquA'
          }],
      },
      {
        id: 2,
        name: 'React',
        description: 'React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.',
        price: 200,
        duration: 20,
        rating: 4.5,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
        playlist: [
          {
            id: 1,
            name: 'Introduction',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/WZizrQiXhYo'
          },
          {
            id: 2,
            name: 'Components',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/5wtnKulcquA'
          }],
      },
      {
        id: 3,
        name: 'React',
        description: 'React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.',
        price: 200,
        duration: 20,
        rating: 4.5,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
        playlist: [
          {
            id: 1,
            name: 'Introduction',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/5wtnKulcquA'
          },
          {
            id: 2,
            name: 'Components',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/5wtnKulcquA'
          }],
      },
      {
        id: 4,
        name: 'React',
        description: 'React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.',
        price: 200,
        duration: 20,
        rating: 4.5,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
        playlist: [
          {
            id: 1,
            name: 'Introduction',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/5wtnKulcquA'
          },
          {
            id: 2,
            name: 'Components',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/5wtnKulcquA'
          }],
      },
      {
        id: 5,
        name: 'React',
        description: 'React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.',
        price: 200,
        duration: 20,
        rating: 4.5,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
        playlist: [
          {
            id: 1,
            name: 'Introduction',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/5wtnKulcquA'
          },
          {
            id: 2,
            name: 'Components',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/5wtnKulcquA'
          }],
      }
    ]
  }
  getCourses(){
    return of(this.courses);
  }
  getCourseById(id : number){
    return this.courses.find(course => course.id == id);
  }
}
