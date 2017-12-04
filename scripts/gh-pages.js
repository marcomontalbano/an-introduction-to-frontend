var ghpages = require('gh-pages');

ghpages.publish('public', {
    dotfiles: false,
    branch: 'gh-pages',
    repo: 'https://' + (process.env.GH_TOKEN ? (process.env.GH_TOKEN + '@') : '') + 'github.com/marcomontalbano/an-introduction-to-frontend-for-beginners.git',
    message: 'Deploy to GitHub Pages.',
    silent: true
}, function (err) {
    if (err) {
        throw new Error(err.message);
    } else {
        console.log('Published');
    }
});
