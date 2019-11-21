# JsRender Helper

JsRender Helper is a simple librairy that makes it easy to set up and use JsRender on your personnal project.

## What is JsRender ?

JsRender is a template engine develop in JavaScript. 
You can get more information directly on the [website](https://www.jsviews.com/) or following the project on [Github](https://github.com/BorisMoore/jsrender).

## How to use JsRender Helper ?

### Import script

You just import the javascript file `jsrender-helper.lastest_version.min.js` on your project :

```
<script src="[path_to_lib]/jsrender-helper-1.0.min.js"></script>

```

### Render of template

### Render a local template

The first solution to render a template is to import a local template.  
To this, you just have to create a template like this in your *html* file. 

```html
<div id="my-template-container"></div>

<!-- Some other source code can be here ... -->

<script id="my-template-id" type="text/x-jsrender">
    <p>Hello {{:name}}</p>
</script>
```

Then, in a script tag or in a javascript file, you just add this snippet of code to process the execution of the template rendering 

```javascript
$(document).ready(function() {
    // Create template object.
    const template = new Template(
        '#my-template-id',
        '#my-template-container',
        {
            "name": "John"
        }
    );

    // Create an instance of RenderLocalTemplate.
    const render = new RenderLocalTemplate();

    // Render the template 
    render.render(template);
}); // document.ready
```

### Render an external template

The second option to render a template is to store the template into an external file and render it on your html page by loading it with an *AJAX request*.  
To this, you just have to create a template where you want in your app. For example, we create a file `./template/template.jsr` who contains the following line of code. 

```html
<p>Hello {{:name}}</p>
```

Then, in your html file, you just add the container of the future template like this.

```html
<!-- Some code here ... -->
<div id="my-template-container"></div>
<!-- Some other code here ... -->
```

To conclude, in a script tag of your html page or in a javascript file, you just add this snippet of code to process the execution of the template rendering 

```javascript
$(document).ready(function() {
    // Create template object.
    const template = new Template(
        './templates/template.jsr',
        '#my-template-container',
        {
            "name": "John"
        }
    );

    // Create an instance of RenderExternalTemplate.
    const render = new RenderExternalTemplate();

    // Render the template 
    render.render(template);
}); // document.ready
```

## Sample of code

You can get a little example of the code execution in `sample/` folder.

## Author(s)

- Nicolas GILLE - <nic.gille@gmail.com>

## Licence 

This software is under [MIT Licence](https://github.com/Kero76/js-render-helper/blob/master/LICENSE).