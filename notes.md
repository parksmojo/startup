# My Experiential Notes

### Git and Github
- I learned a lot about how to deal with conflicts while pulling and pushing commits.

### AWS
- My site's elastic ip: `http://54.161.128.237/`
- connect to the back end of the instance using: `ssh -i [key pair file] ubuntu@[ip address]`
- one day i will need to upgrade to at least a t3.nano
- key pair files allow controlled access to the site

### Route 53
- My domain is `parksonline.click`
- `simon.parksonline.click` and other prefixes also route to my website

### Caddy and Encryption
- to exit VIM, press ESC and type ':wq'
- Caddy kinda just takes care of everything
- Deploy using: `./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s <subdomain>`

### HTML
- Used for the basic structure
- split into head, main, footer
- link: `<a href="link.com">Display Text</a>`
- image: `<img alt="Game Image" src="./images/game_description.png" style="width:300px;"/>`
- `<div>` and `<span>` don't do anything on their own, but are very useful with classes to link to css
- Classses can be combined, and applied with the first having the hightest priority. Ex: `class="left-align centered-dark"` will be left aligned but dark

### CSS
- Styles the page piece by piece
- Reference classes by `.class`
- `font-weight` changes bold
- `display: flex` allows spaced and adjustable aligning
- `padding` is an easy way to control spacing
- The unit for percentage of viewport hight and width is `vh` and `vw` respectively
