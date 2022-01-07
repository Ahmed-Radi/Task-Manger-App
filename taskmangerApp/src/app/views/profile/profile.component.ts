import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/interface/tasksInterface';
import { Users } from 'src/app/interface/userInterface';
import { TasksService } from 'src/app/services/tasks.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Users = {};
  tasks: Tasks = {};
  file:any;
  constructor(private usersService: UsersService, private tasksService: TasksService) { }

  profile() {
    this.usersService.profile().subscribe({
      next:(res:any)=> {
        // console.log(res)
        this.user = res
        // console.log(this.user.name)
      }
    })
  }

  deleteImage() {
    this.usersService.deleteImage().subscribe(()=> {})
  }

  getTask() {
    this.tasksService.getTask().subscribe({
      next: (res:any) => {
        this.tasks = res
      }, error: (httpError:any) => {
        // console.log(httpError)
      }
    })
  }

  taskLengthen(task:any) {
    return task.length
  }

  ngOnInit(): void {
    this.profile()
    this.getTask()
  }

}
