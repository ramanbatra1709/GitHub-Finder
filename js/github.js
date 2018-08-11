class GitHub    {
    constructor()   {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const profile = await   profileResponse.json();
        return {
            profile
        };
    }
}
