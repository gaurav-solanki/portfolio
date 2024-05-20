
interface User {
    location: {
        "street": {
            "name": string,
            "number": string
        };
        "state": string,
        "country": string,
        "postcode": string
    };
    nat: string;
    dob: {
        "age": number
    };
    registered: {
        "age": number
    };
    picture: {
        "medium": string,
    };
    name: {
        "title": string,
        "first": string,
        "last": string
    };
    login: {
        "username": string
    };
}


interface UserCardProps {
    item: User;
}

function UserCard({ item }: UserCardProps) {

    return (
        <div className="shadow-md rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-600">
            <h5 className="px-4 py-2 bg-primary-50 rounded-t-lg text-lg"><span className="font-medium"> User:</span> {item.login.username}</h5>
            <div className="card-body p-4 text-black dark:text-white">
                <div className="flex">
                    <div className="grow">
                        <h4 className="text-md font-semibold">{item.name.title} {item.name.first} {item.name.last}</h4>
                        <h5 className="mb-0"><span className="font-medium"> User for</span> {item.registered.age} {item.registered.age === 1 ? " year" : " years"}</h5>
                        <p className="mb-0"><span className="font-medium"> Age:</span> {item.dob.age}</p>
                        <p className="mb-0"><span className="font-medium"> Nationality:</span> {item.nat}</p>
                    </div>
                    <div>
                        <img src={item.picture.medium} className="img-fluid rounded-full mb-3 ml-auto min-w-20 w-20" />
                    </div>
                </div>
                <h6 className="mb-0 mt-1 font-medium">Address:</h6>
                <p className="mb-0 text-wrap">{item.location.street.number} {item.location.street.name} {item.location.state}, {item.location.country} - {item.location.postcode}</p>
            </div>
        </div>
    );
}

export default UserCard;