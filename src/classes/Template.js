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
    constructor(templateName, parentBlock, data) {
        this.templateName = templateName;
        this.parentBlock = parentBlock;
        this.data = data;
    }
}