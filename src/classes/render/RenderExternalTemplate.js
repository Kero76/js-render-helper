/** 
 * Sub-class of the BaseRender use to render a external template.
 * An external template is a template store in a specific file outside the html page.
 * 
 * @extends BaseRender
 * 
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 1.0
 * @version 1.0
 * @license MIT
 */
class RenderExternalTemplate extends AbstractRender {
    
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
     * This method render a template from an ajax request.
     * In fact, the template must be placed in separate file and 
     * it must be download to show on the final render page. 
     * 
     * @summary Render a "external" template.
     * 
     * @param {Template} 
     *  An object Template 
     * 
     * @since 1.0
     */
    render(template) {
        $.when(
            $.get(template.templateName)
        ).done(function(tmplData) {
            $.templates({ tmpl: tmplData });
            $(template.parentBlock).html($.render.tmpl(template.data));
        });
    }
}