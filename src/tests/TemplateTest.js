/**
 * Pseudo unit tests to verify behavior of the libs.
 * 
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 1.0
 * @version 1.0
 * @license MIT
 */
function shouldCreateLocalTemplate() {
    // Given - When
    const template = new Template(
        '#template-id',
        '#template-content',
        {
            "msg": "Hello World"
        }
    );

    // Then
    let errorOccurred = false;

    let predicate = template.templateIdentifier === '#template-id';
    console.assert(predicate, 'templateIdentifier not valid');
    errorOccurred = predicate ? false : true;

    predicate = template.parentBlockIdentifier === '#template-content'
    console.assert(predicate, 'parentBloackIdentifier not valid');
    errorOccurred = predicate ? false : true;

    predicate = JSON.stringify(template.data) === JSON.stringify({"msg": "Hello World"});
    console.assert(predicate, 'data not valid');
    errorOccurred = predicate ? false : true;
    
    // Complete
    const $div = $('#test1');
    if (errorOccurred) {
        $div.html('<p>An error occure during shouldCreateLocalTemplate() unit test. Press <kbd>F12</kbd> for more detail about the error.</p>');
    } else {
        $div.html('<p>shouldCreateLocalTemplate() unit test work with success !</p>');
    }
}

function shouldRenderALocalTemplate() {
    // Given
    const template = new Template(
        '#template-id',
        '#test2',
        {
            "msg": "shouldRenderALocalTemplate() work successfully, because you can see this message in your html page test :p !!!"
        }
    );
    
    const render = new RenderLocalTemplate();

    // When - Then
    render.render(template);
}

function shouldRenderAnExternalTemplate() {
    // Given
    const template = new Template(
        './templates/external-template.jsr',
        '#test3',
        {
            "msg": "shouldRenderAnExternalTemplate() work successfully !!!"
        }
    );
    
    const render = new RenderExternalTemplate();

    // When - Then
    render.render(template);
}


// Execute tests.
$(document).ready(function() {
    shouldCreateLocalTemplate();
    shouldRenderALocalTemplate();
    shouldRenderAnExternalTemplate();
}); // document.ready