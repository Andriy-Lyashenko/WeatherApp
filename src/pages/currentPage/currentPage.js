import React from 'react'
import {connect} from 'react-redux'

const CurrentPage = props =>{
    console.log(props)
    return (
        <div>
            <h1>City{props.currentWeather.activeCity.name}, Country </h1>
        </div>

    )
}

const mapStateToProps = state => ({
    currentWeather: state.currentWeather
})

export default connect(mapStateToProps,null)(CurrentPage)