import { Courts } from '../Courts/Courts'
import { useFormikContext } from "formik";
import { SelectBookingDate } from '../SelectBookingDate/SelectBookingDate'
import { IFormContext } from 'types/components';

export const SelectBookingBody = () => {
    const { values } = useFormikContext<IFormContext>()
    return (
        <div>
            {!values.court && <Courts />}
            {values.court && <SelectBookingDate />}
        </div>
    )
}
