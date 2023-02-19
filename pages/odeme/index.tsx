import { createContext, useState } from "react";
import Accordion from "../../src/components/Accordion";
import AccordionItem from "../../src/components/Accordion/AccordionItem";
import { Tab, Tabbed } from "../../src/components/TabbedPane";

export default function Odeme(){
	return <>
		<Accordion className="mx-auto">
			<AccordionItem title="Adres ve İletişim" id="asd">
				<div className=" flex flex-col">
					<div className="flex flex-row p-2">	
						<label htmlFor="contact-name">Ad</label>
						<input id="contact-name" name="contact-name" className="ml-2" type="text" placeholder="" />
					</div>
					<div className="flex flex-row p-2">
						<label htmlFor="contact-name">Soyad</label>
						<input name="contact-surname" className="ml-2" type="text" placeholder="" />
					</div>
					<div className="flex flex-row p-2">
					<label htmlFor="contact-name">Telefon</label>
						<input name="contact-phone" className="ml-2" type="text" placeholder="5xxxxxxxxx" />
					</div>
					<div className="flex flex-row p-2">
						<label htmlFor="contact-mail">E posta</label>
						<input name="contact-mail" className="ml-2" type="text" placeholder="" />
					</div>
					<div className="flex flex-row p-2">
						<label htmlFor="contact-id">TC Kimlik Numarası</label>
						<input name="contact-id" className="ml-2" type="text" placeholder="Tc no" />
					</div>
					<div className="flex flex-row p-2">
						<label htmlFor="address-province">İl</label>
						<input name="address-province" className="ml-2" type="text" placeholder="" />
					</div>
					<div className="flex flex-row p-2">
						<label htmlFor="address-district">İlçe</label>
						<input name="address-district" className="ml-2" type="text" placeholder="İlçe" />
					</div>
					<div className="flex flex-row p-2">
						<label htmlFor="address-street">Mahalle</label>
						<input name="address-street" className="ml-2" type="text" placeholder="Mahalle" />
					</div>
					<div className="flex flex-row p-2">
						<label htmlFor="address-line1">Adres Satır 1</label>
						<input name="address-line1" className="ml-2" type="text" placeholder="Adres satırı 1" />
					</div>
					<div className="flex flex-row p-2">
						<label htmlFor="address-line2">Adres Satır 2</label>
						<input name="address-line2" className="ml-2" type="text" placeholder="Adres satırı 2" />
					</div>
					<div className="flex flex-row p-2">
						<label htmlFor="address-zipcode">Posta kodu</label>
						<input name="address-zipcode" className="ml-2" type="text" placeholder="" />
					</div>
				</div>
			</AccordionItem>
			<AccordionItem title="Ödeme" id="das">
				<Tabbed>
					<Tab name="Online Ödeme">
						<div className="">
							<table className="mx-auto">
								<tbody>
									<tr>
										<td>
											<label htmlFor="payment-cardname"> Kart Sahibi Adı ve Soyadı</label>
										</td>
										<td>
											<input name="payment-cardname" className="ml-2" type="text" placeholder="" />
										</td>
									</tr>

									<tr>
										<td>
											<label htmlFor="payment-cardnumber">Kart Numarası</label>
										</td>
										<td>
											<input name="payment-cardnumber" className="ml-2" type="text" placeholder="Mahalle" />
										</td>
									</tr>
									<tr>
										<td>
											<label htmlFor="payment-carddue">Son Kullanma Tarihi</label>
										</td>
										<td>
											<input name="payment-carddue" className="ml-2" type="text" placeholder="MM/YY" />
										</td>
									</tr>
									<tr>
										<td>
											<label htmlFor="payment-cardcvc">CVC Kodu</label>
										</td>
										<td>
											<input name="payment-carddue" className="ml-2" type="text" placeholder="" />
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</Tab>
					<Tab name="Hesaba Havale">
						<table className="mx-auto">
							<tr>
								<td>
									<span className="font-semibold">Hesap Numarası</span>
								</td>
								<td>
									TR123456789123456789123456
								</td>
							</tr>
							<tr>
								<td>
									<span className="font-semibold">Banka</span>
								</td>
								<td>
									Yapı ve Kredi Bankası
								</td>
							</tr>
							<tr>
								<td>
									<span className="font-semibold">Hesap Sahibi</span>
								</td>
								<td>
									Ensar Makas
								</td>
							</tr>
							<tr>
								<td>
									<label htmlFor="sender-name">Gönderici Adı</label>
								</td>
								<td>
									<input type="text" name="sender-name" id="sender-name" />
								</td>
							</tr>
						</table>
					</Tab>
				</Tabbed>
			</AccordionItem>
			<AccordionItem title="Kontrol" id="sad" >
				<div>
					Sipariş:
					<div>
						bla bla bla (tutar)
					</div>
					Ödeme:
					<div>
						Ödeme Bilgileri
					</div>
				</div>
			</AccordionItem>
		</Accordion>
	</>
}