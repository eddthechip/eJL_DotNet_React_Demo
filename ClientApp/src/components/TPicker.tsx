import * as React from 'react';

// Properties for the TimePicker
interface TimePickerProps {
    time?: string,             // Format "00:00". Default to 00:00 if undefined
    changeCallback?: Function  // Callback function for onChange events - optional
}

interface TimePickerState {
    hour: number,    // Restricted to between 0 and 23
    minute: number,  // Restricted to between 0 and 59
    error: string
}

// A component to display an attractive Time input
export class TPicker extends React.Component<TimePickerProps, TimePickerState> {
    constructor(props: TimePickerProps) {
        super(props)
        let startTime = {
            hour: 0,
            minute: 0
        }
        if (props.time !== undefined) {
            // Convert the time property string to numeric state using the +string operator
            startTime = {
                // Hour is first two characters of time string, or 0 if undefined
                hour: (props.time.substring(0, 2) !== undefined) ? +props.time.substring(0, 2) : 0,
                // Minute is third and fourth characters of time string, or 0 if undefined
                minute: (props.time.substring(3, 5) !== undefined) ? +props.time.substring(3, 5) : 0
            }

            console.log(props.time)
        }
        // Correct erroneous time ranges
        if (startTime.hour < 0) startTime.hour = 0;
        if (startTime.hour > 23) startTime.hour = 23;
        if (startTime.minute < 0) startTime.minute = 0;
        if (startTime.minute > 59) startTime.minute = 59;

        // Default component state
        this.state = {
            hour: startTime.hour,
            minute: startTime.minute,
            error: ''
        }

        // Function binding
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        // Prevent default
        //event.preventDefault;

        // Create a flag to determine whether to fire the changeCallback function
        let timeValid: boolean = true

        if (event.target.name === "hour") {
            this.setState({
                hour: +event.target.value
            })
            if (+event.target.value > 23 || +event.target.value < 0) {
                this.setState({
                    hour: +event.target.value,
                    error: 'Hour must be between 0 and 23'
                })

                //Prevent changeCallback firing
                timeValid = false
            } else {
                // Clear errors
                this.setState({
                    hour: +event.target.value,
                    error: ''
                })
            }
        } else {
            const newMinute = +event.target.value
            this.setState({
                minute: +event.target.value
            })
            if (+event.target.value > 59 || +event.target.value < 0) {
                this.setState({
                    minute: +event.target.value,
                    error: 'Minute must be between 0 and 59'
                })

                // Prevent changeCallback firing
                timeValid = false
            } else {
                // Clear errors
                this.setState({
                    minute: +event.target.value,
                    error: ''
                })
            }
        }

        // If time is valid, clear errors and changeCallback defined, fire a change event to the parent component
        if (timeValid && this.props.changeCallback !== undefined) {
            this.props.changeCallback(event)
        }
    }

    render() {
        const hourLeadingZeros: string = +this.state.hour < 10 ? '0' + this.state.hour : '' + this.state.hour
        const minLeadingZeros: string = +this.state.minute < 10 ? '0' + this.state.minute : '' + this.state.minute

        return (
            <span className="time-picker">
                <input
                    type="number"
                    name="hour"
                    className="time-input"
                    onChange={this.handleChange}
                    maxLength={2}
                    value={hourLeadingZeros}
                    defaultValue={0}
                />
                <strong>:</strong>&nbsp;&nbsp;&nbsp;
                <input
                    type="number"
                    name="minute"
                    className="time-input"
                    onChange={this.handleChange}
                    maxLength={2}
                    value={minLeadingZeros}
                    defaultValue={0}
                />
                <span className="error-msg">{this.state.error}</span>
            </span>
        )
    }
}