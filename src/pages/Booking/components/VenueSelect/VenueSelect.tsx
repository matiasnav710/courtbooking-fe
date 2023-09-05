import FormSelect from "shared/components/FromSelect/FormSelect"
import { useVenues } from "shared/hooks/venue"

const VenueSelect = () => {
    const { venues, isGettingVenues } = useVenues()

    return (
        <FormSelect isDisabled={isGettingVenues} fieldName="venue">
            <option>Select an Venue</option>
            {venues?.map?.(venue => <option key={venue.id} value={venue.id}>{venue.name}</option>)}
        </FormSelect>   
    )
}

export default VenueSelect