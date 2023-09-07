import { FC } from 'react'
import { ICourt } from 'types/entities'
import { useFormikContext } from "formik";
import './CourtCard.scss'
import { IFormContext } from 'types/components';

const CourtCard:FC<{court:ICourt}> = ({court})=>{
  const { setFieldValue } = useFormikContext<IFormContext>()
  return (
    <div className='court-card-container'>
      <div className='court-card-wrapper'>
          <div className='img-container'>
          <img src={court.image} />
          </div>
          <div className='content-container'>
              <h2>{court.name}</h2>
              <p>{court.description}</p>
              <p onClick={()=>setFieldValue('court',court.id)} className='schedule'>See Schedule</p>
          </div>
      </div>
    </div>
  )
}

export {CourtCard}