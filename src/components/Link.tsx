export default function Link(props) {
    return (
        <div className=" gap-3 flex flex-row h-12">
            <div className="bg-white flex flex-row justify-between rounded-lg w-96 px-3 pt-3">
                <p>http://localhost:5173/{props.slug}</p>
                <p className="text-gray-500">{props.originalLink}</p>
            </div>
            <button onClick={props.onDelete} className='border-solid my-auto rounded-md border-blue-400 text-white bg-blue-400 h-12 border-2 p-2'>Delete Link</button>
            <button className='border-solid my-auto rounded-md border-blue-400 text-white bg-blue-400 h-12 border-2 p-2'>Copy Link</button>

        </div>
    )
}