import {Page} from 'ionic-framework/ionic';
import {GitHubService} from '../../services/github';

@Page({
    templateUrl: 'build/pages/home/home.html',
    providers: [GitHubService]
})
export class HomePage {
    public foundRepos;
    public username;
 
    constructor(private github: GitHubService) {
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
}