function CopyPasteComponent() {

    this.init = function (targetElement, apiUrl, dataChangedFunction) {
        this.targetElement = targetElement;
        this.apiUrl = apiUrl;
        this.dataChangedFunction = dataChangedFunction;
    }

    this.render = function () {
        var me = this;

        var copyPasteAreaWrapper = document.createElement("p");
        this.textAreaElement = document.createElement("textarea");
        this.textAreaElement.addEventListener("input", function () {
            me.textAreaChangedEvent()
        })
        copyPasteAreaWrapper.appendChild(document.createTextNode("paste data as 'name surname' here: "));
        copyPasteAreaWrapper.appendChild(this.textAreaElement);


        this.targetElement.appendChild(copyPasteAreaWrapper);
    }


    this.textAreaChangedEvent = function () {
        var data = this.textAreaElement.value;
        var splited = data.split(' ');
        if (splited.length == 2) {
            this.dataChangedFunction({
                firstName: splited[0],
                lastName: splited[1]
            })
        }
    }
   

}