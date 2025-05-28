import React from 'react'

import Container from '../../ui/Container'
import Titles from '../../ui/Titles'
import SolutionsBox from '../../ui/SolutionsBox'

function Solutions() {
  const SolutionsItems = [
    {
      id: 0,
      isRight: false,
      src: '/images/Solutions/Cl.png',
      title: 'Chlorine Sensor',
      dis: 'Track chlorine levels accurately!',
      url: '/ChlorineSensor'
    }, {
      id: 1,
      isRight: true,
      src: '/images/Solutions/ED.png',
      title: 'EC/TDS Conductivity Sensor',
      dis: 'Accurately measure dissolved solids in liquids!',
      url: '/ChlorineSensor'
    }, {
      id: 2,
      isRight: false,
      src: '/images/Solutions/CTD.png',
      title: 'CTD Sensor',
      dis: 'Track chlorine levels accurately!',
      url: '/ChlorineSensor'
    }, {
      id: 3,
      isRight: true,
      src: '/images/Solutions/CTD2.png',
      title: 'CTD Sensor',
      dis: 'Monitor liquids with pressure, EC, temp for dams & oceans!',
      url: '/ChlorineSensor'
    }
  ]
  return (
    <section className='w-full h-full'>
      <Container>
        <Titles>What are our solutions?</Titles>
        <article className='flex flex-col gap-10 mt-16'>
          {SolutionsItems.map((item) => {
            return (
              <SolutionsBox key={item.id} data={item} />
            )
          })}
        </article>
      </Container>
    </section>
  )
}

export default Solutions