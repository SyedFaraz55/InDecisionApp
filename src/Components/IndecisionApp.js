import React, { Component } from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import OptionModal from './OptionModal'

class IndecisionApp extends Component {
    
  
        state = {
            title: "Indecision App",
            subtitle: "Put your life in the hands of computer",
            options: [],
            selected:undefined
        }
      
    
    componentDidMount() {
       try {
        const options = JSON.parse(localStorage.getItem('options'))
        console.log(options);
        if(options) {
            this.setState(() => ({options}))
        }
       } catch (error) {
         console.log(error);  
       }
    }
    componentDidUpdate(prevProps,prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
    }
    handleDeleteOptions = ()=> {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption = (optionText)=> {
      this.setState((prevState) => ({
          options:prevState.options.filter(option => option !== optionText)
      }))
    }
    handlePick = ()=> {
        const { options } = this.state
        const randomNumber = Math.floor(Math.random() * options.length);
        const option = this.state.options[randomNumber]
        this.setState({selected:option})
        
    }
    handleClose = ()=> {
        this.setState({selected:undefined})
    }
    handleAddOption = (option)=> {
        if (!option) {
            return 'Enter valid value'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Already Exits !'
        } else {
            this.setState((prevState) => ({ options: prevState.options.concat(option) }))
        }
    }
    render() {

        const { title, subtitle, options } = this.state
        return (
            <div>
                <Header title={title} subtitle={subtitle}  />
                <div className="container">
                    <Action handlePick={this.handlePick} hasOptions={options.length == 0} />
                    <div className="widget">
                        <Options handleDeleteOptions={this.handleDeleteOptions} options={options} handleDeleteOption={this.handleDeleteOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                        <OptionModal selectedOption={this.state.selected} handleClose={this.handleClose} />
                    </div>
                </div>
            </div>
        )
    }
}


export default IndecisionApp