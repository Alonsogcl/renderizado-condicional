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
//En esta función se está devolviendo un elemento para poder realizar un renderizado condicional
//Lo que se retorna puede ser almacenado en una variable
/*function useConditionalRendering(mostrarA){
    if(mostrarA){
        return <ComponenteA/>
    }
        return <ComponenteB/>
}*/

//Ejemplo abstracto del condicional rendering
export default class ConditionalSection extends Component{ //Crear el componente que se exportará por default
    //Se crea un estado que servirá para determinar si debemos mostrar un componente u otro dependiendo el valor del estado
    constructor(){
        super()
        this.state={mostrarA: false}
    }
    render(){ //Primer renderizado condicional creado
        //Guardando lo que retorna la función en una variable
        //const conditionalComponent=useConditionalRendering(this.state.mostrarA)
        //Lo que evaluará el render es la constante en lugar de la llamada de la función
        
        //En lugar de utilizar una función se puede usar una ternaria para dejar el código más legible
        /*const conditionalComponent=this.state.mostrarA 
            ? <ComponenteA/>
            :<ComponenteB/>  
        En lugar de guardarse en una constante también se puede optimizar más*/
        return(
            <div>
                <h4>Conditional Rendering</h4>
                {/*<ComponenteA/>
                <ComponenteB/>*/}
                {/*Vamos a evaluar la ejecución de una función llamada useConditionalRendering en el
                render y se le pasará como parámetro el valor del state mostrarA 
                después se crea la función*/}
                {/*useConditionalRendering(this.state.mostrarA)*/}
                {/*conditionalComponent*/}
                {/*Y se borra la función*/}
                {this.state.mostrarA 
                    ? <ComponenteA/>
                    : <ComponenteB/>  }
            </div>
        )
    }
}