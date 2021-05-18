import React, { useState } from 'react'
// import {DISHES} from '../shared/dishes';
// import {COMMENTS} from '../shared/comments';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle,Modal,ModalBody,ModalHeader } from 'reactstrap';
import {useParams} from 'react-router-dom';
import {Control,Errors,LocalForm} from 'react-redux-form';
import {useSelector,useDispatch} from 'react-redux';
import {ADD_COMMENT} from '../redux/ActionCreators';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));

export default function DisplayDishComponent() {
    let {dishId} = useParams();
    const state = useSelector(state => ({comments:state.comments,dishes:state.dishes}));
    const [dish, setDish] = useState(state.dishes.filter((dish)=>dish.id == dishId));
    const [comment,setComment] = useState(state.comments.filter((dish)=>dish.dishId == dishId))
    const [isModalOpen,setIsModalOpen] = useState(false);
    const dispatch = useDispatch()
   
    const renderDish=(dish)=> {
        if (dish != null)
        {
            // alert(JSON.stringify(dish));
            return(
                <Card key={dish.id}>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><strong>{dish.name}</strong></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
            return(
                <div></div>
            );
    }
    const renderDishComments=(dish)=>{
        if(dish!=null){
            return(
                dish.map(comment=>{
                    return(
                        <>
                        <h6>{comment.author}</h6>
                        <p>{comment.comment}</p>
                        <p>{comment.date}</p>
                        </>
                    )
                })
                
            )
            // console.log(dish.comments);
        }else{
            return <div></div>
        }
    }
    const handleSubmitForm=(val)=>{
        dispatch(ADD_COMMENT(dishId,val.rating,val.yourname,val.comment));
        setIsModalOpen(false);
        
    }
    return (
        <div className="container">
        <div className="row">
          <div  className="col-12 col-md-5 m-1">
            {/* {renderDish(this.state.selectedDish)} */}
            {renderDish(dish[0])}
          </div>
          <div  className="col-12 col-md-5 m-1">
            {/* {renderDishComments(this.state.selectedDish)} */}
            {renderDishComments(comment)}
            <button onClick={()=>setIsModalOpen(!isModalOpen)} className="btn btn-lg btn-outline-info">Submit Comment</button>
          </div>
        </div>
        <Modal isOpen={isModalOpen} toggle={()=>setIsModalOpen(!isModalOpen)}>
            <ModalHeader toggle={()=>setIsModalOpen(!isModalOpen)}>Comment Section</ModalHeader>
            <ModalBody>
               <LocalForm onSubmit={(value)=>handleSubmitForm(value)}>
                   <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <Control type="number" model=".rating" id="rating" name="rating"
                        className="form-control"
                        validators={{required}} />
                        <Errors className="text-danger" model=".rating" show="touched" messages={{required: "Required"}}/>
                   </div>
                   <div className="form-group">
                        <label htmlFor="yourname">Your Name</label>
                        <Control.text model=".yourname" id="yourname" name="yourname"
                        className="form-control"
                        validators={{required, minLength: minLength(3), maxLength: maxLength(15)}} />
                        <Errors className="text-danger" model=".yourname" show="touched" messages={{required: 'Required',minLength: 'Must be greater than 2 characters',maxLength: 'Must be 15 characters or less'}}/>
                   </div>
                   <div className="form-group">
                   <label htmlFor="comment">Comment</label>
                   <Control.textarea model=".comment" id="comment" name="comment" rows="8" className="form-control" />
                   </div>
                   <button type="submit" className="btn btn-primary">Submit</button>
               </LocalForm>
            </ModalBody>
        </Modal>
    </div>
    )
}
