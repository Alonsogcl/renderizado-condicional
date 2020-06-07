import React, {Component} from 'react' //importar librería React y el modulo component

class LoginButton extends Component{
    render(){
        return <p>Iniciar Sesión</p>
    }
}

class LogoutButton extends Component{
    render(){
        return(
            <div>
                <p>Bienvenido, usuario</p>
                <button>Cerrar Sesión</button>
            </div>
        )
    }
}

export default class ConditionalSectionPractico extends Component{ 
    constructor(){
        super()
        this.state={isUserLogged: false} 
        {/*indicará si el usuario ha iniciado sesión en la plataforma */}
    }
    render(){ 
        return(
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.isUserLogged
                    ? <LogoutButton/>
                    : <LoginButton/>  }
            </div>
        )
    }
}