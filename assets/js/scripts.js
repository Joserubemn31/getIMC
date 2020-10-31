const form = document.getElementById('form')

form.addEventListener('submit',handleSubmit)

function handleSubmit(event) {
    event.preventDefault()

    const gender = getSelectedValue('gender')
    const age = getInputNumberValue('age')
    const weight = getInputNumberValue('weight')
    const height = getInputNumberValue('height')
    
    const imc = Math.round(weight / ((height/100) * (height/100)), -1)
    let classification = ''

    if (age == 0 || weight == 0 || height == 0) {
        window.alert('Preencha todos os campos!')
    }

    else {

        if (imc < 16.9) {
            classification = 'Muito abaixo do peso'
        } 
        
        else if (imc >= 17 && imc <= 18.4) {
            classification = 'Abaixo do peso'
        }
    
        else if (imc >= 18.5 && imc <= 24.9) {
            classification = 'Peso normal'
        }
    
        else if (imc >= 25 && imc <= 29.9) {
            classification = 'Acima do peso'
        } 
    
        else if (imc >= 30 && imc <= 34.9) {
            classification = 'Obesidade Grau 1'
        }
    
        else if (imc >= 35 && imc <= 40) {
            classification = 'Obesidade Grau 2'
        }
    
        else if (imc > 40) {
            classification = 'Obesidade Grau 3'
        }
    
        const layout = `
        <h2>Aqui está o resultado:</h2>
    
        <div class="result-content">
          <ul>
            <li>
              Seu Índice de Massa Corporal é ${imc} kg/m2.
            </li>
            <li>
              Sua classificação é ${classification}.
            </li>
          </ul>
        </div>
        `
    
        const result = document.getElementById('result')
    
        result.innerHTML = layout

    }

}

function getSelectedValue(id) {
    const select = document.getElementById(id)
    return select.options[select.selectedIndex].value
}

function getInputNumberValue(id) {
    return Number(document.getElementById(id).value)
}