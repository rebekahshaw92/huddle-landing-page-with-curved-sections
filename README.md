# Frontend Mentor - Huddle landing page with curved sections solution

This is a solution to the [Huddle landing page with curved sections challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

#### Desktop

![desktop](images/desktop.png)

#### Mobile

![mobile](images/mobile.png)

### Links

- Solution URL: [ Solution](https://github.com/rebekahshaw92//huddle-landing-page-with-curved-sections)
- Live Site URL: [Live Site](https://rebekahshaw92.github.io//huddle-landing-page-with-curved-sections/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Sass
- JavaScript
- Bootstrap 5
- Mobile-first workflow

### What I Learned

While understand this projetct I learnd about how to use the ::after and ::before effects in css in order to add both a top a bottom background to each section. 

```css
.grow::before {
    background: url("../images/bg-section-top-desktop-1.svg") no-repeat center top;
    background-size: 100% 165px;
    height: 165px;
  }
}
.grow::after {
  content: "";
  width: 100%;
  height: 52px;
  background: url("../images/bg-section-bottom-mobile-1.svg") no-repeat center top;
  background-size: 100% 52px;
  position: absolute;
  left: 0;
}

```

This was something that I had not worked with much before but once I got my head around how it work, I found it straight forward.

### Continued Development

I would like to continued working both with Bootstrap 5.

### Userful Resources 

- [Bootstrap](https://getbootstrap.com) - This site helped me learn all I needed to know about Bootstrap.


## Author

- Website - [Rebekah Shaw](https://www.rebekahshaw.com)
- Frontend Mentor - [@rebekahshaw92](https://www.frontendmentor.io/profile/rebekahshaw92)
- Twitter - [@x_beckyboo_x](https://www.twitter.com/x_beckyboo_x)