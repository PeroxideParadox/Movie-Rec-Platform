import React from "react";
import styled from "styled-components";
import homeVideo from "../assets/netflix.mp4";
export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
      <video autoPlay loop muted>
        <source src={homeVideo} type="video/mp4" />
        Your Browser doest not support the video tag.
        </video>
      </div>
      <div className="content">
        <div className="title">
          <h1>Stream. Binge. Repeat.</h1>
          <p>
          Our movie platform is your one-stop destination for an unparalleled entertainment experience. Immerse yourself in a world of endless choices, where blockbuster hits, timeless classics, and hidden gems await your discovery. 
          </p>
        </div>
        <div class="search">
  
  <div class="container">
    <label for="category">Select Category:</label>
    <select id="category">
      <option value="movie">Movie</option>
      <option value="TV Show">TV Show</option>
      
      
    </select>
  </div>

  
  <div class="container">
    <label for="movieName">Search for a Movie:</label>
    <input type="text" id="movieName" placeholder="Enter movie name" />
  </div>


  <button onclick="searchMovie()">Search</button>
</div>
</div>










    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    video {
      width: 100%;
      height:100%;
      object-fit:cover:
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        background-color: rgba(255,255,255,0.5);
        label {
          font-size: 1.8rem;
          color: #03045e;
        }
        
input[type="text"]::placeholder {
  font-size: 1rem; 
}



        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      video {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;
