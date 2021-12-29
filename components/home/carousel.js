import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBCol,
  MDBBox,
    MDBRow
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner>
          <MDBRow>
        <MDBCarouselItem className='active'>
        <MDBCol 
          md='4' 
          >
          <MDBBox>   
          <MDBCarouselElement  src='https://firebasestorage.googleapis.com/v0/b/rainbow-temp.appspot.com/o/blogImages%2Fimages_unsplash_com-photo-1562592619-908ca07deace%20(1).webp?alt=media&token=7377bc09-c549-43bb-bf32-e6b390e2f65f' alt='...' />
          </MDBBox>
          </MDBCol>
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
          
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp' alt='...' />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp' alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        </MDBRow>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}