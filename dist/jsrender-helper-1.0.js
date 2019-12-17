/**
 * A simple POJO who contains all data used to render the template.
 * 
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 1.0
 * @version 1.0
 * @license MIT
 */
class Template {
    /**
     * Constructor of a template class who contains the data use to render the template in view.
     * 
     * @constructor
     * 
     * @param {string} templateName 
     *  The template identifier.
     * @param {string} parentBlock 
     *  The parent block identifier.
     * @param {JSON} data 
     *  All data show when the template is render as a json object.
     * 
     * @since 1.0
     */
    constructor(e, t, r) {
        this.templateName = e, this.parentBlock = t, this.data = r;
    }
}

/**
 * This is an abstract class who contains an abstract method <em>render()</em> must be override by subclasses. 
 * Each subclasses can implements this method from differents way to render the template.
 * 
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 1.0
 * @version 1.0
 * @license MIT
 */
class AbstractRender {
    /**
     * Empty constructor with empty parameter.
     * 
     * @constructor
     * 
     * @since 1.0
     */
    constructor() {}
    /**
     * Render a template from the instance of Template send in parameter.
     * This method must be implemented on subclasses with a specifical behavior
     * to render the template.
     * 
     * @summary Render a template.
     * @abstract
     * 
     * @param {Template} 
     *  An instance of Template.
     * @throws 
     *  A message indicating to implements the method in the subclass.
     * 
     * @since 1.0
     */    render(e) {
        throw new Error("Must be implement by a subclass !");
    }
}

/** 
 * Sub-class of the BaseRender use to render a external template.
 * An external template is a template store in a specific file outside the html page.
 * 
 * @extends AbstractRender
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
     */    render(e) {
        $.when($.get(e.templateName)).done(function(t) {
            $.templates({
                tmpl: t
            }), $(e.parentBlock).html($.render.tmpl(e.data));
        });
    }
}

/**
 * Subclass of the AbstractRender use to render a "local" template.
 * A local template is a template store directly in the html file like this :
 * <pre>
 *  <script id="template-id" type="text/x-jsrender">
 *      Content of the script here ...
 *  </script>
 * </pre>
 * 
 * @extends AbstractRender
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
     */    render(e) {
        const t = $.templates(e.templateName).render(e.data);
        $(e.parentBlock).html(t);
    }
}