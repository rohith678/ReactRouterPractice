import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEventPage = () =>{

    return <EventForm/>
}
export default NewEventPage;

export async function action({request,params}) {

    const data = await request.formData();
    const enteredData = {
        title:data.get('title'),
        image:data.get('image'),
        date:data.get('date'),
        description: data.get('description'),
    }

    const response = await fetch('http://localhost:8080/events',{
        method:'POST',
        body:JSON.stringify(enteredData),
        headers:{
            'Content-Type':'application/json'
        }
    });
    if(!response.ok) {
        throw new Error("error in posting data")
    }

    return redirect("/events");

}