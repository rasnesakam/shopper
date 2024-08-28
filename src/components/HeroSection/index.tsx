import {Slide} from "../Slide";

const HeroSection = () => {
    const slides = [
        "/images/mock/slide/wallhaven-ex136k.jpg",
        "/images/mock/slide/wallhaven-exrqrr.jpg",
        "/images/mock/slide/wallhaven-werowr.png",
        "/images/mock/slide/wallhaven-zyj8gw.jpg"
    ]
    return <>
        <Slide timeout={3000} items={slides.map(s => ({imageUri: s, redirectTo: ""}))}/>
    </>
}

export { HeroSection }