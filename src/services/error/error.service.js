export default (error) =>{
    
    getError(error)
    
    function getError(error) {
        
        switch (error.code) {
            case "ERR_NETWORK":
                connectionError()
                break;
            case "ERR_BAD_REQUEST":
                if (error.response.data.error) {
                    return emailAndOrPasswordInvalid()
                } else {
                    verifyFieldForm(error.response.data)
                }
                break;

        }
    }
    function connectionError() {

        let a = [{
            title: 'Erro!',
            message: 'Houve um erro ao tentarmos se conectar com a internet',
            colorName: 'red',
            showAlert: true
           }]
        return a;
    }
    function verifyFieldForm(error) {

        resetErrorValidate()

        for (let i in error) {

            let createInput = document.querySelector(`input[name=${i}]`)
            createInput.style.border = '1px solid #b53d3d'
            createInput.style.color = '#b53d3d'


            const createElementP = document.createElement('p')
            const description = document.createTextNode(error[i][0])
            
            createElementP.appendChild(description)
            createElementP.style.color = '#b53d3d'
            createInput.insertAdjacentElement('afterend', createElementP)

        }
    }
    function resetErrorValidate(){
        
        const inputs = document.getElementsByTagName('input');

        for (let i = 0; i < inputs.length; i++) {
            if(inputs[i].hasAttribute('style')){

                inputs[i].removeAttribute("style")
                inputs[i].parentElement.lastChild.remove()
            }
        }
    }
    function emailAndOrPasswordInvalid() {
       

       let a = [{
        title: 'Erro!',
        message: error.response.data.error,
        colorName: 'red',
        showAlert: false
       }]
        return a;
       
    }

    return{
      emailAndOrPasswordInvalid
    }
}
