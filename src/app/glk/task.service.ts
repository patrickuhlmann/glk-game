import { Injectable } from '@angular/core';
import { Task } from './model/task';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks: Task[] = [
    { title: 'Horyzon', link: '/tasks/horyzon', code: 'WDZQ' },
    { title: 'Cevi Alpin', link: '/tasks/cevi_alpin', code: 'JTRM' },
    { title: 'Cevi Militär', link: '/tasks/cevi_militaer', code: 'NFAA' },
    { title: 'ESG, Unify', link: '/tasks/esg_unify', code: 'GGUB' },
    { title: 'YMCA', link: '/tasks/ymca', code: 'TUTM' },
    { title: 'YWCA', link: '/tasks/ywca', code: 'FXKN' },
    { title: 'AG International', link: '/tasks/ag_int', code: 'YWUJ' },
    { title: 'Cevi Vielfalt', link: '/tasks/vielfalt', code: 'PNAL' },
    { title: 'Regionen', link: '/tasks/regionen', code: 'MLGB' },
    { title: 'Cevi Schweiz', link: '/tasks/cevi_schweiz', code: 'XKJW' },
    { title: 'Hasliberg', link: '/tasks/hasliberg', code: 'HASL' },
  ];

  constructor(private storage: StorageService) {}

  public taskFromCode(code: string): Task | undefined {
    return this.tasks.find((t) => t.code === code);
  }

  public isUrlUnlocked(url: string): boolean {
    const unlockedTasks = this.storage.getUnlockedTasks();
    if (unlockedTasks == null) {
      return false;
    }
    const uriTask = unlockedTasks.find((t) => t.link == url);
    return uriTask != null;
  }
}
