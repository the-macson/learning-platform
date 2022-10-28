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
            name: 'Build and Deploy a Better Spotify 2.0 Clone Music App with React 18! (Tailwind, Redux, RapidAPI)',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/I1cpb0tYV74'
          },
          {
            id: 3,
            name: 'Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5 | RapidAPI',
            duration: 20,
            videoUrl: 'https://www.youtube.com/embed/FHTbsZEJspU'
          },
          {
            id: 4,
            name: 'Build and Deploy a Full Stack TikTok Clone Application and Master TypeScript | Full Course (Part 1)',
            duration: 20,
            videoUrl: 'https://www.youtube.com/embed/CcBHZ0t2Qwc'
          },
          {
            id: 5,
            name: 'Build and Deploy a Modern React 18 Fitness Exercises App With APIs | RapidAPI',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/KBpoBc98BwM'
          },
          {
            id: 6,
            name: 'Build and Deploy a React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and More',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/jx5hdo50a2M'
          },
          {
            id: 7,
            name: 'Build and Deploy a Modern Full Stack ECommerce React Application with Stripe',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/4mOkFXyxfsU'
          },
          {
            id: 8,
            name: 'React JS Full Course 2022 | Build an App and Master React in 1 Hour',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/b9eMGE7QtTk'
          },
          {
            id: 9,
            name: 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/GDa8kZLNhJ4'
          },
          {
            id:10,
            name: 'Build and Deploy a Modern Full Stack Social Media App | FULL COURSE',
            duration: 20,
            videoUrl: 'https://www.youtube.com/embed/1RHDhtbqo94'
          },
          {
            id:11,
            name: 'Build and Deploy a Modern Real Estate App | React Website Tutorial',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/y47gYvXchXM'
          },
          {
            id: 12,
            name: 'Build and Deploy a React Cryptocurrency App and Master Redux Toolkit in One Video',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/9DDX3US3kss'
          },
          {
            id:13,
            name: 'Build and Deploy a Google Maps Travel Companion Application | React.js',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/UKdQjQX1Pko'
          },
          {
            id:14,
            name: 'Chat Application using React JS - Build and Deploy a Chat App in 1 Hour (Microsoft Teams)',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/jcOKU9f86XE'
          },
          {
            id:15,
            name: 'Build and Deploy a Realtime Chat Application - Socket.io, Node.js, and React.js',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/ZwFA3YMfkoc'
          }
        ],
      },
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
            name: 'Build and Deploy a Better Spotify 2.0 Clone Music App with React 18! (Tailwind, Redux, RapidAPI)',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/I1cpb0tYV74'
          },
          {
            id: 3,
            name: 'Build and Deploy a Modern YouTube Clone Application in React JS with Material UI 5 | RapidAPI',
            duration: 20,
            videoUrl: 'https://www.youtube.com/embed/FHTbsZEJspU'
          },
          {
            id: 4,
            name: 'Build and Deploy a Full Stack TikTok Clone Application and Master TypeScript | Full Course (Part 1)',
            duration: 20,
            videoUrl: 'https://www.youtube.com/embed/CcBHZ0t2Qwc'
          },
          {
            id: 5,
            name: 'Build and Deploy a Modern React 18 Fitness Exercises App With APIs | RapidAPI',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/KBpoBc98BwM'
          },
          {
            id: 6,
            name: 'Build and Deploy a React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and More',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/jx5hdo50a2M'
          },
          {
            id: 7,
            name: 'Build and Deploy a Modern Full Stack ECommerce React Application with Stripe',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/4mOkFXyxfsU'
          },
          {
            id: 8,
            name: 'React JS Full Course 2022 | Build an App and Master React in 1 Hour',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/b9eMGE7QtTk'
          },
          {
            id: 9,
            name: 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/GDa8kZLNhJ4'
          },
          {
            id: 10,
            name: 'Build and Deploy a Modern Full Stack Social Media App | FULL COURSE',
            duration: 20,
            videoUrl: 'https://www.youtube.com/embed/1RHDhtbqo94'
          },
          {
            id: 11,
            name: 'Build and Deploy a Modern Real Estate App | React Website Tutorial',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/y47gYvXchXM'
          },
          {
            id: 12,
            name: 'Build and Deploy a React Cryptocurrency App and Master Redux Toolkit in One Video',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/9DDX3US3kss'
          },
          {
            id: 13,
            name: 'Build and Deploy a Google Maps Travel Companion Application | React.js',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/UKdQjQX1Pko'
          },
          {
            id: 14,
            name: 'Chat Application using React JS - Build and Deploy a Chat App in 1 Hour (Microsoft Teams)',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/jcOKU9f86XE'
          },
          {
            id: 15,
            name: 'Build and Deploy a Realtime Chat Application - Socket.io, Node.js, and React.js',
            duration: 10,
            videoUrl: 'https://www.youtube.com/embed/ZwFA3YMfkoc'
          }
        ],
      },
    ]
  }
  getCourses(){
    return of(this.courses);
  }
  getCourseById(id : number){
    return this.courses.find(course => course.id == id);
  }
}
