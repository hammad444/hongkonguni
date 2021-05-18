import React from 'react';
import Menu from '../components/MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DisplayDish from './DisplayDishComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import AboutUS from './AboutComponent';
import {connect} from 'react-redux';

const mapStateToProps =state=>{
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}


class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedDish:null,
        };
      }
    
      onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
      }
    
      render() {
        // console.log(this.props);
        console.log(this.props);
        const HomePage = () => {
            return(
                <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
            );
          }
      
        return (
          <div>
            <Header/>
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path="/menu/:dishId" component={DisplayDish}/>
              <Route exact path='/contactus' component={()=><Contact/>} />
              <Route exact path='/aboutus' component={()=><AboutUS leaders={this.props.leaders}/>} />
              <Redirect to="/home" />
          </Switch>
          <Footer/>
            {/* <Header/>
            <Menu dishes={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
            <DishDetail dish={this.props.dishes.filter((dish) => dish.id === this.props.selectedDish)[0]} />
            <Footer/> */}
          </div>
        );
      }
}

export default connect(mapStateToProps)(Main);

