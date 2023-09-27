import { useRouteError} from 'react-router-dom';
const ErrorPage = () =>{
    const error = useRouteError();
    return <>
    <h1>This is Error page</h1>
    <p>issue is {error.message}</p>
    </>
}

export default ErrorPage;