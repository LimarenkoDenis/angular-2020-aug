import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from '../guards/auth.guard';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    {
        path: '',
        component: ProductListComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Product List'
        }
    },
    {
        path: 'products/:id',
        component: ProductComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Product Card',
            description: '...',
            ref: '../'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}
