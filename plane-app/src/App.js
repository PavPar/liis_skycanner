import React, { useEffect } from 'react';
import { useState } from 'react';

import Card from './componenents/Card';
import CardGrid from './componenents/CardGrid'
import NavBar from './componenents/NavBar'
import Popup from './componenents/Popup'
import { useSelector, useDispatch } from 'react-redux'
import { setCardsArray,setCardLike } from './redux/cards'
import { addDays, format } from 'date-fns'

function App() {
  const [isPopupVisible, setPopupVisible] = useState(false)
  const [displayLiked, setDisplayLiked] = useState(false)

  const [displayingCardData, setDisplaingCardData] = useState({})

  function getFlightDates(startDate = new Date()) {
    const months = [];
    const days = []

    months.push(startDate)

    for (let i = 0; i <= 10; i++) {
      days.push(format(addDays(new Date(), i), 'yyyy-MM-dd'))
    }

    if (addDays(new Date(), 10).getMonth() !== startDate.getMonth()) {
      months.push(days[days.length - 1])
    }
    return { days, months }
  }

  function transformFlightInfo(flightInfo) {
    const Quotes = flightInfo.Quotes
    const Places = {}
    flightInfo.Places.forEach(place => {
      Places[place.PlaceId] = {
        cityName: place.CityName,
        airportName: place.IataCode,
      }
    })
    const Carriers = {}
    flightInfo.Carriers.forEach(carrier => {
      return Carriers[carrier.CarrierId] = carrier.Name;
    })

    const flights = [];

    Quotes.forEach(quote => {
      flights.push({
        id: quote.QuoteId,
        price: quote.MinPrice,
        departureDate: quote.OutboundLeg.DepartureDate.split('T')[0],
        departureTime: quote.OutboundLeg.DepartureDate.split('T')[1],
        destination: Places[quote.OutboundLeg.DestinationId].cityName,
        origin: Places[quote.OutboundLeg.OriginId].cityName,
        destinationAirport: Places[quote.OutboundLeg.DestinationId].airportName,
        originAirport: Places[quote.OutboundLeg.OriginId].airportName,
        carrier: Carriers[quote.OutboundLeg.CarrierIds[0]],
        QuoteDate: quote.QuoteDateTime.split('T')[0],
        QuoteTime: quote.QuoteDateTime.split('T')[1],

      })
    })

    return flights;
  }

  function getFlightForMonth(outbounddate) {
    return fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/RU/RUB/en-US/SVO-sky/NYCA-sky/${outbounddate}?inboundpartialdate=""`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "d24a9e4d75msh69c90aa728829dap15e46ejsn5e0816e6c825",
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject({ status: res.status, msg: res.statusText });
      })
  }

  useEffect(() => {
    // dispatch(setCardsArray([{ isLiked: true }, { isLiked: false }]))
    const { months, days } = getFlightDates();

    months.forEach(month => {
      getFlightForMonth(format(month, 'yyyy-MM'))
        .then(flights => transformFlightInfo(flights))
        .then(flights => {
          console.log(flights)
          return flights.filter(flight => {
            return days.includes(flight.departureDate)
          })
        })
        .then(flights => dispatch(setCardsArray(flights)))
        .catch(err => {
          console.error(err);
        });
    })


  }, [])

  const cards = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleCardLike({ isLiked, cardData }) {
    dispatch(setCardLike({ isLiked, cardData }))
  }

  return (
    <>
      <Popup
        isVisible={isPopupVisible}
        handleClose={() => { setPopupVisible(false) }}
        onCardLike={handleCardLike}
        displayingCardData={displayingCardData}
      />
      <NavBar setDisplayLiked={setDisplayLiked} />
      <CardGrid>
        {
          cards.map(cardData => {
            if (displayLiked && !(cardData.isLiked || false)) {
              return;
            }
            return <Card
              key={cardData.id}
              cardData={cardData}
              onCardClick={({cardData,isLiked}) => { setDisplaingCardData({cardData,isLiked}); setPopupVisible(true) }}
              onCardLike={handleCardLike}
              isAlreadyLiked={cardData.isLiked || false}
            />
          })
        }
      </CardGrid>
    </>
  );
}

export default App;
