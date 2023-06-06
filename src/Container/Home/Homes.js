import  React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom"
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import '../Home/home.css'

function Homes() {
    const [content, setContent] = useState([]);
    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
    

    const contendHome = async() => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie/?&api_key=${API_KEY}`)
        setContent(data.results)
        
        
    }
    useEffect(() =>{
        contendHome();
        // eslint-disable-next-line
    },[])
    
  return (
    <main className='homePage'>
        <Container>
            <Row>
            <div className="poster">
                        <Carousel
                            showThumbs={false}
                            autoPlay={true}
                            transitionTime={3}
                            infiniteLoop={true}
                            showStatus={false}
                        >
                        {
                            content.map((content, index)=>{
                            return (<Link key={content.id} data={index} >
                                <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original${
                                content && content.backdrop_path}`}alt=""
                            />
                        </div>
                        <div className="posterImage__overlay">
                            <div className="posterImage__title">
                            {content ? content.original_title : ""}
                        </div>
                        <div className="posterImage__runtime">
                            <h3 className='coln'>Date: {content ? content.release_date : ""}</h3>
                            <h3 className='coln'>Rating:{content ? content.vote_average : ""}</h3>
                            
                        </div>
                        <div className="posterImage__description">
                        {content ? content.overview : ""}
                        </div>
                    </div>                             
                            </Link>)
                        }) 
                    }
                        </Carousel>
       
                    </div>
               
            </Row>
        </Container>

    </main>
  )
}

export default Homes