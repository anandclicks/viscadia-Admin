import React, { useState } from 'react'
import CaseStudiesAndWhitePaperFilter from '../components/common/CaseStudiesAndWhitePaperFilter'
import CaseStudiesListing from '../components/CaseStudiesPage/CaseStudiesListing';
import WhitePaperListing from '../components/WhitePaperPage/WhitePaperListing';
const CaseStudiesPage = () => {
      const [active, setActive] = useState(0);
    
  return (
    <div>
      <CaseStudiesAndWhitePaperFilter active={active} setActive={setActive}/>
        {active ?  <CaseStudiesListing/> : <WhitePaperListing/>}
    </div>
  )
}

export default CaseStudiesPage
