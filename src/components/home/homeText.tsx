const HomeText = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-[calc(100vh_-_100px)] space-y-8 text-center">
            <div className="flex flex-col items-center">
                <p className="text-base">Hi, I'm Daniel Malmgren de Oliveira</p>
                <h1 className="text-[3rem] md:text-[6rem] leading-[100%]">Fullstack developer <span className="block">focused on frontend</span></h1>
                <p className="text-base max-w-[40rem]">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.</p>
            </div>
            <button className="w-[200px] h-[50px] bg-purple-700 text-white rounded-lg cursor-pointer"><a href="#work">See my work</a></button>

        </div>
    );
};

export default HomeText;