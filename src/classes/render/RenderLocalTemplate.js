/**
 * Subclass of the AbstractRender use to render a "local" template.
 * A local template is a template store directly in the html file like this :
 * <pre>
 *  <script id="template-id" type="text/x-jsrender">
 *      Content of the script here ...
 *  </script>
 * </pre>
 * 
 * @extends BaseRender
 * 
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 1.0
 * @version 1.0
 * @license MIT
 */
class RenderLocalTemplate extends AbstractRender {
    
    /**
     * Empty constructor with empty parameter.
     * 
     * @constructor
     * 
     * @since 1.0
     */
    constructor() {
        super();
    }

    /**
     * This method render the template from the same html page.
     * In fact, the template is in the html page and will render directly
     * without loading it. 
     * 
     * @summary Render a "local" template.
     * 
     * @param {Template} 
     *  An object Template 
     * 
     * @since 1.0
     */
    render(template) {
        const tmpl = $.templates(template.templateName);
        const htmlOutput = tmpl.render(template.data);

        $(template.parentBlock).html(htmlOutput);
    }
}