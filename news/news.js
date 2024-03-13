import { LightningElement } from 'lwc';

export default class News extends LightningElement {
    arrayValues=[]; countryValue='';categoryValue='';isSelected=false; 
    get countryOptions() {
        return [
            { label: 'India', value: 'in' },
            { label: 'USA', value: 'us' },
            { label: 'UK', value: 'gb'}
        ];
    }
    get categoryOptions() {
        return [
            { label: 'General', value: 'general' },
            { label: 'Entertainment', value: 'entertainment' },
            { label: 'Sports', value: 'sports'},
            { label: 'Business', value: 'business'}
        ];
    }
    handleChange(event){
        const{name,value}=event.target;
        if(name=='country'){
            this.countryValue=value;
        }
        if(name=='category'){
            this.categoryValue=value;
        }
    }
    async handleClick(event){
        try{
            let url = `https://gnews.io/api/v4/top-headlines?category=${this.categoryValue}&lang=en&country=${this.countryValue}&max=10&apikey=091b60a5148f2662e617c18f37cdbbd8`;
            let response = await fetch(url,{method:"GET"});
            let data = await response.json();
            this.arrayValues=data.articles;
            console.log(this.arrayValues); 
            this.isSelected=true;
        }
        catch(e){
            console.log(e)
        }  
    }
    handleChild(event){
        this.isSelected=event.detail.isFalse;
        this.countryValue='';
        this.categoryValue='';
    }
}