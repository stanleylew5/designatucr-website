---
sidebar_label: "Learning HTML"
sidebar_position: 2
---

# DAU SWE Lesson 2

## Learning HTML

Today's lesson covers how we can improve frontend development techniques by building strong foundations in basic HTML and CSS. In order to perform any sort of frontend development using frameworks or UI libraries, understanding how to write ‘vanilla’ code is important. Long term, this will make writing harder and more advanced code easier.

### HTML Intro

- Stands for **H**yper**T**ext **M**arkup **L**anguage
- Structures a webpage and its content
- HTML is made of **elements** that are used to wrap parts of content that structure and make up a HTML document
- Elements are made of tags and content
- Tags contain the content and specify the type of element

  - An opening tag `<>`
  - A closing tag `</>`
  - Content is in between tags and is what you want to display to a webpage

    `<tag> type content here</tag>`

  Example of a paragraph tag `<p></p>`

  ```html
  <p>Welcome to Design At UCR</p>
  ```

- Elements and tags are NOT the same
  Attributes are usually used to configure and make elements behave a certain way
- attributes are make of a name value pair: `class="class name here"`
- stored in the opening tag

Here are two attributes that are used to style a element with css:

- `class`: groups similar elements together that can be reused
- `id`: uniquely defined element that exists usually on a single webpage
- `style`: peform inline styling with CSS

Example: giving a div a class name:

```html
<div class="about">here this is about</div>
```

Style the div element in css:

```css
.about {
  color: red;
}
```

HTML Template to get started:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

- html elements are usually nested for structure and readability:
- nested elements should be indented

```html
<div class="outer element">
  <p>Inner nested content</p>
</div>
```

#### Common HTML elements

- Divider: `<div></div>` creates a container for content usually flowing and usually is changed with CSS

  ```html
  <div>this is a div</div>
  ```

- Span: `<span></span>` wrap content to be styled with CSS

  ```html
  <p>
    The font is
    <span style="bold"
      >bold<span>
        here
        <p></p></span
    ></span>
  </p>
  ```

- Paragraph: `<p></p>` used for sentence or paragraph content

```html
  <p> some content here</div>
```

- Breakpoint: `<br>` creates a break between text or elements

```html
  <!-- breakpoint for content-->
  <p>line one<br>line two</div>

  <!-- breakpoint for element -->
  <div>heres some content</div><br>
```

- Head: `<head></head>` stores metadata and information that you dont want to be displayed, usually link tags

- Link: `<link>` stores links and references used in the head element

- Anchor: `<a>` turns text into a link

  ```html
  <a href="some url here">text you want to turn into a link</a>
  ```

- title: `<title></title>` used to changes the tab name

- headings: `<h1></h1>` used to specify titles or headings with 6 levels h1 -> h6

  ```html
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
  ```

## Semantic HTML

We need to be able to write semantic HTML. This means using the appropriate elements to create meaningful content on a web page. This is more than the appearance of a webpage.

- Helps search engines understand the content and structure of a website
- Makes code easier to maintain and update
- Each element has a purpose

Let's look at a few basic ones to get an idea of how semantic tags in HTML are used.

### The header tag

Used to section the top of a website usually for an introduction or navigational content and logo and branding.

```html
<header>
  <h1>DAU Website</h1>
  <nav>
    <li><a href="#">About</a></li>
    <li><a href="#">Event</a></li>
    <li><a href="#">Resources</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">Join</a></li>
  </nav>
</header>
```

### The nav tag

Used to store a section of navigation links.

```html
<nav>
  <li><a href="#">About</a></li>
  <li><a href="#">Event</a></li>
  <li><a href="#">Resources</a></li>
  <li><a href="#">Contact</a></li>
  <li><a href="#">Join</a></li>
</nav>
```

### The main tag

Used to store the main content of your webpage.

```html
<main>
  <h2>Main Content here</h2>
</main>
```

### The section tag

Used to create sections of a group page that group elements together. Group elements that are similar and related to each other inside a section tag.

```html
<section>
  <p>This is a section</p>
  <p>This is also part of the section</p>
</section>
```

### The footer tag

Used to section the bottom part of a website usually with socials, contacts, and copyright.

```html
<footer>
  <p>Thank you for visiting!</p>
  <p>&copy; 2024 DAU 2024</p>
</footer>
```

### The details and summary tags

Used to create a dropdown section of content. The summary tag defines the title of the dropdown, and details create the markup.

```html
<details>
  <summary>Frontend Languages</summary>
  <p>HTML</p>
  <p>CSS</p>
  <p>JavaScript</p>
</details>
```

### The figure and figcaption tag

Used to contain a piece of content usually a card or image inside the main tag.

````html
<figure>
  <img src="images/api.png" alt="api example" />
  <figcaption>API example</figcaption>
</figure>
```S ### The progress tag Used to mark a progress bar generated by HTML. There
are two attributes ‘value’ and ‘max’. Changing values between 0-100 and keeping
max at 100 is best. ```html
<progress value="50" max="100"></progress>
````

These are some of the most common semantic tags in HTML. They are important because they describe the purpose of an element and clearly define its meaning to the user and browser. This is important for SEO since search engines look for these tags and elements within an HTML document to understand the context of the web content.

Div and span tags are very commonly used by new developers and you should only use these as a last resort if possible. They do not convey any specific meaning other than dividing up content. It's mostly recommended to use semantic HTML tags when possible before using these tags. Note that in React and most frontend development, Divs are used a lot because elements are styled with many properties. In the end, div's will be used to do much of the work of a webpage but still learning semantic HTMl to understand html structure.

## The HTML Template Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

Use this for starting any new HTML document.

- `<!DOCTYPE html>` defines the document type in HTML for the browser.
- `<html lang="en">` defines our HTML to be written in English.
- `<head></head>` defines all non-content information and holds metadata.
- `<title>` name of the HTML document, displayed as the name of a tab on the browser.
- `<meta>` holds the encoding UTF-8 (handles text in different languages) and the responsive layout.

## Linking CSS to HTML

```html
<link rel="stylesheet" href="style.css" />
```

- `rel` tells us that this is the document's stylesheet.
- `href` is the file path or link to the .css file.

## Linking JavaScript to HTML

```html
<script src="script.js" defer></script>
```

- `src` is the file path or link to the .js file.
- `defer` is a special instruction to load all the HTML before running the JS file.

## Hyperlinking in HTML

Using hyperlinks is important because it is what makes up the internet. We want to be able to link documents and resources from other websites on our own website.

```html
<a href="https://open.spotify.com/">link to my Spotify on web</a>
```

The anchor tag is used with a href and placeholder text. If you add no context, the link won't show.

## Line Breaks and Newlines

In HTML or any code editor, creating a newline with the keyboard won't create a newline below. Use the br tag instead. Creates a new line and is usually between text.

```html
<p>
  this is <br />
  a break tag
</p>
```

Having proper HTML structuring is essential to making your document easy to read for browsers and search engines. This results in faster page load time, better and well organized CSS writing, and making your website visible.
