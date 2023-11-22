import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpeg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          The user interface is so intuitive and easy to navigate.Highly recommended for all movie enthusiasts!"
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Kishan Sheth</h4>
              <span>Delhi</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          The platform's layout is straightforward, making it a breeze to find new movies.
          </p>
          <div className="info">
            <img src={avatar2} alt="" />
            <div className="details">
              <h4>Raghav Rai</h4>
              <span>Mumbai</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          The selection is incredible; I never run out of things to watch. I'm impressed by the variety.
          </p>
          <div className="info">
            <img src={avatar3} alt="" />
            <div className="details">
              <h4>Liza Beth</h4>
              <span>Denmark</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
