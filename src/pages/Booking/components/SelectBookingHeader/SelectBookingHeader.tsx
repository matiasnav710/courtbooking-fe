import VenueSelect from '../VenueSelect/VenueSelect'
import { SportSelect } from '../SportSelect/SportSelect'
import { useFormikContext } from "formik";
import { IFormContext } from 'types/components';
import './SelectBookingHeader.scss'
import { useGetAllCourts } from 'shared/hooks/court';
import { useEffect, useState } from 'react';
import { ICourt } from 'types/entities';

function SelectBookingHeader() {
    const { values, setFieldValue } = useFormikContext<IFormContext>()
    const { courts: courtsData } = useGetAllCourts()
    const [selectedCourt, setSelectedCourt] = useState<ICourt | null>(null)
    useEffect(() => {
        if (!values.court) return
        const court = courtsData?.find(court => court.id === Number(values.court))
        setSelectedCourt(court || null)
    }, [courtsData && values.court])
    return (
        <>
            {
                !values.court && <div className='filter-container'>
                    <VenueSelect />
                    <SportSelect />
                </div>
            }
            {
                values.court && <div className='select-date-header'>
                    <p onClick={() => {
                        setFieldValue("court", null)
                    }} className='back-btn'>&larr;</p>
                    <p className='court-name'>{selectedCourt?.name}</p>
                </div>
            }

        </>
    )
}

export { SelectBookingHeader }