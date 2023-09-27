import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEventPage = () =>{

    return <EventForm method="POST"/>
}
export default NewEventPage;

export async function action({request,params}) {

    const data = await request.formData();
    const method = request.method;
    const enteredData = {
        title:data.get('title'),
        image:data.get('image'),
        date:data.get('date'),
        description: data.get('description'),
    }

    var url = 'http://localhost:8080/events';
    if(method==="PATCH") {
        const id = params.eventID;
        url =  'http://localhost:8080/events/' + id;
    }

    const response = await fetch(url,{
        method:method,
        body:JSON.stringify(enteredData),
        headers:{
            'Content-Type':'application/json'
        }
    });

    if(response.status===422) {
        return response;
    }

    if(!response.ok) {
        throw new Error("error in posting data")
    }

    return redirect("/events");

}