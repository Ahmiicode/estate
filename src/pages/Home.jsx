import React from 'react'
import Banner from '../components/Banner'
import PropertyListing from '../components/PropertyListing'
import WhoWeAre from '../components/WhoWeAre'
import Services from '../components/Services'
import ExploreCities from '../components/ExploreCities'
import OurClient from '../components/OurClient'
import AllInOne from '../components/AllInOne'
import ClientsRow from '../components/ClientsRow'

const Home = () => {
  return (
    <div>
      <Banner/>
      <PropertyListing/>
      <WhoWeAre/>
      <Services/>
      <ExploreCities/>
      <OurClient/>
      <AllInOne/>
      <ClientsRow/>
    </div>
  )
}

export default Home
