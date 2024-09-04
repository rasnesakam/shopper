export default function giris(){

	return <>
	
		<div className="mx-auto my-32  p-10 border border-primary rounded-md shadow-xl">
			<form action="/api/auth/login" method={"POST"} className="p-5 flex flex-col justify-center">
				<input className="my-2 p-2 focus-visible:outline-0" name={"username"} type={"text"}  placeholder={"Username"}/>
				<input className="my-2 p-2 focus-visible:outline-0" name={"password"} type={"password"}  placeholder={"Password"}/>
				<button className="mt-5 p-2 rounded-md bg-primary hover:bg-primary/80 text-white" type="submit">Giriş</button>
			</form>
		</div>
	
	</>
}