import { Component } from "@angular/core";  
import { GitHubService } from '../../services/github';
import { NavController } from 'ionic-angular';  
import { DetailsPage } from '../details/details';  

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [GitHubService]
})
export class HomePage {  
    public foundRepos;
    public username;

    constructor(private github: GitHubService,  
                private nav: NavController) {
    }

    getRepos() {
        this.github.getRepos(this.username).subscribe(
            data => {
                this.foundRepos = data.json();
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
    }

    goToDetails(repo) {  
        this.nav.push(DetailsPage, { repo: repo });
    }
}