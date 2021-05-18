import React,{useEffect} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import Axios from 'axios';

function RenderCard({item}) {


    useEffect(()=>{
        getData()
    },[])
    const getData = async() =>{
        const result = await Axios.post("http://localhost:4000/post",{data:"My test data"})
        console.log("Data",result);
    }


    // console.log(item,"item");
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    console.log("Home",props);
    return(
        <div className="container">
        <div className="row align-items-start">
            <div className="col-12 col-md m-1">
                <RenderCard item={props.dish} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.leader} />
            </div>
        </div>
    </div>
    );
}

export default Home;   