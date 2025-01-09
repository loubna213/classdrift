import { features } from "@/constants";
import Feature, { Feat } from "./Feature";
import Image from "next/image";

const Features = () => {
    return (
        <section className="max-container padding-container py-12">
            <div className="flex justify-between gap-8 max-md:flex-col h-[420px] bg-secondary-white-50 rounded-lg">
                <div className="flex-[50%] flex flex-col justify-between p-6">
                    <h2 className="text-25-medium max-md:text-16-medium">Fast, beautiful curriculum planning <br /> <span className="text-secondary-white-300">with lessonbooks, customizable content blocks, and more</span></h2>
                    <h3 className="text-20-medium max-md:text-16-medium">Track state & district standards <br /><span className="text-secondary-white-300">share lessons with students or parents</span></h3>
                </div>
                <div className="relative flex-[50%] flex justify-end items-end h-full w-full">
                    <div className="relative h-4/5 max-md:h-full w-full">
                        <Image src="/feat1.jpg" alt="feature image 1" fill/>
                        <Image src="/feat2.png" alt="feature image 1" width={250} height={250} className="absolute -left-20 bottom-0 max-md:hidden"/>
                    </div>
                </div>            
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 mt-8">
                {
                    features.map((feat: Feat) => <Feature key={feat.id} feature={feat} />)
                }
            </div>
        </section>
    )
}

export default Features;
