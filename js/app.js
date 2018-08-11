const searchUser = document.querySelector('#searchUser');
const github = new GitHub();

searchUser.addEventListener('keyup', (event) => {
    const userText = event.target.value;
    if (userText !== '')    {
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found')   {
                // show an error message
            }
            else    {
                // show the profile with repos
            }
        });
    }
    else    {
        // empty the profile container
    }
});
