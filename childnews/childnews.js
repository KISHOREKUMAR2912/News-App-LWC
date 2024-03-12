import { LightningElement,api } from 'lwc';

export default class Childnews extends LightningElement {
    @api newsArray;
    handleReturn(event){
        const e = new CustomEvent('child',{detail:{isFalse:false}});
        this.dispatchEvent(e);
    }
}