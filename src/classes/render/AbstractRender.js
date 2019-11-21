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
     */
    render(template) {
        throw new Error('Must be implement by a subclass !');
    }
}