import React from 'react';
import styled from 'styled-components';

const smallScreen = `@media(max-width: 1080px)`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;

  ${smallScreen} {
    flex-direction: column;
    align-items: center;
  }
`;

const MenuColumn = styled.section`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  ${smallScreen} {
    width: 100%;
  }
`;

const ImageColumn = styled.section`
  max-width: 100%;
  ${smallScreen} {
    order: -1;
  }
`;

const ContactName = styled.h1`
  font-size: 40px;
  margin: 10px 0 20px;
`;

const Img = styled.img`
  width: 500px;
  max-width: 100%;
  margin-bottom: 10px;
`;

const Figure = styled.figure`
  margin: 0;
`;

const Caption = styled.figcaption`
  width: 500px;
  max-width: 100%;
  font-size: 30px;
`;

const Total = styled.div`
  align-self: flex-end;
  font-size: 30px;
  margin: 50px 0 0;

  ${smallScreen} {
    margin: 0;
  }
`;

const OrderButton = styled.button`
  padding: 10px 15px;
  margin-top: 15px;
  align-self: flex-end;
  border: none;
  background-color: #e79652;
  font-size: 25px;
`;


class ContactDetails extends React.Component {
  constructor(props) {
    super(props);
    this.showViewMode = this.showViewMode.bind(this);
    this.showEditMode = this.showEditMode.bind(this);
    this.state = {isEditMode:false};
  }

  showViewMode() {
    this.setState({isEditMode:false});
  }

  showEditMode(){
    this.setState({isEditMode:true});
  }

  render() {
    
    const {
      menu,
      name,
      description,
      id,
    } = this.props.contact;
   

   if(!this.state.isEditMode){
    return (
      <Container>
        <ImageColumn>
        <ContactName>{name}</ContactName>
          <Figure>
            <Caption>{description}</Caption>
          </Figure>
          <button  onClick={this.showEditMode} >EDIT</button>
        </ImageColumn>        
      </Container>
    );
   }

   else {
    return (
      <Container>
        <ImageColumn>
        <ContactName>
        <input type="text" value={name}/>
        </ContactName>
          <Figure>
          <Caption><input type="text" value={description}/></Caption>
          </Figure>
          <button onClick={this.showViewMode}>VIEW</button>
        </ImageColumn>        
      </Container>
    );
   }
  }

  
}
export default ContactDetails;
