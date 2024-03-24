// Console check (: 
console.log("Laat de hel beginnen...")



//XP balk
class ProgressBar {
    constructor (element, initialValue = 0){
        this.valueElem = element.querySelector('.progress-bar-value');
        this.fillElem = element.querySelector('.progress-bar-fill');

        this.setValue(initialValue);
    }
    // Zorgt ervoor dat de 'value' niet onder 0 en boven 100 komt
    setValue (newValue){
        if (newValue < 0){
            newValue = 0
        }

        if (newValue > 100){
            newValue = 100
        }

        this.value = newValue
        this.update()
    }

    update(){
        const percentage = this.value + '%'; 

        this.fillElem.style.width = percentage;
        this.valueElem.textContent = percentage;
    }
}
// Begin stand van de 'value' 
const pb = new ProgressBar(document.querySelector('.progress-bar'), 100);






