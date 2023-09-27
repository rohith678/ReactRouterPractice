import EventForm from '../components/EventForm';
import { useLoaderData } from 'react-router-dom';
const EditEventPage = () => {
    const data = useLoaderData();
    return <>
    <EventForm method="PATCH" event={data.event} />
    </>
}
export default EditEventPage;