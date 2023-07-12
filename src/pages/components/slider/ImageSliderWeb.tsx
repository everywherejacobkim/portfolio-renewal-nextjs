import Image, { StaticImageData } from "next/image";

const ImageSliderWeb = ({ images, title, description }: { images: StaticImageData[]; title: string; description:string }) => {
    return (
            <div className="flex items-center justify-center">
            <div className="">
                <div className="flex">
                    <div className="group relative h-96 w-32 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200 rounded-l-lg">
                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-300/30 to-transparent">
                            <div className="absolute inset-x-5 bottom-6">
                                <div className="flex gap-3 text-white">
                                <div>
                                        <p className="font-semibold text-xl text-gray-100">{title}</p>
                                    <p className="text-gray-300">{description}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex [&:hover>div]:w-24 [&>div:hover]:w-[48rem]">
                        {images && images.map((image, index) => (
                            <div className="group relative h-96 w-96 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200 rounded-r-lg" key={index} >
                                <Image className="h-full object-cover transition-all" src={image} alt="Project Image" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-300/70">
                                    <div className="absolute inset-x-3 bottom-4">
                                        <div className="flex gap-3 text-white">
                                        <div className="invisible group-hover:visible">
                                            <p className="font-sembold text-xl text-gray-100">Project Name</p>
                                            <p className="text-gray-300">description</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        ))}
                                </div>
                </div>
            </div>
            </div>
  );
};

export default ImageSliderWeb;
