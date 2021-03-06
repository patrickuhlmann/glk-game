import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoryzonTaskComponent } from './horyzon-task/horyzon-task.component';
import { CeviAlpinTaskComponent } from './cevi-alpin-task/cevi-alpin-task.component';
import { CeviMilitaerTaskComponent } from './cevi-militaer-task/cevi-militaer-task.component';
import { EsgUnifyTaskComponent } from './esg-unify-task/esg-unify-task.component';
import { YmcaTaskComponent } from './ymca-task/ymca-task.component';
import { YwcaTaskComponent } from './ywca-task/ywca-task.component';
import { AgIntTaskComponent } from './ag-int-task/ag-int-task.component';
import { CeviVielfaltTaskComponent } from './cevi-vielfalt-task/cevi-vielfalt-task.component';
import { RegionenTaskComponent } from './regionen-task/regionen-task.component';
import { CeviSchweizTaskComponent } from './cevi-schweiz-task/cevi-schweiz-task.component';
import { CodeComponent } from './code/code.component';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { CheatComponent } from './cheat/cheat.component';
import { QuizComponent } from './quiz/quiz.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HoryzonTaskComponent,
    CeviAlpinTaskComponent,
    CeviMilitaerTaskComponent,
    EsgUnifyTaskComponent,
    YmcaTaskComponent,
    YwcaTaskComponent,
    AgIntTaskComponent,
    CeviVielfaltTaskComponent,
    RegionenTaskComponent,
    CeviSchweizTaskComponent,
    CodeComponent,
    CheatComponent,
    QuizComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
  ],
})
export class GlkModule {}
