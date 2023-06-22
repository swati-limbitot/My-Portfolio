import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ContactComponent} from "./contact/contact.component";
import{ DetailsComponent} from "./details/details.component";
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { CommentComponent } from "./comment/comment.component";


const routes: Routes=[
    {path: 'details', component:DetailsComponent},

    {path: 'about', component:AboutComponent},
    {path: 'portfolio', component:PortfolioComponent},
    {path: 'contact', component: ContactComponent},
    {path:'reactiveforms', component: ReactiveformsComponent},
    {path:'comment', component: CommentComponent}
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
export const routingComponents=[DetailsComponent, AboutComponent,PortfolioComponent,ContactComponent,ReactiveformsComponent,CommentComponent]
