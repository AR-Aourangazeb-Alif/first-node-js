import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {

    const data = useLoaderData();

    return (
        <div className="mx-auto">
            <h1 className="text-4xl font-bold mx-auto w-fit my-20">
                Total Phones: <span className=" text-blue-900">{data.length}</span>
            </h1>

            <div className="grid grid-cols-3 mx-20 gap-6">

                {
                    data.map(phone =>
                        <Link
                            to={`/phone/${phone.id}`}
                            className="flex flex-col gap-4 items-center w-fit p-8 rounded-lg cursor-pointer shadow-2xl hover:scale-105 transition-all duration-300" key={phone.id}>
                            <img src={phone.image} className="w-fit h-[300px]" alt="" />
                            <h3 className="text-2xl font-bold">{phone.name}</h3>
                        </Link>
                    )
                }

            </div>
        </div>
    );
};

export default Phones;