/*
* Source for probot-welcome.
*
* For more information on building plugins:
* https://github.com/probot/probot/blob/master/docs/plugins.md
*
* To get your plugin running against GitHub, see:
* https://github.com/probot/probot/blob/master/docs/development.md
*/
module.exports = (robot) => {
  robot.on('pull_request.opened', async (context) => {
    const author = context.payload["pull_request"].user.login;
    const repo = context.payload.repository.name;
    const number = context.payload.number;
    const owner = context.payload.repository.owner.login;

    try {
      const res = await context.github.search.issues({ q: `is:pr+repo:${owner}/${repo}+author:${author}` });
      if (res.data.total_count === 0) {
        const body = "Hey! We've noticed this is your first pull request on this repo, welcome & congrats!";
        context.github.issues.createComment({ repo, number, owner, body });
        console.log('SUCCESS: Comment has been succesfully posted.');
      }
    } catch (err) {
      console.log('ERROR: An error occured when trying to post a comment.');
      console.log(err);
    }
  });
};
