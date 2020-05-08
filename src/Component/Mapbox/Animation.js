import React, {Component} from 'react';
import AnimatedNumber from 'react-animated-number';


export default class Demo extends Component {

    static displayName = 'Demo'

    constructor() {
        super();

        this.state = {
            smallValue: 0,
            bigValue: 0,
            updates: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.update(),5000);
        this.interval = setInterval(() => this.mountUnmount(), 11000);
    }

    update() {
        const {updates} = this.state;

        this.setState({
            smallValue: this.props.data,
            bigValue: this.props.data,
            updates: updates + 1
        });
    }

    mountUnmount() {
        const {updates} = this.state;

        this.setState({
            updates: updates + 1
        });
    }

    render() {
        const {smallValue} = this.state;

        return (
            <div style={{marginTop: 50}}>
                <h4>
                    <AnimatedNumber
                        style={{
                            transition: '0.8s ease-out',
                            transitionProperty:
                                'background-color, color'
                        }}
                        frameStyle={perc => (
                            perc === 100 ? {} : {backgroundColor: 'black'}
                        )}
                        stepPrecision={0}
                        value={smallValue}
                        duration={1600}
                        formatValue={n => ` ${n} ` 
                           }/>
                </h4>
                
             
            </div>
        );
    }
}
