import React, { useState } from 'react'
import axios from 'axios'
import './nutrition.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

// const Nutrition = () => {
//return (
// export function Nutrition({data. setData}) {
//   return (
function Nutrition () {
  const [searchQuery, setSearchQuery] = useState('')
  const [nutritionData, setNutritionData] = useState([])

  const handleSearch = async () => {
    const response = await axios.get(
      'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
      {
        params: {
          query: searchQuery
        },
        headers: {
          'X-RapidAPI-Key':
            'b3dfb8f7b8msha0eaad859512734p19b383jsn246bf84a36ce',
          'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
        }
      }
    )
    console.log(response.data)
    setNutritionData(response.data)
  }

  const handleClick = async e => {
    e.preventDefault()
    if (searchQuery !== '') {
      handleSearch()
    }
  }

  return (
    <div className='food'>
      <Container>
        <Row>
          <h2 className='food-text'>What are you eating?</h2>
          <h6 className='food-text'>Search and let's find out!</h6>
          <form className='food-form' onSubmit={handleClick}>
            <input
              className='food-input'
              type='text'
              placeholder='Enter a food item'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <button className='button' type='submit'>
              Search
            </button>
          </form>
          <h6 className='food-text'>
            The following is calculated from a serving of 100g
          </h6>
          <Col>
            {nutritionData.length > 0 && (
              <div className='food-card'>
                {nutritionData.map(nutrition => (
                  <Card
                    key={nutrition.name}
                    border='dark'
                    style={{ width: '18rem' }}
                  >
                    <Card.Header>
                      <span className='food-card-text'>{nutrition.name}</span>
                    </Card.Header>
                    <ListGroup variant='flush'>
                      <ListGroup.Item>
                        Calories: {nutrition.calories}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Protein: {nutrition.protein_g}g
                      </ListGroup.Item>
                      <ListGroup.Item>
                        carbohydrates: {nutrition.carbohydrates_total_g}g
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Fat: {nutrition.fat_total_g}g
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Sugar: {nutrition.sugar_g}g
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Sodium: {nutrition.sodium_mg}mg
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Fiber: {nutrition.fiber_g}g
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                ))}
              </div>
            )}
          </Col>
        </Row>
        {/* <img className="bg-img" src="./assets/mediterranean.jpg" alt="food" /> */}
      </Container>
    </div>

    //     <Form>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control type="email" placeholder="Enter email" />
    //       <Form.Text className="text-muted">
    //         We'll never share your email with anyone else.
    //       </Form.Text>
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control type="password" placeholder="Password" />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //       <Form.Check type="checkbox" label="Check me out" />
    //     </Form.Group>
    //     <Button variant="primary" type="submit">
    //       Submit
    //     </Button>
    //   </Form>
  )
}

export default Nutrition
