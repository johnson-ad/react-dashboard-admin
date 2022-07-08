import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Analytics from './Analytics'
import FAQ from './FAQ'
import Earnings from './Earnings'
import Transfers from './Transfers'
import Profile from './Profile'

export default function Dashboard() {
    return (
        <Section>
            <Navbar />
            <div className='grid'>
                <div className='row__one'>
                    <Analytics />
                    <FAQ />
                </div>
                <div className='row__two'>
                    <Earnings />
                    <Transfers />
                    <Profile />
                </div>
            </div>
        </Section>
    )
}


const Section = styled.section`


`