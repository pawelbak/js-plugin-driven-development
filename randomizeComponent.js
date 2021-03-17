function RandomizeComponent() {

    this.init = function (targetElement, apiUrl, dataChangedFunction) {
        this.targetElement = targetElement;
        this.apiUrl = apiUrl;
        this.dataChangedFunction = dataChangedFunction;


        this.randomFirstNames = ["John", "Betty", "Samuel", "Paul", "Jimmy", "Bill"];
        this.randomLastNames = ["Jackson", "McCartney", "Starr", "Adams", "Kowalski", "Gates"];
    }

    this.render = function () {
        var me = this;

        var button = document.createElement("button");
        button.appendChild(document.createTextNode("Randomize data"));
        button.onclick = function () {
            me.randomize();
        }

        this.targetElement.appendChild(button);
    }


    this.randomize = function () {
        var firstName = this.randomFirstNames[Math.floor(Math.random() * this.randomFirstNames.length)];
        var lastName = this.randomLastNames[Math.floor(Math.random() * this.randomLastNames.length)];

        this.dataChangedFunction({
            firstName: firstName,
            lastName: lastName
        })

    }


}