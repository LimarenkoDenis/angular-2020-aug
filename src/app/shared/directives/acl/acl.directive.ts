import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';



// *ngIf="condition"
@Directive({
  selector: '[appAcl]'
})
export class AclDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }


  @Input()
  set appAcl(condition: boolean) {


    console.log(localStorage.getItem('admin'));

    if (localStorage.getItem('admin')) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }


}

// {
//   '/products': ['POST', 'PUT', 'GET'],
//   '/users': []
// }


// users widget
// penceil *ngAlc="'PUT /users"
// *ngAlc=""
