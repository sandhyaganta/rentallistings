import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-view-visit',
  standalone: true,
  imports: [],
  templateUrl: './view-visit.component.html',
  styleUrl: './view-visit.component.css'
})
export class ViewVisitComponent implements ICellRendererAngularComp {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

  onEdit() {
    alert(`Editing row with data: ${JSON.stringify(this.params.data)}`);
    // Implement edit logic here
  }

  onDelete() {
    alert(`Deleting row with data: ${JSON.stringify(this.params.data)}`);
    // Implement delete logic here
  }

  onView() {
    alert(`Viewing row with data: ${JSON.stringify(this.params.data)}`);
    // Implement view logic here
  }

}
