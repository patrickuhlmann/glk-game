import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralTaskComponent } from './general-task/general-task.component';
import { TaskServiceComponent } from './task-service/task-service.component';

@NgModule({
  declarations: [GeneralTaskComponent, TaskServiceComponent],
  imports: [CommonModule],
})
export class GlkModule {}
