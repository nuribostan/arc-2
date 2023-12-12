import React, {useEffect} from 'react'
import BackgroundTitle from '../shared/BackgroundTitle'

function Services() {

    useEffect(() => {
      const servicesCols = document.querySelectorAll('.services-col');

      servicesCols.forEach((col) => {
        col.addEventListener("click", () => {
            servicesCols.forEach((col) => col.classList.remove("col-active"));
            col.classList.add("col-active");
            }
        )
      })

    })


  return (
    <div className='servicesContainer'>
        <div className="servicesTitle">
            <BackgroundTitle bgTitle="Services" fontSize={"25"} left={18} top={-200} color={"#0b0b0b"}/>
            <h1>Our Services</h1>
        </div>

        <div className="servicesContent">
            <div className="services-col-1 services-col col-active">container house <span>Lorem, ipsum dolor.</span></div>
            <div className="services-col-2 services-col">cottage <span>Lorem, ipsum dolor.</span></div>
            <div className="services-col-3 services-col">stone house <span>Lorem, ipsum dolor.</span></div>
            <div className="services-col-4 services-col">reinforced concrete houses <span>Lorem, ipsum dolor.</span></div>
        </div>
    </div>
  )
}

export default Services