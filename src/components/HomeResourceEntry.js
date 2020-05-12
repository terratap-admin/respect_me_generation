import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


// Represent an entry consist of an image and a caption for each article
export const ResourceImage = (props) => {
    console.log(props.link);
    return (
        <div className="entry">
            <Image src={props.image} alt={props.title} rounded />
            <p><a href={props.link}>{props.title}</a></p>
        </div>
    )
}

class HomeResourceEntry extends React.Component{
    state = {
        entries: []
    };
    componentWillMount(){
        this.setState({ entries: this.props.resourcesEntries })
    }
    render(){
        return (
            <div>
                <h3><b>#{this.props.tagName}</b></h3>
                <Jumbotron fluid>
                    <Row>
                        
                        {(this.state.entries.map((entry)=> 
                            <Col>
                            <ResourceImage 
                                key={entry.id} 
                                title={entry.title} 
                                image={entry.image}
                                link={entry.link} />
                            </Col>
                        ))}
                            <Link to='/resources' className="btn btn-link">></Link>
                    </Row>
                </Jumbotron>
            </div>
        )
    }
}

export default HomeResourceEntry;