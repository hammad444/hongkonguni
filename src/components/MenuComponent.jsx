import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay,CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class MenuComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    
    render() {
        const menu = this.props.dishes.map((dish,index) => {
            return (
              <div key={index}  className="col-12 col-md-5 m-1">
                  <Link to={`/menu/${dish.id}`}>
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
                </Link>
              </div>
            );
        });
        // console.log(menu);
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {/* <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDishComments(this.state.selectedDish)}
                  </div>
                </div> */}
            </div>
        )
    }
}
