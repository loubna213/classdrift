import { Button } from "@/components/ui/button"
import { heroIcons } from "@/constants"
import Image from "next/image"

const Hero = () => {
    return (
        <section className="relative max-container padding-container h-[520px] w-full flex items-end">
            <Image src="/arrow.png" alt="arrow" width={120} height={120} className="absolute right-36 max-md:right-24 top-5"/>
            <div className="w-full flex flex-col gap-6">
                <div className="flex gap-4">
                    {
                        heroIcons.map(icon => <Image key={icon.id} src={icon.icon} alt="icon" width={24} height={24} />)
                    }
                </div>
                <h1 className="text-60-medium max-md:text-30-medium">The friendly, all-in-one <br /> workspace for teachers</h1>
                <p className="text-16-medium text-secondary-gray-500 w-1/2 max-md:w-full">We built a modern workspace that makes your classroom workflow simpler, more joyful, and even a little fun, Try it out - it's free</p>
                <div className="flex gap-2">
                    <Button variant="default">Try for Free</Button>
                    <Button variant="black">Community</Button>
                </div>
            </div>
        </section>
    )
}

export default Hero
