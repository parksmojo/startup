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

### Console
- `chmod -x` enables executability
- `grep` search by regular expression
- `less` interactive file output
- `ps` view processes

### HTML
- Used for the basic structure
- body element split into header, main, footer
- link: `<a href="link.com">Display Text</a>`
- image: `<img alt="Game Image" src="./images/game_description.png" style="width:300px;"/>`
- `<div>` and `<span>` don't do anything on their own, but are very useful with classes to link to css
- Classses can be combined, and applied with the first having the hightest priority. Ex: `class="left-align centered-dark"` will be left aligned but dark

### CSS
- Styles the page piece by piece
- In the HTML file is held in a `<style>` element
- Is imported from another file with `<link rel="stylesheet" href="file.css" />`
- Reference classes by `.classname` and IDs by `#idname`
- `font-weight` changes bold
- `display: flex` allows spaced and adjustable aligning
- `padding` is an easy way to control spacing
- Box order: content, padding, border, margin
- Other Common Units:

| Unit | Desc |
| ----- | ----- |
| px | pixels |
| % | percentage of parent element |
| em | multiplier of the width of the letter m in the parent's font |
| rem | multiplier of m in root's font |
| vh/vw | percentage of viewport's hight\width |
| vmin/vmax | percentage of viewport's smaller\larger dimension |


### JavaScript
- Ways to include in HTML:
  - `<script src="file.js"></script>`
  - `<script>console.log('cool');</script>`
  - `<button onclick="console.log('cool');">press me</button>`
- Console methods:
  - output with `console.log('hello world')`
  - `console.time('time name')` starts a stopwatch that `console.timeEnd('time name')` returns
  - `console.count('a')` reterns frequency every time it is run
- `let` and `const` declare variables
- `==` includes type conversion, the strict equality (`===`) operator should be used
- Compact if/else: `a === 1 ? console.log(1) : console.log('not 1');`
- `for in` iterates over property names, while `for of` iterates over property values
- RegEx
  - surrounded by `/`, ex: `const literalRegex = /ab*/i;`
  - or through a class: `new RegExp('ab*', 'i');`
  - Flags:
    - i: case-insensitive
    - g: global search
    - d: generates indices for substring matches
- Rest takes the rest of the input things, ex: `function hasNumber(num, ...list){}` will take the rest of the paramaters and put them into `list`
- Spread does the opposite: `person(...['Ryan','Dahl']);`
- Destructuring is like reverse array making: `a = [1,2,3]; [b,c=6] = a`
- Modules are made available in one file (`export function alertDisplay(msg){}`) and accessed in another (`import { alertDisplay } from './alert.js`)
- the DOM is accessed using `document`, an element in all HTML
- `localStorage.setItem('user', user);` and `localStorage.getItem('user');` are used to store information in the user's browser
- String functions:

| Function      | Meaning                                                      |
| ------------- | ------------------------------------------------------------ |
| length        | The number of characters in the string                       |
| indexOf()     | The starting index of a given substring                      |
| split()       | Split the string into an array on the given delimiter string |
| startsWith()  | True if the string has a given prefix                        |
| endsWith()    | True if the string has a given suffix                        |
| toLowerCase() | Converts all characters to lowercase                         |

### Node.js and Express
- middleware works between the static files and the web