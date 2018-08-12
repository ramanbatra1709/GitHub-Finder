class UI    {
    constructor()   {
        this.profile = document.querySelector('#profile');
    }
    showProfile(user)   {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}"/>
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Repositories</h3>
            <div id="repositories"></div>
        `;
    }

    showRepositories(repositories)  {
        let output = '';
        repositories.forEach((repository) =>  {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repository.html_url}" target="_blank">${repository.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repository.stargazers_count}</span>
                            <span class="badge badge-secondary">Public Gists: ${repository.watchers_count}</span>
                            <span class="badge badge-success">Followers: ${repository.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        document.querySelector('#repositories').innerHTML = output;
    }

    showAlert(message, className) {
        this.clearAlert();
        const newDiv = document.createElement('div');
        newDiv.className = className;
        newDiv.appendChild(document.createTextNode(message));
        document.querySelector('.searchContainer').insertBefore(newDiv, document.querySelector('.search'));
        setTimeout(() => {
            this.clearAlert()
        }, 5000);
    }

    clearAlert()    {
        const existingAlert = document.querySelector('.alert');
        if (existingAlert !== null)  {
            existingAlert.remove();
        }
    }
    
    clearProfile()  {
        this.profile.innerHTML = '';
    }
}
