import React, { Component } from 'react';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export class TicketCounter extends Component {
    constructor(props) {
        
        super(props)
        this.state = {
            count : 0,
            price : 0,
        }
        // For Binding Event
        this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }

    increment() {
        // this.setState({ 
        //    count: this.state.count + 1
        // },
        // () => console.log("Callback Function", this.state.count)
        // )

        this.setState((prevState, props ) => ({ 
                count: prevState.count + 1,
                price: prevState.price + props.price,
                }),
        )
    }

    // decrement() {
    //     this.setState((prevState, props) => ({
    //         count: prevState.count - 1,
    //         price: prevState.price - props.price,
    //         movieName: props.movieName
    //     }),
    //     )
    // }

    // Forth Approach
    decrement = () => {
        this.setState((prevState, props) => ({
            count: prevState.count - 1,
            price: prevState.price - props.price,
            movieName: props.movieName
        }),
        )
    }

    // incrementFive() {
    //     this.increment()
    //     // this.increment()
    //     // this.increment()
    //     // this.increment()
    //     // this.increment()
    // }

    render() {
    return (
        <div className="bg-red-50 mt-5 flex flex-col flex-1 items-center justify-center p-8 transition duration-1000 transform hover:scale-105 hover:shadow-2xl rounded-lg ">
            <div>
                <h1 className="text-xl font-medium text-gray-800 grow">
                    Movie Selected : <span className="text-xl font-medium text-red-500">{this.props.movieName}</span> 
                </h1>
            </div>
            <div className="flex items-center justify-center">
                <h1 className="text-xl font-medium text-gray-500">Booked Ticket Count : <span className="text-yellow-500">{this.state.count}</span></h1> 
                {/* Using Binding Event Handlers Third Approach || Second Approach = onClick={() => this.increment()}*/}
                <button onClick={this.increment} 
                    className="flex border-1 w-18 border-gray-100 px-4 py-2 font-medium m-2 ml-8 justify-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 self-center rounded-md transition duration-1000 hover:shadow-2xl hover:scale-105">
                    <span className="flex text-2xl mr-2 justify-center"><PersonAddIcon/></span>
                    Add
                </button>
                {/* Using Binding Event Handlers First Approach = onClick={this.decrement.bind(this)}*/}
                <button onClick={this.decrement}
                    className="flex border-1 w-18 border-gray-100 p-2 px-4 m-2 justify-center font-medium bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 self-center rounded-md transition duration-1000 hover:shadow-2xl hover:scale-105">
                    <span className="flex text-2xl mr-2 justify-center"><PersonRemoveIcon/></span>
                    Remove
                </button>
            </div>
            <div className="flex mt-3 text-xl font-medium text-gray-500">
                <h1>Booked Ticket Price : <span className="text-xl font-medium text-red-500"><CurrencyRupeeIcon/>{this.state.price}</span></h1>
            </div>
        </div>
    )
    }
}

export default TicketCounter