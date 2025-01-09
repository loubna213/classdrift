import Image from "next/image"

interface Title {
  one: string,
  two: string
}

export interface Feat {
  id: number,
  title: Title,
  image: string,
}

interface  FeatureProps {
  feature: Feat,
}

const Feature = ({ feature }: FeatureProps ) => {
  return (
    <div className="flex flex-col justify-between h-[420px] max-md:h-[380px] bg-secondary-white-50 rounded-lg">
      <h2 className="text-25-medium max-md:text-16-medium p-6">{feature.title.one} <span className="text-secondary-white-300">{feature.title.one}</span></h2>
      <div className="relative w-full h-4/5 max-md:h-3/5">
        <Image src={feature.image} alt={feature.title.one} fill/>
      </div>
    </div>
  )
}

export default Feature
