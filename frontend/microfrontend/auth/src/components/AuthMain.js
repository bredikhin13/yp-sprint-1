import Header from "../../../shared/components/Header";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Register from "./Register";
import Login from "./Login";
import Footer from "../../../shared/components/Footer";

function AuthMain() {

    function onRegister({email, password}) {

    }

    function onLogin({email, password}) {

    }

    function onSignOut() {

    }

    return (
        <div className="page__content">
            <Header email={email} onSignOut={onSignOut}/>
            <Switch>
                <Route path="/signup">
                    <Register onRegister={onRegister}/>
                </Route>
                <Route path="/signup">
                    <Login onLogin={onLogin}/>
                </Route>
            </Switch>
            <Footer/>
        </div>
    )
}

export default AuthMain