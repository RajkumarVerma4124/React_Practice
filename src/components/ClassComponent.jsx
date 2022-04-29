import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            //className: "Class Component",
            emploeeName:"Hello Raj",
            projectName:"React Practise",
            day : new Date().getDate(),
        }
    }
    changeMessage() {
        this.setState({
            emploeeName: "Thanks For Confirmation Raj"
        })
    }
     render() {
        return(
            <div className="flex flex-col rounded-lg text-center justify-around p-10 h-96 transition duration-1000 transform hover:scale-105 hover:shadow-2xl mt-10">
                <h1 className="text-xl text-gray-800">
                    {this.props.className}
                </h1>
                <h1 className="text-xl text-red-500">
                     {this.state.emploeeName}
                </h1> 
                <h1 className="text-xl text-red-500">
                    Welcome to {this.state.projectName} Project
                </h1>
                <p className="text-lg text-gray-500">At Day {this.state.day}</p>
                <button onClick={() => this.changeMessage()} className="border-1 w-32 border-gray-100 p-2 px-4 m-2 bg-gray-200 self-center transition duration-1000 hover:shadow-2xl hover:scale-105 rounded-lg">Confirm</button>
            </div>
        )
    }
}

export default ClassComponent