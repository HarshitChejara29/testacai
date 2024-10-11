
type BannerParamerTypes = {
    content: string,

}
const Banners = ({content}: BannerParamerTypes) => {
    return(
        <section className="h-[5vh] w-full bg-[#174BD2] flex items-center justify-center">
            <span>{content}</span>
        </section>
    )
}

export default Banners;