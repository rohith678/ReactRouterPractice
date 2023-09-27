import {useLoaderData,redirect} from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
   const data = useLoaderData();
   return <EventItem event={data.event}/>
}

export default EventDetailPage;

export async function loader({request, params}) {
    const id = params.eventID;
    const response = await fetch('http://localhost:8080/events/'+id);
    if(!response.ok) {
        throw new Error("cannot get data");
    }
    return response;
}

export async function action({request,params}) {
    const id = params.eventID;
    const response = await fetch('http://localhost:8080/events/'+id,{
        method:request.method
    });
    if(!response.ok) {
        throw new Error("cannot get data");
    }
    return redirect("/events");
}