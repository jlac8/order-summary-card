# Make It Real - NAME OF THE PROJECT

This is a solution to the **Order summary card** project of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Tus usuarios deberían poder:

- Ver el diseño óptimo según el tamaño de pantalla de su dispositivo
- Ver hover y focus para elementos interactivos

## My process

### Built with

- React components
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Import and Export components

```js
import CardImage from "./CardImage";
import CardContent from "./CardContent";

function Card() {
  return (
    <article className="card">
      <CardImage></CardImage>
      <CardContent></CardContent>
    </article>
  );
}

export default Card;
```

### Continued development

Reacts props and tailwind.css

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Linkedin - [Juan Alva](https://www.linkedin.com/in/juan-luis-alva/)

## Acknowledgments

Make it Real
