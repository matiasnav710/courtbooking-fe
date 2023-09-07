import FormSelect from "shared/components/FromSelect/FormSelect"
import { useGetAllSports } from "shared/hooks/sports"

const SportSelect = () => {
    const { sports, isGettingSports } = useGetAllSports()
    return (
        <FormSelect isDisabled={isGettingSports} fieldName="sport">
            <option>Sport Type</option>
            {sports?.map?.(sport => <option key={sport.id} value={sport.id}>{sport.title}</option>)}
        </FormSelect>   
    )
}

export  {SportSelect}