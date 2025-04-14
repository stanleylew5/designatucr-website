---
sidebar_label: "Learning CSS"
sidebar_position: 3
---

# DAU SWE Lesson 3

## Learning CSS

CSS is a fundamental skill for anyone looking to do frontend development. While there are many JavaScript libraries and tools for building modern user interfaces, mastering CSS from the beginning and understanding its many properties and tricks will greatly simplify frontend development.

In this lesson, we cover common properties and concepts of using vanilla CSS. Later on, we will explore Tailwind and React.

### What is CSS?

- Stands for Cascading Style Sheets.
- Styles and enhances the appearance of a webpage.
- Most of the heavy lifting in frontend development involves CSS.

### Adding CSS to HTML

There are three ways to add CSS: **inline**, **internal**, and **external**.

- **Inline**: Writes CSS directly within the opening tag of an HTML element.

  ```html
  <div class="box" style="border: solid;">
    This container has a solid border
  </div>
  ```

- **Internal**: Uses the `<style></style>` tag, with CSS written within it.

  ```html
  <style>
    .box {
      border: solid;
    }
  </style>
  ```

- **External**: Stores CSS in a separate file.

  ```css title="/src/public/style.css"
  .box {
    border: solid;
  }
  ```

### CSS Selectors

Selectors are used to select elements by class, ID, or the element name itself. Here are some of the most commonly used selectors:

- **Element Selector**: Selects all elements of a given type.

  ```css
  p {
    color: blue;
  }
  ```

- **Class Selector**: Selects all elements with a given class.

  ```css
  .my-class {
    color: green;
  }
  ```

- **ID Selector**: Selects an element with a specific ID.

  ```css
  #my-id {
    color: red;
  }
  ```

- **Attribute Selector**: Selects elements with a specific attribute.

  ```css
  [type="text"] {
    color: purple;
  }
  ```

- **Descendant Selector**: Selects all elements that are descendants of a specified element.

  ```css
  div p {
    color: orange;
  }
  ```

- **Pseudo-classes**: Selects elements based on their state.

  ```css
  a:hover {
    color: pink;
  }
  ```

## Basic CSS Properties

### Color and Background

- **color**: Sets the color of text.

  ```css
  p {
    color: blue;
  }
  ```

- **background-color**: Sets the background color of an element.

  ```css
  div {
    background-color: yellow;
  }
  ```

- **background-image**: Sets an image as the background.

  ```css
  body {
    background-image: url("background.jpg");
  }
  ```

### Text

- **font-size**: Sets the size of the font.

  ```css
  h1 {
    font-size: 24px;
  }
  ```

- **font-family**: Sets the font of the text.

  ```css
  p {
    font-family: Arial, sans-serif;
  }
  ```

- **font-weight**: Sets the weight (or boldness) of the font.

  ```css
  strong {
    font-weight: bold;
  }
  ```

- **text-align**: Sets the horizontal alignment of text.

  ```css
  h1 {
    text-align: center;
  }
  ```

### Box Model

The box model defines the space an element takes up, including its content, padding, border, and margin.

- **width** and **height**: Sets the width and height of an element.

  ```css
  div {
    width: 100px;
    height: 100px;
  }
  ```

- **padding**: Sets the padding inside an element.

  ```css
  div {
    padding: 10px;
  }
  ```

- **margin**: Sets the margin outside an element.

  ```css
  div {
    margin: 20px;
  }
  ```

- **border**: Sets the border around an element.

  ```css
  div {
    border: 1px solid black;
  }
  ```

- **position**: Specifies the type of positioning method used for an element.

  ```css
  .box {
    position: absolute;
    top: 50px;
    left: 50px;
  }
  ```

  Other types of positioning include `relative`, `fixed`, `sticky`, and `static`. You can also specify the final locations of elements using `top`, `right`, `bottom`, and `left`.

  ```css
  .box {
    position: static;
  }

  .box {
    position: relative;
  }

  .box {
    position: absolute;
  }

  .box {
    position: fixed;
  }

  .box {
    position: sticky;
  }

  .box {
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  ```

- **z-index**: Sets the stack order of an element, which determines how elements overlap each other. A higher value means the element will be on top.

  ```css
  .overlay {
    z-index: 10;
  }
  ```

## Layout

### Flexbox

Flexbox is a powerful layout module that allows you to design complex layouts with ease. It gives a container the ability to alter its items' width, height, and order to best fill the available space.

Learn about flexbox in full detail here: [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

To start using flexbox, apply `display: flex` to a container.

```css
.container {
  display: flex;
}
```

The element with `display: flex` is the "flex container", and its nested elements are the "flex items".

```css
.container {
  display: flex;
  flex-direction: row;
}
```

Here are some commonly used flexbox properties to center elements:

- **justify-content**: Aligns flex items along the main axis.

  ```css
  .container {
    justify-content: center;
  }
  ```

- **align-items**: Aligns flex items along the cross axis.

  ```css
  .container {
    align-items: center;
  }
  ```

### Atomic CSS

Atomic CSS is a methodology where each class corresponds to a single CSS property, allowing for highly reusable and maintainable styles. Examples include frameworks like Tailwind CSS.

- **Example of Atomic CSS with vanilla CSS**:

  ```html
  <button class="btn btn-font-lg btn-font-blue btn-rounding">Click Me</button>
  ```

  In our css file:

  ```css
  .btn-font {
    font-size: 50px;
  }

  .btn-font-blue {
    color: blue;
  }

  .btn-rounding {
    border-radius: 25px;
  }
  ```

Atomic CSS helped inspire TailwindCSS so learn to write inline styling when transitioning to Tailwind.

- **Example of Atomic CSS with Tailwind**

  ```html
  <div class="text-center text-blue-500 bg-yellow-200 p-4 m-2">
    Atomic CSS Example
  </div>
  ```

### Benefits of Atomic CSS

- **Efficiency**: Reduced CSS file size due to reusable classes.
- **Consistency**: Consistent styling across the application.
- **Maintainability**: Easier to manage and update styles.

Atomic CSS is important to understand because it is similar to Tailwind CSS, a CSS framework used to rapidly develop website styles.
