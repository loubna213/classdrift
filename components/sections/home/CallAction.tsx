import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const CallAction = () => {
    return (
        <section className="max-container padding-container">
            <div className="bg-black rounded-lg text-white p-8 flex max-md:flex-col gap-8">
                <div className="flex-[50%] flex-center">
                    <Image src="/cta.png" alt="balck board" width={400} height={400}/>
                </div>
                <div className="flex-[50%] flex flex-col justify-center gap-4">
                    <h2 className="text-60-medium max-md:text-30-medium">Try it now, <span className="text-secondary-gray-500">it's free</span></h2>
                    <p>Streamline your messy teaching workflow and focus on what matters</p>
                    <div>
                        <Button className="default">
                            <Link href="/" aria-label="launch your workspace">Launch your workspace</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallAction
