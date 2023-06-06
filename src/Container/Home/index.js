import  React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import CardMoviesComponents from '../../Components/CardMovies';
import PaginationComponent from '../../Components/Pagination';
import Homes from './Homes';

const  HomeContainer = ()=>{
    const [content, setContent] = useState([]);
    const [pageno, setPageno] = useState(1)
    const [paginationno, setPaginationno] = useState(0)
    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
    

    
    const GetDataTrending = async ()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`)
        console.log('data', data.results)
        setContent(data.results);
        setPaginationno(data.total_pages);
    }

    const handleClick = (number)=>{
        setPageno(number);
    }
    useEffect(()=>{
        GetDataTrending();
        //eslint-disable-next-line
    }, [pageno])
    return (
        <main className='homePage'>
            <Container>
                <Row>
                    <Homes />
                    {
                        content && content.length > 0 ? content.map((item, index)=>{
                            return (<CardMoviesComponents key={index} data={item} />)
                        }) : 'Loading ....'
                    }

                {
                    paginationno && paginationno > 1 ? <PaginationComponent maxnum={paginationno} activenum={pageno} handleClick={handleClick}/> : ''
                }
                </Row>
            </Container>
        </main>
    )
}

export default HomeContainer;