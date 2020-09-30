import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../public/app.css';

export default class Navigasyon extends Component {
constructor(props) {
    super(props);
    this.state = {
        isloggedin : true
    }
}
    
    render(){
        let {isloggedin} = this.state;

        // const loggedinCheck = (req) => {
        //     if(req.isAuthenticated()){
        //         this.setState({
        //             isloggedin : true
        //         })
        //     }
        // }
        
        // loggedinCheck();
        

        const renderAuthButton = () => {
            if (isloggedin){
                return(
                <div className="grup">
                <li className="navbar-item2" >
                    <Link to="/register" className="nav-link">Kayıt Ol</Link>
                </li>
                <li className="navbar-item2" >
                    <Link to="/signin" className="nav-link">Giriş Yap</Link>
                </li>
                </div>);
            }
            else {
                return(<h1>asd</h1>)
            }
        }

        return (

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Proje Arkadaşım </Link>
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/search" className="nav-link">Gözat</Link>
                </li>
                <li className="navbar-item">
                <Link to="/projects" className="nav-link">Projelerim</Link>
                </li>
                <li className="navbar-item" >
                    <Link to="/create" className="nav-link">Proje Oluştur</Link>
                </li>
                {renderAuthButton()}
                
                </ul>

            </div>

        </nav>

        );
    }



}