import banner from "@/assets/banner.png"
import Image from "next/image";

const Banner = () => {
return (
<section className= "container mx-auto ">   
    <div className="grid grid-cols-2 items-center justify-center gap-10d w-[1232px] h-[450px]">
<div>
<h3>WORKOUT LIBRARY</h3>

<h1>TRAIN WITH INTENT. LOG
EVERY SET.</h1>

<p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
into today's plan, and watch the week's work add up.</p>

<button className="btn btn-primary">BROWSE WORKOUTS</button>
</div>

<div>
    <Image src={banner} alt="Banner" />
</div>

</div>
</section>


)

}

export default Banner;