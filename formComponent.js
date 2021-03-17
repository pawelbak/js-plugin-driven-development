function FormComponent() {

    this.init = function (targetElement, apiUrl) {
        this.targetElement = targetElement;
        this.apiUrl = apiUrl;
        this.elements = [];
    }

    this.render = function () {
        var firstNameWrapper = document.createElement("p");
        this.elements['firstName'] = document.createElement("input");
        this.elements['firstName'].type = "text";

        firstNameWrapper.appendChild(document.createTextNode("First name: "));
        firstNameWrapper.appendChild(this.elements['firstName']);


        var lastNameWrapper = document.createElement("p");
        this.elements['lastName'] = document.createElement("input");
        this.elements['lastName'].type = "text";
        lastNameWrapper.appendChild(document.createTextNode("Last name: "));
        lastNameWrapper.appendChild(this.elements['lastName']);



        this.targetElement.appendChild(firstNameWrapper);
        this.targetElement.appendChild(lastNameWrapper);
    }


    this.fillWithData = function (customer) {
        this.elements['firstName'].value = customer.firstName;
        this.elements['lastName'].value = customer.lastName;
    }

    this.getData = function () {
        return {
            firstName: this.elements['firstName'].value,
            lastName: this.elements['lastName'].value
        }
    }

}