import React, { Component } from 'react'
import './bmr.css'

class bmr extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gender: '',
      weight: '',
      age: '',
      heightinfeet: '',
      heightinInches: '',
      activity: '',
      bmr: ''
    }
  }

  handleChange = (age, event) => {
    this.setState({ [age]: event.target.value })
  }

  calculationBMR () {
    let age = this.state.age
    let gender = this.state.gender
    let heightinfeet = this.state.heightinfeet
    let heightinInches = this.state.heightinInches
    let weight = this.state.weight

    if (
      age == '' ||
      gender == '' ||
      heightinfeet == '' ||
      heightinInches == '' ||
      weight == ''
    ) {
      this.setState({ error: 'All fields are required!' })
      return
    }

    let bmrcalc = ''
    let height = heightinfeet * 30.48 + heightinInches * 2.54
    if (gender == 2) {
      bmrcalc = 66 + 6.2 * weight + 12.7 * height - 6.76 * age
    } else if (gender == 1) {
      bmrcalc = 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age
    }

    this.setState({ error: '' })
    this.setState({ bmr: bmrcalc })

    let activityCalorie = ';'
    if (bmrcalc <= 1926) {
      activityCalorie
 = 'Suggestion: little or no exercise.'
    } else if (bmrcalc > 1926 && bmrcalc <= 2207) {
      activityCalorie
 = 'Suggestion: Exercise 1-3 times/week.'
    } else if (bmrcalc > 2207 && bmrcalc <= 2351) {
      activityCalorie
 = 'Suggestion: Exercise 4-5 times/week.'
    } else if (bmrcalc > 2351 && bmrcalc <= 2488) {
      activityCalorie
 =
        'Suggestion: Daily exercise or intense exercise 3-4 times/week.'
    } else if (bmrcalc > 2488 && bmrcalc <= 2796) {
      activityCalorie
 = 'Suggestion: Intense exercise 6-7 times/week.'
    } else if (bmrcalc > 2796) {
      activityCalorie
 = 'Very intense exercise daily, or physical job.'
    }
    this.setState({ sugggestion: 'Suggestion: ' + activityCalorie })

    this.setState({ error: '' })
    console.log(this.state.weight)
  }

  caloriesCalculate () {
    let resultCalorie
    if (this.state.activity) {
      resultCalorie = (
        <div className='resultCalorie'>{this.state.bmr * this.state.activity}</div>
      )
    }
    this.setState({ pal: resultCalorie })
  }

  //BMR Calculation (imperial )

  render () {
    let error
    if (this.state.error) {
      error = <div className='error'> {this.state.error}</div>
    }

    let resultBMR
    if (this.state.bmr) {
      resultBMR = <div className='result'> {this.state.bmr}</div>
    }

    let sugResult
    if (this.state.sugggestion) {
      sugResult = <div className='sugResult'>{this.state.sugggestion}</div>
    }

    let resultCalorie
    if (this.state.pal) {
      resultCalorie = <div className='sugResult'>{this.state.pal}</div>
    }

    return (
      <div id='bmrcalc'>
        <div className='form'>
          <h2>BMR &amp; Daily Calorie Calculator</h2>
          {error}
          <div className='inputwrap'>
            <label className='label'>Gender</label>
            <label>
              <input
                type='radio'
                className='genderF'
                checked={this.state.gender === '1'}
                onChange={event => this.handleChange('gender', event)}
                name='gender'
                value='1'
              />
              Female
            </label>
            <label>
              <input
                type='radio'
                className='genderM'
                checked={this.state.gender === '2'}
                onChange={event => this.handleChange('gender', event)}
                name='gender'
                value='2'
              />
              Male
            </label>
          </div>
          <div className='inputwrap'>
            <label className='label'>Weight in Pounds</label>
            <input
              type='number'
              name='weight'
              className='weight'
              onChange={event => this.handleChange('weight', event)}
              value={this.state.weight}
              min='0'
              max='999'
            />
          </div>
          <div className='inputwrap'>
            <label className='label'>Height in feet and inches</label>
            <input
              type='number'
              name='heightinfeet'
              className='heightinfeet'
              onChange={event => this.handleChange('heightinfeet', event)}
              value={this.state.heightinfeet}
              min='0'
              max='8'
            />
            <input
              type='number'
              name='heightInches'
              className='heightInches'
              onChange={event => this.handleChange('heightinInches', event)}
              value={this.state.heightinInches}
              min='0'
              max='11'
            />
          </div>
          <div className='inputwrap'>
            <label className='label'>Age in years</label>
            <input
              type='number'
              onChange={event => this.handleChange('age', event)}
              value={this.state.age}
              className='age'
              name='age'
              min='0'
              max='120'
            />
          </div>
          <button type='button' 
          classname = 'buttonstyle'
          onClick={() => this.calculationBMR()}>
            CalculateBMR
          </button>
          {resultBMR}
          {sugResult}
          <div className='workout'>
            <div className='inputwrap'>
              <label className='label'>Workout in a Week</label>
              <select
                className='activity'
                name='activity'
                value={this.state.activity}
                onChange={event => this.handleChange('activity', event)}
              >
                <option value=''>Select your Activity</option>
                <option value='1.2'>
                  Sedentary (Very little or no exercise, and desk job)
                </option>
                <option value='1.375'>
                  Lightly Active (Light exercise 1 to 3 days per week)
                </option>
                <option value='1.55'>
                  Moderately Active (Moderate exercise 3 to 5 days per week)
                </option>
                <option value='1.725'>
                  Very Active (Heavy exercise 6 to 7 days per week)
                </option>
                <option value='1.9'>
                  Extremely Active (Very intense exercise, and physical job,
                  exercise multiple times per day)
                </option>
              </select>
            </div>
            <button type='button' 
            onClick={() => this.caloriesCalculate()}
            classname = 'buttonstyle'>
              Calculate Calories
            </button>
          </div>
          <div className='calorie'>{resultCalorie}</div>
        </div>
      </div>
    )
  }
}

export default bmr
