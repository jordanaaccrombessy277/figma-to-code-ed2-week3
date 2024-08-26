export const Input = ({title, placeholder}) => {
    return (
        <div className="flex flex-col gap-2">
            <p className="font-[Mono-sans-medium] text-sm">{title}</p>
            <input type="text" className='text-base h-11 rounded-3xl px-3 border border-gray-dark outline-none placeholder:text-tokena-dark-gray' name="" placeholder={placeholder} />
        </div>
    )
 }

 export const InputPassword = ({title, placeholder}) => {
    return (
        <div className="flex flex-col gap-2 py-2">
            <p className="font-[Mono-sans-medium] text-sm">{title}</p>
            <input type="password" className='text-base h-11 rounded-3xl px-3 border border-gray-dark outline-none placeholder:text-tokena-dark-gray' name="" placeholder={placeholder} />
        </div>
    )
 }

 export const InputEmail = ({title, placeholder}) => {
    return (
        <div className="flex flex-col gap-2 py-2">
            <p className="font-[Mono-sans-medium] text-sm">{title}</p>
            <input type="email" className='text-base h-11 rounded-3xl px-3 border border-gray-dark outline-none placeholder:text-tokena-dark-gray' name="" placeholder={placeholder} />
        </div>
    )
 }