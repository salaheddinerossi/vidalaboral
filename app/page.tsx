import {HeroHighlight,Highlight} from "@/app/components/ui/hero-highlight";
import {Navbar} from "@/app/components/items/Navbar";
import AnimatedAeternityButton from "@/app/components/items/HeroButton";
import AnimatedText from "@/app/components/items/AnimateText";
import FancyAnimatedText from "@/app/components/items/FancyAnimatedText";
import {ChatComponent} from "@/app/components/items/ChatComponent";
import {GridBackgroundDemo} from "@/app/components/ui/GridBackgroundDemo";
import {TimelineFeatures} from "@/app/components/items/TimelineFeatures";
import {CardsContainer} from "@/app/components/items/CardsContainer";
import Footer from "@/app/components/items/Fooeter";

export default function Home() {
    return (
        <div>

            <Navbar/>
            <HeroHighlight
                containerClassName="min-h-screen bg-black bg-dot-thick-indigo-500 group-hover:bg-dot-thick-gray-700 flex items-center justify-center"  // Changes dot color on hover and sets min height to full viewport
            >
                <div className="text-center">
                    <AnimatedText duration={0.1}>
                        <h1 className="text-4xl font-bold text-white py-4">
                            Vida Laboral online
                        </h1>
                    </AnimatedText>
                    <AnimatedText duration={0.1} delay={0.1}>
                        <h1 className="text-5xl font-bold text-white">
                            ¿Necesitas tu vida laboral?
                        </h1>
                    </AnimatedText>

                    <AnimatedText duration={0.1} delay={0.1}>
                        <h1 className="text-4xl font-bold text-white py-4">
                            <Highlight>¡Nosotros te la enviamos en línea!</Highlight>
                        </h1>
                    </AnimatedText>
                    <div className={"mt-3"}>

                        <FancyAnimatedText delay={1.4}>
                            <h1 className={"text-white text-xl leading-snug tracking-wide"}>
                                La forma más rápida y fácil de obtener tu vida laboral al momento.
                            </h1>
                        </FancyAnimatedText>

                        <FancyAnimatedText delay={1.6}>
                            <h1 className={"text-white text-xl leading-snug tracking-wide"}>
                                100% Online y desde cualquier parte del mundo.
                            </h1>
                        </FancyAnimatedText>
                    </div>
                    <AnimatedAeternityButton delay={2} />
                </div>
            </HeroHighlight>
            <ChatComponent ></ChatComponent>
            <GridBackgroundDemo  />
            <TimelineFeatures ></TimelineFeatures>
            <CardsContainer ></CardsContainer>
            <Footer/>
        </div>
    );
}
