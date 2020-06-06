import React, {Component} from 'react' //importar librería React y el modulo component

class ComponenteA extends Component{
    render(){
        return <p>Componente A</p>
    }
}

class ComponenteB extends Component{
    render(){
        return <p>Componente B</p>
    }
}

function useConditionalRendering(mostrarA){
    if(mostrarA){
        return <ComponenteA/>
    }
        return <ComponenteB/>
}

//Ejemplo abstracto del condicional rendering
export default class ConditionalSection extends Component{ //Crear el componente que se exportará por default
    //Se crea un estado que servirá para determinar si debemos mostrar un componente u otro dependiendo el valor del estado
    constructor(){
        super()
        this.state={mostrarA: true}
    }
    render(){ //Primer renderizado condicional creado
        return(
            <div>
                <h4>Conditional Rendering</h4>
                {/*<ComponenteA/>
                <ComponenteB/>*/}
                {/*Vamos a evaluar la ejecución de una función llamada useConditionalRendering en el
                render y se le pasará como parámetro el valor del state mostrarA */}
                {useConditionalRendering(this.state.mostrarA)}
            </div>
        )
    }
}