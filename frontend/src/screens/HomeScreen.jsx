import CtaComponent from "../components/CtaComponent"
import FeaturesComponent from "../components/FeaturesComponent"
import HeaderComponent from "../components/HeaderComponent"

const HomeScreen = () => {
  document.title = "Fleet Ease"
  return (
    <div>
        <HeaderComponent />
        <div className="bottom sm:flex-row flex flex-col-reverse w-full sm:justify-center sm:h-[95vh] h-auto">
            {/* left side */}
            <FeaturesComponent />
            {/* right side */}
            <CtaComponent />
        </div>
    </div>
  )
}

export default HomeScreen