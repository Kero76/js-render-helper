/**
 * Private function use to render the local template.
 * 
 * @private
 */
function _renderLocalTemplate() {
    const template = new Template(
        '#local-template-id',
        '#local-template-content',
        {
            "title": "Render local template",
            "description": "I'm a template store directly on the webpage. Type <kbd>CTRL</kbd> + <kbd>U</kbd> to see in source code of the webpage."
        }
    );
    const render = new RenderLocalTemplate();

    render.render(template);
}

/**
 * Private function use to render the external template with .jsr extension.
 * 
 * @private
 */
function _renderExternalTemplateJsr() {
    const template = new Template(
        './templates/external-template.jsr',
        '#external-jsr-template-content',
        {
            "title": "Render external template.jsr",
            "description": "I'm a template store in folder <strong>templates/</strong> with <em>.jsr</em> extension !!!"
        }
    );
    const render = new RenderExternalTemplate();

    render.render(template);
}

/**
 * Private function use to render the external template with .html extension.
 * 
 * @private
 */
function _renderExternalTemplateHtml() {
    const template = new Template(
        './templates/external-template.html',
        '#external-html-template-content',
        {
            "title": "Render external template.html",
            "description": "I'm a template store in folder <strong>templates/</strong> with <em>.html</em> extension !!!"
        }
    );
    const render = new RenderExternalTemplate();

    render.render(template);
}

// Render template on page.
$(document).ready(function() {
    _renderLocalTemplate();
    _renderExternalTemplateJsr();
    _renderExternalTemplateHtml();
}); // document.ready