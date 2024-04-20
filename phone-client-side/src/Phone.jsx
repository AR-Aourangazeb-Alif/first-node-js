import { useLoaderData } from "react-router-dom";

const Phone = () => {

    const data = useLoaderData();
    return (
        <div className="w-[100svw] h-[100svh] flex items-center justify-center">

            <div className="flex flex-col items-center text-center gap-4">
                <img src={data.image} className="h-[250px] w-fit" />
                <h1 className="text-3xl font-bold">{data.name}</h1>
                <h3 className="text-2xl font-medium">{data.price} $</h3>
                <p className="w-[600px] text-lg tracking-wider">{data.description}</p>
            </div>

        </div>
    );
};

export default Phone;