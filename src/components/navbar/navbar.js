import React from 'react'
import './navbar.scss'
import {Route} from 'react-router-dom'
import CurrentPage from '../../pages/currentPage/currentPage'
import FiveDaysPage from '../../pages/fiveDaysPage/fiveDaysPage'
import WeatherService from '../../services/index'

import {connect} from 'react-redux'

import setAtiveCity from '../../actions/setActiveCity';

const service = new WeatherService()

class Navbar extends React.Component{
    state={
        cityValue: ""
    }

    handleChange = (e) =>{
        this.setState({cityValue: e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        service.getWeatherCity(this.state.cityValue).then(res => res.json()).then(data=> {
            this.props.setActiveCity(data)
        })
    }

    render(){
        console.log(this.props)
        return (
        <div className="col-lg-10">
            <div className="navbar">
                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.handleChange} type="search" value={this.state.value}/>
                    <input onSubmit={this.handleSubmit} type="submit"/>
                </form>
            </div>
            <Route exact path="/" component={CurrentPage}/>
            <Route path="/forFiveDays" component={FiveDaysPage}/>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setActiveCity: (city) => dispatch(setAtiveCity(city))
    }
}

const mapStateToProps = state => ({
    currentWeather: state.currentWeather
})

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
