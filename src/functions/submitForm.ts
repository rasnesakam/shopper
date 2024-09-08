import {FormEvent} from "react";



export function submitHandler(callback: (x: Response) => Promise<any> | void): (form: FormEvent<HTMLFormElement>) => void {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let url = event.currentTarget.action;
        let method = event.currentTarget.method;

        fetch(url, {
            method: method,
            body: formData,
            headers: {
                Accept: 'application/json',
                "Content-Type": event.currentTarget.enctype
            }
        }).then(response => callback(response))
    }

    return handleSubmit
}