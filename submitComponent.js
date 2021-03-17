function SubmitComponent() {

    this.init = function (targetElement, apiUrl, getDataFunction) {
        this.targetElement = targetElement;
        this.apiUrl = apiUrl;
        this.getDataFunction = getDataFunction;
    }

    this.render = function () {
        var me = this;

        var button = document.createElement("button");
        button.appendChild(document.createTextNode("Submit"));
        button.onclick = function () {
            me.submit();
        }

        this.targetElement.appendChild(button);
    }


    this.submit = function () {
        var data = this.getDataFunction();
        console.log('posting to server: ' + JSON.stringify(data));
    }

}