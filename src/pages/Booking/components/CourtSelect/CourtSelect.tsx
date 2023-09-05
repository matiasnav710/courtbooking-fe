import { useFormikContext } from "formik"
import FormSelect from "shared/components/FromSelect/FormSelect"
import { useCourts } from "shared/hooks/court"
import { IFormContext } from "types/components"

const CourtSelect = () => {
    const { values } = useFormikContext<IFormContext>()
    const { courts, isGettingCourts } = useCourts(+values.venue)

    return (
        <FormSelect isDisabled={isGettingCourts} fieldName="venue">
            <option>Select a Court</option>
            {courts?.map?.(court => <option key={court.id} value={court.id}>{court.name}</option>)}
        </FormSelect>   
    )
}

export default CourtSelect