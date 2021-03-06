import React from 'react';
import styled from 'styled-components';
import Search from './Search/Search';
import device from '../Responsive/Device';
import Result from './Result/Result';
import Error from './Error';

const AppTitle = styled.h1`
  display: block;
  height: 64px;
  margin: 0;
  padding: 20px 0;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 400;
  color: #000;
  transition: 0.3s 1.4s;
  font-family: 'Poppins', 'Montserrat', sans-serif;
  opacity: ${({ label }) => (label ? 1 : 0)};

  ${({ secondary }) =>
    secondary &&
    `
    opacity: 1;
    height: auto;
    position: relative;
    padding: 20px 0;
    font-size: 30px;
    top: 20%;
    text-align: center;
    transition: .5s;
    @media ${device.tablet} {
      font-size: 40px;
    }
    @media ${device.laptop} {
      font-size: 50px;
    }
    @media ${device.laptopL} {
      font-size: 60px;
    }
    @media ${device.desktop} {
      font-size: 70px;
    }
    
  `}

  ${({ result }) =>
    result &&
    `
    opacity: 0;
    visibility: hidden;
    top: 10%;
  `}
`;

const WeatherWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  height: calc(100vh - 64px);
  position: relative;
`;

class App extends React.Component {
  state = {
    value: '',
    weatherInfo: null,
    error: false,
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSearch = e => {
    e.preventDefault();
    const { value } = this.state;
    const API_KEY = 'Your API key here';

    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${API_KEY}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=${API_KEY}&units=metric`;

    Promise.all([fetch(weather), fetch(forecast)])
      .then(([res1, res2]) => {
        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()]);
        }
        throw Error(res1.statusText, res2.statusText);
      })
      .then(([data1, data2]) => {
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'Nocvember',
          'December',
        ];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
          months[currentDate.getMonth()]
        }`;
        const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
        const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);

        const weatherInfo = {
          city: data1.name,
          country: data1.sys.country,
          date,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
          forecast: data2.list,
        };
        this.setState({
          weatherInfo,
          error: false,
        });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);

        this.setState({
          error: true,
          weatherInfo: null,
        });
      });
  };

  render() {
    const { value, weatherInfo, error } = this.state;
    return (
      <>
        <AppTitle label={(weatherInfo || error) && true}>Weather app v.2</AppTitle>
        <WeatherWrapper>
          <AppTitle secondary result={(weatherInfo || error) && true}>
            Weather app v.2
          </AppTitle>
          <Search
            value={value}
            result={(weatherInfo || error) && true}
            change={this.handleInputChange}
            submit={this.handleSearch}
          />
          {weatherInfo && <Result weather={weatherInfo} />}
          {error && <Error error={error} />}
        </WeatherWrapper>
      </>
    );
  }
}

export default App;
