import { Tab, Tabbed } from "../../src/components/TabbedPane";
import { useDispatch, useSelector } from "react-redux";
import authToken from "../../src/functions/authToken";
import { AppState } from "../../src/redux/store";

function page(){
	return <>
		<Tabbed className="w-8/12">
			<Tab name="Adres Güncelle">
				<div>
					<form action="" className="flex flex-col gap-2">
						<input type="text" name="name" placeholder="Adres adı" />
						<input type="text" name="name" placeholder="Adres tipi" />
						<input type="text" name="name" placeholder="Ülke" />
						<input type="text" name="name" placeholder="Şehir" />
						<textarea placeholder="Adres Satırı: 1"></textarea>
						<textarea placeholder="Adres Satırı: 2"></textarea>
						<input type="text" name="name" placeholder="Posta Kodu" />
						<button type="submit">Kaydet</button>
					</form>
				</div>
			</Tab>
			<Tab name="Profil">
				<form action="" className="flex flex-col gap-2">
					<input type="text" name="name" placeholder="İsim" />
					<input type="text" name="name" placeholder="Soyisim" />
					<input type="phone" name="name" placeholder="+905xxxxxxxxx" />
					<input type="email" name="name" placeholder="eposta@posta.com" />
					<button type="submit">Kaydet</button>
				</form>
			</Tab>
		</Tabbed>
	</>
}

function logIn(){
	return <>
		You need to log in
	</>
}

export default function hesap(){
	const profile = useSelector((state: AppState) => state.profile);
	//if (profile.authToken.length == 0 || !authToken(profile.authToken))
	//	return logIn()
	return page();
}
