const searchUser = document.querySelector('#searchUser');
const github = new GitHub();
const ui = new UI();

searchUser.addEventListener('keyup', (event) => {
    const userText = event.target.value;
    if (userText !== '')    {
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found')   {
                ui.showAlert('User not found', 'alert alert-danger');
            }
            else    {
                ui.showProfile(data.profile);
            }
        });
    }
    else    {
        ui.clearProfile();
    }
});
