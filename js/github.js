class GitHub    {
    constructor()   {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.repositoryCount = 10;
        this.repostiorySort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const repositoriesResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repositoryCount}&sort=${this.repostiorySort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profile = await   profileResponse.json();
        const repositories = await   repositoriesResponse.json();

        return {
            profile,
            repositories
        };
    }
}
