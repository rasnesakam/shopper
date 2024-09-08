import { Tab, Tabbed } from "@src/components/TabbedPane";

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
	return page();
}
