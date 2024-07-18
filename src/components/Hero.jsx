import React, { useState, useEffect } from "react";
import styled from "styled-components";
import homeVideo from "../assets/netflix.mp4";
import Papa from 'papaparse';

export default function Hero() {
  const [category, setCategory] = useState('movie');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('netflix_titles.csv');
        const text = await response.text();

        // Use PapaParse to parse the CSV text
        Papa.parse(text, {
          header: true,
          dynamicTyping: true,
          complete: (result) => {
            setData(result.data);
          },
          error: (error) => {
            console.error('CSV Parsing Error:', error.message);
          },
        });
      } catch (error) {
        console.error('Fetch Error:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    if (searchTerm === undefined || searchTerm.trim() === '') {
      console.log('Please enter a valid search term.');
      return;
    }

    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    const matchingMovie = data.find((row) => {
      const name = row.Name;

      if (name && typeof name === 'string') {
        return name.trim().toLowerCase() === normalizedSearchTerm;
      }

      return false;
    });

    if (matchingMovie) {
      console.log(`Movie "${searchTerm}" is present in the CSV file.`);

      if (matchingMovie.Platform?.toLowerCase() === 'nettflix') {
        console.log('Redirecting to Netflix search page...');
        window.open(`https://www.netflix.com/search?q=${encodeURIComponent(searchTerm)}`, '_blank');
      } else if (matchingMovie.Platform?.toLowerCase() === 'disney hotstar') {
        console.log('Redirecting to Hotstar search page...');
        window.open(`https://www.hotstar.com/in/search?q=${encodeURIComponent(searchTerm)}`, '_blank');
      } else if (matchingMovie.Platform?.toLowerCase() === 'amazon prime') {
        console.log('Redirecting to Amazon Prime Video search page...');
        window.open(`https://www.primevideo.com/search/ref=atv_nb_sr?phrase=${encodeURIComponent(searchTerm)}`, '_blank');
      } else {
        console.log('Platform not recognized for redirection.');
      }
    } else {
      console.log(`Movie "${searchTerm}" is not found in the CSV file.`);
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 3000);
    }
  };

  return (
    <Section id="hero">
      {showBanner && <Banner>Can't find the result</Banner>}
      <div className="background">
        <video autoPlay loop muted>
          <source src={homeVideo} type="video/mp4" />
          Your Browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <div className="title">
          <h1>Stream. Binge. Repeat.</h1>
          <p>
            Our movie platform is your one-stop destination for an unparalleled entertainment experience. Immerse yourself in a world of endless choices, where blockbuster hits, timeless classics, and hidden gems await your discovery.
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="category">Select Category:</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="movie">Movie</option>
              <option value="TV Show">TV Show</option>
            </select>
          </div>
          <div className="container">
            <label htmlFor="movieName">Search for a Movie:</label>
            <div className="input-box">
              <input
                type="text"
                id="movieName"
                placeholder="Search for a movie."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <button onClick={handleSearch}>Search</button>
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
      height: 100%;
      object-fit: cover;
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
        padding: 0 10vw;  // Adjusted to take the entire width
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: transparent;
      padding: 1rem;
      border-radius: 0.5rem;
      gap: 1rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.2rem;
          color: white;
          margin-bottom: 0.5rem;
        }
        select, .input-box {
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          padding: 0.5rem;
          background-color: #fff;
          color: #000;
          font-size: 1rem;
        }
        .input-box {
          input {
            width: 100%;
            border: none;
            background-color: transparent;
            text-align: center;
            color: #000;
            &::placeholder {
              color: #000;
            }
            &:focus {
              outline: none;
            }
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
        .container {
          padding: 0 0.8rem;
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`;

const Banner = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 1.2rem;
  z-index: 1000;
`;
