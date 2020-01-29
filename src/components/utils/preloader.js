import React from 'react';

class Preloader extends React.Component{
    state={
        icon: 1
    }

    componentDidMount(){
        this.myInterval()
    }

    myInterval = () => {
        setInterval(() => {
            if(this.state.icon < 6){
            this.setState({ icon : this.state.icon +1})
            }else{
                this.setState({ icon: 1})
            }
        }, 120)
    }

    componentWillUnmount(){
        clearInterval(this.myInterval);
    }

    render(){
        return(
            <div className='preloader'>
                <div className='icons-container'>
                    {this.state.icon === 1 && <i className="material-icons">sports_baseball</i>}
                    {this.state.icon === 2 && <i className="material-icons">sports_soccer</i>}
                    {this.state.icon === 3 && <i className="material-icons">sports_tennis</i>}
                    {this.state.icon === 4 && <i className="material-icons">sports_cricket</i>}
                    {this.state.icon === 5 && <i className="material-icons">sports_volleyball</i>}
                    {this.state.icon === 6 && <i className="material-icons">sports_esports</i>}
                </div>
            </div>
        )
    }
}

export default Preloader;